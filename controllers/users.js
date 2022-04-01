const User = require('../models/User.js');
const jwt = require('jsonwebtoken'); // import the jwt library

const jwtPolicy = {
    expiresIn: '24HR'
}

async function create(req, res){
    try{
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email;
        const user = await User.create({name, password, email})
        const token = jwt.sign({ user }, process.env.JWT_SECRET, jwtPolicy)

        res.status(200).json(token)
    }catch(err){
        res.status(400).json(err)
    }
}
async function login(req, res){
    try {
        const email = req.body.email;
        const challengePassword = req.body.password;
        const user = await User.findOne({email});

        if(challengePassword !== user.password) throw new Error()

        const token = jwt.sign({ user }, process.env.JWT_SECRET, jwtPolicy)
        res.status(200).json(token);

    } catch (err) {
        res.status(400).json('Bad Credentials');
    }
}




module.exports = {
    create,
    login,

};
