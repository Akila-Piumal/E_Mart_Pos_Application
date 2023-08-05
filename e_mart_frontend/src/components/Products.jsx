import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Model from "./Model";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/products");

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (productId) => {
    const res = await axios.delete(
      `http://localhost:5000/api/v1/products/${productId}`
    );
    if (res.status == 200) {
      alert(`${res.data.message}`);
      getData();
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [productId, setProductId] = useState("");
  const [availability, setAvailability] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const [showNewProductModel, setShowNewProductModel] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const toggleNewProductModal = () => {
    setShowNewProductModel((prev) => !prev);
  };

  const handleEditClick = (product) => {
    setName(product.name);
    setPrice(product.price);
    setDiscount(product.discount);
    setQuantity(product.quantity);
    setCategory(product.category);
    setDescription(product.description);
    setProductId(product._id);
    toggleModal();
  };

  const updateProduct = async () => {
    const updatedProduct = {
      name: name,
      price: price,
      discount: discount,
      quantity: quantity,
      category: category,
      description: description,
    };

    const res = await axios.put(
      `http://localhost:5000/api/v1/products/${productId}`,
      updatedProduct
    );
    if (res.status == 200) {
      alert(`${res.data.message}`);
      toggleModal();
      getData();
    }
  };

  const newProduct = () => {
    toggleNewProductModal();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append('productData',JSON.stringify(product))
    
    try {
      await axios
        .post("http://localhost:5000/api/v1/saveProduct", formData)
        .then((res) => {
          console.log(res);
          if(res.status==201){
            alert("Saved");
            toggleNewProductModal();
            getData();
          }
        });
    } catch (err) {
      console.log(err.message);
    }
  
  };


  return (
    <div>
      <dir>
        <button
          className="bg-orange-400 rounded p-2 text-white font-semibold"
          onClick={() => newProduct()}
        >
          New Product
        </button>
      </dir>

      <div id="productsDiv" className="flex wrap">
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          data.map((product) => {
            return (
              <div key={product._id}>
                <div className="box">
                  <div className="product">
                    <p className="text-sm border rounded-xl w-max px-2 border-lime-500 text-lime-500 font-semibold">
                      {product.quantity > 0 ? "in stock" : "out of stock"}
                    </p>
                    <div className="img">
                      <img
                        src={product.imageUrl}
                        alt="image"
                        className="h-150"
                      />
                    </div>
                    <div className="product-details flex flex-col gap-2">
                      <h3>{product.name}</h3>
                      <div className="price">
                        <h4>Rs.{product.price}.00 </h4>
                      </div>
                      <div className="flex gap-5 justify-center">
                        <div
                          className="p-2 border rounded-md hover:bg-red-600  hover:text-white cursor-pointer w-max text-red-600"
                          onClick={() => deleteItem(product._id)}
                        >
                          <AiFillDelete size={20} />
                        </div>
                        <div
                          className="p-2 border rounded-md hover:bg-amber-600  hover:text-white cursor-pointer w-max text-amber-600"
                          onClick={() => handleEditClick(product)}
                        >
                          <AiFillEdit size={20} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-10 bg-opacity-50 bg-black">
                      <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Update</h2>
                        <div>
                          <label
                            for="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Product Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="price"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            name="price"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="discount"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            discount
                          </label>
                          <input
                            type="text"
                            name="discount"
                            id="discount"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="quantity"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            quantity
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="category"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            category
                          </label>

                          <input
                            type="text"
                            name="category"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="description"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            description
                          </label>
                          <input
                            type="text"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div className="flex gap-3">
                          <button
                            className="mt-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                            onClick={() => updateProduct()}
                          >
                            Update
                          </button>

                          <button
                            className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
                            onClick={toggleModal}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {showNewProductModel && (
                    <div className="fixed inset-0 flex items-center justify-center z-10 bg-opacity-50 bg-black">
                      <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">New Product</h2>
                        <div>
                          <label
                            for="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Product Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="price"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            name="price"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="discount"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            discount
                          </label>
                          <input
                            type="text"
                            name="discount"
                            id="discount"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="quantity"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            quantity
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="category"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            category
                          </label>

                          <input
                            type="text"
                            name="category"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="description"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            description
                          </label>
                          <input
                            type="text"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                            required
                          />
                        </div>
                        <input
                          type="file"
                          name="image"
                          onChange={handleFileChange}
                          className="w-300"
                        />

                        <div className="flex gap-3">
                          <button
                            className="mt-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                            onClick={saveProduct}
                          >
                            Save
                          </button>

                          <button
                            className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
                            onClick={toggleNewProductModal}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
