Categories = new Mongo.Collection("categories");

Products = new Mongo.Collection("products");

var imageStore = new FS.Store.S3("images", {
  accessKeyId: Meteor.settings.public.AWSAccessKeyId,
  secretAccessKey: Meteor.settings.public.AWSSecretAccessKey,
  bucket: "meteorspace", //required
});

ProductsImages = new FS.Collection("ProductsImages",{
  stores: [imageStore],
  filter: {
    allow:{
      contentTypes: ['image/*']
    }
  }
});
