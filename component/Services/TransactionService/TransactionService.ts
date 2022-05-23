import axios from "axios";
import { getToken } from "../../../config";

export default class TransactionService {
  static listTransaction = () => {
    return axios
      .get(`${window.location.origin}/api/transaction/`, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response: any) => {
        return response.data;
      });
  };

  static AddTransaction = (data: any) => {
    return axios
      .post(`${window.location.origin}/api/transaction/`, data, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response: any) => {
        return response.data;
      });
  };
}
