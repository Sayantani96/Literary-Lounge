import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Frontend/utilities/AuthContext";
import { ProductContextProvider } from "./Frontend/utilities/ProductContext";
import { CategoryContextProvider } from "./Frontend/utilities/CategoryContext";
import { WishlistContextProvider } from "./Frontend/utilities/WishListContext";
import { CartContextProvider } from "./Frontend/utilities/CartContext";
import { FilterContextProvider } from "./Frontend/utilities/FilterContext";
import { AddressContextProvider } from "./Frontend/utilities/AddressContext";

// Call make Server
makeServer();


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <CategoryContextProvider>
            <FilterContextProvider>
            <WishlistContextProvider>
              <CartContextProvider>
                <AddressContextProvider>
                    <App />
                </AddressContextProvider>
              </CartContextProvider>
            </WishlistContextProvider>
            </FilterContextProvider>
            </CategoryContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
