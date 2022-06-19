import React,{useState,useEffect,useReducer} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'


function reducer(state,action){
    switch(action.type){
      case 'add':
        return { count: state.count+1};
        case 'sub':
        return { count: state.count-1};
      default:
        return state;  
    }
  
  
  }





const  Product= () =>{

    
    const initialState={
        count:0
      }
      const [state,dispach] =useReducer(reducer, initialState);


    const {id}=useParams();
    const[product,setProduct]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(() => {
        console.log('text');
        const getProduct = async () => {
            setLoading(true);
    
            const response = await fetch(`https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments/${id}`);
            console.log(response);
           
            setProduct(await response.json());
            setLoading(false);
    
            }
            getProduct();
          }, []); 
 
 const Loading=()=>{
            return(
                <>
                    Loading...
                </>
            )
        }

  

function ShowProduct(){
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
                Add Items: {state.count}
    
      <Button variant="light" onClick={()=>dispach({type:'add'})}>+</Button>
      <Button variant="light" onClick={()=>dispach({type:'sub'})}>-</Button>
      <button className='btn btn-outline-dark px-4 py-2'>
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
