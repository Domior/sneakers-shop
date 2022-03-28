const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/favorite-empty.svg" alt="favorite" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneaker" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>120 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plusIcon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
