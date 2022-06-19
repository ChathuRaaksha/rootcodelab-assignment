import React, { useState, useEffect, useReducer } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import navbar from "../components/navbar";
import Skeleton from "react-loading-skeleton";

/* function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    default:
      return state;
  }
} */

const Product = () => {
  /* const initialState = {
    count: 0
  }; */
  //const [state, dispach] = useReducer(reducer, initialState);
  const dispach=useDispatch();
  const addProduct = (product) => {
    dispach(addCart(product));
}
  const { id } = useParams();
 // const id = 2;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("text");
    const getProduct = async () => {
      setLoading(true);

      const response = await fetch(
        `https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments/${id}`
      );
      console.log(response);
      const productDetails = await response.json();
      console.log(productDetails);

      setProduct(productDetails);
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
    <>
      <div className="col-md-6">
        <Skeleton height={400}/>
      </div>
      <div className="col-md-6" style={{lineHeight:2}}>
      <Skeleton height={50} width={300}/>
      <Skeleton height={75} />
      <Skeleton height={25} width={150}/>
      <Skeleton height={50} />
      <Skeleton height={150} />
      <Skeleton height={50} width={100}/>
      <Skeleton height={50} width={100} style={{marginLeft:6}}/>
    </div>
    </>
    );

  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.details?.image}
            alt={product.name}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product?.details?.type}
          </h4>
          <h1 className="text-uppercase text-black-50">{product.name}</h1>
          <p className="lead">{product.details?.size}</p>
          <p className="lead">{product.details?.tag}</p>
          <h3 className="display-6 fw-bold my-4">${product.details?.price}</h3>
          <button className="btn btn-outline-dark px-4 py-2 me-2" onClick={()=>addProduct(product)}>
            Add to Cart
          </button>
         <Link to='/cart'><button className="btn btn-dark ms-2 px-3 py-2 me-2">
            Go to Cart
          </button></Link> 

       {/*    Add Items: {state.count} */}
         {/*   <Button  variant="light" onClick={() => dispach({ type: "add" })}>
            +
          </Button>
          <Button variant="light" onClick={() => dispach({ type: "sub" })}>
            -
          </Button> */}
        </div>
      </>
    );
  };

  return (
    <>
    <navbar/>
    <div className="container py-5">
      <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
    </div></>
  );
};

export default Product;
