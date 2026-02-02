// Quick script to check if environment variables are set
require("dotenv").config();

console.log("Checking environment variables...\n");

const requiredVars = {
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT || "5000 (using default)",
};

let allSet = true;

for (const [key, value] of Object.entries(requiredVars)) {
  if (key === "PORT") {
    console.log(`✅ ${key}: ${value}`);
  } else if (value) {
    if (key === "JWT_SECRET") {
      console.log(`✅ ${key}: ${value.substring(0, 10)}... (hidden)`);
    } else {
      console.log(`✅ ${key}: ${value}`);
    }
  } else {
    console.log(`❌ ${key}: NOT SET`);
    allSet = false;
  }
}

console.log("\n" + "=".repeat(50));
if (allSet) {
  console.log("✅ All required environment variables are set!");
} else {
  console.log("❌ Some environment variables are missing!");
  console.log("\nPlease create a .env file in the backend directory with:");
  console.log("MONGO_URL=mongodb://localhost:27017/taskmanager");
  console.log("JWT_SECRET=your_super_secret_jwt_key_min_32_characters");
  console.log("PORT=5000");
}
console.log("=".repeat(50));


