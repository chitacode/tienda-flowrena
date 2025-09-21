
import './App.css'
import { Routes, Route} from "react-router-dom";



import ItemListContainer from './components/ItemListContainer'
import Layout from './components/Layout';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Error from './components/Error';


function App() {
 

  return (
    
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="productos" element={<ItemListContainer/>}/>
        <Route path="contacto" element={<Contacto/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
   
  )
}

export default App
