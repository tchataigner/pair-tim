var level = require('level');   
module.exports = {
    userDB : level(__dirname + "/../db/userDB")
}
