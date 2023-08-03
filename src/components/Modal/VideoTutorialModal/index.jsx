
import { useState } from 'react';

import { SpinnerLoader } from '@/components/shared/SpinnerLoader';

import * as V from './styles';

const VideoTutorialModal = ({ contentData }) => {

  const { title, url } = contentData;

  const [isLoading, setIsLoading] = useState(true);

  const handleLoadIframe = () => {
    setIsLoading(false);
  }

  return (
    <V.Container>

      <V.Title>{title}</V.Title>

      <>
        {isLoading &&
          (
            (<SpinnerLoader.Root>
              <SpinnerLoader.Icon />
              <SpinnerLoader.Text text='Carregando...' />
            </SpinnerLoader.Root>)
          )
        }
        <iframe
          src={url}
          frameBorder="0"
          width='100%'
          height='460px'
          onLoad={handleLoadIframe}
          title={`Vídeo tutorial - ${title}`}
        ></iframe>
      </>

    </V.Container>
  );
};

export default VideoTutorialModal;
