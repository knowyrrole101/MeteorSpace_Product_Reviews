  Categories = new Mongo.Collection("categories");
  Categories.insert(name: "Electronics", slug:"electronics");
  Categories.insert(name: "Groceries", slug:"groceries");
  Categories.insert(name: "Books", slug:"books");

  Products = new Mongo.Collection("products");

  var imageStore = new FS.Store.S3("images", {
    accessKeyId: Meteor.settings.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.AWSSecretAccessKey,
    bucket: Meteor.settings.public.awsbucketname
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
    insert: function(fileId, document){
      return true;
    },
    download: function(fileId, document){
      return true;
    }
  });
