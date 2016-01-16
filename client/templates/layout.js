//Truncate Text
Template.registerHelper('truncateText', function(text, length){
  var new_text = text.substring(0, length);
  if (text.length > length){
    // Makes sure word is not cut off
    new_text = new_text.substr(0, Math.min(new_text.length, new_text.lastIndexOf(" "))) + " ...."
  };
  return new_text;
  // return new Spacebars.SafeString(new_text);
})
Template.registerHelper('starRating', function(rating){
  if(rating){
    var stars='';
    for(var i=1;i<=rating;i++){
      stars += "<img class='review-stars' src='/img/star.png'>";
    };
    return new Spacebars.SafeString(stars);
  } else {
    return new Spacebars.SafeString("<span class='text-danger'>No Reviews</span>")
  }
});
Template.registerHelper('avgRating', function(reviews){
  if(reviews){
    var average=0;
    var stars = '';
    //Add all reviews up
    for(var i in reviews){
      console.log(reviews.length)
      average += parseInt(reviews[i].rating);
    }
    average = Math.floor(average/reviews.length)
    for(var i=1;i<=average;i++){
      stars += "<img class='review-stars' src='/img/star.png'>";
    };
    return new Spacebars.SafeString(stars)
  } else {
    return new Spacebars.SafeString("<span class='text-danger'>No Reviews</span>")
  }
});
