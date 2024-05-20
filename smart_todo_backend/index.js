require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors")
const {userRouter} = require('./routes/user.route');
const {taskRouter} = require('./routes/task.route');
const { notificationRouter } = require("./routes/notification.route");

const app = express();
const port = process.env.PORT || 8000;
app.use(cors())
app.use(bodyParser.json());
app.get('/',(req,res)=>{
  return res.status(200).json({message:"Connected To Server"})
})
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/notifications', notificationRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});