import Header from "../Header.js";
const Header3 = {
    async render() {
            return `
            <header id="header" class="header style-02 header-dark">
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
                            <a href="/">
                                <img alt="Akasha" src="assets/images/logo.png" class="logo">
                            </a>
                        </div>
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
                                        
                                            <button type="submit" class="btn-submit">
                                                <span class="flaticon-magnifying-glass-1"></span>
                                            </button>
                                        </form><!-- block search -->
                                    </div>
                                </div>
                                <div class="akasha-dropdown-close">x</div>
                                <div class="menu-item block-user block-dreaming akasha-dropdown">
                                    <a class="block-link" href="#">
                                        <span class="flaticon-profile"></span>
                                    </a>
                                    <ul class="sub-menu">
                                        <li class="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--dashboard is-active">
                                            <a href="#">Dashboard</a>
                                        </li>
                                        <li class="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--orders">
                                            <a href="#">Orders</a>
                                        </li>
                                        <li class="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--downloads">
                                            <a href="#">Downloads</a>
                                        </li>
                                        <li class="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-adchair">
                                            <a href="#">Addresses</a>
                                        </li>
                                        <li class="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-account">
                                            <a href="#">Account details</a>
                                        </li>
                                        <li class="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--customer-logout">
                                            <a href="#">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-mobile">
        <div class="header-mobile-left">
            <div class="block-menu-bar">
                <a class="menu-bar menu-toggle" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
         
            <ul class="wpml-menu">
                <li class="menu-item akasha-dropdown block-language">
                    <a href="#" data-akasha="akasha-dropdown">
                        <img src="assets/images/en.png"
                             alt="en">
                        English
                    </a>
                    <span class="toggle-submenu"></span>
                    <ul class="sub-menu">
                        <li class="menu-item">
                            <a href="#">
                                <img src="assets/images/it.png"
                                     alt="it">
                                Italiano
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item">
                    <div class="wcml-dropdown product wcml_currency_switcher">
                        <ul>
                            <li class="wcml-cs-active-currency">
                                <a class="wcml-cs-item-toggle">USD</a>
                                <ul class="wcml-cs-submenu">
                                    <li>
                                        <a>EUR</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="header-mobile-mid">
            <div class="header-logo">
                <a href="index-2.html"><img alt="Akasha" src="assets/images/logo.png" class="logo"></a>
            </div>
        </div>
        <div class="header-mobile-right">
            <div class="header-control-inner">
            
            </div>
        </div>
    </div>
</header>
          <div class="banner-wrapper no_background">
          <div class="banner-wrapper-inner">
              <nav class="akasha-breadcrumb"><a href="index-2.html">Home</a><i class="fa fa-angle-right"></i><a href="#">Shop</a>
                  <i class="fa fa-angle-right"></i>Single Product
              </nav>
          </div>
      </div>
            `
    }
} 
export default Header3 ; 