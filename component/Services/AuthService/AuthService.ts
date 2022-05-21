import axios from "axios";

export default class AuthService {
  static login = (user: any) => {
    return axios.post(`http://localhost:3000/api/login/`, user, {
      headers: {}
    });
  };

  static getUserName() {
    try {
      let authUser = localStorage.getItem("user");
      return authUser ? JSON.parse(authUser).name : "";
    } catch (e) {}
    return "";
  }
}
