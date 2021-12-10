import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemList from './organism/ItemList';
import ItemDetail from './organism/ItemDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ItemList />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/:id" element={<ItemList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
