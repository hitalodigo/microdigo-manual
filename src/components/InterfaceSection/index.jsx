import HeaderItem from "./HeaderItem";
import MoutingPanelItem from "./MoutingPainelItem";
import SidebarItem from "./SidebarItem";

import * as C from '@/styles/common';
import * as I from './styles';

const InterfaceSection = () => {
    return (
        <I.InterfaceSectionContainer>

            <C.Title size='40'>Interface</C.Title>

            <I.InterfaceSectionContent>
                <iframe
                    src="https://www.youtube.com/embed/KwnIp1YjPz0"
                    frameBorder="0"
                    width='100%'
                    height={600}
                ></iframe>

                <HeaderItem />

                <SidebarItem />

                <MoutingPanelItem />
            </I.InterfaceSectionContent>

        </I.InterfaceSectionContainer>
    );
};

export default InterfaceSection;