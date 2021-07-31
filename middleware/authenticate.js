var jwt = require("jsonwebtoken");

async function authenticateUser(req, res, next) {
  try {
    const token = req.headers.authorization;
    const secret = process.env.API_SECRET;
    const decoded = jwt.verify(token, secret);
    req.body = {...req.body , username: decoded.username };
    return next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Unauthorised Access, please add correct token" });
  }
}

module.exports = { authenticateUser };
