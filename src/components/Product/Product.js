import styles from './Product.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Button from '../Button/Button';
import PropTypes from'prop-types';
// import productsData from '../../data/products';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
}
const [price, setPrice] = useState(props.sizes)
const getPrice = useMemo(() =>{
  return setPrice(() => {
    if(currentSize === props.additionalPrice){
    return props.additionalPrice + props.basePrice}
  });
});






  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
        className={styles.image}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              <li><button onClick={() => setCurrentSize('S')} type="button" className={currentSize === 'S' && styles.active}>S</button></li>
              <li><button onClick={() => setCurrentSize('M')} type="button" className={currentSize === 'M' && styles.active}>M</button></li>
              <li><button onClick={() => setCurrentSize('L')} type="button" className={currentSize === 'L' && styles.active}>L</button></li>
              <li><button onClick={() => setCurrentSize('XL')} type="button" className={currentSize === 'XL' && styles.active}>XL</button></li>
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(item =>
              <li key={item}>
                <button onClick={() => setCurrentColor(props.colors)} type="button" className={clsx(prepareColorClassName(item), item === props.color && styles.active)} />
              </li>
            )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {Product: PropTypes.func.isRequired};

export default Product;
