import React, { useContext } from 'react'
import { getImgURL } from '../../utils/getImageURL'
import Rating from '../../components/Rating'
import { FaPlus } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const {addToCart}= useContext(CartContext)
  return (
    <div>
      <div className='bg-[#fafafa]'>
        <img src={getImgURL(`${product.imageUrl}`)} alt="" />
      </div>

      <div className='p-6 bg-white dark:bg-black shadow-sm'>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h4 className='font-semibold text-xl mb-2'>{product.name}</h4>
        <Rating rating={product.rating} />
        <div className='mt-5 flex justify-between items-center'>
          <p className='text-secondery dark:text-white font-bold text-lg'><sup>$</sup><span>{product.price}</span></p>
          <button
            onClick={() => {
              addToCart(product)
            }}
            className='bg-secondery hover:bg-primary hover:text-black  text-white p-2 rounded-full'><FaPlus /></button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard