const ProductModel = require("../models/ProductModel");

exports.createProduct = async (req, res) => {
  try {
    const products = await ProductModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: err.message,
    });
  }
};
exports.readAllProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: err.message,
    });
  }
};
exports.readProductByID = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await ProductModel.findOne({ _id: id });
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: err.message,
    });
  }
};
exports.updateProductByID = async (req, res) => {
  try {
    const id = req.params.id;

    console.log("paramId", id);

    const product = await ProductModel.updateOne({ _id: id }, req.body);
    res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: err.message,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    console.log("id", id);

    const product = await ProductModel.remove({ _id: id });
    res.status(201).json({
      status: "success",
      data: "delete success",
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: err.message,
    });
  }
};
