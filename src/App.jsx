import React ,{useState } from 'react';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Modifier from './component/Modifier';
import ModifierAdresse from './component/ModifierAdresse';
import Create from './component/Create';
import PopDemander from './component/PopDemander';
import PopValider from './component/PopValider';
import PopVoid from './component/PopVoid';
import Sort from './component/Sort';
import Home from './component/Home';
import Sign from './component/Sign';
import Login from './component/Login';
import PopSign from './component/PopSign';
import PopGmail from './component/PopGmail';
import PopName from './component/PopName';
import PopIncorrect from './component/PopIncorrect';
import PopMdp from './component/PopMdp';

export default function App() {

  const isVisible=true

  const [sort, setSort] = useState('');

  const toggleSort = (newSort) => {
    setSort(newSort);
  }

  const [username, setUsername] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [pop, setPop] = useState(false)


  const toggle = (newIsLoggedIn, newUsername) => {
    setIsLoggedIn(newIsLoggedIn);
    setUsername(newUsername);
  };



  const togglePop = (newPop) => {
    setPop(newPop);

  }

  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
     <Navbar />
      <BrowserRouter>

        <Routes>
          
          <Route path='/'  element={ <Login onConnexion={toggle} onProblem={togglePop}  /> }  ></Route>
          <Route path='/sign'  element={<Sign  onConnexion={toggle}  onProblem={togglePop} /> }  ></Route>

          {pop && (
          <>
          <Route path='/popIncorrect'  element={<PopIncorrect/> }  ></Route>
          <Route path='/popName'  element={<PopName/> }  ></Route>
          <Route path='/popGmail'  element={<PopGmail/> }  ></Route>
          <Route path='/popMdp'  element={<PopMdp/> }  ></Route>
          </>
          )}


          {isLoggedIn && (
          <>
          <Route path='/home'  element={<Home  sort={sort} onSort={toggleSort}  username={username} onDeconnexionClick={toggle}  /> }  ></Route>
          <Route path='/modifier'  element={<Modifier/> }  ></Route>
          <Route path='/modifierAdresse'  element={<ModifierAdresse/> }  ></Route>
          <Route path='/create'  element={<Create  /> }  ></Route>
          <Route path='/popDemander'  element={<PopDemander /> }  ></Route>
          <Route path='/popValider'  element={<PopValider/> }  ></Route>
          <Route path='/popVoid'  element={<PopVoid/> }  ></Route>
          <Route path='/sort'  element={<Sort sort={sort}  /> }  ></Route>
          <Route path='/popSign'  element={<PopSign/> }  ></Route>



          </>
          )}
        </Routes>
      
      </BrowserRouter>

     <Footer />
    </div>
  );
}


 

