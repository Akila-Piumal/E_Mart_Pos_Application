// const multer = require("multer");
// const {GridFsStorage} = require("multer-gridfs-storage");
// require("dotenv").config()

// const storage = new GridFsStorage({
//   url: "mongodb://127.0.0.1:27017/e_mart",
//   Options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {

//     //If it is an image, save to photos bucket
//     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//       return {
//         bucketName: "photos",
//         filename: `${Date.now()}_${file.originalname}`,
//       }
//     } else {
//       //Otherwise save to default bucket
//       return `${Date.now()}_${file.originalname}`
//     }
//   },
// });

// module.exports = multer({ storage });
