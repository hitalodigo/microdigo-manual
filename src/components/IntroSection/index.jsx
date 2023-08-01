import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';

import * as I from "./styles";
import { Paragraph, Row, Title } from '@/styles/common';

function IntroSection() {

  return (
    <I.IntroContainer>
      <I.IntroHeader>
        <Title
          id="home"
          size='48'
        >
          Bem-vindo ao manual da plataforma microdigo!
        </Title>
      </I.IntroHeader>

      <I.IntroContent>
        <Row
          gap='12'
        >
          <Paragraph size='16'>
            {`Esta página fornecerá uma introdução aos principais conceitos e funcionalidades existentes dentro da plataforma.
                        Se você ainda não utilizou a plataforma, recomendamos que efetue a leitura do manual antes de utilizá-la.`}
          </Paragraph>

          <Paragraph size='16'>Recomendamos também que para melhor utilizar a plataforma, esteja em uma conexão de internet estável e utilize os navegadores <strong>Google Chrome</strong>, <strong>Microsoft Edge</strong> ou <strong>Opera</strong>.</ Paragraph>
        </Row>
        <I.YouWillLearnContainer>
          <h2>Você vai aprender</h2>
          <ul>
            <li>O que é o elemento Cabeçalho</li>
            <li>O que é a Barra Lateral</li>
            <li>O que são componentes</li>
            <li>Quais são os tipos de componentes existentes</li>
            <li>O que é o Painel de montagem</li>
            <li>O que são fluxos, conectores e conexões</li>
            <li>Como utilizar o zoom e faq</li>
            <li>Como adicionar componentes ao painel de montagem</li>
            <li>Como criar conexões</li>
            <li>Como excluir conexões e componentes</li>
            <li>Como criar fluxos</li>
            <li>Como manusear fluxos criados</li>
          </ul>
        </I.YouWillLearnContainer>
      </I.IntroContent>

      <ButtonEnableVideo text={'Introdução'} />

    </I.IntroContainer>
  )
}

export default IntroSection;
