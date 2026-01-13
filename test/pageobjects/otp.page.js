import { getOtp } from '../utils/otp.util.js';
class OtpPage {
  get otp() { return $('#otp'); }
  get submit() { return $('#verifyOtp'); }
  async verify(role) {
    await this.otp.setValue(await getOtp(role));
    await this.submit.click();
  }
}
export default new OtpPage();


//This is an OtpPage Page Object.

//It represents the OTP verification screen
//It handles second-factor authentication
//It integrates with a backend / utility that retrieves the OTP