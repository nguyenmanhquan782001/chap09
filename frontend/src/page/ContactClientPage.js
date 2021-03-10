import HeaderBE from "../components/backend/HeaderBE.js" ;
import SiderBar from "../components/backend/SiderBar.js"  ; 
import FooterBE from '../components/backend/FooterBE.js'; 
import Search from '../components/backend/Search.js' ; 
import ListMessage from "../components/ListMessage.js"

const ContactClientPage = {
    async render () {
        return ` <div id= "wrapper">
        ${await SiderBar.render()} 
        <div id="content-wrapper" class="d-flex flex-column">           
         <div id= "content">  
           ${await Search.render()}      
           ${await HeaderBE.render()}  
           <div class="d-sm-flex align-items-center justify-content-between mb-4">
           <h1 style= "margin-left:50px; " class="h3 mb-0 text-gray-800">Danh sách liên hệ</h1>
           <a href="/#/add-category" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                   class="fas fa-download fa-sm text-white-50"></i>Thêm danh mục</a>
           </div>  
           ${await ListMessage.render()}
          
        </div> 
 
        ${await FooterBE.render() }
 
        </div> 
 
 `

    }   , 
    async afterRender() {
        return `${await ListMessage.afterRender()}`

    }
} 
export default ContactClientPage  ; 
