import axios from "axios";

class Authorithation {
  async registration_request(body, callback) {
    try {
      const message = await axios.post(
        "http://localhost:8081/authorization/registration",
        body
      );

      callback();

      return message.data.message;
      //this.clean_form();
    } catch (error) {
      console.log(error);
      if (error.message == "Network Error") {
        return "Network Error";
      } else {
        return error.response.data.message;
      }
    }
  }

  async login_request(body) {
    try {
      let tokenValue = await axios.post(
        "http://localhost:8081/authorization/login",
        body
      );

      localStorage.setItem("token", tokenValue.data.token);
      localStorage.setItem(
        "tokenExpiration",
        new Date().getTime() + 24 * 60 * 60 * 1000
      );
      this.$router.push("/");
    } catch (error) {
      console.log(error);
      if (error.message == "Network Error") {
        this.$router.push("/error505");
      } else {
        this.error = true;
        this.message = error.response.data.message;
      }
    }
  }
}

export default new Authorithation();
