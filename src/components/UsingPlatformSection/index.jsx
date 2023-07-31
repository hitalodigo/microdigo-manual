import AddComponentsSection from './AddComponentsSection';
import CreateConnectionsSection from './CreateConnectionsSection';
import DeleteConnectionsSections from './DeleteConnectionsSection';
import CreateFlowsSection from './CreateFlowsSection';
import MovementFlowsSection from './MovementFlowsSection';

import * as C from "@/styles/common";
import * as U from "./styles";

function UsingPlatformSection() {

    return (
        <U.UsingPlatformContainer id='using-platform-section'>
            <C.Title size='40'>
                Usando a plataforma microdigo
            </C.Title>

            <U.UsingPlatformContent>

                <iframe
                    src="https://www.youtube.com/embed/KwnIp1YjPz0"
                    frameBorder="0"
                    width='100%'
                    height={600}
                ></iframe>

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