const  SiderBar = {
    render () {
        return `
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
      
        <li class="nav-item active">
        <a class="nav-link" href="/#/list-product">Danh sách sản phẩm</a> 

         </li>
         <li class="nav-item active">
         <a class="nav-link" href="/#/list-category">Danh sách danh mục</a> 
 
          </li>

          <li class="nav-item active">
          <a class="nav-link" href="/#/contact-adm">Danh sách message</a> 
  
           </li>
        <!-- Nav Item - Pages Collapse Menu -->
      

        <!-- Nav Item - Utilities Collapse Menu -->
   

        <!-- Divider -->
      

        <!-- Heading -->
      

        <!-- Nav Item - Pages Collapse Menu -->
    

        <!-- Nav Item - Charts -->
       
        <!-- Nav Item - Tables -->
       
        <!-- Divider -->
      
        <!-- Sidebar Toggler (Sidebar) -->
       
        <!-- Sidebar Message -->
      

    </ul>
        `
    }
} 
export default SiderBar ; 