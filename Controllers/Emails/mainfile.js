const express = require("express");
const { Exception } = require("handlebars");
const router = express.Router();
const data = require("./Data");
const transporter = require("./transporter");
// const scheduler = require("node-schedule");

var date = new Date();


router.get("/api/email", (req, res) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function DateManager(i) {
    if (i.b_date == date.getDate().toString()) {
      if (i.b_month == monthNames[date.getMonth()]) {
        return i.emailId;
      }
    }
  }
  const newArr = data.filter(DateManager);
  count = 0
  for (i in newArr){
    count += 1
  }
  for (i=0;i<=count;i++){
    // if (date.getHours() === 9){
      // if (date.getMinutes() === 12) {
        try{
          var mailOptions = {
            from: "potabattiram@gmail.com",
            to: newArr[i].emailId,
            subject: "Birthday Wishes!🎂",
            html:
              "<br>Hello, " +
              newArr[i].name +
              "!" +
              "<br>How are you? " +
              "Its been a long while we have met<br>Here I remember you on your special occassion of your Birthday<br>Birthdays are inevitable, beautiful and very particular moments in our lives! <br>Moments that brings precious memories back, celebrates the present times and gives a strong hope for the future." +
              "<br>" +
              newArr[i].name.split(" ")[0] +
              ", Wish you a Happy and Prosperous Birthday<br> <br>Regards<br>Balram(Ram) Potabatti",
          };
          transporter.sendMail(mailOptions,(err,success) => {
            if(err){
              res.send("Error")
            }
            res.send("Success")
          })
        }
        catch{
          res.send('Error')
        }
      // }
      //  else{  
      // res.send("Waiting for perfect minute to execute");


      //  }
    // }
    // else {
    //   res.send("Waiting for perfect hour to execute");
    // }
 
  }
  
});



module.exports = router;
