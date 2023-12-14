const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: 'dyhrmdi9y',
  api_key: '648965464665481',
  api_secret: 'ZQaD80C4UZuWQgswHxxipJgaw5s',
});
const uploadWithCloudinary = async (req, res, next) => {
  try {
    if (!req.file) {
      next();
    } else {
      const folder = 'assets/${req.file.mimetype.split(' / ')[0]}';
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder,
        resource_type: 'auto',
      });
      fs.unlinkSync(req.file.path);
      req.body.gambar = uploadResult.secure_url ? uploadResult.secure_url : null;
      next();
    }
  } catch (error) {
    fs.unlinkSync(req.file.path);
    console.log(error);
  }
};

module.exports = { uploadWithCloudinary };
