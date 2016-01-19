Meteor.methods({
  addProduct: function(file, name, category, description, is_featured){

    if (file){
      fsFile = new FS.File(file);
      //Insert into ProductsImages Collection
      //This collection only stores Product Images/Can be all images if necessary
      ProductsImages.insert(fsFile, function(err, result){
        if(!err){
          var productImage = "/cfs/files/ProductsImages/" + result._id;
          //Insert into Products Collection
          Products.insert({
            name: name,
            category: category,
            description: description,
            is_featured: is_featured,
            image: productImage,
            createdAt: new Date()
          });
        }
      });
    } else {
      //If no image still add product..but
      var productImage = "/img/noimage.png";
      //Insert into Products Collection
      Products.insert({
        name: name,
        category: category,
        description: description,
        is_featured: is_featured,
        image: productImage,
        createdAt: new Date()
      });
    }
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
