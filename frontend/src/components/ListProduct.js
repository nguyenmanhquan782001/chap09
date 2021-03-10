import ProductApi from "../api/productAPI.js"; 
import { reRender , $ } from "../uitil.js" ; 

// const $ = selector => {
//     let elements = document.querySelectorAll(selector) ; 
//      return elements.length == 1 ? elements[0] : [...elements] ; 
// }
const ListProduct = {   
    async render() {
        const {data : products} = await ProductApi.getAll() ;     
        return `
            <table class = "table table-hover" id="list-product"> 
            <thead> 
                <tr> 
                   <th>STT</th>
                   <th>Tên sản phẩm</th>
                   <th>Hình ảnh sản phẩm</th>
                   <th>Giá sản phẩm</th> 
                   <th>Số lượng sản phẩm</th>
                   <th>Hành động </th>
                </tr>
            </thead>   
            <tbody>
                 ${products.map((product , index)=>{
                   return `
                   <tr> 
                   <td>${index }</td>
                   <td>${product.name}</td>
                   <td><img src = "${product.image}" width = "150px" /></td>   
                   <td>${product.price} </td> 
                   <td>${product.quantity}</td>
                   <td>   
                      <button class="btn btn-danger btn-remove" data-id='${product.id}'>Xóa</button>
                      <a style = "padding:9px; " class= "btn btn-info" href= "/#/edit-product/${product.id}">Edit</a>       
                   </td> 
                   </tr>                
                   `
                 }).join("")
                
    }
           </tbody>
                    
        </table>         
        `
    } , 

  afterRender() { 
      const btns  =$("#list-product .btn") ;  
      console.log(btns) ;  
      btns.forEach(btn => {      
          const id = btn.dataset.id ; 
          btn.addEventListener('click'  , async function(){ 
            if (btn.classList.contains('btn-remove')) {
              const question = confirm('Bạn có chắc chắn muốn xóa không?');
              if (question) {
                  await   ProductApi.remove(id)  
                  await reRender(ListProduct, '#list-product');
              }
          }
                   
          }) ; 
          
      });
      
      
  }

} 
export default ListProduct ; 