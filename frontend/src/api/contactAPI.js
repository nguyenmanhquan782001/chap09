import { axiosClient } from './axiosClient';
const ContactApi = {
    getAll(){
        const url = `/contacts`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/contacts/${id}`;
        return axiosClient.get(url);
    } , 
    add(categgory) {
        const url = `/contacts`;
        return axiosClient.post(url , categgory);
    } , 
    remove(id) {
        const url = `/contacts/${id}`;
        return axiosClient.delete(url);  
    } , 
    update(id , data) {
        const url = `/contacts/${id}`;
        return axiosClient.put(url , data);  
    }
    
}
export default ContactApi ;