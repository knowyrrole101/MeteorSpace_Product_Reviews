Template.add_product.events({
  "submit .add_product": function(event){
    var name = event.target.name.value;
    var category = event.target.category.value;
    var description = event.target.description.value;
    var is_featured = event.target.is_featured.value;
    //Product Image
    //Jquery to pull file from form.
    var file = $('#productImage').get(0).files[0];
    console.log(file);
    //If file var exists then execute File Storage Creation
    Meteor.call('addProduct',file,name,category,description,is_featured)
    //Clear form
    event.target.name.value = '';
    event.target.category.value = '';
    event.target.description.value = '';
    event.target.is_featured.value = '';

    FlashMessages.sendSuccess("Product Added Succesfully");
    Router.go('/');
    //prevent form submission
    return false;
  }
});
