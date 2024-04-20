import { Provider } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import store from './redux/store';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CardDetails from './components/cardDetails/CardDetails';
import Favorite from './components/favorites/Favorite';
import './App.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='' element={<Main />}/>
          <Route path='/:id' element={<CardDetails />}/>
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
        <Footer/>
      </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
