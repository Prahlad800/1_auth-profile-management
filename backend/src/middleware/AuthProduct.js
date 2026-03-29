import jwt from "jsonwebtoken";

export const authProduct = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({
      message: "Unauthorized, token missing ❌"
    });
  }

  // 🔥 Bearer token split
  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: `Invalid or expired token ❌`
    });
  }
};