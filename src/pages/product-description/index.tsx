import { useProduct } from "../../provider/product-provider";
import { Container } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../service";
import { useCartProvider } from "../../provider/cart-provider";
import Footer from "../../components/footer";

interface ObjProp {
  id?: string;
}
interface ProductsProp {
  name: string;
  description: string;
  category: string;
  price: number;
  id: number;
  img_url: string;
}

export default function ProductDescription() {
  const { products, addProduct, filterproducts, addFilterProduct } =
    useProduct();
  const { addCartProduct } = useCartProvider();

  useEffect(() => {
    if (products.length === 0) {
      api.get("/products").then((res) => {
        console.log('/products', res.data);
        addProduct(res.data);
        addFilterProduct(res.data);
      });
    }
  }, []);

  const { id }: ObjProp = useParams();

  const product = products.find((prod) => String(prod.id) === String(id));

  const navigate = useNavigate();

  if (product) {
    return (
      <>
        <Container>
          <figure>
            <figcaption>{product.name}</figcaption>
            <div className="img-box">
              <img src={product.img_url} alt={product.name} />
            </div>
          </figure>
          <div>
            <h1>{product.name}</h1>
            <p className="category">Categoria: {product.category}</p>
            <p>{product.description}</p>
            <p>
              <span>
                Preço: R$ {product?.price.toFixed(2).replace(".", ",")}
              </span>
            </p>
            <button onClick={() => addCartProduct(product)} className="add">
              Adicionar ao Carrinho
            </button>
            <button
              className="checkout"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/checkout");
              }}
            >
              Finalizar compra
            </button>
          </div>
          <div className="related">
            <h2>Outros lanches:</h2>
            <ul>
              {products
                .filter((prod) => prod.id !== product.id)
                .slice(0, 3)
                .map((prod) => (
                  <li
                    onClick={() => {
                      navigate(`/product/${prod.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <figure>
                      <img src={prod.img_url} alt={prod.name} />
                    </figure>
                    <div>
                      <h3>{prod.name}</h3>
                      <p>{prod.category}</p>
                      <p>
                        <span>
                          R$ {prod.price?.toFixed(2).replace(".", ",")}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              <button
                className="go-back"
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                Voltar
              </button>
            </ul>
          </div>
        </Container>
        <Footer />
      </>
    );
  } else {
    return <h1>Erro 404</h1>;
  }
}
