import { VuexModule, Module, getModule } from "vuex-module-decorators";
import store from '@/store'

@Module({
namespaced: true,
name: 'Employees',
store    
})

default class EmployeesModule extends VuexModule{

}

export default getModule(EmployeesModule);
