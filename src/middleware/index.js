const admin = require("../config/firebase-config");

class MiddleWare{
    async decodeToken(req, res, next){
        const token = req.headers.authorization.split(" ")[1];

        try{
            const decodeValue = await admin.auth().verifyIdToken(token);
            console.log(decodeValue)
            if(decodeValue) {
            return next();
        }
        return res.json({ message:"Unauthorize"});
    } catch(e) {
        return res.json({message: "Internal error"})
    }

}
}

module.exports = new MiddleWare();