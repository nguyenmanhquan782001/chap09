import HomePage from './page/HomePage.js';
import DetailProduct from './page/DetailProduct.js';
import parseRequestUrl from './uitil.js';
import Error404Page from './page/Error404Page.js';
import Contact from './page/Contact.js';
import ProductsPage from './page/ProductsPage';
import Header from './components/Header.js';
import CategoryPage from './page/CategoryPage.js';
import ProductAddPage from './page/ProductAddPage';
import AdminProductPage from './page/AdminProductPage.js';
import ListCategoryPage from './page/ListCategoryPage.js';
import AddCategoryPage from "./page/AddCategoryPage.js";
import EditProductPage from "./page/EditProductPage.js";
import EditCategoryPage from "./page/EditCategoryPage.js"; 
import AboutPage from './page/AboutPage.js' ;   
import RegisterPage from './page/RegisterPage.js'  ; 
import LoginPage from './page/LoginPage.js' ; 
import ContactClientPage from "./page/ContactClientPage.js" ;   
import EditStatusContact from "./page/EditStatusContact.js" ; 
const $ = selector => {
  let elements = document.querySelectorAll(selector);
  return elements.length == 1 ? elements[0] : [...elements];
}
const routes = {
  '/': HomePage,
  '/products': ProductsPage,
  '/product/:id': DetailProduct,
  '/contact': Contact,
  '/category/:id': CategoryPage,
  '/addproduct': ProductAddPage,
  '/list-product': AdminProductPage,
  '/list-category': ListCategoryPage,
  '/add-category': AddCategoryPage,
  '/edit-product/:id': EditProductPage,
  '/edit-category/:id': EditCategoryPage, 
  '/about' : AboutPage  ,  
  '/login' : LoginPage , 
  '/register' : RegisterPage ,  
  '/contact-adm' : ContactClientPage ,  
  '/edit-status/:id' : EditStatusContact , 
  
}

const router = async () => {
  const { resource, id } = parseRequestUrl();
  const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
  const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
  $("#sid").innerHTML = await Header.render();
  $('#root').innerHTML = await page.render();
  if (page.afterRender) {
    await page.afterRender();
  }

}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);
