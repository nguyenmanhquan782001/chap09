import { reRender, $ } from "../uitil";
import parseRequestUrl from "../uitil";
import ProductApi from '../api/productAPI.js';
import CategoryApi from "../api/categoryAPI.js";
import HeaderBE from "../components/backend/HeaderBE.js";
import SiderBar from "../components/backend/SiderBar.js";
import FooterBE from '../components/backend/FooterBE.js';
import Search from '../components/backend/Search.js';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditProductPage = {
  async render() {
    const { data: category } = await CategoryApi.getAll();
    const { id } = parseRequestUrl();
    const { data: products } = await ProductApi.get(id);
    return ` 
        <div id= "wrapper">
         ${await SiderBar.render()} 
         <div id="content-wrapper" class="d-flex flex-column"> 
                   
          <div id= "content">  
            ${await Search.render()}
          
            ${await HeaderBE.render()}  

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 style= "margin-left:50px; " class="h3 mb-0 text-gray-800">Edit Sản phẩm</h1>
            <a href="/#/addproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i></a>
            </div> 
            
            <form method= "post"  id = "form-update" style= "margin:50px;">
            <div class="form-group">
              <label for="exampleInputEmail1">Tên sản phẩm</label>
              <input value = "${products.name}"  id= "product-name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên sản phẩm">
              </div> 
              <p id ="error1" > </p>
 
                <div class="form-group">
                <label for="exampleInputEmail1">Hình ảnh sản phẩm</label>
                <input  id= "product-image"  type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên sản phẩm">
                </div> 
                <img src = "${products.image}" width = "150px; " />  
               
                <div class="form-group">
                <label for="exampleInputEmail1">Giá sản phẩm</label>
                <input value = "${products.price}" id= "product-price"  type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Giá sản phẩm">
                </div> 
                <p id ="error2" > </p> 

                <div class="form-group">
                <label for="exampleInputEmail1">Số lượng sản phẩm</label>
                <input value = "${products.quantity}" id= "product-quantity"  type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Số lượng sản phẩm">
                </div>  
                <p id ="error3" > </p>

                <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select id= "category" class="form-control" id="exampleFormControlSelect1">
                    ${category.map(category => {
      return `<option value = "${category.id}" ${products.categoryId == category.id ? "selected" : ""}>${category.name}</option>`
    })
      }
                </select>
              </div>
              <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea class="form-control" id="desc" rows="5">${products.desc}</textarea>
            </div>
            <p id ="error4" > </p>

            <button type="submit" class="btn btn-primary">Update</button>
          </form>
       
         </div> 
         ${await FooterBE.render()}
         </div>  
        `
  },
  async afterRender() {
    ClassicEditor.create(document.querySelector('#desc')).catch(error => {
      console.error();(error);
     })
    const { id } = parseRequestUrl();
    const { data: product } = await ProductApi.get(id);
    $("#form-update").addEventListener('submit', (e) => {
      e.preventDefault();
      if ($("#product-name").value == "") {
        $("#error1").innerHTML = "Chưa nhập tên sản phẩm";
        $("#product-name").focus(); 
        return false ; 
      }
      if ($("#product-price").value == "") {
        $("#error2").innerHTML = "Chưa nhập giá sản phẩm";
        $("#product-price").focus();
        return false ; 
      }
      if ($("#product-quantity").value == "") {
        $("#error3").innerHTML = "Chưa nhập số lượng sản phẩm";
        $("#product-quantity").focus();
        return false ; 
      }
      if ($("#desc").value == "") {
        $("#error4").innerHTML = "Chưa nhập mô tả sản phẩm";
        $("#desc").focus();
        return false ; 
      }
      else {
        const productImage = $("#product-image").files[0];
        if (productImage) {
          let storageRef = firebase.storage().ref(`images/${productImage.name}`);
          storageRef.put(productImage).then(function () {
            storageRef.getDownloadURL().then(url => {
              const product = {
                "name": $("#product-name").value,
                "price": $("#product-price").value,
                "quantity": $("#product-quantity").value,
                "desc": $("#desc").value,
                "image": url,
                "categoryId": $("#category").value
              }
              ProductApi.update(id, product);
              window.location.hash = "/list-product"
            })

          })
        }
        else { 
          const products = { 
            ...product , 
            "name": $("#product-name").value,
            "price": $("#product-price").value,
            "quantity": $("#product-quantity").value,
            "desc": $("#desc").value,
            "categoryId": $("#category").value
          }
          ProductApi.update(id, products);
          window.location.hash = "/list-product"


        }

      }




    })



  }

}
export default EditProductPage; 