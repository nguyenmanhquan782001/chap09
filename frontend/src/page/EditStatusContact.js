import { reRender, $ } from "../uitil";
import parseRequestUrl from "../uitil";
import HeaderBE from "../components/backend/HeaderBE.js";
import SiderBar from "../components/backend/SiderBar.js";
import FooterBE from '../components/backend/FooterBE.js';
import Search from '../components/backend/Search.js'; 
import ContactApi from "../api/contactAPI";
const EditStatusContact = {
    async render () {  
        const { id } = parseRequestUrl() ; 
        const { data: info } = await ContactApi.get(id);
        return ` 
        <div id= "wrapper">
         ${await SiderBar.render()} 
         <div id="content-wrapper" class="d-flex flex-column"> 
                   
          <div id= "content">  
            ${await Search.render()}
          
            ${await HeaderBE.render()}  

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 style= "margin-left:50px; " class="h3 mb-0 text-gray-800">Chỉnh sửa trạng thái</h1>
            <a href="/#/addproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i></a>
            </div>  
            <form method= "post"  id = "form-update" style= "margin:50px;">
            <div class="form-group">
              <label for="exampleInputEmail1">Tên khách</label>
              <input disable value = "${info.fullname}"  id= "name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên sản phẩm">
              </div> 
              <p id ="error1" > </p>
 
                <div class="form-group">
                <label for="exampleInputEmail1">Email khách</label>
                <input disable value = "${info.email}" id= "mail"  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên sản phẩm">
                </div>  
                <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select id = "selects" class="form-control" id="exampleFormControlSelect1">
                  <option value = "1" ${info.status == 1 ? "selected" : ""}>Chưa phản hồi</option>
                  <option value = "2"  ${info.status != 1 ? "selected" : ""}>Đã phản hồi</option>           
                </select>
              </div>
     
               <button type = "submit" class= " btn btn-danger">Cập nhật</button>
                </form>
              
         </div> 
         ${await FooterBE.render()}
         </div>   `

    } , 
  async  afterRender() { 
    const { id } = parseRequestUrl() ; 
    const { data: info } = await ContactApi.get(id); 
    $("#form-update").addEventListener('submit' , e=> {
   e.preventDefault() ; 
     const  contacts = {
         ...info  ,  
         "status" : $("selects").value ,

     } 
      ContactApi.update(id , contacts)  ; 
      window.location.hash = "/contact-adm"

     })

    }  
    
}
 
export default EditStatusContact ; 

//
