import { useEffect } from 'react';
import Modal from 'react-modal';

import { ModalProvider } from '@/contexts/ModalContext';

import GlobalStyles from './styles/global';
import Home from './pages/Home';
import { AnchorProvider } from './contexts/AnchorsContext';


Modal.setAppElement('#root');

function App() {


  return (
    <ModalProvider>

      <AnchorProvider>

        <GlobalStyles />
        <Home />

      </AnchorProvider>
    </ModalProvider>
  )
}

export default App
