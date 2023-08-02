
import IntroSection from '@/components/IntroSection';
import InterfaceSection from '@/components/InterfaceSection';
import UsingPlatformSection from '@/components/UsingPlatformSection';
import Header from '@/components/Header';

import * as A from './styles';

const Home = () => {


  return (
    <>
      <A.Container>

        <Header />

        <A.Content>
          <IntroSection />

          <InterfaceSection />

          <UsingPlatformSection />

        </A.Content>
      </A.Container>
    </>
  );
};

export default Home;
