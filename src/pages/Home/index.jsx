import { useEffect } from 'react';

import { useModal } from '@/hooks/useModal';
import IntroSection from '@/components/IntroSection';
import InterfaceSection from '@/components/InterfaceSection';
import UsingPlatformSection from '@/components/UsingPlatformSection';
import Header from '@/components/Header';

import * as A from './styles';

const Home = () => {

  const { enableModal } = useModal();


  useEffect(() => {
    enableModal({
      typeContent: 'video-tutorial',
      title: `Vídeo tutorial - Introdução`
    })
  }, []);

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
