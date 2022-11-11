const express = require("express");
const path =('path')
const colors = require("colors");
const dotenv = require("dotenv").config()
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8000

//Connection to database 
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello, Welcome to Support API'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/projects', require('./routes/projectRoutes'))

//Serve the frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
} else {
  app.get("/", (_, res) => {
    res.status(200).json({ message: "Welcome to the Social Support API" });
  });
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))