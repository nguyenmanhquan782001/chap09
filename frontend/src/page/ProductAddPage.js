import ProductApi from '../api/productAPI.js';
import CategoryApi from "../api/categoryAPI.js";
import { $ } from '../uitil.js';
import HeaderBE from "../components/backend/HeaderBE.js";
import SiderBar from "../components/backend/SiderBar.js";
import FooterBE from '../components/backend/FooterBE.js';
import Search from '../components/backend/Search.js';
import firebase from "../firebase/index.js";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ProductAddPage = {
  async render() {
    const { data: category } = await CategoryApi.getAll(); 

    return `  
         <div id= "wrapper">
         ${await SiderBar.render()} 
         <div id="content-wrapper" class="d-flex flex-column"> 
                   
          <div id= "content">  
            ${await Search.render()}
          
            ${await HeaderBE.render()}  

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 style= "margin-left:50px; " class="h3 mb-0 text-gray-800">Thêm sản phẩm</h1>
           
                    
            </div> 
            <form method= "post"  id = "form-add" style= "margin:50px;">
            <div class="form-group">
              <label for="exampleInputEmail1">Tên sản phẩm</label>
              <input  id= "product-name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên sản phẩm">
              </div> 
              <p style = "color:red" id = "error1"></p>
 
                <div class="form-group">
                <label for="exampleInputEmail1">Hình ảnh sản phẩm</label>
                <input  id= "product-image"  type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên sản phẩm">
                </div> 
                <p  style = "color:red" id = "error2"></p>
                <div class="form-group">
                <label for="exampleInputEmail1">Giá sản phẩm</label>
                <input id= "product-price"  type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Giá sản phẩm">
                </div>  
                <p  style = "color:red" id = "error3"></p>
                <div class="form-group">
                <label for="exampleInputEmail1">Số lượng sản phẩm</label>
                <input id= "product-quantity"  type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Số lượng sản phẩm">
                </div>  
                <p  style = "color:red" id = "error4"></p>

                <div class="form-group">
                <label for="exampleFormControlSelect1">Danh mục</label>
                <select id= "category" class="form-control" id="exampleFormControlSelect1">
                    ${category.map(category => {
      return `<option value = "${category.id}">${category.name}</option>`

    })

      }
                </select>
              </div>
          
          
            
            <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="desc" rows="5"></textarea>
          </div>
          <p  style = "color:red" id = "error5"></p>  
         

            <button type="submit" class="btn btn-primary">Thêm mới</button>
          </form>

         </div> 
         ${await FooterBE.render()}
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
    ClassicEditor.create(document.querySelector('#desc')).catch(error => {
      console.error();(error);
     })
    $("#form-add").addEventListener('submit', e => {
      e.preventDefault();
      if ($("#product-name").value == "") {
        $("#error1").innerHTML = "Chưa nhập tên sản phẩm";
        $("#product-name").focus();
        $("#product-name").style.outlineColor = "red"; 
     return ; 
     
      }
      if ($("#product-price").value == "") {
        $("#error3").innerHTML = "Chưa nhập giá sản phẩm";
        $("#product-price").focus();
        $("#product-price").style.outlineColor = "red";
        return ; 
     
      }
      if ($("#product-quantity").value == "") {
        $("#error4").innerHTML = "Chưa nhập số lượng sản phẩm";
        $("#product-quantity").focus();
        $("#product-quantity").style.outlineColor = "red";
        return ; 
     
      }
      
      if ($("#desc").value == "") {
        $("#error5").innerHTML = "Chưa nhập mô tả sản phẩm";
        $("#desc").focus();
        $("#desc").style.outlineColor = "red";
        return ; 
      } 
      else {
        const productImage = $("#product-image").files[0];
        if (productImage) {
          let storageRef = firebase.storage().ref(`images/${productImage.name}`);
          storageRef.put(productImage).then(function () {
            storageRef.getDownloadURL().then(url => {
              const product = {
                "id": Math.random().toString(36).substr(2, 9),
                "name": $("#product-name").value,
                "desc": $("#desc").value,
                "image": url,
                "quantity": $("#product-quantity").value,
                "price": $("#product-price").value,
                "categoryId": $("#category").value
              };
              console.log(product)
              ProductApi.add(product);
              window.location.hash = "/list-product"
            })
          })
        } else {
          $("#error2").innerHTML = "Chưa có ảnh ";
          $("#product-image").focus();
          $("#product-image").style.outlineColor = "red";    
           
        }
      }
    });


  }
}
export default ProductAddPage;

