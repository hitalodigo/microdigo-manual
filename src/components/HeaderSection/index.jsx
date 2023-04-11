import imgHeader from '../../assets/images/cabecalho/example-cabecalho.png';

import {
    Row,
    Title,
    ImageContainer,
    Paragraph
} from "../../styles/common";
import { HeaderContainer, HeaderContent, Header } from './styles'

function HeaderSection() {

    return (
        <HeaderContainer>

            <Header>
                <Title
                    size='40'
                    id='header-section'
                >
                    Cabeçalho
                </Title>
            </Header>

            <HeaderContent>
                <Row
                    gap='24'
                >
                    <Paragraph size='16'>
                        Parte superior em azul na interface, onde se encontra a logo da Microdigo. Atualmente não contém nenhuma função.
                    </Paragraph>
                    <ImageContainer
                        width="100%"
                        height="100%"
                    >
                        <img src={imgHeader} alt="Imagem do cabeçalho" loading="lazy" />
                        <span className="legend">Cabeçalho em destaque na cor azul</span>
                    </ImageContainer>

                </Row>

            </HeaderContent>

        </HeaderContainer>
    )
}

export default HeaderSection;