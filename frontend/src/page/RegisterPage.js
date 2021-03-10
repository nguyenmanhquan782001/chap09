import HeaderFE from "../components/frontend/Header.js";
import FooterFE from "../components/frontend/Footer.js";
import Header5 from "../components/frontend/Header5.js";  
import UserApi from "../api/userAPI.js" ; 
import { $ } from '../uitil.js';  
const RegisterPage = {
    async render() {
        return `${await Header5.render()} 
       <div class="banner-wrapper has_background">
       <img src="assets/images/banner-for-all2.jpg"
           class="img-responsive attachment-1920x447 size-1920x447" alt="img">
            <div class="banner-wrapper-inner">
                <h1 class="page-title">Đăng kí</h1>
                <div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs">
             <ul class="trail-items breadcrumb">
                   <li class="trail-item trail-begin"><a href="/"><span>Home</span></a></li>
                   <li class="trail-item trail-end active"><span>Đăng kí</span>
                   </li>
            </ul>
        </div>
        </div>
        </div>  
    
           <div class="card bg-light">
           <article class="card-body mx-auto" style="max-width: 500px;">
               <h4 class="card-title mt-3 text-center">Create Account</h4>
               <p class="text-center">Get started with your free account</p>
               <p>
                   <a href="" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i> Login via facebook</a>
               </p>
              
               <form id = "form_register">
               <div class="form-group input-group">
                   <div class="input-group-prepend">
                       <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                    </div>
                   <input id= "fullname" name="" class="form-control" placeholder="Full name" type="text">
               </div>  
               <p id = "errorName"> </p>
               <div class="form-group input-group">
                   <div class="input-group-prepend">
                       <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                    </div>
                   <input id = "email" name="" class="form-control" placeholder="Email address" type="email">
               </div> <!-- form-group// -->
               
               <p id = "errorEmail"> </p>

               <div class="form-group input-group">
                   <div class="input-group-prepend">
                       <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                   </div>
                   <input id = "password" class="form-control" placeholder="Create password" type="password">
               </div>

               <p id = "errorPass"> </p>
               <div class="form-group input-group">
                   <div class="input-group-prepend">
                       <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                   </div>
                   <input id ="confirm_password" class="form-control" placeholder="Repeat password" type="password">
               </div>  
               <p id = "errorPass1"> </p> 

               <div class="form-group">
                   <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
               </div> <!-- form-group// -->      
               <p class="text-center">Have an account? <a href="/#/login">Log In</a> </p>                                                                 
           </form>
           </article>
         </div>
        ${await FooterFE.render()
            }
       `

    }  , 

    async afterRender() {   
        //  let fullname = $("#fullname").value ; 
        //  let email = $("#email").value ; 
        //  let password = $("#password").value ; 
        //  let confirm = $("#confirm_password").value ; 
        $("#form_register").addEventListener('submit'  , e => {
            e.preventDefault() ;  

            if($("#fullname").value == "") { 
                $("#errorName").innerHTML = "Không để trống họ tên" ;  
                $("#fullname").focus() ; 
                return false   ; 
              
            } 
       else if($("#email").value  == "") {
                $("#errorEmail").innerHTML = "Không để trống email" ;  
                $("#email").focus() ;  
                return ; 
                
            } 
         else if($("#password").value == "") { 
                $("#errorPass").innerHTML = "Không để trống password" ;  
                $("#password").focus() ; 
                return  ; 
            }  

        else if( $("#confirm_password").value !== $("#password").value    ) {
                $("#errorPass1").innerHTML = "Mật khẩu xác nhận không khớp" ; 
                $("#confirm_password").focus() ; 
                return  ; 
            }  

            else {
                const user = {
                    "id" :Math.random().toString(36).substr(2, 9), 
                    "fullname" : $("#fullname").value , 
                    "email" : $("#email").value , 
                    "password" :  $("#password").value 
                } 

                console.log(user)  
                UserApi.add(user) ; 
                window.location.hash = "/login" ; 
             
                
            }
            
            
  
        }) ; 



    }

}
export default RegisterPage; 