import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Collections from './Pages/Collections';
import Men from './Pages/Men';
import Women from './Pages/Women';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Header from './Header';
import { CountContext } from "./Pages/Context";
import { AddedContext } from "./Pages/Context";
import { cartCountContext } from "./Pages/Context";

function App() {
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState(0);
  const [cartCount, setCartCount] = useState(0);


  return (
    <>
      <BrowserRouter>
        <Fragment>
          <CountContext.Provider value={{ count, setCount }}>
            <AddedContext.Provider value={{ added, setAdded }}>
              <cartCountContext.Provider value={{ cartCount, setCartCount }}>

                <Header number={count} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Collections" element={<Collections />} />
                  <Route path="/Men" element={<Men />} />
                  <Route path="/Women" element={<Women />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Contact" element={<Contact />} />
                </Routes>
                </cartCountContext.Provider>
            </AddedContext.Provider>
          </CountContext.Provider>
        </Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;