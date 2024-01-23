const Razorpay = require('razorpay');

apiKey="rzp_test_pJ9IjCPmjtsWoC"
apiSecret="Hx2RPUyZotJhGCj3q8vouLYE"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;