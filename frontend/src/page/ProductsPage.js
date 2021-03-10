import ProductApi from '../api/productAPI.js';
import HeaderFE from "../components/frontend/Header.js";
import FooterFE from "../components/frontend/Footer.js";
import Header2 from "../components/frontend/Header2.js";
import { $ , reRender } from '../uitil.js';
const ProductsPage = {
    async render() {
        try {
            const { data } = await ProductApi.getAll();
            const products = data;
            const result = products.map(function (product) {
                return `   
                <div class="product-item recent-product style-01 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-93 product type-product status-publish has-post-thumbnail product_cat-light product_cat-table product_cat-new-arrivals product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-simple">
                <div class="product-inner tooltip-left">
                    <div class="product-thumb">
                        <a class="thumb-link"
                           href="/#/product/${product.id}">
                            <img class="img-responsive"
                                 src="${product.image}"
                                 alt="Black Shirt" width="270" height="350">
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
                                <a href="#"
                                   class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add
                                    to cart</a>
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
                                class="akasha-Price-currencySymbol">$</span>${product.price}</span></span>
                    </div>
                </div>
            </div>                  
                     `
            }).join("");
            return `
             ${await Header2.render()}  
              <div class= "container" >  
              <div class="akasha-heading style-01" style = "margin-top:10px; ">
              <div class="heading-inner">
                  <h3 class="title">
                     All Product </h3>
                  <div class="subtitle">
                      Browse our website for the hottest items in the marketplace now.
                  </div>
              </div>
          </div>  
          <div class="akasha-tabs style-01">   
          <div class="tab-head">
          <ul class="tab-link equal-container " data-loop="1">
              <li class="active">
                  <a class="loaded" data-ajax="0" data-animate="" data-section="1547652538969-4e9e849f-123a"
                     data-id="330" href="#1547652538969-4e9e849f-123a-5d80aefaa70e2">
                      <span>New Arrival</span>
                  </a>
              </li>
              <li class="">
                  <a class="" data-ajax="0" data-animate="" data-section="1547652726354-2b0cdba5-80e9"
                     data-id="330" href="#1547652726354-2b0cdba5-80e9-5d80aefaa70e2">
                      <span>Top Rated</span>
                  </a>
              </li>
              <li class="">
                  <a class="" data-ajax="0" data-animate="" data-section="1547652725565-7e88bea3-ede2"
                     data-id="330" href="#1547652725565-7e88bea3-ede2-5d80aefaa70e2">
                      <span>Featured</span>
                  </a>
              </li>
          </ul>
      </div>  
 <form class="per-page-form">
      <label>
          <select id = "select" class="option-perpage">
              <option class = "otp" value="0">Mặc định</option>
              <option class = "otp" value="asc"> Giá tăng dần </option>
              <option  class = "otps" value="desc"> Giá giảm dần </option>
          </select>
      </label>
  </form>

  <form class="akasha-ordering" method="get">
  <select id="filter" title="product_cat" name="orderby" class="orderby">
  <option value="#">Lọc theo giá</option>
      <option value="thap">Giá từ 0 $ đến 100.000 $</option>
      <option value="tb">Giá từ 100.001 $ đến 300.000 $</option>
      <option value="cao">Giá trên 300.000 $</option>
      
  </select>
</form>
      <div class="tab-container">
      <div class="tab-panel active" id="1547652538969-4e9e849f-123a-5d80aefaa70e2"> 
             <div class="akasha-products style-01">
               <div id= "emyeu" class="response-product product-list-grid row auto-clear equal-container better-height ">
                  ${result}           
               </div>
              </div>
      </div>
      </div>
          </div>
              </div>         
            ${await FooterFE.render()}
      ` ;
        } catch (error) {
            console.log(error);
        }
    }
    ,
    async afterRender() {
        const select = $("#select");
        select.addEventListener('change', async function () {
            const { data: products } = await ProductApi.getAll();
            if (select.value == "asc") {
                   products.sort(function(a,b){ 
                       return a.price - b.price ;  
                   }) ;
                   $("#emyeu").innerHTML = products.map(product => {
                        return `<div class="product-item recent-product style-01 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-93 product type-product status-publish has-post-thumbnail product_cat-light product_cat-table product_cat-new-arrivals product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-simple">
                        <div class="product-inner tooltip-left">
                            <div class="product-thumb">
                                <a class="thumb-link"
                                   href="/#/product/${product.id}">
                                    <img class="img-responsive"
                                         src="${product.image}"
                                         alt="Black Shirt" width="270" height="350">
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
                                        <a href="#"
                                           class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add
                                            to cart</a>
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
                                        class="akasha-Price-currencySymbol">$</span>${product.price}</span></span>
                            </div>
                        </div>
                    </div>                  ` ; 
                   }).join("") ;                          
            }
            if (select.value == "desc") {
                products.sort(function(a,b){ 
                    return b.price - a.price ; 
                }) ;       
                $("#emyeu").innerHTML = products.map(product => {
                    return `<div class="product-item recent-product style-01 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-93 product type-product status-publish has-post-thumbnail product_cat-light product_cat-table product_cat-new-arrivals product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-simple">
                    <div class="product-inner tooltip-left">
                        <div class="product-thumb">
                            <a class="thumb-link"
                               href="/#/product/${product.id}">
                                <img class="img-responsive"
                                     src="${product.image}"
                                     alt="Black Shirt" width="270" height="350">
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
                                    <a href="#"
                                       class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add
                                        to cart</a>
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
                                    class="akasha-Price-currencySymbol">$</span>${product.price}</span></span>
                        </div>
                    </div>
                </div>                  ` ; 
               }).join("") ;    
                        
            }
        });  
const fil = $("#filter") ;  
fil.addEventListener('change'  , async function () {
    const { data: products } = await ProductApi.getAll(); 
     if(fil.value == "thap"){ 
     let result =   products.filter(product =>product.price <= 100000) ;  
    //  console.log(result) 
      $("#emyeu").innerHTML =  result.map(product=> {
           return `<div class="product-item recent-product style-01 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-93 product type-product status-publish has-post-thumbnail product_cat-light product_cat-table product_cat-new-arrivals product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-simple">
           <div class="product-inner tooltip-left">
               <div class="product-thumb">
                   <a class="thumb-link"
                      href="/#/product/${product.id}">
                       <img class="img-responsive"
                            src="${product.image}"
                            alt="Black Shirt" width="270" height="350">
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
                           <a href="#"
                              class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add
                               to cart</a>
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
                           class="akasha-Price-currencySymbol">$</span>${product.price}</span></span>
               </div>
           </div>
       </div>  `
      }).join("") ; 
       


     } 
     if(fil.value == "tb") {
        let result =   products.filter(product =>product.price <= 300000 && product.price >100000) ; 
        $("#emyeu").innerHTML =  result.map(product=> {
            return `<div class="product-item recent-product style-01 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-93 product type-product status-publish has-post-thumbnail product_cat-light product_cat-table product_cat-new-arrivals product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-simple">
            <div class="product-inner tooltip-left">
                <div class="product-thumb">
                    <a class="thumb-link"
                       href="/#/product/${product.id}">
                        <img class="img-responsive"
                             src="${product.image}"
                             alt="Black Shirt" width="270" height="350">
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
                            <a href="#"
                               class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add
                                to cart</a>
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
                            class="akasha-Price-currencySymbol">$</span>${product.price}</span></span>
                </div>
            </div>
        </div>  `
       }).join("") ;   
       
     } 
     if (fil.value == "cao") {
        let result =   products.filter(product =>product.price > 300000 ) ;
        $("#emyeu").innerHTML =  result.map(product=> {
            return `<div class="product-item recent-product style-01 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-93 product type-product status-publish has-post-thumbnail product_cat-light product_cat-table product_cat-new-arrivals product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-simple">
            <div class="product-inner tooltip-left">
                <div class="product-thumb">
                    <a class="thumb-link"
                       href="/#/product/${product.id}">
                        <img class="img-responsive"
                             src="${product.image}"
                             alt="Black Shirt" width="270" height="350">
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
                            <a href="#"
                               class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add
                                to cart</a>
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
                            class="akasha-Price-currencySymbol">$</span>${product.price}</span></span>
                </div>
            </div>
        </div>  `
       }).join("") ;   

     }
    
}) ; 
       
    }
}
export default ProductsPage; 