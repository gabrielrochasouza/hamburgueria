import { useEffect } from "react";
import ProductCard from "../../components/product-card";
import {api} from "../../service";
import { ContainerShop } from "./style";
import Load from "../../components/load";
import { useProduct } from "../../provider/product-provider";

import video from "../../assets/video/video-pub.mp4";

import logoPreta from "../../assets/svg/logo-preta.svg";
import logoBranca from "../../assets/svg/logo-branca.svg";
import { useTheme } from "../../provider/LightDark";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaHamburger } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import Footer from "../../components/footer";

interface Products {
  name: string;
  category: string;
  price: number;
  id: number;
  description: string;
  img_url: string;
}

export default function Shop() {
  const { lightTheme } = useTheme();

  const { products, filterproducts,refresh } =
    useProduct();

  useEffect(() => {
    if (products.length === 0) {
      refresh()
    }
  }, []);

  return (
    <>
      <ContainerShop>
        <div className="capa">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <div className="background">
            <img
              src={lightTheme ? logoPreta : logoBranca}
              alt="logo Hamburgueria Kenzie"
            />
          </div>
        </div>

        <section>
          <div className="box-info">
            <div className="box-icon">
              <BsFillTelephoneFill />
            </div>
            <h3>Entrega</h3>
            <p>(24)99999-9999</p>
          </div>
          <div className="box-info">
            <div className="box-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Localização</h3>
            <p>Curitiba, Paraná</p>
          </div>
          <div className="box-info">
            <div className="box-icon">
              <FaHamburger />
            </div>
            <h3>Lanches</h3>
            <p>Hambúrgueres artesanais</p>
          </div>
          <div className="box-info">
            <div className="box-icon">
              <MdOutlineDeliveryDining />
            </div>
            <h3>Entrega</h3>
            <p>Delivery funciona para apenas algumas cidades</p>
          </div>
        </section>

        {products.length ? (
          <ul>
            {filterproducts.length ? (
              filterproducts.map((product, index) => (
                <ProductCard key={index} item={product} />
              ))
            ) : (
              <h3>Nada Encontrado</h3>
            )}
          </ul>
        ) : (
          <Load />
        )}
      </ContainerShop>
      <Footer />
    </>
  );
}
