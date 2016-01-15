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
