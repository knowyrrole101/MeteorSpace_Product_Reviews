Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  //Home
  this.route('home', {
    path: '/',
    template: 'home',
    //Featured Products on Home Page
    data: function(){
      templateData = {
        products: Products.find({is_featured: "1"})
      };
      return templateData;
    }
  });
  this.route('products', {
    path: '/products',
    template: 'products',
    //get data from database
    data: function(){
      templateData = {
        products: Products.find()
      };
      return templateData;
    }
  });
  this.route('add_product', {
    path: '/add_product',
    template: 'add_product',
    data: function() {
      templateData = {
        categories: Categories.find()
      };
      return templateData;
    }
  });
});
