Meteor.publish('products', function(){
  return Products.find();
});

Meteor.publish('categories', function(){
  return Categories.find();
});

ProductsImages.allow({
  insert: function(fileId, document){
    return true;
  },
  download: function(fileId, document){
    return true;
  }
});
