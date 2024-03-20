import { useState } from 'react'
import { Route, Routes,Link, useNavigate, Navigate} from 'react-router-dom'
import AmazonStore from './componetsFol/Amazon'
import ColourBox from './componetsFol/ColourBox'
import { ProductInfo } from './componetsFol/Products';
import { Home } from './componetsFol/Home';

function App() {
  const [count, setCount] = useState(0);
  const navigation = useNavigate();

  return (
    <> 
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Amazon</Link></li>
        <li><Link to="/color">Colour Box</Link></li>
      </ul>
      

    </nav>

<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/store" element={<AmazonStore />}></Route>
  <Route path="/store/:id" element={<ProductInfo />}></Route>
  

  <Route path="/color" element={<ColourBox />}> </Route>

</Routes>
    </>
  )
}

export default App

