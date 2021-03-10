import { axiosClient } from './axiosClient';
const CategoryApi = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    } , 
    add(categgory) {
        const url = `/categories`;
        return axiosClient.post(url , categgory);
    } , 
    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);  
    } , 
    update(id , data) {
        const url = `/categories/${id}`;
        return axiosClient.put(url , data);  
    }
    
}
export default CategoryApi ;