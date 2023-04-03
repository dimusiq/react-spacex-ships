import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Ship from './pages/Ship';

function App() {
  return (
    <>
      <div className='flex flex-col justify-between h-full bg-[#151619]'>
        <Header />
        <main className='container pb-4 md:mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/contacts'
              element={<Contacts />}
            />
            <Route path='/ship/:id' element={<Ship />} />
            <Route
              path='/notfound'
              element={<NotFound />}
            />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
