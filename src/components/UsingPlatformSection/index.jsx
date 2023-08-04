import { useEffect, useRef } from 'react';

import { useAnchor } from '@/hooks/useAnchors';
import AddComponentsSection from './AddComponentsSection';
import CreateConnectionsSection from './CreateConnectionsSection';
import DeleteConnectionsSections from './DeleteConnectionsSection';
import CreateFlowsSection from './CreateFlowsSection';
import MovementFlowsSection from './MovementFlowsSection';
import IframeVideoTutorial from '@/components/shared/IframeVideoTutorial';

import * as C from "@/styles/common";
import * as U from "./styles";

function UsingPlatformSection() {

  const { registerSection } = useAnchor();

  const usingPlatformSectionRef = useRef(null);

  useEffect(() => {

    registerSection({
      name: 'usando_plataforma_microdigo',
      ref: usingPlatformSectionRef.current
    })
  }, [usingPlatformSectionRef.current]);

  return (
    <U.UsingPlatformContainer
      id='usando_plataforma_microdigo'
      ref={usingPlatformSectionRef}
    >
      <C.Title2>
        Usando a plataforma microdigo
      </C.Title2>

      <U.UsingPlatformContent>

        <C.IframeContainer>
          <IframeVideoTutorial
            url={"https://www.youtube.com/embed/8SpApaM97gw"}
            initialWidth={'100%'}
            initialHeight={'600px'}
            title='Vídeo de introdução a seção usando a plataforma'
          />
        </C.IframeContainer>

        <C.OrderList gap='64'>

          <AddComponentsSection />

          <CreateConnectionsSection />

          <DeleteConnectionsSections />

          <CreateFlowsSection />

          <MovementFlowsSection />

        </C.OrderList>

      </U.UsingPlatformContent>

    </U.UsingPlatformContainer>
  )
}

export default UsingPlatformSection;
