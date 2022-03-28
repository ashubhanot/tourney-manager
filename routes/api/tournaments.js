const express = require('express');
const router = express.Router();
const tournamentsCtrl = require('../../controllers/tournaments');



// router.get('/', tournamentsCtrl.showAll)
// router.get('/:id', tournamentsCtrl.showOne)
// router.delete('/:id', tournamentsCtrl.delete)
// router.put('/:id', tournamentsCtrl.update)

router.post('/', tournamentsCtrl.create)



module.exports = router;