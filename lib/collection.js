  Categories = new Mongo.Collection("categories");
  Products = new Mongo.Collection("products");

  var imageStore = new FS.Store.S3("images", {
    bucket: Meteor.settings.public.AWSBucket,
    accessKeyId: Meteor.settings.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.AWSSecretAccessKey,
    transformWrite: function(fileObj, readStream, writeStream) {
          gm(readStream, fileObj.name()).resize('500', '500').stream().pipe(writeStream);
    }
  });

  ProductsImages = new FS.Collection("ProductsImages",{
    stores: [imageStore]
    filter: {
      allow:{
        contentTypes: ['image/*']
      }
    }
  });

  //Allows product image retrievals
  ProductsImages.allow({
    insert: function(fileId, document){
      return true;
    },
    download: function(fileId, document){
      return true;
    }
  });
