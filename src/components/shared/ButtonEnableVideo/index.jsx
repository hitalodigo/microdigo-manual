import *  as Btn from './styles';
import { Play } from '@phosphor-icons/react';

const ButtonEnableVideo = ({ text }) => {
    return (
        <Btn.Container>
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