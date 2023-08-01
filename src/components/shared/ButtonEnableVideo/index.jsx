import { Play } from '@phosphor-icons/react';

import { useModal } from '@/hooks/useModal';

import *  as Btn from './styles';

const ButtonEnableVideo = ({ text }) => {

  const { enableModal } = useModal();

  return (
    <Btn.Container
      onClick={() => {
        enableModal({
          typeContent: 'video-tutorial',
          title: `Vídeo tutorial - ${text}`
        })
      }}
    >
      <Btn.Icon>
        <Play />
      </Btn.Icon>
      <Btn.Content>
        <Btn.SubtitleContainer>Vídeo tutorial</Btn.SubtitleContainer>
        <Btn.TitleContainer>{`${text}`}</Btn.TitleContainer>
      </Btn.Content>
    </Btn.Container>
  );
};

export default ButtonEnableVideo;
