const jwt = require("jsonwebtoken");
exports.auth = (req, res, next) => {
    const token = req.header("Authorization");
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }  
        req.user = decoded;
         next();
    })   
  // Authentication logic here
 
}