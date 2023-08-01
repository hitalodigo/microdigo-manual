import { useEffect } from 'react';
import Modal from 'react-modal';

import { ModalProvider } from '@/contexts/ModalContext';

import GlobalStyles from './styles/global';
import Home from './pages/Home';


Modal.setAppElement('#root');

function App() {


  return (
    <ModalProvider>

      <GlobalStyles />

      <Home />
    </ModalProvider>
  )
}

export default App
