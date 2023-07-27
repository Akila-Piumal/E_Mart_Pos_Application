import axios from "axios";
import React, { useState } from "react";

const ImageUpoad = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  // ==================================================

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState(true);

  // =========================================================

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
      .get(`http://localhost:5000/api/v1/getImage/64bb4ca0855ffc9c0f1f3e8e`)
      .then((response) => {
        console.log(response.data.dataUrl);
        setImageUrl(response.data.dataUrl);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  // Save A product
  const saveProduct = async (e) => {
    e.preventDefault();

    const product = {
      name:name,
      price:price,
      discount:discount,
      quantity:quantity,
      category:category,
      description:description,
      availability:availability,
    }
    // console.log(product);
    // console.log("===============")
    // console.log(selectedFile);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append('productData',JSON.stringify(product))
    
    try {
      await axios
        .post("http://localhost:5000/api/v1/saveProduct", formData)
        .then((res) => {
          console.log(res);
          if(res.status==201){
            alert("Saved")
          }
          // if (res.data.message == "saved") {
          //   localStorage.setItem('user',JSON.stringify(user))
          //   navigate("/dashboard");
          // }
        });
    } catch (err) {
      console.log(err.message);
    }
  
  };

  return (
    <div>
      <div className="flex flex-col gap-6 items-center mt-6">
        <button onClick={handleUpload} className="bg-BlueSet3 w-300 rounded text-white">Upload Image</button>
        <button onClick={viewImage} className="bg-BlueSet3 w-300 rounded text-white">View Image</button>

        <input
          type="text"
          placeholder="name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="discount"
          name="discount"
          id="discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <input
          type="number"
          placeholder="quantity"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
            type="file"
            name="image"
            onChange={handleFileChange} 
            className="w-300" 
        />

        <button
          onClick={saveProduct}
          className="bg-BlueSet3 w-300 rounded text-white"
        >
          Save product
        </button>
      </div>

      <div>{imageUrl && <img src={imageUrl} alt="Uploaded Image" />}</div>
    </div>
  );
};

export default ImageUpoad;
