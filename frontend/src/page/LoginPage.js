import HeaderFE from "../components/frontend/Header.js";
import FooterFE from "../components/frontend/Footer.js";
import Header5 from "../components/frontend/Header5.js";  
import UserApi from "../api/userAPI.js" ; 
import { $ } from '../uitil.js';  
const LoginPage = { 
    async render () { 
    
        return ` 
        
        ${await Header5.render()} 
       <div class="banner-wrapper has_background">
       <img src="assets/images/banner-for-all2.jpg"
           class="img-responsive attachment-1920x447 size-1920x447" alt="img">
            <div class="banner-wrapper-inner">
                <h1 class="page-title">Login</h1>
                <div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs">
              <ul class="trail-items breadcrumb">
                   <li class="trail-item trail-begin"><a href="/"><span>Home</span></a></li>
                   <li class="trail-item trail-end active"><span>Login</span>
                   </li>
             </ul>
                </div>
                </div>
        </div> 
        
        <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img width= "100px" src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form id = "login">
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input id="email" type="email" name="" class="form-control input_user" value="" placeholder="username">
						</div> 
                        <p id= "errorE" > </p>

						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input id= "pass" type="password" name="" class="form-control input_pass" value="" placeholder="password">
						</div>
                        <p id= "errorP" > </p>

						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>

							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button style = "width:300px;" type="submit" name="button" class="btn login_btn btn-danger">Login</button>
				   </div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
        ${await FooterFE.render()
            }
        
        `
    } , 
    async afterRender() { 
        const {data : users} = await UserApi.getAll() ; 
        console.log(users) ; 
    $("#login").addEventListener('submit' , e=> { 
      e.preventDefault() ;    
      users.forEach(element => { 
        if ($("#email").value == "") {
         $("#errorE").innerHTML = "Bắt buộc nhập email";  
        return false  ;
        } 
        if ($("#pass").value == "") {
            $("#errorP").innerHTML = "Bắt buộc nhập pass";  
            return false ; 
        } 
        else {
            if($("#email").value != element.email) {
                $("#errorE").innerHTML = "Email không tồn tại";  
                return false ; 
            }  
            else if ($("#pass").value != element.password)  {
                $("#errorP").innerHTML = "Pass không đúng";  
                return false ; 
            } 
            else {
                window.location.hash = "/list-product" ;             
            }
        }       
      });        
    }) ; 
    } 
} 
export default LoginPage ; 
