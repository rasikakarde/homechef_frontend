import axios from 'axios';

const CHEF_API_BASE_URL = "http://localhost:8080/homechefDemo";
const CHEF_API_REG_URL = CHEF_API_BASE_URL +'/'+ 'processRegister/' ;
const CHEF_API_CHEF_BY_ID_URL = CHEF_API_BASE_URL +'/'+ 'chefs' ;



class ChefService {
    

    getChefs(){
        return axios.get(CHEF_API_BASE_URL +'/'+'chefs');
    }

    createChef(chef){
        return axios.post(CHEF_API_REG_URL, chef);
    }

    getChefById(chefid){
        return axios.get(CHEF_API_CHEF_BY_ID_URL + '/' + chefid);
    }

    updateChef(chef, chefid){
        return axios.put(CHEF_API_BASE_URL + '/' + chefid, chefid);
    }

    deleteEmployee(chefid){
        return axios.delete(CHEF_API_BASE_URL + '/' + chefid);
    }
}

export default new ChefService()