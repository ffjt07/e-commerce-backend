// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Tag,
    unique: false
  },
})
// Categories have many Products
Category.hasMany(Product, {
  through: {
    model: Tag,
    unique: false
  },
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: Tag,
    unique: false
  },
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: Tag,
    unique: false
  },
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
