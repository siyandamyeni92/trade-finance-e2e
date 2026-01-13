export async function getOtp(role) {
  return '123456';
}

//This is otp.util.js.

 // A utility helper
  //Responsible for retrieving OTP values
  //Abstracts OTP logic away from UI tests

  //What it does

  //Always returns a fixed OTP: 123456

  //Ignores the role parameter (for now)

  //Allows OTP-based flows to continue in test environments