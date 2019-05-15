//create this file so we don't have to add it to routes file 

module.exports = {
    jwtSecret: process.env.JWT_SECRET || "I never watched Star Wars or Lord of The Rings"
}