import FooterFE from "../components/frontend/Footer.js";
import HeaderFE from "../components/frontend/Header.js" ;   
import ProductApi from "../api/productAPI.js" ; 

const HomePage = { 
   async  render() {   
        const {data : products} = await ProductApi.getAll() ; 
        const result =  products.filter(product => product.categoryId == 1) ;  
 
        var res = [] ; 
for (var i = 0 ; i < 5  ; i++) {
  res[i] =   products[i] ; 
 
}  
console.log(res)

          return `${await HeaderFE.render()}         
    <div class="section-001">
    <div class="container">
        <div class="akasha-products style-02">
            <div class="response-product product-list-owl owl-slick equal-container better-height"
                 data-slick="{&quot;arrows&quot;:false,&quot;slidesMargin&quot;:30,&quot;dots&quot;:true,&quot;infinite&quot;:false,&quot;speed&quot;:300,&quot;slidesToShow&quot;:4,&quot;rows&quot;:2}"
                 data-responsive="[{&quot;breakpoint&quot;:480,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;20&quot;}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;20&quot;}},{&quot;breakpoint&quot;:1500,&quot;settings&quot;:{&quot;slidesToShow&quot;:4,&quot;slidesMargin&quot;:&quot;30&quot;}}]">
                      
                 ${ res.map(product => { 
               return `
           <div class="product-item featured_products style-02 rows-space-30 post-34 product type-product status-publish has-post-thumbnail product_cat-light product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock sale featured shipping-taxable product-type-grouped">
                    <div class="product-inner tooltip-top">
                        <div class="product-thumb">
                            <a class="thumb-link"
                               href="/#/product/${product.id}" tabindex="0">
                                <img class="img-responsive"
                                     src="${product.image}"
                                     alt="Maternity Shoulder" width="270" height="350">
                            </a>
                            <div class="flash">
                                <span class="onnew"><span class="text">New</span></span></div>
                            <a href="#" class="button yith-wcqv-button">Quick View</a></div>
                        <div class="product-info">
                            <div class="rating-wapper nostar">
                                <div class="star-rating"><span style="width:0%">Rated <strong
                                                class="rating">0</strong> out of 5</span></div>
                                <span class="review">(0)</span></div>
                            <h3 class="product-name product_title">
                                <a href="#"
                                   tabindex="0">${product.name}</a>
                            </h3>

                            <span class="price"><span class="akasha-Price-amount amount"><span
                                            class="akasha-Price-currencySymbol">$</span>${product.price}</span>
                            </span>

                        </div>
                        <div class="group-button clearfix">
                            <div class="yith-wcwl-add-to-wishlist">
                                <div class="yith-wcwl-add-button show">
                                    <a href="#" class="add_to_wishlist">Add to Wishlist</a>
                                </div>
                            </div>
                            <div class="add-to-cart">
                                <a onclick="return confirm('Bạn chọn sản phẩm này thêm vào giỏ hàng ')" href="" class="button product_type_grouped">
                                    View products</a></div>
                            <div class="akasha product compare-button">
                                <a href="#" class="compare button">Compare</a></div>
                        </div>
                    </div>
                </div>     
           `
      })
     
     }
            
                

           </div>

        </div>
    </div>
</div>
<div class="akasha-banner style-02 left-center">
<div class="banner-inner">
    <figure class="banner-thumb">
        <img src="assets/images/banner101.jpg"
             class="attachment-full size-full" alt="img"></figure>
    <div class="banner-info container">
        <div class="banner-content">
            <div class="title-wrap">
                <div class="banner-label">
                    Modern Glasses
                </div>
                <h6 class="title">
                    Best Seller </h6>
            </div>
            <div class="button-wrap">
                <div class="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit justo
                </div>
                <a class="button" target="_self" href="#"><span>Shop now</span></a>
            </div>
        </div>
    </div>
</div>
</div>

<div class="akasha-products style-01">
<div class="akasha-heading style-01" style="margin-top: 10px">
    <div class="heading-inner">
        <h3 class="title">Shop girl</h3>
        <div class="subtitle">Made with care for your little ones, our products are perfect for every
            occasion. Check it out.
        </div>
    </div>
</div>
<div class="response-product product-list-owl owl-slick equal-container better-height"
     data-slick="{&quot;arrows&quot;:true,&quot;slidesMargin&quot;:30,&quot;dots&quot;:true,&quot;infinite&quot;:false,&quot;speed&quot;:300,&quot;slidesToShow&quot;:4,&quot;rows&quot;:1}"
     data-responsive="[{&quot;breakpoint&quot;:480,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;20&quot;}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;20&quot;}},{&quot;breakpoint&quot;:1500,&quot;settings&quot;:{&quot;slidesToShow&quot;:4,&quot;slidesMargin&quot;:&quot;30&quot;}}]">
       
     ${result.map(product_girl => {
        return ` <div class="product-item recent-product style-01 rows-space-0 post-93 product type-product status-publish has-post-thumbnail product_cat-light product_cat-table product_cat-new-arrivals product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-simple  ">
        <div class="product-inner tooltip-left">
            <div class="product-thumb">
                <a class="thumb-link"
                   href= "/#/product/${product_girl.id}" tabindex="0">
                    <img class="img-responsive"
                         src="${product_girl.image}"
                         alt="Black Shirt" width="270px" height="350px">
                </a>
                <div class="flash">
                    <span class="onnew">$<span class="text">New</span>${product_girl.price}</span></div>
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
                        <a href="#" class="button product_type_simple add_to_cart_button">Add to cart</a>
                    </div>
                </div>
            </div>
            <div class="product-info equal-elem">
                <h3 style="text-align: center" class="product-name product_title">
                    <a href=""
                       tabindex="0">${product_girl.name}</a>
                </h3>
            </div>
        </div>
    </div>
`

     })
    
    }
    

</div>
</div>

  
          ${await FooterFE.render()}
          ` ; 
     } , 
     
     async afterRender() {

     }
   
}
export default HomePage;