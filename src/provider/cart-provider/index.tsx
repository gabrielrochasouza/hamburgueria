import { createContext, useContext, ReactNode, useState } from "react";
import {toast} from 'react-hot-toast'

interface ProviderProps {
  children: ReactNode;
}
interface Products {
  name: string;
  category: string;
  price: number;
  id: number;
  description: string;
  img_url: string;
}
interface ProductsCart {
  name: string;
  category: string;
  price: number;
  id: number;
  description: string;
  qtd: number;
  img_url: string;
}

interface ContextProps {
  cartProducts: ProductsCart[];
  addCartProduct: (item: Products) => void;
  removeProduct: (item: Products) => void;
  removeAll: (item: Products) => void;
  emptyCart:()=>void
}


const CartContext = createContext<ContextProps>({} as ContextProps);

export const CartProvider = ({ children }: ProviderProps) => {
  const [cartProducts, setCartProducts] = useState<ProductsCart[]>(
    JSON.parse(localStorage.getItem("@CartProducts") || "null") || 
    []
  );

  const addCartProduct = (item: Products) => {
    const currentProd = cartProducts.find((product) => product.id === item.id);
    if (currentProd) {
      currentProd.qtd++;
      setCartProducts([...cartProducts]);
      setItemInStorage([...cartProducts]);
    } else {
      setCartProducts([...cartProducts, { ...item, qtd: 1 }]);
      setItemInStorage([...cartProducts, { ...item, qtd: 1 }]);
    }
    toast.success('Produto adicionado ao Carrinho')
  };

  const removeProduct = (item: Products) => {
    const index = cartProducts.findIndex((product) => product.id === item.id);
    const id = item.id;
    if (index !== -1) {
      if (cartProducts[index].qtd > 1) {
        cartProducts[index].qtd--;
        setCartProducts([...cartProducts]);
        setItemInStorage([...cartProducts]);
      } else {
        setCartProducts(cartProducts.filter((prod) => prod.id !== id));
        setItemInStorage(cartProducts.filter((prod) => prod.id !== id));
      }
      toast('Produto removido',{
        icon:'🛒'
      })
    }
  };
  const removeAll = (item: Products) => {
    const index = cartProducts.findIndex((product) => product.id === item.id);
    const id = item.id;
    if (index !== -1) {
      setCartProducts(cartProducts.filter((prod, index) => prod.id !== id));
      setItemInStorage(cartProducts.filter((prod, index) => prod.id !== id));
      toast('Produto removido')
    }
  };
  const setItemInStorage = (itemToBeStoraged: ProductsCart[]) => {
    localStorage.setItem("@CartProducts", JSON.stringify(itemToBeStoraged));
  };

  const emptyCart = ()=>{
    setCartProducts([])
    setItemInStorage([])

  }

  return (
    <CartContext.Provider
      value={{ cartProducts, addCartProduct, removeProduct, removeAll, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartProvider = () => useContext(CartContext);
