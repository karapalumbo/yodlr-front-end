import axios from "axios";

const BASE_URL = "http://localhost:3000";

class UserApis {
  static async getAllUsers() {
    let users = await axios.get(`${BASE_URL}/users`);
    return users.data;
  }

  static async signup(data) {
    let signup = await axios.post(`${BASE_URL}/users`, data);
    return signup.data;
  }

  static async login(data) {
    let login = await axios.post(`${BASE_URL}/users`, data);
    return login.data;
  }
}

export default UserApis;
