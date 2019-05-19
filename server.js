const express = require("express")
const exphbs = require("express-handlebars")
const { join } = require("path")
const server = express()

//const routes = require('./routes')

// Static folder
server.use(express.static(join(__dirname, "public")))

// Parse application body
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
//server.use(routes)

server.engine("handlebars", exphbs({ defaultLayout: "main" }))
server.set("view engine", "handlebars")

server.listen(3000, () => {
  console.log("server listening on port: 3000")
})