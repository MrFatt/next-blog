require("dotenv").config();

module.exports = {
  "process.env.BACKEND_URL":
    process.env.NODE_ENV === "production" ? "/next-blog" : ""
};
