import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductThunk } from '../../redux/slices/productSlice'
import { Spinner } from 'react-bootstrap'
import { addTowishlist } from '../../redux/slices/wishSlice'
import { addToCart } from '../../redux/slices/CartSlice'
import { current } from '@reduxjs/toolkit'
import { nextPage,prevPage } from '../../redux/slices/productSlice'



function Home() {

    const dispatch = useDispatch()
    const {product,loading ,error,productPerPage,currentPage} = useSelector((state) => state.productReducer)
    const totalPages=product.length/productPerPage //3
    const lastProductIndex=productPerPage*currentPage //10,20,30
    const firstProductIndex=lastProductIndex-productPerPage //0,10,20
    const visibleProducts=product.slice(firstProductIndex,lastProductIndex) 

    useEffect(() => {
        dispatch(fetchProductThunk())
    }, [])
    const next=()=>{
        if(currentPage<totalPages){
            dispatch(nextPage())
        }
    }
    const prev=()=>{
        if(currentPage>1){
            dispatch(prevPage())
        }
    }
    console.log(product)
    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder text-light">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {
                            loading ?
                                <h2>
                                    <Spinner animation="border" role="status">
                                    </Spinner>
                                    Loading...
                                </h2>
                                :
                                <>
                                    {
                                        error ?
                                            <h2 className='text-danger'>
                                                {error}
                                            </h2>
                                            :
                                            <>
                                                {
                                                    visibleProducts?.map(item=>(
                                                        <div className="col mb-5">
                                                        <div className="card h-100">
                                                            <Link to={`/view/${item?.id}`}>
                                                                <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                                            </Link>
                                                            <div className="card-body p-4">
                                                                <div className="text-center">
                                                                    <h5 className="fw-bolder">{item?.title}</h5>
                                                                    ${item?.price}
                                                                </div>
                                                            </div>
                                                            <div className='card-footer d-flex justify-content-between'>
                                                                <button className='btn'onClick={()=>dispatch(addTowishlist(item))}>
                                                                < i className="fa-solid fa-heart-circle-plus fa-xl" style={{color: "#ad1442",}} />
                                                                </button>
                                                                <button className='btn' onClick={()=>dispatch(addToCart(item))}>
                                                                <i className="fa-solid fa-cart-arrow-down fa-xl" style={{color: "#63E6BE",}} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                        
                                                    ))
                                                }
                                            </>
                                    }
                                </>
                        }
                       
                    </div>
                </div>
            </section>
            <div className='text-center'>
                <button className='btn' onClick={prev}>
                <i className='fa-solid fa-angles-left'/>
                </button>
                {' '}
                {currentPage}/{totalPages}
                {' '}
             <button className='btn' onClick={next}>
             <i className='fa-solid fa-angles-right'/>
             </button>

            </div>
        </>
    )
}

export default Home