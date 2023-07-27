import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
// import  useHistory  from "react-router-dom";// Import useHistory
import { useNavigate } from "react-router-dom";

const Context = createContext();

export const StateContext = ({ children }) => {
//   const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalQuantities, setTotalQuantities] = useState(0);
//   const [qty, setQty] = useState(1);

// const history = useHistory();

const navigate = useNavigate();

  let foundProduct;
  let index;

  const onAdd = (product) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    // setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    // setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          
        }
      })
      toast.error(`Already in the cart`);
    } else {
      setCartItems([...cartItems, { ...product }]);
      // localStorage.setItem("cartItems", JSON.stringify(cartItems))
      toast.success(`added to the cart.`);
    }
  } 

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setCartItems(newCartItems);
    
  }

//   const toggleCartItemQuanitity = (id, value) => {
//     foundProduct = cartItems.find((item) => item._id === id)
//     index = cartItems.findIndex((product) => product._id === id);
//     const newCartItems = cartItems.filter((item) => item._id !== id)

//     if(value === 'inc') {
//       setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
//       setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
//       setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
//     } else if(value === 'dec') {
//       if (foundProduct.quantity > 1) {
//         setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
//         setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
//         setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
//       }
//     }
//   }

//   const incQty = () => {
//     setQty((prevQty) => prevQty + 1);
//   }

//   const decQty = () => {
//     setQty((prevQty) => {
//       if(prevQty - 1 < 1) return 1;
     
//       return prevQty - 1;
//     });
//   }

  return (
    <Context.Provider
      value={{
        // showCart,
        // setShowCart,
        cartItems,
        onAdd,
        setCartItems,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);