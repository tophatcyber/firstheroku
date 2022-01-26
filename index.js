const express = require('express')
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser')
const path = require('path');




require('dotenv').config();



const PORT = process.env.PORT;
MY_GMAIL="jumanaturetech@gmail.com"
MY_GMAIL_PASSWORD="jytm khdc rxwu kxwy"

const app = express()
const port =  PORT || 5000;

if(process.env.NODE_ENV === 'production'){
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

})


}




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());


const uri = "mongodb+srv://admin:fedstuff2@cluster0.iz311.mongodb.net/blog?retryWrites=true&w=majority";
const conn = mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true });

conn.on('connected', function() {
  console.log('database is connected successfully');
});

conn.on('disconnected',function(){
  console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));

var hour = 3600000;

app.use(session({secret: 'user_sess',  saveUninitialized: false, rolling: true, resave: true, cookie:{maxAge: hour, expires: new Date(Date.now() + hour)}, store: conn})).post('/api/login', (req,res)=>{
  const {name , email, password} = req.body;

  console.log(req.protocol)
  conn.collection('users').findOne({name, email, password}, (err, result)=>{
      if(err)
       {res.status(404).send(err)}
       else if(result){
        req.session.save(function(error){
          if(error){
            console.log(error);
          }
        })
          res.json({message: 'Login successfull', user: result.name});

          
          console.log(req.session);
      }else{
          res.status(200).send('Login failed');
      }
  })

 
}
)



app.post('/api/signup', (req,res)=>{
    const {name, email, password} = req.body;
    // check if user already exists
    conn.collection('users').findOne({name : name, email: email}, (err, user)=>{
        if(err)  {res.status(404).send(err)}
        else if(user){
            res.status(200).send("User already exists")
        }else{
            conn.collection('users').insertOne({name: name, email: email, password: password}, (err, result)=>{
                if(err) {res.status(404).send(err)};
                
                res.status(200).send('Signup successfull')
            })
        }
    })
})





app.post('/api/sendMessage', (req, res) => {
   
    const { name, email, message } = req.body
   
    const data = req.body
  
    console.log(req.body)
   
    
  

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: MY_GMAIL,
          pass: MY_GMAIL_PASSWORD
        }
    }));

    const mailOptions = {
        from: data.email,
        to: MY_GMAIL,
        subject: `A Message from ${data.email}`,
        bcc: data.email,
        text: `
        Email: ${data.email}

        Name: ${data.name}

        Message: ${data.message}
        `
    };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.status(200).send('Send email successfully');
    console.log(res) 
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})