import '../css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import APIFetch from './APIFetch';
import SingleP from './SingleP';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
      <Route  path='/' element={< APIFetch />}/>
      <Route path='/Singleproduct/:pid' element={<SingleP/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
