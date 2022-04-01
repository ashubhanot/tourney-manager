const User = require('../models/User.js');
const Tournament = require('../models/tournaments.js');


async function create (req, res) {
    try{
        const tname = await req.body.tname;
        const location = await req.body.location;
        const tdate = await req.body.tdate;
        const teams = await req.body.teams;
        const user_id = await req.body.user_id;
        const tournament = await Tournament.create({tname, location, tdate, teams, user_id})
        res.status(200).json(tournament)
    } catch(err){
        console.log(err)
        res.status(400).json("Tournament not saved")
    }
}

async function showAll (req, res) { 
        try {
            const tournaments = await Tournament.find({}).sort({createdAt:'desc'}).exec();
           // console.log({all: tournaments});
            res.status(200).json(tournaments)
        } catch(err){
            res.status(400).json(err);
        }
}

async function deleteOne (req, res) {
    try{
        console.log('id', req.params.id);
        //const tournament = await Tournament.findOne({'tournament._id':req.params.id}).remove();
        const tournament = await Tournament.findOneAndDelete({_id: req.params.id});
        console.log({tournament})
        res.status(200).json(tournament)
    } catch(err){
        console.log(err)
        res.status(400).json("Tournament not deleted")
    }
}

async function update (req, res) {
    try{
        console.log('id', req.params.id);
        console.log('body', req.body);
        const tname = req.body.tname;
        const teams = req.body.teams;
        const location = req.body.location;
        const tdate = req.body.tdate;
        //const tournament = await Tournament.findOne({'tournament._id':req.params.id}).remove();
        const tournament = await Tournament.findOneAndUpdate({_id: req.params.id}, {tname, teams, location, tdate});
        // console.log({tournament})
        res.status(200).json(tournament);
    } catch(err){
        console.log(err)
        res.status(400).json("Tournament not updated")
    }
}





module.exports = {
    create, showAll,
    deleteOne, update
}
