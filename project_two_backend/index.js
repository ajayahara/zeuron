require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const {userRouter} = require('./routes/user.route');
const {taskRouter} = require('./routes/task.route');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.get('/',(req,res)=>{
  return res.status(200).json({message:"Connected To Server"})
})
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});