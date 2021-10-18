import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import api from "../../services/api";

import SEO from "../../components/SEO";

import { Details, DetailsProduct } from "../../interfaces/Details";

import formatValue from "../../utils/formatValue";

export default function DetailsProductsInfo() {
  const router = useRouter();
  const [productsDetails, setProductsDetails] = useState({} as DetailsProduct);
  const [details, setDetails] = useState({} as Details);

  useEffect(() => {
    const idProduct = router.query.product;

    if (!idProduct) {
      return;
    }

    api.get<any>(`/items/${idProduct}`).then((response) => {
      response.data.priceFormat = formatValue(
        Number(response.data.price),
        "es-AR",
        response.data.currency_id,
        0
      );

      response.data.picturesView =
        response.data.pictures.length > 0
          ? response.data.pictures?.shift()?.secure_url
          : response.data.thumbnail;

      setProductsDetails(response.data);
    });

    api.get<any>(`/items/${idProduct}/description`).then((response) => {
      setDetails(response.data);
    });
  }, []);

  return (
    <>
      <SEO title={productsDetails.title} />

      <div className="containerDetails">
        <section className="details">
          <h4>
            Eletronica, Audio y Videos {">"} Ipod Reprodutores {">"} Ipad touth{" "}
            {">"} 32GB
          </h4>

          <div className="cardDetails">
            <section className="infoDetails">
              <div className="detailsImg">
                <img
                  src={productsDetails.picturesView}
                  alt={productsDetails.title}
                />
              </div>

              <section className="amountDetails">
                <span className="soldAmountDetails">
                  {productsDetails.condition === "new" ? "Nuevo " : "Usó "}-{" "}
                  {productsDetails.sold_quantity} vendidos
                </span>

                <span className="titleDetails">{productsDetails.title}</span>

                <span className="price">
                  {productsDetails.priceFormat}
                  <span className="cents">00</span>
                </span>

                <button type="button" className="buttonPurchase">
                  Comprar
                </button>
              </section>

              <section className="descriptionProduct">
                <span className="title">Descripción del producto</span>
                <span className="text">{details.plain_text}</span>
              </section>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
