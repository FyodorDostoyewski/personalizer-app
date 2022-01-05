import styles from '../Product.module.scss';




const OptionSize = (props) => {


	return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
      {props.sizes.map(size => (
        <li key={size.name}>
        <button onClick={() => props.chosenSize(size)}
         type="button"
         className={props.setSize.name === size.name && styles.active}>{size.name}
         </button></li>
      ))}
      </ul>
    </div>
  )
}

export default OptionSize;
