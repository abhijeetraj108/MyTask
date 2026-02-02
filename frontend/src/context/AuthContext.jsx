import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
      // Verify token is still valid
      api
        .get("/auth/me")
        .then((res) => {
          setUser(res.data.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.data.user));
        })
        .catch(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      if (response && response.data && response.data.data) {
        const { user, token } = response.data.data;
        if (user && token) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          return response.data;
        }
      }
      throw new Error("Invalid response from server");
    } catch (error) {
      console.error("Login error in AuthContext:", error);
      // Re-throw with better error message
      if (error.response) {
        // Server responded with error
        throw error;
      } else if (error.request) {
        // Request made but no response
        throw new Error("Network error: Could not connect to server");
      } else {
        // Error in request setup
        throw new Error(error.message || "An error occurred during login");
      }
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await api.post("/auth/register", { name, email, password });
      if (response && response.data && response.data.data) {
        const { user, token } = response.data.data;
        if (user && token) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          return response.data;
        }
      }
      throw new Error("Invalid response from server");
    } catch (error) {
      console.error("Register error in AuthContext:", error);
      // Re-throw with better error message
      if (error.response) {
        // Server responded with error
        throw error;
      } else if (error.request) {
        // Request made but no response
        throw new Error("Network error: Could not connect to server");
      } else {
        // Error in request setup
        throw new Error(error.message || "An error occurred during registration");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

