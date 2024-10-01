import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWislist } from '../../redux/slices/wishSlice'
import { addToCart } from '../../redux/slices/CartSlice'



function Wish() {
    const { wishlist } = useSelector((state) => state.wishReducer)
    const dispatch=useDispatch()
    const handleAddedToCart=(product)=>{
        dispatch(addToCart(product))
        dispatch(removeFromWislist(product.id))
    }
    return (
        <>
            <div className='container-fluid'>
                <h3 className='text-dark mt-3'>Wishlist</h3>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        wishlist?.length > 0 ?
                            <>
                                {
                                    wishlist?.map(item => (
                                        <div className="col mb-5">
                                            <div className="card h-100">
                                                <Link to={`/view/${item.id}`}>
                                                    <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                                </Link>
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        <h5 className="fw-bolder">{item?.title}</h5>
                                                        ${item?.price}
                                                    </div>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between">
                                                    <button className='btn' onClick={()=>dispatch(removeFromWislist(item.id))}>
                                                        <i className="fa-solid fa-heart-circle-xmark" style={{ color: "#f54747", }} />
                                                    </button>
                                                    <button className='btn' onClick={()=>handleAddedToCart(item)}>
                                                        <i className="fa-solid fa-cart-plus fa-xl" style={{ color: "#63E6BE", }} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </>
                            :
                            <h3 className='text-center text-warning'>No Items Added Yet!!</h3>
                    }




                </div>
            </div>

        </>
    )
}

export default Wish