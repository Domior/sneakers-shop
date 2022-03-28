import styles from './Card.module.scss';

const Card = props => {
  const { name, price, img, onClick } = props;

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/favorite-empty.svg" alt="favorite" />
      </div>
      <img width={133} height={112} src={img} alt="sneaker" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} $</b>
        </div>
        <button className={styles.button} onClick={onClick}>
          <img
            width={11}
            height={11}
            src="/img/plus.svg"
            alt="plusIcon"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
