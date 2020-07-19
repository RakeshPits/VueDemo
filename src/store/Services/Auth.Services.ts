import axios from 'axios';
import { IUser } from '../Models/IUser';

export default class AuthService{

    private AUTH_URL = "http://localhost:64275/api/Identity";

    private axiosAuthApi = axios.create({
        baseURL : this.AUTH_URL,
        headers : {'Content-Type': 'application/json',
                    'Accept': 'application/json'}
    });

    public async signIn(user: IUser): Promise<string>{
        console.log(user.UserName+ " "+ user.Password);
       const token: string = await this.axiosAuthApi.post("/Authenticate",user);
       console.log(token);
       return token;       
    }
}