import HeaderFE from "../components/frontend/Header.js";
import FooterFE from "../components/frontend/Footer.js";
import Header5 from "../components/frontend/Header5.js";
import { $ } from '../uitil.js';
import ContactApi from "../api/contactAPI.js";

const Contact = {
    async render() {
        return ` 
              ${await Header5.render()}
              <div class="banner-wrapper has_background">
                <img src="assets/images/banner-for-all2.jpg"
                    class="img-responsive attachment-1920x447 size-1920x447" alt="img">
                <div class="banner-wrapper-inner">
                    <h1 class="page-title">Contact</h1>
                    <div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs">
                        <ul class="trail-items breadcrumb">
                            <li class="trail-item trail-begin"><a href="index-2.html"><span>Home</span></a></li>
                            <li class="trail-item trail-end active"><span>Contact</span>
                            </li>
                        </ul>
        </div>
    </div>
</div> 
<div class="site-main main-container no-sidebar"> 
<div class="section-042">
<div class="container">
    <div class="row">
        <div class="col-md-12 offset-xl-1 col-xl-10 col-lg-12">
            <div class="row">
                <div class="col-md-6">
                    <h4 class="az_custom_heading">Poly shop hihi</h4>
                    <p>Số 1 Trịnh Văn Bô, Phường Xuân Phương , <br>
                     Nam Từ Liêm , Hà Nội</p>
                    <h4 class="az_custom_heading">Store Hours</h4>
                    <p>Monday-Saturday 11am-7pm ET<br>
                        Sunday 11am-6pm ET</p>
                    <h4 class="az_custom_heading">Specialist Hours</h4>
                    <p>Monday-Friday 9am-5pm ET</p>
                </div>
                <div class="col-md-6">
                    <div role="form" class="wpcf7">
                        <form class="wpcf7-form" id = "form-contact">
                            <p><label> Name *<br>
                                <span class="wpcf7-form-control-wrap your-name">
                                    <input id ="name" name="your-name" value="" size="40"
                                           class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                           type="text"></span>
                            </label></p> 
                            <p id = "err" style ="color:red"></p>

                            <p><label> Email *<br>
                                <span class="wpcf7-form-control-wrap your-email">
                                    <input id = "mail" name="your-email" value="" size="40"
                                           class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                           type="email"></span>
                            </label></p>
                            <p id = "err1" style ="color:red"></p> 

                            <p><label> Your Message *<br>
                                <span class="wpcf7-form-control-wrap your-message">
                                    <textarea id = "mess" name="your-message"
                                              cols="40" rows="10"
                                              class="wpcf7-form-control wpcf7-textarea"></textarea></span>
                            </label></p> 
                            <p id = "err2" style ="color:red"></p> 

                            
                            <button style = "border-radius : 60px ; " type = "submit" class="wpcf7-form-control wpcf7-submit" >Send </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</div>
            
${await FooterFE.render()}
         `
    },


    async afterRender() {
        $("#form-contact").addEventListener("submit", e => {
            e.preventDefault();
            if ($("#name").value == "") {
                $("#err").innerHTML = "Cần điền họ và tên";
                $("#name").focus();
                return;
            }

            if ($("#mail").value == "") {
                $("#err1").innerHTML = "Cần điền email";
                $("#mail").focus();
                return;
            }
            if ($("#mess").value == "") {
                $("#err2").innerHTML = "Chưa có nội dung gửi";

                return;
            } 
            else {
                const contact = {
                    "id" :Math.random().toString(36).substr(2, 9), 
                    "fullname" : $("#name").value , 
                    "email" : $("#mail").value , 
                    "mess" : $("#mess").value  , 
                    "status" : 1 
                } 
                
                console.log(contact)  
                ContactApi.add(contact) ; 
                window.location.hash = "/" ; 
            }

        });



    }
}
export default Contact;