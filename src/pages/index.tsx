import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import api from "../services/api";
import SEO from "../components/SEO";

import { MdOutlineLocalShipping } from "react-icons/md";

import { Results } from "../interfaces/Products";
import formatValue from "../utils/formatValue";

export default function Home() {
  const router = useRouter();
  const [resultsProduts, setResultsProduts] = useState<Results[]>([]);

  useEffect(() => {
    const search = router.query?.search;

    if (search !== "") {
      api.get<any>(`/sites/MLA/search?q=${search}#json`).then((response) => {
        let produts: Results[] = [];
        for (let i = 0; i < 4; i++) {
          response.data.results[i].seller.priceFormat = formatValue(
            Number(response.data.results[i].price),
            "es-AR",
            response.data.results[i].currency_id,
            0
          );
          produts[i] = response.data.results[i];
        }

        setResultsProduts(produts);
      });
    }
  }, [router.query]);

  const detalle = useCallback((id: string) => {
    router.push(`/detalle/${id}`);
  }, []);

  return (
    <>
      <SEO title="Home" />
      {resultsProduts.length > 0 && (
        <div className="containerHome">
          <section className="home">
            <h4>
              Eletronica, Audio y Videos {">"} Ipod Reprodutores {">"} Ipad
              touth {">"} 32GB
            </h4>

            <div className="cardProducts">
              {resultsProduts.map((product) => (
                <section
                  className="products"
                  key={product.id}
                  onClick={() => detalle(product.id)}
                >
                  <img src={product.thumbnail} alt={product.title} />
                  <div className="productDetails">
                    <div className="priceDetails">
                      <span className="price">
                        {product.seller.priceFormat}
                      </span>

                      {product.shipping.free_shipping && (
                        <div className="freeShipping">
                          <MdOutlineLocalShipping size="15" />
                        </div>
                      )}
                    </div>
                    <span className="description">{product.title}</span>
                  </div>
                  <span className="local">
                    {product.seller_address.city.name}
                  </span>
                </section>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
