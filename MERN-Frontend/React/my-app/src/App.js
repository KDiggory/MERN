
// import HelloWorld from './components/HelloWorld';
// import AnotherComponent from './components/AnotherComponent';
// import CompWithVars from './components/componentVariables/CompWithVars';
// import Parent from './components/parent-child/Parent';
// import Page from './components/exercise/Page';
// import PizzaOrder from './components/props/PizzaOrder';
// import ContactCardManager from './components/exercise2/ContactCardManager';
// import ParentArray from './components/props-array/Parent'
// import Manager from './components/state/Manager';
// import MilesAhead from './components/QAC-states/MilesAhead'
// import Customer from './components/QAC-states/Customer'
// import Car from './components/QAC-states/CarExercise/Car'
// import ProductTable from './components/QAC-states/productTableExercise/ProductTable';
// import Manager from './components/LiftingState/Manager';
// import Clock from './components/Hooks-useEffect/Clock';
// import ExerciseOne from './components/Hooks-useEffect/QAC-exercises/ExerciseOne';
// import ExerciseTwo from './components/Hooks-useEffect/QAC-exercises/ExerciseTwo';

// Importing for routing
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import About from './components/routingWithReact/About';
import Home from './components/routingWithReact/Home';
import Shop from './components/routingWithReact/Shop';
import Nav from './components/routingWithReact/Nav';
import Footer from './components/routingWithReact/Footer';
import Basket from "./components/routingWithReact/Basket";
import ShopSubChild from "./components/routingWithReact/ShopSubChild";

import Bar from "./components/requestHandling/Bar";


import './css/App.css';

function App() {
  return (

    <div>
      <Bar/>
    </div>
/* <div>
<BrowserRouter>
<Nav/>
<Routes>
  <Route path='/' element = {<Home/>}></Route>
  <Route path='/about' element = {<About/>}></Route>
  <Route path="/shop"element={<Shop/>}></Route>
  <Route path="/shop/sub/:id"element={<ShopSubChild/>}></Route>
  <Route path='/basket' element = {<Basket/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>
</div> */

      /* <HelloWorld/>
      <AnotherComponent/>
      <CompWithVars/>
      <Parent></Parent> */
      /* <Page></Page> */
     /* <PizzaOrder></PizzaOrder> */
    /* <ContactCardManager/> */
      /* <ParentArray/> */
      /* <Manager/> */
     /* <MilesAhead/> */
      /* <Customer/> */
      /* <Car/> */
      /* <ProductTable/> */
    /* <Manager/> */
    /* <Clock/> */
/* <ExerciseOne/> */
/* <ExerciseTwo/> */


    

  )};

export default App;
