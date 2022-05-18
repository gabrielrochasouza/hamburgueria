import { InputContainer } from "./style";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useProduct } from "../../../provider/product-provider";
import { useState } from "react";

interface InputProps {
  setSearchActive: (e: boolean) => void;
}

export default function Input({ setSearchActive }: InputProps) {
  const { addFilterProduct, products } = useProduct();
  return (
    <InputContainer>
      <input
        onChange={(e) => {
          const text = e.target.value.toLocaleLowerCase();
          const filterArr = products.filter((product) =>
              product.name.toLocaleLowerCase().includes(text))
             addFilterProduct(filterArr)
        }}
        placeholder="Digite a Pesquisa"
      />
      <button onClick={() =>{
         addFilterProduct(products)
         setSearchActive(false)
        }} className="close-btn">
        <AiOutlineClose />
      </button>
      <button className="search-btn">
        <FaSearch />
      </button>
    </InputContainer>
  );
}
