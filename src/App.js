import Header from './components/Header';
import Drawer from './components/Drawer';
import Search from './components/Search';
import Card from './components/Card';

const dataItems = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 150,
    img: '/img/sneakers/1.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 130,
    img: '/img/sneakers/2.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 110,
    img: '/img/sneakers/3.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 180,
    img: '/img/sneakers/4.jpg',
  },
  {
    name: 'Мужские Кроссовки Under Armour Curry 8',
    price: 210,
    img: '/img/sneakers/5.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie 7',
    price: 230,
    img: '/img/sneakers/6.jpg',
  },
  {
    name: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 305,
    img: '/img/sneakers/7.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 280,
    img: '/img/sneakers/8.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 275,
    img: '/img/sneakers/9.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 340,
    img: '/img/sneakers/10.jpg',
  },
];

const App = () => {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <Search />
        </div>

        <div className="d-flex flex-wrap justify-around">
          {dataItems.map((item, i) => (
            <Card
              name={item.name}
              price={item.price}
              img={item.img}
              onClick={() => console.log(item)}
              key={item.name + i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
