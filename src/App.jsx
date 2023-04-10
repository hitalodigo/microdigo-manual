
import GlobalStyles from './styles/global';

import SidebarContent from './components/SidebarSection';
import MoutingPanelSection from './components/MoutingPainelSection';
import HomeSection from './components/HomeSection';
import HeaderSection from './components/HeaderSection';
import UsingPlatformSection from './components/UsingPlatformSection';

import Header from './components/Header';

import { Container, Content } from './styles/app-styles';

function App() {

  return (
    <>
      <GlobalStyles />

      <Container>

        <Header />

        <Content>
          <HomeSection />

          <HeaderSection />

          <SidebarContent />

          <MoutingPanelSection />

          <UsingPlatformSection />

        </Content>
      </Container>
    </>
  )
}

export default App
