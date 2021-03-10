import Header from "../Header.js";
const HeaderFE = {
  async render() {         
         return `
         <header id="header" class="header style-02 header-dark header-transparent header-sticky">
            <div class="header-wrap-stick">
                <div class="header-position">
                    <div class="header-middle">
                        <div class="akasha-menu-wapper"></div>
                        <div class="header-middle-inner">
                            <div class="header-search-menu">
                                <div class="block-menu-bar">
                                    <a class="menu-bar menu-toggle" href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                            <div class="header-logo-nav">
                                <div class="header-logo">
                                    <a href="/"><img alt="Akasha" src="assets/images/logo.png"
                                                              class="logo"></a></div>
                                <div class="box-header-nav menu-nocenter" id="sid">  
                                     ${ await Header.render() }             
                                </div>
                            </div>
                            <div class="header-control">
                                <div class="header-control-inner">
                                    <div class="meta-dreaming">
                                       
                                        <div class="header-search akasha-dropdown">
                                            <div class="header-search-inner" data-akasha="akasha-dropdown">
                                                <a href="#" class="link-dropdown block-link">
                                                    <span class="flaticon-magnifying-glass-1"></span>
                                                </a>
                                            </div>
                                            <div class="block-search">
                                                <form role="search" method="get"
                                                      class="form-search block-search-form akasha-live-search-form">
                                                    <div class="form-content search-box results-search">
                                                        <div class="inner">
                                                            <input autocomplete="off" class="searchfield txt-livesearch input"
                                                                   name="s" value="" placeholder="Search here..." type="text">
                                                        </div>
                                                    </div>
                                                    <input name="post_type" value="product" type="hidden">
                                                    <input name="taxonomy" value="product_cat" type="hidden">
                                                   
                                                    <button type="submit" class="btn-submit">
                                                        <span class="flaticon-magnifying-glass-1"></span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="akasha-dropdown-close">x</div>
                                        <div class="menu-item block-user block-dreaming akasha-dropdown">
                                            <a class="block-link" href="my-account.html">
                                                <span class="flaticon-profile"></span>
                                            </a>
                                            <ul class="sub-menu">
                                             
                                            </ul>
                                        </div>
                                        <div class="block-minicart block-dreaming akasha-mini-cart akasha-dropdown">
                                          <div class="shopcart-dropdown block-cart-link" data-akasha="akasha-dropdown">
                                                <a class="block-link link-dropdown" href="cart.html">
                                                    <span class="flaticon-bag"></span>
                                                    <span class="count">3</span>
                                                </a>
                                            </div>
                                      <div class="widget akasha widget_shopping_cart"> 
                                                <div class="widget_shopping_cart_content">
                                                    <h3 class="minicart-title">Your Cart<span class="minicart-number-items">3</span></h3>
                                                    <ul class="akasha-mini-cart cart_list product_list_widget">
                                                        <li class="akasha-mini-cart-item mini_cart_item">
                                                            <a href="#" class="remove remove_from_cart_button">×</a>
                                                            <a href="#">
                                                                <img src="assets/images/apro134-1-600x778.jpg"
                                                                     class="attachment-akasha_thumbnail size-akasha_thumbnail"
                                                                     alt="img" width="600" height="778">T-shirt with skirt – Pink&nbsp;
                                                            </a>
                                                            <span class="quantity">1 × <span
                                                                    class="akasha-Price-amount amount"><span
                                                                    class="akasha-Price-currencySymbol">$</span>150.00</span></span>
                                                        </li>
                                                        <li class="akasha-mini-cart-item mini_cart_item">
                                                            <a href="#" class="remove remove_from_cart_button">×</a>
                                                            <a href="#">
                                                                <img src="assets/images/apro1113-600x778.jpg"
                                                                     class="attachment-akasha_thumbnail size-akasha_thumbnail"
                                                                     alt="img" width="600" height="778">Abstract Sweatshirt&nbsp;
                                                            </a>
                                                            <span class="quantity">1 × <span
                                                                    class="akasha-Price-amount amount"><span
                                                                    class="akasha-Price-currencySymbol">$</span>129.00</span></span>
                                                        </li>
                                                        <li class="akasha-mini-cart-item mini_cart_item">
                                                            <a href="#" class="remove remove_from_cart_button">×</a>
                                                            <a href="#">
                                                                <img src="assets/images/apro201-1-600x778.jpg"
                                                                     class="attachment-akasha_thumbnail size-akasha_thumbnail"
                                                                     alt="img" width="600" height="778">Mini Dress&nbsp;
                                                            </a>
                                                            <span class="quantity">1 × <span
                                                                    class="akasha-Price-amount amount"><span
                                                                    class="akasha-Price-currencySymbol">$</span>139.00</span></span>
                                                        </li>
                                                    </ul>
                                                    <p class="akasha-mini-cart__total total"><strong>Subtotal:</strong>
                                                        <span class="akasha-Price-amount amount"><span
                                                                class="akasha-Price-currencySymbol">$</span>418.00</span>
                                                    </p>
                                                    <p class="akasha-mini-cart__buttons buttons">
                                                        <a href="cart.html" class="button akasha-forward">Viewcart</a>
                                                        <a href="checkout.html" class="button checkout akasha-forward">Checkout</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </header>  
        <div class="fullwidth-template">
        <div class="slide-home-01">
          <div class="response-product product-list-owl owl-slick equal-container better-height"
               data-slick="{&quot;arrows&quot;:false,&quot;slidesMargin&quot;:0,&quot;dots&quot;:true,&quot;infinite&quot;:false,&quot;speed&quot;:300,&quot;slidesToShow&quot;:1,&quot;rows&quot;:1}"
               data-responsive="[{&quot;breakpoint&quot;:480,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:1500,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}}]">
              <div class="slide-wrap">
                  <img src="assets/images/slide2222.jpg" alt="image">
                  <div class="slide-info">
                      <div class="container">
                          <div class="slide-inner">
                              <h5>Limited Colletion</h5>
                              <h1>Dreamy</h1>
                              <h2>& Lovely</h2>
                              <a href="#">Shop now</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="slide-wrap">
                  <img src="assets/images/slide11new.jpg" alt="image">
                  <div class="slide-info">
                      <div class="container">
                          <div class="slide-inner">
                              <h5>Best Selling</h5>
                              <h1><span>Glamorous</h1>
                              <h2>& Cute</h2>
                              <a href="#">Shop now</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="slide-wrap">
                  <img src="assets/images/slide333.jpg" alt="image">
                  <div class="slide-info">
                      <div class="container">
                          <div class="slide-inner">
                              <h5>This Week Only</h5>
                              <h1>Mega Sale</h1>
                              <h2>50% Off</h2>
                              <a href="#">Shop now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
         
      <div class="section-001">
        <div class="container">
            <div class="akasha-heading style-01">
                <div class="heading-inner">
                    <h3 class="title">New Arrival</h3>
                    <div class="subtitle">
                        Made with care for your little ones, our products are perfect for every occasion. Check it out.
                    </div>
                </div>
            </div>
            
      
         <div id="main-content">
      
      
            </div>
        </div>
      </div>
            
      </div> 
        
         
         ` ; 

    }
} 
export default HeaderFE ; 