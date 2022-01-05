import styles from '../Product.module.scss';
import clsx from 'clsx';



const OptionColor = (props) => {

const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
}
	return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
      {props.colors.map(item => (
          <li key={item}>
            <button
            onClick={() => props.colorki(item)}
             type="button"
             className={clsx(prepareColorClassName(item),
               item === props.color && styles.active)} />
          </li>
        ))}
      </ul>
    </div>
	);
};

export default OptionColor;
