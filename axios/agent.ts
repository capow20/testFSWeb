import axios, { AxiosResponse } from "axios";
import { LoginDto } from "../Dtos/LoginDto";
import { RegisterDto } from "../Dtos/RegisterDto";
import { AppUser } from "../models/appUser";
import {store} from "../stores/store";

axios.defaults.baseURL = "https://fitstack-api.azurewebsites.net/api";
//axios.defaults.baseURL = "https://localhost:5001/api";
axios.interceptors.request.use((config:any) =>{
  const token = store.userStore.token;
  if(token) config.headers.Authorization = `Bearer ${token}`
  return config; 
})
export interface ActiveState{
  state:boolean;
}
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  login: (creds: LoginDto) => requests.post<AppUser>("/Account/login", creds),
  register: (dto: RegisterDto) => requests.post<AppUser>("/Account/register", dto),
  current: () => requests.get<AppUser>("/Account"),
}

const agent ={
  Account
}

export default agent;