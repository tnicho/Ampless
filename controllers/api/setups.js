const Setup = require ('../../models/Setup.js')

module.exports = {
    index,
    create
}

async function index(req, res) {
    // 1. Get all Posts from the database
    // 2. Use res.json() to send the posts to the frontend
}

async function create(req, res) {
    // 1. Create a post in the database (the data will be incoming via `req.body`)
    // 2. use res.json() to send a response to the frontend
}