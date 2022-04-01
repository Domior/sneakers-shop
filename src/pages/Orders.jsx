import React from 'react';
import axios from 'axios';

import Card from '../components/Card';
import ContentInfo from '../components/ContentInfo';

import { API_URL } from '../constants/api';

const Orders = () => {
  const [orders, setOrders] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_URL}/orders`);
        setOrders(data.reduce((prev, el) => [...prev, ...el.items], []));

        setIsLoading(false);
      } catch (error) {
        alert('Не удалось загрузить купленные товары');
        console.log(error.message);
      }
    })();
  }, []);

  const renderItems = () => {
    return (isLoading ? [...Array(8)] : orders).map((item, i) => (
      <Card key={i} isLoaded={isLoading} {...item} />
    ));
  };

  return (
    <div className="content p-40">
      <h1 className="mb-40"> Все купленные товары</h1>

      {orders.length > 0 ? (
        <div className="itemsContainer">{renderItems()}</div>
      ) : (
        <ContentInfo
          title="У вас нет заказов"
          description="Закажите что-нибудь"
          image="img/sad-smile.jpg"
        />
      )}
    </div>
  );
};

export default Orders;
