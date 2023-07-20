const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single("file"), (req, res) => {
  if (req.file === undefined)
    return res.status(400).send("You must select a file");
  const imgUrl = `http://localhost:5000/file/${req.file.filename}`;                                                                                                                                                                                                                                                                                                                                       
  return res.send({
    message:"uploaded",
    id:req.file.id,
    name:req.file.filename,
    url:imgUrl,
    contentType:file.contentType,
  });
});

module.exports = router;
 