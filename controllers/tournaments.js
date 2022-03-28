const User = require('../models/User.js');
const Tournament = require('../models/tournaments.js');


async function create (req, res) {
    try{
        const tname = await req.body.tname;
        const tdate = await req.body.tdate;
        const teams = await req.body.teams;
        const user_id = await req.body.user_id;
        const tournament = await Tournament.create({tname, tdate, teams, user_id})
        res.status(200).json(tournament)
    } catch(err){
        console.log(err)
        res.status(400).json("Tournament not saved")
    }


    // try{
        // const tname =
    // let user = await User.findById(req.body.user_id);
    // let tournament = await Tournament.create({tname, tdate, teams, user_id})
    
    // req.body
    // console.log(user)
    // console.log(req.body)
    // tournament.entries.push(req.body)  
    // tournament.save(function(err){
    //     if(err) {
    //     console.log(err);
    //     return res.json({err});
    //     };
    //     return res.json(tournament);
    // })  
}



module.exports = {
    create,
}