const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.listen(5000, function() {
    console.log("server is running.")
})

server.get("/", function(req, res) {
    return res.render("courses")
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})
