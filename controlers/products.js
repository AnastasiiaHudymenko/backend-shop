const Product = require("../models/products");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const imageDir = path.join(__dirname, "../", "public", "avatars");

const getAll = async (req, res) => {
  const result = await Product.find();
  const transformedData = result.map((item) => ({
  ...item,
  id: item._id
}));
  const ress = {data: transformedData,total: 1}
  res.status(200).json(ress);
};

const uploadImage = async (req, res) => {
  const { _id } = req.body;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(imageDir, filename);

  const imageRead = await Jimp.read(tempUpload);
  const imageResize = await imageRead.resize(250, 250);
  await imageResize.writeAsync(tempUpload);

  await fs.rename(tempUpload, resultUpload);
  const image = path.join("avatars", filename);
  await Product.findByIdAndUpdate(_id, { image });

  res.json({
    image,
  });
};

module.exports = {
  uploadImage: ctrlWrapper(uploadImage),
  getAll: ctrlWrapper(getAll),
};
