import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../../service";

interface ProviderProps {
  children: ReactNode;
}
interface ProductProps {
  name: string;
  category: string;
  img_url: string;
  description: string;
  price: number;
  id: number;
}

interface ContextProps {
  products: ProductProps[];
  filterproducts: ProductProps[];
  addProduct: (arr: ProductProps[]) => void;
  addFilterProduct: (arr: ProductProps[]) => void;
  refresh:()=>void;
}

const ProductContext = createContext<ContextProps>({} as ContextProps);

export const ProductProvider = ({ children }: ProviderProps) => {
  const [products, setProduct] = useState<ProductProps[]>(
    JSON.parse(localStorage.getItem("@Product") || "null") || []
  );
  const [filterproducts, setFilterProduct] = useState<ProductProps[]>(
    JSON.parse(localStorage.getItem("@Product") || "null") || []
  );

  const addProduct = (arr: ProductProps[]) => {
    console.log('arr', arr);
    setProduct(arr);
    localStorage.setItem("@Product", JSON.stringify(arr));
  };
  const addFilterProduct = (arr: ProductProps[]) => {
    setFilterProduct(arr);
  };

  const refresh = ()=>{
    api.get("/products").then((res) => {
      console.log('res.data', res.data);
      addProduct(res.data);
      addFilterProduct(res.data);
    });
  }

  return (
    <ProductContext.Provider
      value={{ products, addProduct, filterproducts, addFilterProduct,refresh }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
