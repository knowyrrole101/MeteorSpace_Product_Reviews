Meteor.methods({
  addProduct: function(productImage, name, category, description, is_featured){
      Products.insert({
        name: name,
        category: category,
        description: description,
        is_featured: is_featured,
        image: productImage,
        createdAt: new Date()
      });
  },
  addReview: function(id,rating,body){
    Products.update({
      _id: id },{
        $push:{
          reviews:{
            rating: rating,
            body: body,
            createdAt: new Date()
          }
        }
      });
  }
  // End of code
});
