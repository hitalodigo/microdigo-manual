import { useEffect, useRef } from 'react';

import IntroSection from '@/components/IntroSection';
import InterfaceSection from '@/components/InterfaceSection';
import UsingPlatformSection from '@/components/UsingPlatformSection';
import Header from '@/components/Header';

import { useAnchor } from '@/hooks/useAnchors';


import * as A from './styles';

const Home = () => {

  const { sectionRefs } = useAnchor();

  useEffect(() => {
    const anchor = window.location.hash.slice(1);

    if (!anchor) return;

    const currentSection = sectionRefs[anchor];

    if (currentSection) {
      currentSection.scrollIntoView()

      setTimeout(() => {
        //Scroll smooth does not move the scrool to the correct position of the anchor, the timeout is used to position it correctly
        currentSection.scrollIntoView()
      }, 800);
    }
  }, [sectionRefs]);

  return (
    <>
      <A.Container >

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
