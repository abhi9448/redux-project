const express = require('express');
const path=require('path');
const router=require('./routes/api/members')
const logger =require('./middleware/logger'); 
const app = express();
const cors = require('cors')
 
//Init Middleware

//app.use(logger);

//Body Parser Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



// Set static folder-------
app.use(express.static(path.join(__dirname,'public')));

//Members API Routes------

app.use('/api/members',require('./routes/api/members'))
const PORT = process.eventNames.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));