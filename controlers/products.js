const Product = require("../models/products");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const imageDir = path.join(__dirname, "../", "public", "avatars");

const uploadImage = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const filename = `646dd067861a8d5c0720a0ea_${originalname}`;
  const resultUpload = path.join(imageDir, filename);

  const imageRead = await Jimp.read(tempUpload);
  const imageResize = await imageRead.resize(250, 250);
  await imageResize.writeAsync(tempUpload);

  await fs.rename(tempUpload, resultUpload);
  const image = path.join("avatars", filename);
  await Product.findByIdAndUpdate("646dd067861a8d5c0720a0ea", { image });

  res.json({
    image,
  });
};

module.exports = uploadImage;
