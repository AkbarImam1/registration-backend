require('./mongoose');
const Customer = require('./schema');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require ('body-parser');
// const Order = require('./orderSchema');
const { json } = require('body-parser');
// const Product = require('./product');
//const paymentRoute = require('./paymentRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
   origin: "http://localhost:3000"
}))
//app.use('/api',paymentRoute);


app.get('/login', (req, res) => {

   try {
      const email = req.query.email;
      const password = req.query.password;
      
      Customer.findOne({ email, password }, (err, data) => {
         if (err) {
            console.log("Some error is occuring")
         }
         else {
            if(data){
               res.json({status:'ok',data:data});
               
            }else{
               res.json({status:'no'})
            }           

         }
      })

   } catch (e) {
      console.log(e);
   }
})
app.post('/signup', (req, res) => {

 
    const { name, email, password, status } = req.body;

    const newCustomer = new Customer({
       name: name,
       email: email,
       password: password,
       status: status
    });
    newCustomer.save((err) => {
       if (!err) {
          console.log('successfully added') 
          res.json({ status: 'ok' , verify : "successfully register"});
       } else {
          console.error(err);
          res.json({status:'something went wrong'})
       }
    });
    
})
app.listen(8080,function(){
   console.log("server is running")
})