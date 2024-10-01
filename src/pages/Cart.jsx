import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart ,increase,decrease, checkout} from '../../redux/slices/CartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
    
    const {cart}=useSelector((state)=>state.CartReducer)
    const dispatch=useDispatch()
    const nav=useNavigate()
    const handleCheckout=()=>{
        dispatch(checkout())
        nav('/')
        alert("Cart Checkout")
    }

  return (
    <>
    <div className='row mt-1'>
        <div className="col-8">
            <h3>Cart Summery</h3>
            {
                cart?.length>0?
                <table className='table table-bordered shadow'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Image</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart?.map(item=>(
                            <tr>
                            <td>{item?.id}</td>
                            <td>{item?.title}</td>
                            <td>
                                <img src={item?.thumbnail}
                                width={'70%'} alt="" />
                            </td>
                            <td>
                                <button className='btn'onClick={()=>dispatch(increase(item?.id))}>+</button>
                               <p> {item?.quantity}</p>
                                <button className='btn'onClick={()=>dispatch(decrease(item?.id))}>-</button>
                            </td>
                            <td>{item?.price}</td>
                            <td>
                                <button className='btn'onClick={()=>dispatch(removeFromCart(item?.id))}>
                                <i className="fa-solid fa-trash" style={{color: "#ec0909",}} />
                                </button>
                            </td>
                            </tr>
                        ))
                    }
                   
                </tbody>

            </table>
            :
            <h3 className='text-danger text-center'>No Cart Items Yet!!</h3>

            }
        </div>
        <div className='col-4'>
        <div className='border shadow bg-light mt-5 p-4'>
            <h4 className='text-success'>Total Products : {cart?.length}</h4>
            <h4 className='text-success'>Total Amount : {
                cart?.reduce((prev,item)=>prev+(item.price*item.quantity),0)
                }</h4>
        </div>
        <div className='d-grid mt-4'>
            <button className='btn btn-danger mt-3'onClick={()=>handleCheckout()}>CheckOut</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Cart