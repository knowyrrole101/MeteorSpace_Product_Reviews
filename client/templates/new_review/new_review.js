Template.new_review.events({
  "submit .new-review": function(event){
    var rating = event.target.rating.value;
    var body = event.target.body.value;
    //Update product with a sub array of review
    Meteor.call('addReview',this._id,rating,body);
    //Send Flash Success
    FlashMessages.sendSuccess("Review Completed Successfully!");
    Router.go('/products');
    return false;
  }
});
