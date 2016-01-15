Categories = new Mongo.Collection("categories");

Products = new Mongo.Collection("products");

ProductsImages = new FS.Collection("ProductImages",{
  stores: [new FS.Store.GridFS("ProductImages")]
});
