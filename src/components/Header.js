import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {productSearch} from '../redux/productAction';

function Header() {
    //useSelector is used to get data from redux to ui component
    const result=useSelector((state)=>state.cartData);
  const dispatch=useDispatch();
    const navigate=useNavigate();

    return (
    <div className="header">
    <div className="search-box">
    <input type="text" onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder='Search Product'/>
    </div>
    <div className="cart-div">
    <span>{result.length}</span>
    <button onClick={()=>navigate('/cart')}>cart</button>
    </div>
    </div>
  )
}

export default Header