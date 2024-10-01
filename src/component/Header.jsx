import React ,{useState}from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { search } from '../../redux/slices/productSlice';

function Header() {
  const [key,setKey]=useState("")
  const dispatch=useDispatch()
  const searchWithKeys=()=>{
    dispatch(search(key))
  }
  const {wishlist}=useSelector((state)=>state.wishReducer)
  const {cart}=useSelector((state)=>state.CartReducer)

  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#0a0a0a",}} />
          {' '}
            ReduxCart
            </Navbar.Brand>

            <div className='d-flex'>
              <div className='d-flex'>
                <input type="text" placeholder='search' className='form-control me-2' onChange={(e)=>setKey(e.target.value)}  />
                <button onClick={searchWithKeys} className='btn btn-dark me-4'>Search</button>
              </div>
              <Link to={'/wish'} className='btn btn-outline-dark me-4'>
              <i className="fa-solid fa-heart" style={{color: "#fd0808",}} />
              {' '}
              Wishlist
              <span className='badge bg-dark ms-1'>
                {wishlist?.length}
              </span>
              </Link>
              <Link to={'/cart'} className='btn btn-outline-dark'>
              <i className="fa-solid fa-cart-shopping" style={{color: "#63E6BE",}} />
              {' '}
              Cart
              <span className='badge bg-dark ms-1'>
                {cart?.length}
              </span>
              </Link>
            </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header