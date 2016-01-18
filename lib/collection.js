Categories = new Mongo.Collection("categories");

Products = new Mongo.Collection("products");

var imageStore = new FS.Store.S3("images", {
  accessKeyId: Meteor.settings.AWSAccessKeyId,
  secretAccessKey: Meteor.settings.AWSSecretAccessKey,
  bucket: Meteor.settings.public.awsbucketname //required
});

ProductsImages = new FS.Collection("ProductsImages",{
  stores: [imageStore],
  filter: {
    allow:{
      contentTypes: ['image/*']
    }
  }
});
