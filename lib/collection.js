  Categories = new Mongo.Collection("categories");
  Products = new Mongo.Collection("products");

  if (Meteor.isServer) {
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
  }
  //Allows product image retrievals
  ProductsImages.allow({
    insert: function(fileId, document){
      return true;
    },
    download: function(fileId, document){
      return true;
    }
  });
