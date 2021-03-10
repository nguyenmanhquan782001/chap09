import Header from "../Header.js";
const Header4 = {
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
          <div class="banner-wrapper has_background">
          <img src="assets/images/banner-for-all2.jpg"
               class="img-responsive attachment-1920x447 size-1920x447" alt="img">
          <div class="banner-wrapper-inner">
              <h1 class="page-title">Shop</h1>
              <div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs">
                  <ul class="trail-items breadcrumb">
                      <li class="trail-item trail-begin"><a href="/"><span>Home</span></a></li>
                      <li class="trail-item trail-end active"><span>Shop</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
         


            `
    }
} 
export default Header4 ; 