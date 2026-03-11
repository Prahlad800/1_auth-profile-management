import jwt from "jsonwebtoken"
export const authProduct = (req, res, next) => {
     const auth = req.cookies.token; 
    if (!auth) {
        return res.status(401).json({
            message: "Unauthorized, JWT token is required"
        });
    }

    try {
        
        const decoded = jwt.verify(auth, process.env.JWT);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: `Invalid or expired token ${err}`
        });
    }
}