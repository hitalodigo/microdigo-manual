import { useEffect, useRef } from 'react';

import { useAnchor } from '@/hooks/useAnchors';
import HeaderItem from "./HeaderItem";
import MoutingPanelItem from "./MoutingPainelItem";
import SidebarItem from "./SidebarItem";
import IframeVideoTutorial from "@/components/shared/IframeVideoTutorial";

import * as C from '@/styles/common';
import * as I from './styles';

const InterfaceSection = () => {

  const { registerSection } = useAnchor();

  const interfaceSectionRef = useRef(null);

  useEffect(() => {

    registerSection({
      name: 'interface',
      ref: interfaceSectionRef.current
    })
  }, [interfaceSectionRef.current]);

  return (
    <I.InterfaceSectionContainer>

      <C.Title2
        id='interface'
        ref={interfaceSectionRef}
      >
        Interface
      </C.Title2>

      <I.InterfaceSectionContent>

        <C.IframeContainer>
          <IframeVideoTutorial
            url={"https://www.youtube.com/embed/w4IGj9vpDcI"}
            initialWidth={'100%'}
            initialHeight={'600px'}
            title='Vídeo de introdução a seção de interface'
          />
        </C.IframeContainer>

        <HeaderItem />

        <SidebarItem />

        <MoutingPanelItem />
      </I.InterfaceSectionContent>

    </I.InterfaceSectionContainer>
  );
};

export default InterfaceSection;
