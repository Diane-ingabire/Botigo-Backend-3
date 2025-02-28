import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MxYmIxZjE1NWJiZjMxMWYxMTRhMDIiLCJlbWFpbCI6Im5nYWJpcmVkaWFuZTg5N0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDA3NDk1OTksImV4cCI6MTc0MDc2Mzk5OX0.Y7kSuDp3sLxigaIy1RJsKy-VWQ34Wdou2CD_-i9RNHA";
const secretKey = process.env.JWT_SECRET; // Replace with your actual secret

jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.error("JWT Verification Error:", err.message);
    } else {
        console.log("Verified Token:", decoded);
    }
});