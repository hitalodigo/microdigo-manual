import HeaderItem from "./HeaderItem";
import MoutingPanelItem from "./MoutingPainelItem";
import SidebarItem from "./SidebarItem";
import IframeVideoTutorial from "@/components/shared/IframeVideoTutorial";

import * as C from '@/styles/common';
import * as I from './styles';

const InterfaceSection = () => {
  return (
    <I.InterfaceSectionContainer>

      <C.Title2 >Interface</C.Title2>

      <I.InterfaceSectionContent>

        <C.IframeContainer>
          <IframeVideoTutorial
            url={"https://www.youtube.com/embed/KwnIp1YjPz0"}
            initialWidth={'100%'}
            initialHeight={'600px'}
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
