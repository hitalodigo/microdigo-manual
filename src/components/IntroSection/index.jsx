import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';
import IframeVideoTutorial from '@/components/shared/IframeVideoTutorial';

import * as I from "./styles";
import * as C from '@/styles/common';

function IntroSection() {

  return (
    <I.IntroContainer>
      <I.IntroHeader>
        <C.Title
          id="introducao"
          size='48'
        >
          Bem-vindo ao manual da plataforma microdigo!
        </C.Title>
      </I.IntroHeader>

      <I.IntroContent>
        <C.Row
          gap='12'
        >
          <C.Paragraph size='16'>
            {`Esta página fornecerá uma introdução aos principais conceitos e funcionalidades existentes dentro da plataforma.
                        Se você ainda não utilizou a plataforma, recomendamos que efetue a leitura do manual antes de utilizá-la.`}
          </C.Paragraph>

          <C.Paragraph size='16'>Recomendamos também que para melhor utilizar a plataforma, esteja em uma conexão de internet estável e utilize os navegadores <strong>Google Chrome</strong>, <strong>Microsoft Edge</strong> ou <strong>Opera</strong>.</ C.Paragraph>

        </C.Row>

        <C.IframeContainer>
          <IframeVideoTutorial
            url={"https://www.youtube.com/embed/ryw8GgcwTj8"}
            initialWidth={'100%'}
            initialHeight={'600px'}
            title='Vídeo de introdução a plataforma'
          />
        </C.IframeContainer>
      </I.IntroContent>

      <ButtonEnableVideo
        text={'Manual completo'}
        url='https://www.youtube.com/embed/7Oa2LK9CFyc'
      />

    </I.IntroContainer>
  )
}

export default IntroSection;
