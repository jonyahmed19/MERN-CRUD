const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    ProductName: { type: String },
    ProductCode: { type: String },
    Img: { type: String },
    UnitPrice: { type: String },
    Qty: { type: String },
    TotalPrice: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Products", ProductSchema);

module.exports = ProductModel;
