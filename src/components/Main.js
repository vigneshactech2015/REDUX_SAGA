import { addToCart,emptyCart,removeToCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import { useEffect } from 'react';

function Main() {
 //dispatching action from ui to store via action 
const dispatch=useDispatch();
let data=useSelector((state)=>state.productData)


useEffect(()=>{
    dispatch(productList())
},[])

  return (
    <div>
    <div>
    <button onClick={()=>dispatch(emptyCart())}>EMPTY Cart</button>
    </div>
    <div className="product-container">
    {
        data.map((item)=><div className='product-item'>
        <img src={item.photo} alt="no image"/>
    <div>
    Name:{item.name}
    </div>
    <div>
    Color:{item.color}
    </div>
    <div>
    Price:{item.price}
    </div>
    <div>
    Category:{item.category}
    </div>
    <div>
    Brand:{item.brand}
    </div>
    <div>
    <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
    <button onClick={()=>dispatch(removeToCart(item.id))}>Remove from cart</button>
    </div>
        </div>)
    }
    </div>
     </div>
  );
}

export default Main;
