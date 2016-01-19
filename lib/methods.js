Meteor.methods({
  // addProduct: function(file, name, category, description, is_featured){}
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
