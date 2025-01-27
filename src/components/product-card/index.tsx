import { Link } from "react-router-dom";
import { useCartProvider } from "../../provider/cart-provider";
import { Card } from "./style";

interface ItemProp{
  name:string,
  category:string,
  description:string,
  img_url:string
  price:number,
  id:number
}

interface PropsCard{
  item:ItemProp
}

export default function ProductCard({item}:PropsCard) {
  console.log('item', item);
  const {name,category,img_url,price,id} = item
  const {addCartProduct} = useCartProvider()

  return (
    <Card>
      <figure>
        <Link to={`/product/${id}`} onClick={()=>window.scrollTo(0,0)}>
        <img
          src={img_url}
          alt={name}
          />
        <figcaption>{name}</figcaption>
        </Link>
      </figure>
      <div className="content">
            <h2>{name}</h2>
            <p>{category}</p>
            <span>R$ {price.toFixed(2).replace('.',',')} </span>
            <button onClick={()=>addCartProduct(item)}>Adicionar</button>
      </div>
    </Card>
  );
}
