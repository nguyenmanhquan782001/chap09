import { axiosClient } from './axiosClient';
const UserApi = {
    getAll(){
        const url = `/users`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/users/${id}`;
        return axiosClient.get(url);
    } , 
    add(categgory) {
        const url = `/users`;
        return axiosClient.post(url , categgory);
    } , 
    remove(id) {
        const url = `/users/${id}`;
        return axiosClient.delete(url);  
    } , 
    update(id , data) {
        const url = `/users/${id}`;
        return axiosClient.put(url , data);  
    }
    
}
export default UserApi ;