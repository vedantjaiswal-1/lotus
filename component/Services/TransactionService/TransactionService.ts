import axios from "axios";
import { getToken } from "../../../config";
import { uuid } from "../../../pages/invoice/[id]";

export default class TransactionService {
  static listTransaction = () => {
    return axios
      .get(`${window.location.origin}/api/transaction/`, {
        headers: {
          Authorization: getToken(),
        },
      })
      .then((response: any) => {
        return response.data;
      });
  };

  static AddTransaction = (data: any) => {
    return axios
      .post(`${window.location.origin}/api/transaction/`, data, {
        headers: {
          Authorization: getToken(),
        },
      })
      .then((response: any) => {
        return response.data;
      });
  };

  static transactionById = (id: any) => {
    return axios
      .get(`${window.location.origin}/api/transaction/${id}/`, {
        headers: {
          Authorization: getToken(),
        },
      })
      .then((response: any) => {
        return response.data;
      });
  };

  static transactionByDate = (start: any, end: any, title: any) => {
    return axios
      .get(
        `${window.location.origin}/api/transaction/date?start=${start}&end=${end}&title=${title}`,
        {
          headers: {
            Authorization: getToken(),
          },
        }
      )
      .then((response: any) => {
        return response.data;
      });
  };
}
