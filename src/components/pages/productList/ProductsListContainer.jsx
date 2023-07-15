import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ProductsList.css";

import { BeatLoader } from "react-spinners/";

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta;

    if (!categoryName) {
      consulta = itemsCollection;
    } else {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {items.length > 0 ? (
        <ProductsListPresentacional items={items} />
      ) : (
        <div className="loader-container">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
};

export default ProductsListContainer;
