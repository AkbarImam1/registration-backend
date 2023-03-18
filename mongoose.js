const mongoose = require ('mongoose');
const  url ="mongodb+srv://akbar5565:akbar1396@cluster0.zdai0xh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{
    useNewUrlParser: true
    // useCreateIndex : true,
    // useUnifiedTopology : true,
    // useFindAndModify:false
    
  }).then(()=>{
    console.log("connetion successful")
  }).catch((err)=>{
    console.log("No connection");
  }); 