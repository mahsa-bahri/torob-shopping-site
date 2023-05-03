import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import Data from "./data.json";
import { Modal } from "react-bootstrap";
import { add } from "./redux/cartSlice";
import HeaderSection from "./components/HeaderSection";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const foundProducts = Data.data.filter((item) => item.id == id);
  const product = foundProducts[0];
  const [modalOpen, setModalOpen] = useState(false);

  const loremText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius minima perferendis expedita hic, odit natus tenetur obcaecati quo nobis delectus porro, voluptatem earum numquam! Inventore?";

  return (
    <>
      <HeaderSection />
      <div className="m-5 bg-white p-5">
        <div className="product-page">
          <div className="col-3">
            <div>
              <img src={product.img} className="img-fluid" alt="Product" />
            </div>
          </div>
          <div>
            <div className="col-8">
              <div className="product-title">{product.title}</div>
              <div className="h3 fw-bold mt-3">R$ {product.price.toFixed(2)}</div>
              <div>
                <button
                  className="shopping-card-button mt-2"
                  onClick={() => dispatch(add(product))}
                >
                  <div className="button-cart-inner">
                    <div>اضافه به سبد کالا</div>
                   
                  </div>
                </button>
              </div>
              <div className="mt-2">
                <button
                  className="btn btn-primary w-100 fw-bold"
                  onClick={() => setModalOpen(true)}
                >
                  اطلاعات بیشتر 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{loremText}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger mt-5 fw-bold px-5" onClick={() => setModalOpen(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductPage;
