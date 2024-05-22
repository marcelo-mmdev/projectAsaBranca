import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "https://docs.google.com/spreadsheets/d/e"

});

export class Planilha {
  listarCidade() {
    return axiosInstance.get("/2PACX-1vQyMSpohCQ8qcELCIBY5Wl6yKCuF1K4D1MbwUduQ4G-reanv6EQQfTEJHYNiMO-kUMCJs7w3ObnW41t/pub?gid=0&single=true&output=csv")
  }
}