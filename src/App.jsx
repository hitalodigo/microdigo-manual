
import { useState } from 'react';

import GlobalStyles from './styles/global';

import SidebarContent from './components/SidebarContent';
import HeaderContent from './components/HeaderContent';
import MoutingPanelContent from './components/MoutingPainelContent';

import { Container, Content, LogoContainer, MenuItem, MenuList, Sidebar } from './styles/app-styles'
import HomeContent from './components/HomeContent';
import UsingPlatform from './components/UsingPlatform';

function App() {

  const [currentSection, setCurrentSection] = useState('home');

  return (
    <>
      <GlobalStyles />

      <Container>
        <Sidebar>
          <LogoContainer>
            <img
              src="src/assets/images/logo.png"
              alt="logo da digomaker"
              loading='lazy'
            />
          </LogoContainer>
          <MenuList>
            <MenuItem
              linkActive={currentSection === 'home'}
              onClick={() => setCurrentSection('home')}
            >
              Página inicial
            </MenuItem>
            <MenuItem
              linkActive={currentSection === 'header'}
              onClick={() => setCurrentSection('header')}
            >
              Cabeçalho
            </MenuItem>
            <MenuItem
              linkActive={currentSection === 'sidebar'}
              onClick={() => setCurrentSection('sidebar')}
            >
              Barra lateral
            </MenuItem>
            <MenuItem
              linkActive={currentSection === 'mounting-panel'}
              onClick={() => setCurrentSection('mounting-panel')}
            >
              Painel de montagem
            </MenuItem>
            <MenuItem
              linkActive={currentSection === 'using-platform'}
              onClick={() => setCurrentSection('using-platform')}
            >
              Usando plataforma
            </MenuItem>
          </MenuList>
        </Sidebar>
        <Content>
          {currentSection === 'home' && <HomeContent />}

          {currentSection === 'header' && <HeaderContent />}

          {currentSection === 'sidebar' && <SidebarContent />}

          {currentSection === 'mounting-panel' && <MoutingPanelContent />}

          {currentSection === 'using-platform' && <UsingPlatform />}

        </Content>
      </Container>
    </>
  )
}

export default App
