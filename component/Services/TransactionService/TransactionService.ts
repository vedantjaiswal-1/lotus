import axios from "axios";

export default class TransactionService {
  static listTransaction = () => {
    return axios.get(`http://localhost:3000/api/transaction/`).then((response: any) => {
      return response.data;
    });
  };

  static AddTransaction = (data: any) => {
    return axios.post(`http://localhost:3000/api/transaction/`, data).then((response: any) => {
      return response.data;
    });
  };
}
