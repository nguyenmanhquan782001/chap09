
import { reRender, $ } from "../uitil";
import parseRequestUrl from "../uitil";

import CategoryApi from "../api/categoryAPI.js";
import HeaderBE from "../components/backend/HeaderBE.js";
import SiderBar from "../components/backend/SiderBar.js";
import FooterBE from '../components/backend/FooterBE.js';
import Search from '../components/backend/Search.js';
const EditCategoryPage = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: category } = await CategoryApi.get(id);
    return `<div id= "wrapper">
        ${await SiderBar.render()} 
        <div id="content-wrapper" class="d-flex flex-column"> 
                  
         <div id= "content">  
           ${await Search.render()}    
           ${await HeaderBE.render()}  
           <div class="d-sm-flex align-items-center justify-content-between mb-4">
           <h1 style= "margin-left:50px; " class="h3 mb-0 text-gray-800">Sửa danh mục</h1>
           <a href="/#/addproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                   class="fas fa-download fa-sm text-white-50"></i></a>
           </div> 
           
           <form method= "post"  id = "form-update" style= "margin:50px;">
           <div class="form-group">
             <label for="exampleInputEmail1">Tên danh mục</label>
             <input value = "${category.name}"   id= "product-name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên sản phẩm">
             </div>  
             <p id = "error"> </p>
               <div class="form-group">
               <label for="exampleInputEmail1">Hình ảnh danh mục</label>
               <input  id= "product-image"  type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên sản phẩm">
               </div> 
               <img id="image" src = "${category.image}" width = "150px; " />  
               <input type = "hidden" id = "product-image-old" value = "${category.image}" />
       <br>
           <button type="submit" class="btn btn-primary">Update</button>
         </form> 
      
        </div> 
        ${await FooterBE.render()}

        </div> 
       `
  },
  async afterRender() {
    const { id } = parseRequestUrl();
    const { data: category } = await CategoryApi.get(id);
    $("#form-update").addEventListener('submit', (e) => {
      e.preventDefault();
      var error = "";
      if ($("#product-name").value == "") {
        var error = "Cần nhập tên danh mục"; 
        return false ; 
      }

      if (error == "") {
        const productImage = $("#product-image").files[0];
        if (productImage) {
          let storageRef = firebase.storage().ref(`images/${productImage.name}`);
          storageRef.put(productImage).then(function () {
            storageRef.getDownloadURL().then(url => {
              const category = {
                "name": $("#product-name").value,
                "image": url,
              }
              CategoryApi.update(id, category);
              window.location.hash = "/list-category"
            })

          })

        }
        else {
          const categorys = {
            ...category,
            "name": $("#product-name").value,

          }
          CategoryApi.update(id, categorys);
          window.location.hash = "/list-category"



        }

      }
      else {
        $("#error").innerHTML = error;
      }

    })



  }
}
export default EditCategoryPage;


