const express = require("express");
const app = express();
const cors = require("cors");
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// //PLASMA_APP--------------------
const PostPlasmaLists = require('./Controllers/PlasmaApp/postPlasmaDonorsList');
const getPlasmaLists = require('./Controllers/PlasmaApp/getPlasmaDonorsList');

// //PRABAL_APP--------------------
// const addRiderPhone = require('./Controllers/cabApp/Customer/addCustomerData');
// const getcustphones = require('./Controllers/cabApp/Customer/getCustomerPhoneData');
// const addDriverData = require('./Controllers/cabApp/Driver/postDriverData');
// const getDriverData = require('./Controllers/cabApp/Driver/getDriverData');

// //SMTP_APP------------------------
// const addUserDataSMTp = require('./Controllers/SMTPApp/addUserDataSMTP');
// const forgotPassSMTP = require('./Controllers/SMTPApp/forgotPassSMTP');
//const singleAPI = require('./Controllers/SMTPApp/singleAPI');

// //WEBDEV_APP--------------------
const webdev = require("./Controllers/WebDev/webdev");

//EMAILS
const emails = require("./Controllers/Emails/mainfile");

// // COTTYARN_APP------------------
const getCottyarnData = require('./Controllers/CottYarn/GET_Controllers/getData');
const forgotPass = require('./Controllers/CottYarn/POST_Controllers/forgotPass');
const postUserData = require('./Controllers/CottYarn/POST_Controllers/postData');
const postTowels = require('./Controllers/CottYarn/POST_Controllers/postTowels');
const testimonialsData = require('./Controllers/CottYarn/GET_Controllers/testimonials');
const addTestimonials = require('./Controllers/CottYarn/POST_Controllers/addTestimonials');

const addToCart = require('./Controllers/CottYarn/POST_Controllers/CART/addToCart');
const deleteItemsfromCart = require('./Controllers/CottYarn/POST_Controllers/CART/deleteItemfromCart');
const showItems = require('./Controllers/CottYarn/POST_Controllers/CART/showItemsinCart');
const Order = require('./Controllers/CottYarn/POST_Controllers/CART/order');

const updateValues = require('./Controllers/CottYarn/POST_Controllers/updateValues');



var AllowList = ['https://thewebdev.in','https://ecommerce1-da6b4.web.app','https://plasmadonates.web.app/']
app.use(cors({
  origin: function(origin, callback){
    
    if(!origin) return callback(null, true);
    if(AllowList.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.get("/", (req, res) => {
  res.send("Global API Services is running");
});



//PLASMA
app.use(PostPlasmaLists);
app.use(getPlasmaLists);

// //PRABAL_TRAVELS
// app.use(addRiderPhone);
// app.use(getcustphones);
// app.use(addDriverData);
// app.use(getDriverData);

// //SMTP
// app.use(addUserDataSMTp);
// app.use(forgotPassSMTP);
//app.use(singleAPI);

// WEBDEV
app.use(webdev);

//EMAILS
app.use(emails);

// //COTTYARN
app.use(getCottyarnData);
app.use(forgotPass);
app.use(postUserData);
app.use(postTowels);
// app.use(multipleOrders);
app.use(testimonialsData);
app.use(addTestimonials);
app.use(Order);

// //COTTYARN-CART
app.use(addToCart);
app.use(deleteItemsfromCart);
app.use(showItems);

// //UPDATE
app.use(updateValues);



app.listen(process.env.PORT || 3001, () => console.log('I turned into Usain Bolt'));
