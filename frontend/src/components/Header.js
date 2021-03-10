import CategoryApi from "../api/categoryAPI";
const Header = {
  async  render() {  

        const {data : category} = await CategoryApi.getAll() ; 
        return ` 
        <ul id="menu-primary-menu"
        class="clone-main-menu akasha-clone-mobile-menu akasha-nav main-menu">
        <li id="menu-item-229"
            class="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-229 parent parent-megamenu item-megamenu menu-item-has-children">
            <a class="akasha-menu-item-title" title="Elements" href="/#/products">All</a>        
        </li>
     
        ${ 
            category.map(category => { 
                return  `<li id="menu-item-229"
                class="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-229 parent parent-megamenu item-megamenu menu-item-has-children">
                <a class="akasha-menu-item-title" title="Elements" href="/#/category/${category.id}">${category.name}</a>        
            </li>`
        }).join("") 
    
    }
    <li id="menu-item-229"
    class="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-229 parent parent-megamenu item-megamenu menu-item-has-children">
    <a class="akasha-menu-item-title" title="Elements" href="/#/contact">Contact</a>        
</li>

<li id="menu-item-229"
class="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-229 parent parent-megamenu item-megamenu menu-item-has-children">
<a class="akasha-menu-item-title" title="Elements" href="/#/about">About</a>        
</li>

    </ul>  
        `
    } 
    
}  

export default Header ; 