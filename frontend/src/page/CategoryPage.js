import CategoryApi from "../api/categoryAPI.js";
import ProductApi from "../api/productAPI.js";
import parseRequestUrl, { $ } from "../uitil"; 
import Header4 from "../components/frontend/Header4.js" ; 
import FooterFE from "../components/frontend/Footer.js" ; 
import ListCategory from "../components/ListCategory.js";
const CategoryPage = {
    async render() { 
        const { id } = parseRequestUrl() ; 
    
         const {data : products } = await ProductApi.getAll() ; 
 
          const result =  products.filter(product => product.categoryId == id).map(product=> {
            return ` 
            <li class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
                                    data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
                                    <div class="product-inner tooltip-left">
                                        <div class="product-thumb">
                                            <a class="thumb-link" href="/#/product/${product.id}">
                                                <img class="img-responsive"
                                                     src="${product.image}"
                                                     alt="Women Bags" width="600" height="778">
                                            </a>
                                            <div class="flash">
                                                <span class="onnew"><span class="text">New</span></span></div>
    
                                            <div class="group-button">
                                                <div class="yith-wcwl-add-to-wishlist">
                                                    <div class="yith-wcwl-add-button show">
                                                        <a href="#" class="add_to_wishlist">Add to Wishlist</a>
                                                    </div>
                                                </div>
                                                <div class="akasha product compare-button">
                                                    <a href="#" class="compare button">Compare</a>
                                                </div>
                                                <a href="#" class="button yith-wcqv-button">Quick View</a>
                                                <div class="add-to-cart">
                                                    <a href="#" class="button product_type_variable add_to_cart_button">Select
                                                        options</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-info equal-elem">
                                            <h3 class="product-name product_title">
                                                <a href="#">${product.name}</a>
                                            </h3>
                                            <div class="rating-wapper nostar">
                                                <div class="star-rating"><span style="width:0%">Rated <strong
                                                                class="rating">0</strong> out of 5</span></div>
                                                <span class="review">(0)</span></div>
                                            <span class="price"><span class="akasha-Price-amount amount"><span
                                                            class="akasha-Price-currencySymbol">$</span>${product.price}</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
            `
       }).join(" ") ;    
          return `
            ${await Header4.render()}
            <div class="main-container shop-page no-sidebar">
            <div class="container">
                <div class="row">
                    <div class="main-content col-md-12">
                        <div class="shop-control shop-before-control">
                            <div class="grid-view-mode">
                                <form>
                                    <a href="shop.html" data-toggle="tooltip" data-placement="top"
                                       class="modes-mode mode-grid display-mode active" value="grid">
                                    <span class="button-inner">
                                        Shop Grid
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                    </a>
                                    <a href="shop-list.html" data-toggle="tooltip" data-placement="top"
                                       class="modes-mode mode-list display-mode " value="list">
                                    <span class="button-inner">
                                        Shop List
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                    </a>
                                </form>
                            </div>
                            <form class="akasha-ordering" method="get">
                                <select title="product_cat" name="orderby" class="orderby">
                                    <option value="menu_order" selected="selected">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="date">Sort by latest</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select>
                            </form>
                            <form class="per-page-form">
                                <label>
                                    <select id ="select" class="option-perpage">
                                        <option class = "otp" value="0"> Tăng dần </option>
                                        <option class = "otp" value="1"> Giảm dần </option>
                                    </select>
                                </label>
                            </form>
                        </div>
    
                        <div class="auto-clear equal-container better-height akasha-products">
                            <ul class="row products columns-3">
                              ${result}   
                        </ul>
                        </div>
    
                    </div>
                </div>
            </div>
        </div> 
              
          ${await FooterFE.render()}
          ` ; 
  
    }, 
   async afterRender() {  
 
              
 
    }
   
}  
export default CategoryPage ; 

