import styles from './Product.module.scss';
// import clsx from 'clsx';
import { useState } from 'react';
import Button from './Button/Button';
import PropTypes from'prop-types';
import React, { useMemo } from 'react'
import OptionColor from './ProductForm/OptionColor.js'
import ProductImage from './ProductImage/ProductImage.js'
import OptionSize from './ProductForm/OptionSize.js'

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);



const getPrice = useMemo(() =>  {
  return currentSize.additionalPrice + props.basePrice

}, [ currentSize, props.basePrice ] )


const handleSubmit = eve => {
  eve.preventDefault();
  console.log(props.name)
  console.log(currentColor)
  console.log(currentSize)
  console.log(getPrice)
}



  return (
    <article className={styles.product}>
    <ProductImage currentImage={currentColor} name={props.name} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price:{getPrice}</span>
        </header>
        <form>
        <OptionSize
          sizes={props.sizes}
          setSize={currentSize}
          chosenSize={setCurrentSize}
        />
        <OptionColor
          colors={props.colors}
          colorki={setCurrentColor}
          color={currentColor}
        />
          <Button handleSubmit={handleSubmit} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {Product: PropTypes.func.isRequired};

export default Product;
