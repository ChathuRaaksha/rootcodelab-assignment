import React,{useReducer,useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/navbar';

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
  
 
  



function Product() {

    const Loading=()=>{
        return(
            <>
            Loading...
            </>
        )
    }
    const ShowProducts=()=>{
        return(
            <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
            <button className='btn btn-outline-dark me-2'>All</button>
            <button className='btn btn-outline-dark me-2'>Men's Clothing</button>
            <button className='btn btn-outline-dark me-2'>Women's Clothing</button>
            <button className='btn btn-outline-dark me-2'>Electronic</button>
        </div>
        {filter.map((product)=>{
            return(<>
                <div className='col-md-3 mb-4'>
                <div class="card h-100 text-center p-4" key={product.id} >
                    <img class="card-img-top" src={product.details.image} alt={product.name} height='250px'/>
                    <div class="card-body">
                        <h5 class="card-title mb-0">{product.name.substring(0,150)}</h5>
                        <p class="card-text lead fw-bold">${product.details.price}</p>
                        <p class="card-text ">Size: {product.details.size}</p>
                        <p class="card-text ">Tag :{product.details.tag}</p>
                        <a href="#" class="btn btn-outline-dark">Buy Now</a>
                    </div>
                </div>
    
    
                </div>
            
            </>)
        })}
            </>
        )
        
    }













    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted=true;
    const [Users, fetchUsers] = useState([]);
    const [Usersid, fetchUsers2] = useState([]);
    const getData = () => {
      fetch('https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments')
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchUsers(res)
         
        })
    } 


    useEffect(() => {
        const getProducts = async()=>{
            setLoading(true);
            const response =await fetch("https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments");
                if(componentMounted){
                    setData(await response.clone().json());
                    setFilter(await response.json());
                    setLoading(false);
                    console.log(filter);
                }
                return()=>{
                    componentMounted=false;
                }
        }
        getProducts();
        
      }, [])










    const initialState={
      count:0
    }
    const [state,dispach] =useReducer(reducer, initialState);
    return (
  
  <div>
  <div>
      <Navbar/>
  </div>

<div className='container my-5 py-5'>

    <div className='row'>
        <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr/>
        </div>
    </div>

    <div className='row justify-content-center'>
        {loading ? <Loading/>: <ShowProducts/>}
    </div>
</div>







      <div className="App">
        
           Add Items: {state.count}
    
      <Button variant="light" onClick={()=>dispach({type:'add'})}>+</Button>
      <Button variant="light" onClick={()=>dispach({type:'sub'})}>-</Button>
      </div></div>
    );
  }
  
  export default Product;
  