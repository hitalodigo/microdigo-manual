import imgHeader from '../../assets/images/header.png';

import {
    Row,
    Title,
    ImageContainer,
    Paragraph
} from "../../styles/common";
import { HeaderContainer, HeaderSection, Header } from './styles'

function HeaderContent() {

    return (
        <HeaderContainer>

            <Header>
                <Title
                    size='40'
                >
                    Cabeçalho
                </Title>
            </Header>

            <HeaderSection>
                <Row
                    gap='24'
                >
                    <Paragraph size='16'>
                        Parte superior em azul na interface, onde se encontra a logo da Microdigo. Atualmente não contém nenhuma função.
                    </Paragraph>
                    <ImageContainer
                        width="540"
                        height="35"
                    >
                        <img src={imgHeader} alt="Imagem do cabeçalho" loading="lazy" />
                        <span className="legend">Cabeçalho</span>
                    </ImageContainer>

                </Row>

            </HeaderSection>

        </HeaderContainer>
    )
}

export default HeaderContent;