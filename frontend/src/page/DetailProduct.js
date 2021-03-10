import CategoryApi from "../api/categoryAPI.js";
import ProductApi from "../api/productAPI";
import parseRequestUrl from '../uitil.js'
import Header3 from "../components/frontend/Header3.js";
import FooterFE from "../components/frontend/Footer.js";
const DetailProductPage = {
    async render() {
        const { id } = parseRequestUrl();

        const { data: products } = await ProductApi.get(id);
        const { data: product } = await ProductApi.getAll();

        const result = product.filter(product => product.id != id);
        const arr = [];
        for (var i = 0; i < 5; i++) {
            arr[i] = result[i];
        }
        console.log(arr);


        //   const result = products.find(product => product.id == id) ;  
        return `
           ${await Header3.render()} 
           <div class="single-thumb-vertical main-container shop-page no-sidebar">
           <div class="container">
               <div class="row">
                   <div class="main-content col-md-12">
                       <div class="akasha-notices-wrapper"></div>
                       <div id="product-27"
                            class="post-27 product type-product status-publish has-post-thumbnail product_cat-table product_cat-new-arrivals product_cat-lamp product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-variable has-default-attributes">
                           <div class="main-contain-summary">
                               <div class="contain-left has-gallery">
                                   <div class="single-left">
                                       <div class="akasha-product-gallery akasha-product-gallery--with-images akasha-product-gallery--columns-4 images">
                                           <img src="${products.image}" alt="">
                                       </div>
                                   </div>
   
                                   <div class="summary entry-summary">
                                       <div class="flash">
                                           <span class="onnew"><span class="text">New</span></span></div>
                                       <h1 class="product_title entry-title">${products.name}</h1>
                                       <p class="price"> <span class="akasha-Price-amount amount">
                                               <span class="akasha-Price-currencySymbol">$</span>${products.price}</span></p>
   
                                       <div class="akasha-product-details__short-description">
                                           <p>${products.desc}</p>
   
                                       </div>
                                       <form action="add-cart" class="variations_form cart" method="post">
   
                                           <div class="single_variation_wrap">
                                               <div class="akasha-variation single_variation"></div>
                                               <div class="akasha-variation-add-to-cart variations_button akasha-variation-add-to-cart-disabled">
                                                   <div class="quantity">
                                                       <span class="qty-label">Quantiy:</span>
   
                                                       <div class="control">
                                                           <a class="btn-number qtyminus quantity-minus" href="#">-</a>
                                                           <input type="text" data-step="1" min="1" max="" name="qty[]" value="0" title="Qty" class="input-qty input-text qty text" size="4" pattern="[0-9]*" inputmode="numeric">
                                                           <a class="btn-number qtyplus quantity-plus" href="#">+</a>
                                                       </div>
                                                   </div>
   
                                                   <button type="submit">
                                                       Add to cart
                                                   </button>
   
                                                   <input name="add-to-cart" value="27" type="hidden">
                                                   <input name="product_id" value="27" type="hidden">
   
                                                   <input name="variation_id" class="variation_id" value="0" type="hidden">
                                               </div>
                                           </div>
                                       </form>
   
                                       <div class="yith-wcwl-add-to-wishlist">
                                           <div class="yith-wcwl-add-button show">
                                               <a href="#" rel="nofollow"
                                                  data-product-id="27" data-product-type="variable" class="add_to_wishlist">
                                                   Add to Wishlist</a>
                                           </div>
                                       </div>
                                       <div class="clear"></div>
                                       <a href="#"
                                          class="compare button" data-product_id="27" rel="nofollow">Compare</a>
                                       <div class="product_meta">
                                           <div class="wcml-dropdown product wcml_currency_switcher">
                                           
                                           </div>
                                           <span class="sku_wrapper">SKU: <span class="sku">885B712</span></span>
                                           <span class="posted_in">Categories:  <a
                                                       href="#"
                                                       rel="tag"></a>
                                           </span>
   
                                       </div>
   
                                   </div>
                               </div>
                           </div>
   
                       </div>
                   </div>
 
                 <h2 style = "margin-left:450px ; margin-bottom :20px; ">Sản phẩm tương tự</h2>
 <div class = "row" style = "text-align:center ; margin-left : 100px; ">   
   
  ${arr.map(pro =>{
      return  `<div class= "col-2">
      <img src = "${pro.image}"  width = "600px">  
      <p>${pro.name}</p>
     <span>${pro.price} $</span>
   
    </div>`
  })}


 </div> 

                  
                  
               </div>
           </div>
       </div>

           ${await FooterFE.render()}
          
          `
    }
}
export default DetailProductPage;
