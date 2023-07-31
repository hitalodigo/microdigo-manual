import imgHeader from '@/assets/images/cabecalho/example-cabecalho.png';

import * as C from "@/styles/common";
import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';

import { HeaderContainer, HeaderContent, Header } from './styles'

function HeaderItem() {

    return (
        <HeaderContainer>

            <Header>
                <C.Title
                    size='32'
                    id='header-section'
                >
                    Cabeçalho
                </C.Title>
            </Header>

            <HeaderContent>
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


            </HeaderContent>

            <ButtonEnableVideo text={'Cabeçalho'} />
        </HeaderContainer>
    )
}

export default HeaderItem;