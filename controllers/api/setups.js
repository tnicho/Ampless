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
    let newSetup = req.body.newSetup
    console.log('inside create' , req.body)
    try{
        await Setup.create({name: newSetup.name, overdrive: parseInt(newSetup.overdrive), delay: parseInt(newSetup.delay)})
        res.status(200).json('ok')
    }catch(err){
        console.log('Failed')
        res.json(err);
    }

}