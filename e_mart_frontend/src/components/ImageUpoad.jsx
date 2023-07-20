import axios from "axios";
import React, { useState } from "react";

const ImageUpoad = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    axios
      .post("http://localhost:5000/api/v1/upload", formData)
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const viewImage = () => {
    axios
      .get(`http://localhost:5000/api/v1/getImage/64b96b21f664cebfa2d13689`)
      .then((response) => {
        setImageUrl(response.data.dataUrl);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
        <button onClick={viewImage}>View Image</button>
      </div>

      <div>{imageUrl && <img src={imageUrl} alt="Uploaded Image" />}</div>
    </div>
  );
};

export default ImageUpoad;
