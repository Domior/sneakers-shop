import Header from './components/Header';
import Drawer from './components/Drawer';
import Search from './components/Search';
import Card from './components/Card';

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

        <div className="d-flex">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
