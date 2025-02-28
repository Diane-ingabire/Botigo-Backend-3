import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error("JWT Verification Error:", err);
            return res.status(403).json({ message: "Invalid or expired token" });
        }

        console.log("Decoded Token:", decoded); // Debugging step

        req.user = decoded; // Attach full user data
        req.userRole = decoded.role; // Explicitly assign userRole

        next();
    });
};
