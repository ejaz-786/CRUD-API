import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductListing from './component/ProductListing';
import Create from './component/Create';
import Detail from './component/Detail';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<ProductListing/>}/>
        <Route path='/product/create/:empId' element={<Create/>}/>
        <Route path='/product/detail/:empId' element={<Detail/>}/>
     </Routes>
    </div>
  );
}

export default App;
