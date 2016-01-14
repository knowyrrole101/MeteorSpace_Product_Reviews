Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  //Home
  this.route('home', {
    path: '/',
    template: 'home'
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
});
