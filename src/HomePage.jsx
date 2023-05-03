import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Data from "./data.json";
import { add } from "./redux/cartSlice";
import HeaderSection from "./components/HeaderSection";

export default function HomePage() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [list, setList] = useState(Data.data);

  useEffect(() => {
    
    if (category === "smartphone&tablet") {
      return setList([
        ...Data.data.filter((item) => item.category === "smartphone"),
        ...Data.data.filter((item) => item.category !== "smartphone"),
      ]);
    }
    if (category === "notebook") {
      return setList([
        ...Data.data.filter((item) => item.category === "notebook"),
        ...Data.data.filter((item) => item.category !== "notebook"),
      ]);
    }
    //age samsung bekhaym bayad be surat zir bashe:
    if (category === "Samsung") {
      return setList([
        ...Data.data.filter((item) => item.category === "Samsung"),
        ...Data.data.filter((item) => item.category !== "Samsung"),
      ]);
    }
     //age samsung bekhaym bayad be surat zir bashe:
     if (category === "Apple") {
      return setList([
        ...Data.data.filter((item) => item.category === "Apple"),
        ...Data.data.filter((item) => item.category !== "Apple"),
      ]);
    }


  }, [category]);
  return (
    <>
      <HeaderSection />
      <div className="col-9 mx-auto mt-5 mb-5">
        <div className="row">
          {list.map((item) => {
            return (
              <div className="col-lg-4 mb-3">
                <div className="shopping-card">
                  <img src={item.img} alt="Product" />
                  <Link to={`/products/${item.id}`} className="shopping-card-title">
                    {item.title}
                  </Link>

                  <div className="shopping-card-details">
                    <div>R$ {item.price.toFixed(2)}</div>
                    <div>{item.size}</div>
                  </div>
                  <button className="shopping-card-button" onClick={() => dispatch(add(item))}>
                    <div className="button-cart-inner">
                      <div>اضافه به سبد کالا</div>
                     
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
