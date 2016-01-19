Template.add_product.events({
  "submit .add_product": function(event){
    var name = event.target.name.value;
    var category = event.target.category.value;
    var description = event.target.description.value;
    var is_featured = event.target.is_featured.value;
    //Product Image
    //Jquery to pull file from form.
    var file = $('#productImage').get(0).files[0];
    //If file var exists then execute File Storage Creation
    console.log(file)
    if (file){
      fsFile = new FS.File(file);
      console.log(file);
      console.log(fsFile);
      //Insert into ProductsImages Collection
      //This collection only stores Product Images/Can be all images if necessary
      ProductsImages.insert(fsFile, function(err, result){
        if(!err){
          console.log(result);
          var productImage = "/cfs/files/ProductsImages/" + result._id;
          console.log("product imge" + productImage)
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
  }
    // Meteor.call('addProduct',file,name,category,description,is_featured);
    //Clear form
    // event.target.name.value = '';
    // event.target.category.value = '';
    // event.target.description.value = '';
    // event.target.is_featured.value = '';

    FlashMessages.sendSuccess("Product Added Succesfully");
    Router.go('/');
    //prevent form submission
    return false;
  }
});
