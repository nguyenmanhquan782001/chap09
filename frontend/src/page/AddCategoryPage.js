import CategoryApi from '../api/categoryAPI.js';
import HeaderBE from "../components/backend/HeaderBE.js" ;
import SiderBar from "../components/backend/SiderBar.js"  ; 
import FooterBE from '../components/backend/FooterBE.js'; 
import Search from '../components/backend/Search.js' ;  
import firebase from "../firebase/index.js";
import { $ } from '../uitil.js';  
 
const AddCategoryPage = {
  async  render() {
        return `<div id= "wrapper">
        ${await SiderBar.render()} 
        <div id="content-wrapper" class="d-flex flex-column"> 
                  
         <div id= "content">  
           ${await Search.render()}
         
           ${await HeaderBE.render()}  

           <div class="d-sm-flex align-items-center justify-content-between mb-4">
           <h1 style= "margin-left:50px; " class="h3 mb-0 text-gray-800">Thêm mới danh mục</h1>
          
           </div>  
           <form method= "post"  id = "form-add" style= "margin:50px;">
            <div class="form-group">
              <label for="exampleInputEmail1">Tên danh mục</label>
              <input  id= "product-name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tên danh mục">
              </div> 
              <p style = "color:red" id= "error"></p>
                <div class="form-group">
                <label for="exampleInputEmail1">Hình ảnh </label>
                <input  id= "product-image"  type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên sản phẩm">
               </div>  
               <p style = "color:red" id= "errors"></p>


             
            <button type="submit" class="btn btn-primary">Thêm mới</button>
          </form>


          

        </div> 

        ${await FooterBE.render() }

        </div> 

`
    },
    async afterRender() {  
      //  var productName  =  $("#product-name").value; 
      //  var id = Math.random().toString(36).substr(2, 9)
      //  var desc =  $("#desc").value ;    
      //  var category = $("#category").value ;  
      //  var quantity = $("#product-quantity").value ; 
      //  var price = $("#product-price").value ; 
      
       $("#form-add").addEventListener('submit' , e=>{
            e.preventDefault() ;   
            const productImage = $("#product-image").files[0] ;
            // console.log(productImage)  
            
               if($("#product-name").value == "") {
                 $("#error").innerHTML = "Chưa nhập tên danh mục" ; 
                 $("#product-name").focus() ; 
                 $("#product-name").style.outlineColor = "red" ;  
                 return false ; 
               
               }  
              if (productImage) {
                let storageRef = firebase.storage().ref(`images/${productImage.name}`); 
                    storageRef.put(productImage).then(function(){
                      storageRef.getDownloadURL().then(url=> { 
                      const category = {
                      "id" :Math.random().toString(36).substr(2, 9) , 
                      "name" : $("#product-name").value   , 
                      "image" : url , 
                      
                      } ;   
                        CategoryApi.add(category) ; 
                        window.location.hash = "/list-category"
              })
  
            }) 
              }
               else { 
                $("#errors").innerHTML = "Chưa chọn ảnh" ; 
                $("#product-name").focus() ; 
                $("#product-name").style.outlineColor = "red" ;  
                return false ; 
                 
                     
          }


        }) ; 
      }
} 
export default AddCategoryPage ; 