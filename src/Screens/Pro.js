import React,{useState,useEffect} from 'react'

import { useParams } from 'react-router'
const  Product=() =>{
    const {id}=useParams();
    const[product,setProduct]=useState([]);
    const[loading,setLoading]=useState(false);


 useEffect(() => {
    const getProduct= async ()=>{
        setLoading(true);

        const response = await fetch(`https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments/${id}`);
     
       
        setProduct(await response.json());
        setLoading(false);
        console.log(response);}
        getProduct();
      }, [])

const Loading=()=>{
    return(
        <>
            Loading...
        </>
    )
}

const ShowProduct=()=>{
    return(
        <>
            <div className='col-md-6'>
            <img src={product.details.image} alt={product.name} height='400px' width='400px'/>
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                {product.details.type}
                </h4>
                <h1 className='text-uppercase text-black-50'>
                {product.name}
                </h1>
                <p className='lead'>{product.details.size}</p>
                <p className='lead'>{product.details.tag}</p>
                <h3 className='display-6 fw-bold my-4'>
                ${product.details.price}
                </h3>
                <button className='btn btn-outline-dark'>
                    Add to Cart
                </button>
                </div>
        </>
    )
}

  return (
    <div className='container'>
        <div className='row'>
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
    </div>
  );
}

export default Product;
