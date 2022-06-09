import axios from "axios";
import { getToken } from "../../../config";

export default class VendorService {
  static listVendor = () => {
    return axios
      .get(`${window.location.origin}/api/vendor/`, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response: any) => {
        return response.data;
      });
  };

  static addVendor = (data: any) => {
    return axios
      .post(`${window.location.origin}/api/vendor/`, data, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response: any) => {
        return response.data;
      });
  };
}
