import { useEffect, useRef } from 'react';

import { useAnchor } from '@/hooks/useAnchors';
import imgMovendoFluxo1 from '@/assets/images/usando-plataforma/movendo-fluxo-ex1.png';
import imgMovendoFluxo2 from '@/assets/images/usando-plataforma/movendo-fluxo-ex2.png';
import imgMovendoFluxo3 from '@/assets/images/usando-plataforma/movendo-fluxo-ex3.png';
import imgMovendoFluxo4 from '@/assets/images/usando-plataforma/movendo-fluxo-ex4.png';

import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';

import * as C from "@/styles/common";
import * as H from "./styles";

const MovementFlowsSection = () => {

  const { registerSection } = useAnchor();

  const movementSectionRef = useRef(null);

  useEffect(() => {

    registerSection({
      name: 'manuseando_fluxos_criados',
      ref: movementSectionRef.current
    })
  }, [movementSectionRef.current]);

  return (
    <C.ListItem
      id='manuseando_fluxos_criados'
      ref={movementSectionRef}
    >
      <C.Title3>Manuseando fluxos criados</C.Title3>
      <C.Row
        gap='32'
      >
        <H.MovementFlowContainer >

          <C.Column
            width='400'
            gap='24'
          >
            <C.SequencyNumber>13.</C.SequencyNumber>
            <C.Paragraph size='16'>
              Caso haja componentes de entrada virtuais em determinado fluxo, esse poderá ser alterado através da plataforma. Em cima dos componentes virtuais de entrada há um slider, sendo possível alterar o valor desse.
            </C.Paragraph>
          </C.Column>


          <H.MovementFlowListCards>
            <H.MovementFlowCard>
              <C.ImageContainer
                width='150'
                height='150'
              >
                <img src={imgMovendoFluxo1} alt="Alterando valor do componente" loading="lazy" />
                <span className="legend">Sensor de luz recebendo valor 0</span>
              </C.ImageContainer>

              <C.ImageContainer
                width='150'
                height='150'
              >
                <img src={imgMovendoFluxo2} alt="Alterando valor do componente" loading="lazy" />
                <span className="legend">Sensor de luz recebendo valor 500.</span>
              </C.ImageContainer>
            </H.MovementFlowCard>

            <H.MovementFlowCard>
              <C.ImageContainer
                width='180'
                height='100'
              >
                <img src={imgMovendoFluxo3} alt="Alterando valor do componente" loading="lazy" />
              </C.ImageContainer>

              <C.ImageContainer
                width='180'
                height='120'
              >
                <img src={imgMovendoFluxo4} alt="Alterando valor do componente" loading="lazy" />
                <span className="legend">Componente de entrada sensor de luz, ao ter o valor modificado, faz componente de saída LED acender.</span>
              </C.ImageContainer>
            </H.MovementFlowCard>
          </H.MovementFlowListCards>

        </H.MovementFlowContainer>

        <ButtonEnableVideo
          text={'Manuseando fluxos'}
          url='https://www.youtube.com/embed/0GKYZDGgn4g'
        />
      </C.Row>
    </C.ListItem>
  );
};

export default MovementFlowsSection;
