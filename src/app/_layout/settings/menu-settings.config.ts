// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  isStarterkitExternalLink?: boolean;
  badge: { type: string, value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  horizontal_menu: {
    items: Partial<MenuItem>[]
  };
  vertical_menu: {
    items: Partial<MenuItem>[]
  };
}



export const MenuSettingsConfig: MenuConfig = {

  horizontal_menu: {  
   
    items: [
     
      // {
      //   title: 'Dashboard',
      //   icon: 'la-home',
      //   page: 'null',
      //   badge: { type: 'badge-info', value: '3' },
      //   submenu: {
      //     items: [
      //       {
      //         title: 'Sales',
      //         icon: 'la-dollar',
      //         page: '/dashboard/sales'
      //       },
      //       {
      //         title: 'Ecommerce',
      //         icon: 'la-cart-plus',
      //         page: '/dashboard/ecommerce'
      //       },
      //       {
      //         title: 'Hospital',
      //         icon: 'la-h-square',
      //         page: '/dashboard/hospital'
      //       }  
      //     ]
      //   }
      // },
      
      {
        title: 'Products',

        icon: 'feather ft-package',
        page: 'null',
        submenu: {
          items: [
            {
              title: ' View Products',

              icon: 'feather ft-package',
              page: '/user-product-by-category',
              // submenu: {
              //   items: [
              //     {
              //       title: 'View Products',
              //       page: '/form-elements/form-inputs'
              //     },
                  
              //   ]
              // }
            },
           
          
          ]
        }
      },
      {
        title: 'View Cart',

        icon: 'la-cart-plus',
        page: 'shopping-cart',
       
      },
      // {
      //   title: 'Delivery Details',

      //   icon: 'la-cart-plus',
      //   page: 'delivery-details',
       
      // },
      
      // {
      //   title: 'Bundle To Cart',

      //   icon: 'la-cart-plus',
      //   page: 'bundle-to-cart',
       
      // },
      
     
    ]
  },
  vertical_menu: {
    
    items: [
      {
        title: 'DashBoard',
        icon: 'la-home',
        page: '/dashboardd'
      },
      { section: 'APPS', icon: 'la-ellipsis-h' },

      {
        title: 'Admin',
        icon: 'la-user',
        page: '/admin'
      },
      {
        title: 'City',
        icon: 'la-institution',
        page: '/city'
      },
      // {
      //   title: 'State',
      //   icon: 'la-flag ',
      //   page: '/state'
      // },
      {
        title: 'Category',
        icon: 'feather ft-grid',
        page: '/category'
      },
      {
        title: 'Product',
        icon: 'feather ft-package',
        page: '/product'
      },
      {
        title: 'Product By Category',
        icon: 'icon-list',
        page: '/product-by-category'
      },
      // {
      //   title: 'User Feedback',
      //   icon: 'feather ft-file-text',
      //   page: '/user-feedback'
      // },
      {
        title: 'Schedule Promotion',
        icon: 'la-bullhorn ',
        
        
        page: '/product-promotion'
      },
      {
        title: 'Bundle',
        icon: 'icon-layers',
        page: '/bundle'
      },
      
      {
        title: 'Bundle Detail',
        icon: 'icon-layers',
        page: '/bundle-detail'
      },
      {
        title: 'Orders',
        icon: 'feather ft-shopping-cart',
        page: '/orders'
      },
     
      {
        title: 'Add Stock',
        icon: 'la-balance-scale',
        page: '/add-stock'
      },
      {
        title: 'Logout',
        icon: 'feather ft-log-out ',
        page: '/login'
      },
      
  
      
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      
  //     {
  //       title: 'Templates',
  //       icon: 'la-television',
  //       page: 'null',
  //       submenu: {
  //         items: [
  //           {
  //             title: 'Horizontal',
  //             page: 'null'
  //           },
  //           {
  //             title: 'Vertical',
  //             page: 'null'
  //           },
  //         ]
  //       }
  //     },
  

    ]
  }
  

};






