const router = require("express").Router();
const mailer = require("./mail");

router.get("/api/cottyarn/invoice", async (req, res, next) => {
  const options = {
    action: "demo",
    subject: "New Invoice from Cottyarn.com",
    sendTo: [], 
    data: { name: "John Doe", message: "This is a test message." },
  };
  try {
    await mailer.send(options);
    res.send({ success: true, message: "Email sent successfully." });
  } catch (e) {
    alert("Email sending failed.");
  }
});

module.exports = router;