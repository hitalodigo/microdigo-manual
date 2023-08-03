import AddComponentsSection from './AddComponentsSection';
import CreateConnectionsSection from './CreateConnectionsSection';
import DeleteConnectionsSections from './DeleteConnectionsSection';
import CreateFlowsSection from './CreateFlowsSection';
import MovementFlowsSection from './MovementFlowsSection';
import IframeVideoTutorial from '@/components/shared/IframeVideoTutorial';

import * as C from "@/styles/common";
import * as U from "./styles";

function UsingPlatformSection() {

  return (
    <U.UsingPlatformContainer id='using-platform'>
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
