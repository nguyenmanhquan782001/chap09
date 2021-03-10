import CategoryApi from "../api/categoryAPI.js";
import { reRender , $ } from "../uitil.js";



const ListCategory = {
    async render() {
        const { data: categories } = await CategoryApi.getAll();
        return `
            <table class = "table table-hover" id="list-category"> 
            <thead> 
                <tr> 
                   <th>STT</th>
                   <th>Tên danh mục</th>  
                   <th>Hình ảnh</th>      
                   <th>Hành động </th>
                </tr>
            </thead>   
            <tbody>
                ${categories.map((category, index) => {
                    return `
                        <tr> 
                        <td>${index}</td>
                        <td>${category.name}</td>
                        <td> <img width= "100px" src= "${category.image}" /> </td>
                        <td>   
                            <button class="btn btn-danger btn-remove" data-id='${category.id}'>Xóa</button> 
                           <a style ="padding:9px;" class= "btn btn-info" href= "/#/edit-category/${category.id}">Edit</a>        
                        </td> 
                        </tr>                       
                        `
                }).join(" ")

            }
           </tbody>              
        </table>          
        `
    },
    async afterRender() {
        const btns = $("#list-category .btn");
        // console.log(btns);
        btns.forEach(btn => {   
            const id = btn.dataset.id ; 
            btn.addEventListener('click'  , async function(){ 
  
              if (btn.classList.contains('btn-remove')) {
                const question = confirm('Bạn có chắc chắn muốn xóa không?');
                if (question) {          
                    await   CategoryApi.remove(id)  
                    await reRender(ListCategory, '#list-category');
                }
            }              
            }) ; 
            
        });

    }

}
export default ListCategory; 