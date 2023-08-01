
import { useState } from 'react';
import { SpinnerLoader } from '@/components/shared/SpinnerLoader';

import * as I from './styles';

const IframeVideoTutorial = ({ url, initialWidth, initialHeight }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadIframe = () => {
    setIsLoading(false);
  }
  return (
    <>
      {isLoading &&
        (<SpinnerLoader.Root>
          <SpinnerLoader.Icon />
          <SpinnerLoader.Text text='Carregando...' />
        </SpinnerLoader.Root>)
      }
      <I.Container
        src={url}
        frameBorder="0"
        width={initialWidth}
        height={initialHeight}
        onLoad={handleLoadIframe}
        on
      ></I.Container>

    </>
  );
};

export default IframeVideoTutorial;
