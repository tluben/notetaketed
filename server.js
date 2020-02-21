const express = require("express")
const apiRoutes  = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes.js")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("public"))
app.use("/api", apiRoutes)
app.use("/",htmlRoutes)

app.listen(PORT, () => console.log(`listening at port ${PORT}`))