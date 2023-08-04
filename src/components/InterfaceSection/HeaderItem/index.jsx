import { useRef, useEffect } from 'react';

import imgHeader from '@/assets/images/cabecalho/example-cabecalho.png';
import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';
import { useAnchor } from '@/hooks/useAnchors';

import * as H from './styles'
import * as C from "@/styles/common";

function HeaderItem() {

  const { registerSection } = useAnchor();

  const headerSectionRef = useRef(null);

  useEffect(() => {

    registerSection({
      name: 'cabecalho',
      ref: headerSectionRef.current
    })
  }, [headerSectionRef.current]);

  return (
    <H.HeaderContainer>

      <H.Header>
        <C.Title3
          id='cabecalho'
          ref={headerSectionRef}
        >
          Cabeçalho
        </C.Title3>
      </H.Header>

      <H.HeaderContent>
        <C.Row
          gap='24'
        >
          <C.Paragraph size='16'>
            Parte superior em azul na interface, onde se encontra a logo da Microdigo. Atualmente não contém nenhuma função.
          </C.Paragraph>
          <C.ImageContainer
            width="100%"
            height="100%"
          >
            <img src={imgHeader} alt="Imagem do cabeçalho" loading="lazy" />
            <span className="legend">Cabeçalho em destaque na cor azul</span>
          </C.ImageContainer>

        </C.Row>


      </H.HeaderContent>

      <ButtonEnableVideo
        text={'Cabeçalho'}
        url={'https://www.youtube.com/embed/q5ZO5ndul3A'}
      />
    </H.HeaderContainer>
  )
}

export default HeaderItem;
