  Categories = new Mongo.Collection("categories");
  Products = new Mongo.Collection("products");

  var imageStore = new FS.Store.S3("images", {
    bucket: Meteor.settings.public.AWSBucket,
    accessKeyId: Meteor.settings.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.AWSSecretAccessKey
  });

  ProductsImages = new FS.Collection("ProductsImages",{
    stores: [imageStore],
    filter: {
      allow:{
        contentTypes: ['image/*']
      }
    }
  });

  //Allows product image retrievals
  ProductsImages.allow({
    insert: function(){
      return true;
    },
    download: function(){
      return true;
    }
  });
