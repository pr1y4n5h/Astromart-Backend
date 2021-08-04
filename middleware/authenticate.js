var jwt = require("jsonwebtoken");

async function authenticateUser(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    res
      .status(401)
      .json({ message: "Unauthorised Access, please add correct token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.API_SECRET);
    req.user = { userId: decoded.userId };
    return next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid Token" });
  }
}

module.exports = { authenticateUser };
