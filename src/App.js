import Home from './Components/Home/index'
import { CartProvider } from './Context/CartContext';
import "./App.css";
import Router from './routes';


function App() {
  return (
    <CartProvider>
    <Router />
    </CartProvider>
  )
}

export default App;
