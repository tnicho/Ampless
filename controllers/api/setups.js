const Setup = require ('../../models/Setup.js')

module.exports = {
    index,
    create,
    delete: deleteSetup,
    update
}

async function index(req, res) {
    try{
        const setups = await Setup.find({user:req.user._id}).sort('')
        res.status(200).json(setups)
    }catch{
        res.status(400).json(err)
    }
}

async function create(req, res) {
    let newSetup = req.body.newSetup
    try{
        await Setup.create({name: newSetup.name, overdrive: parseInt(newSetup.overdrive), delay: parseInt(newSetup.delay), user: req.user._id}),
        res.status(200).json('ok')
    }catch(err){
        console.log('Failed', err)
        res.json(err);
    }

}

async function deleteSetup(req, res) {
    try{
        await Setup.deleteOne({"_id": req.params.id})
        res.status(200).json('ok')
    }catch(err){
        console.log('Failed')
        res.json(err);
    }

}

async function update(req, res) {
    let newSetup = req.body.newSetup
    console.log('inside update' , req.body)
    try{
        await Setup.updateOne(
            {_id: newSetup.id},
            {$set :{name: newSetup.name, overdrive: parseInt(newSetup.overdrive), delay: parseInt(newSetup.delay)}})
        res.status(200).json('ok')
    }catch(err){
        console.log('Failed')
        res.json(err);
    }

}