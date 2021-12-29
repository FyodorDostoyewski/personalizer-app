import styles from './Product.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Button from '../Button/Button';
import PropTypes from'prop-types';
// import productsData from '../../data/products';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.color[0]);
  const [currentSize, setCurrentSize] = useState('S');

console.log(props)
const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
}

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
        className={styles.image}
        alt={props.title}
        src={props.name === 'kodilla' ? `${process.env.PUBLIC_URL}/images/products/shirt-kodilla--${currentColor}.jpg` : `${process.env.PUBLIC_URL}/images/products/shirt-react--${currentColor}.jpg` }/>
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price:{props.basePrice}</span>
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
                <button onClick={() => setCurrentColor(color)} type="button" className={clsx(prepareColorClassName(item), item === color && styles.active)} />
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
