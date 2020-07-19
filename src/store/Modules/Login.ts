import { VuexModule, Module, MutationAction, getModule } from "vuex-module-decorators";
import store from '@/store'
import { IUser } from '../Models/IUser';
import AuthService from '@/store/Services/Auth.Services'

@Module({
namespaced: true,
name: 'LoginModule',
store    
})

export default class LoginModule extends VuexModule{

    user: IUser | null = null;
    token: any;
    authService: AuthService = new AuthService();

    @MutationAction({mutate : ['token']})
    async login(loginUser: IUser){
        //this.token=  "1234";
        this.token = this.authService.signIn(loginUser);
        return this.token;
    }
}

getModule(LoginModule);
