const dotenv = require("dotenv")
dotenv.config()

const nodeMailerEmail = process.env.NODE_MAILER_EMAIL
const nodeMailerPass = process.env.NODE_MAILER_PASS
const clientUrl = process.env.CLIENT_URL
const JWTSECRET = process.env.JWT_SECRET
module.exports = { nodeMailerEmail, nodeMailerPass, clientUrl,JWTSECRET }