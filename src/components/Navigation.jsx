import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../image/logo.png'
import profile from '../image/profile.jpg'

import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoBulbSharp } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { HiMiniShoppingCart } from "react-icons/hi2";
import apis from '../config/apis'
import { addCommas } from '../helpers/Func';
import { useSelector,useDispatch } from 'react-redux'
import logoo from '../image/logoo.png'
import {empptyCart,removeFromCart} from '../redux/actions/cartActions'

import { profile_link_login, profile_link_not_login, Navlink } from './Navlink';





const Navigation = () => {

  const categories = [
    'Electronics',
    'Laptop',
    'mobile',
    'Men',
    'Women',
    'Kids',
    'Grocery',
    'Accessories',
  ];
  // const initialCartItems = [
  //   {
  //     id: 1,
  //     title: "Classic White Tee",
  //     brand: "Fashion Basics",
  //     price: 5000,
  //     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  //     quantity: 2
  //   },
  //   {
  //     id: 2,
  //     title: "Slim Fit Jeans",
  //     brand: "Denim Culture",
  //     price: 7000,
  //     image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  //     quantity: 1
  //   },
  //   {
  //     id: 3,
  //     title: "Running Shoes",
  //     brand: "ActiveWear",
  //     price: 2000,
  //     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  //     quantity: 1
  //   },
  //   {
  //     id: 4,
  //     title: "3310",
  //     brand: "Nokia",
  //     price: 8000,
  //     image: "https://m.media-amazon.com/images/I/515nIrvpN5L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  //     quantity: 1
  //   }
  // ];


  const [isMyProfileOpen, setIsMyProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);
  const { cartItems} = useSelector((state) => state.cartSlice);
  


  const [user, setUser] = useState(false)

  const refProfile = useRef(null)
   const refCart = useRef(null)
  

    const refMenu = useRef(null);
  const dispatch = useDispatch();



  useEffect(() => {

     const handlerClickOutside = (e) => {
      if (refMenu.current && !refMenu.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (refProfile.current && !refProfile.current.contains(e.target)) {
        setIsMyProfileOpen(false);
      }
      if (refCart.current && !refCart.current.contains(e.target)) {
        setCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handlerClickOutside);
    return () => {
      document.removeEventListener("mousedown", handlerClickOutside);
    };
    // document.addEvenyListener('mousedown', handlerClickOutside)



  }, [])
  const toggleDropdown = (dropdownSetter, currentState) => {
    dropdownSetter(!currentState);
  };

  return (
    <nav className='bg-gradient-to-tl from-teal-500 via-teal-700 to-orange-500  shadow-lg sticky  z-10 top-0'>

     <div className='bg-teal-900 h-1'

     
     
     
     ></div>

      <nav className='container mx-auto py-5 px-30'>

        <div className='flex justify-between item-center'>


          <div className='flex item-center h-22 px-10 p-4'>

            <img src={logoo} className='' />
          </div>


          <nav className='hidden items-center space-x-7 md:flex'>
            {
              Navlink.map((item) => (
                <NavLink className="text-lg hover:text-teal-200 font-2x1 font-semibold 
        transition duration-500 italic-mono" to={item.url}>



                  {item.name}
                </NavLink>
              ))}
            {/* category dropdown */}

            <div className='group relative'>
              <button className='hover:text teal-900 transition duration-500 flex items-center text-4x1 text-bold'>About</button>
              <div className='absolute hidden group-hover:block bg-white shadow-md p-2'>
                {
                  categories.map((category, index) => (

                    <NavLink key={index} to={`/products/${category}`}
                    className=" block text-semi-bold hover:text-teal-200 font-2x1 font-semibold transition duration-500 italic-mono">



                      {category}

                      

                    </NavLink>

                  ))
                }

              </div>
            </div>
          </nav>
         <div className="flex items-center justify-evenly gap-2">

            


         {/* cart, fav, dark/light, */}

          <div className="flex items-center justify-evenly gap-2">
            {/* show the Cart Icon */}

            <div className="relative" ref={refCart}>
              <HiMiniShoppingCart
                className="cursor-pointer text-white w-8 h-8  text-2xl transition-all duration-300 hover:scale-110 hover:text-yellow-200 mr-2 dark:text-red-600"
                onClick={() => toggleDropdown(setCartOpen, cartOpen)}
              />
              {cartItems.length > 0 && (
                <span className="absolute top-[-14px] right-[-9px] bg-orange-600 dark:bg-red-600 rounded-full text-white text-xs px-2 py-1 animate-bounce hover:bg-red-600">
                  {cartItems.length}
                </span>
              )}
              {cartOpen && (
                <div
                  id="myCartDropdown1"
                  className="absolute right-0 mt-3 w-56 bg-[#075391] rounded-lg shadow-lg p-3 space-y-4 transition-all duration-300"
                >
                  {cartItems.length != 0 ? (
                    cartItems.map((item, index) => {
                      return (
                        <>
                          {index < 2 ? (
                            <>
                              <img
                                className="h-[100px] object-cover w-full"
                                  src={`${apis[2]}${item.image}`}
                                alt=""
                              />
                              <div
                                key={index}
                                className="grid grid-cols-2 text-white"
                              >
                                <div className="overflow-hidden min-h-full min-w-[115px]">
                                  {/* Product Name */}
                                  <Link
                                    to="/cart"
                                    className="text-ellipsis line-clamp-1 text-sm font-semibold leading-none text-white-900 text-white hover:underline"
                                  >
                                    {item.name}
                                  </Link>

                                  {/* Price */}
                                  <p className="mt-0.5 text-ellipsis line-clamp-2  text-sm font-normal text-white">
                                    Rs. {addCommas(item.price)}
                                  </p>
                                </div>
                                <div className="flex items-center justify-end gap-6">
                                  {/* Quantity */}
                                  <p className="text-sm font-normal leading-none text-white">
                                    Qty: {item.qty}
                                  </p>

                                  {/* Remove Button */}
                                  <button
                                    onClick={() => {
                                      dispatch(removeFromCart(item.id));
                                      setCartOpen(false);
                                    }}
                                    data-tooltip-target="tooltipRemoveItem1a"
                                    type="button"
                                    className="text-white"
                                  >
                                    {/* <span className="sr-only"> Remove </span> */}
                                    <svg
                                      className="h-4 w-4"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <p className="w-full rounded-lg bg-gray-800/50 text-center py-2">
                              {`+${cartItems.length - 2}`} more
                            </p>
                          )}
                        </>
                      );
                    })
                  ) : (
                    <p className="text-center uppercase italic text-gray-300">
                      Your cart is Empty
                    </p>
                  )}
                  <div className=" flex items-center justify-center gap-3">
                    <Link
                      className="w-full h-[30px] flex items-center justify-center gap-[10px] bg-yellow-600 text-white rounded-lg "
                      to={`/cart`}
                    >
                      View Cart
                    </Link>

                    <button
                      onClick={() => {
                        dispatch(empptyCart());
                        setCartOpen(false);
                      }}
                      title
                      className="w-full h-[30px] flex items-center justify-center gap-[10px] bg-red-600 text-white rounded-lg "
                      role="button"
                    >
                Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </div>

          

            <FaHeart className="w-8 h-8 text-rose-600 hover:text-red-500 hover:animate-pulse" />
            <IoBulbOutline className="w-8 h-8 text-yellow-500 hover:text-yellow-600 hover:animate-pulse" />
          </div>



          </div>


        
          <div className="relative mr-16  mt-5 mx-8 " ref={refProfile}>


            <button
              onClick={() => setIsMyProfileOpen(!isMyProfileOpen)}
              className="flex items-center focus:outline-none"
            >
              <div className="flex items-center justify-center overflow-hidden ">
                <img src={profile} className="w-9 h-9 text-teal-500 rounded-full " />
              </div>

            </button>

              {/* profile drowdown area       */}

            {
              isMyProfileOpen && (
                <div className="absolute mt-1 w-46 bg-gray-200 text-teal-500 rounded-lg py-2 z-10 ">
                
                  {

                    user ? (

                      profile_link_login.map( (link,i) => (
                        <Link
                        key={i}
                          to={link.url}
                          className="block py-3 px-5 hover:text-teal-700 hover:font-bold hover:bg-slate-300"
                        >
                          {link.name}
                        </Link>
                      ))


                    ) : (

                      profile_link_not_login.map( (link,i) => (
                        <Link
                          key={i}
                          to={link.url}
                          className="block py-3 px-5 hover:text-teal-700  hover:bg-slate-300"
                        >
                          {link.name}
                        </Link>
                      ))


                    )


                  }
                </div>
              )
            }



          </div>


         

        </div>




      </nav>







    </nav>


  )
}

export default Navigation
