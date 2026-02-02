const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  
  if (!id) {
    throw new Error("User ID is required to generate token");
  }

  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  } catch (error) {
    throw new Error(`Failed to generate token: ${error.message}`);
  }
};

module.exports = generateToken;


