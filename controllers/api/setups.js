const Setup = require ('../../models/Setup.js')

module.exports = {
    index,
    create
}

async function index(req, res) {
    try{
        const  setups = await Setup.find({}).sort('')
        res.status(200).json(setups)
    }catch{
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try{
        await Setup.create({name: req.body.name, overdrive: req.body.overdrive, delay: req.body.delay})
        res.status(200).json('ok')
    }catch(err){
        res.json(err);
    }

}