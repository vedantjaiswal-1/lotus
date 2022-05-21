import axios from "axios";

export default class AuthService {
  static login = (user: any) => {
    return axios.post(`${window.location.origin}/api/login/`, user, {
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
