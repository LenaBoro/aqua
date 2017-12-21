var express = require('express');
var router = express.Router();
var mailer = require('nodemailer');
var smtpTransport=require('nodemailer-smtp-transport');
//send on enail info

var transport = mailer.createTransport(smtpTransport,{
    service: "Gmail",
    host: "smtp.gmail.com",
    port: '465',
    secure: true,
    auth:{
        user: "nodejs06@gmail.com",
        pass: "20072017"
    }
    //,tls: {
     //   rejectUnauthorized: false
   // }
});

router.get('/', function(req, res) {
var mail = {
    from: 'Promo.ownsea <nodejs06@gmail.com> ',
    to: 'ownsea@ya.ru',
    subject: 'Заказ аквариума',
    text: "Имя клиента :"+req.query.name +"; Телефон:"+req.query.phone + ";Почта:"+req.query.email
};
transport.sendMail(mail,function(err,response){
    if (err){
        console.log(err);
    }else {
        res.end('send');
        console.log("Message has been sent");
    }
})
});

module.exports = router;
