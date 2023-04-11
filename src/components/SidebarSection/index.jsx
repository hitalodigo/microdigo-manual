import imgBarraLateral from '../../assets/images/barra-lateral/example-barra-lateral.png';
import imgBarraLateralElements from '../../assets/images/barra-lateral/descricao-barra-lateral.png';
import imgMenuBtnEntradas from '../../assets/images/botoes/entrada.png';
import imgMenuBtnSaidas from '../../assets/images/botoes/saida.png';
import imgMenuBtnCondicionais from '../../assets/images/botoes/condicionais.png';
import imgMenuBtnEventos from '../../assets/images/botoes/eventos.png';

import { ImageContainer, ListItem, OrderList, Paragraph, Row, Title } from "../../styles/common";
import { SidebarContainer, SidebarHeader, SidebarContent, SidebarExampleContainer, ButtonDescriptionContainer, ButtonDescriptionItem } from "./styles";

function SidebarSection() {


    return (
        <SidebarContainer id='sidebar-section'>
            <SidebarHeader>
                <Title
                    size='40'
                >
                    Barra lateral
                </Title>
            </SidebarHeader>

            <SidebarContent>
                <Paragraph size='16'>A barra lateral, encontrada na esquerda da tela, é dividida em duas colunas: a primeira, onde será possível selecionar o tipo do componente por meio de botões; a segunda, onde irá aparecer uma série de elementos ligados ao tipo escolhido, os quais podem ser arrastados para a área mais clara, chamada painel de montagem.</ Paragraph>
                <ImageContainer
                    width='100%'
                    height='100%'
                >
                    <img src={imgBarraLateral} alt="Imagem do cabeçalho" loading="lazy" />
                    <span className="legend">
                        Barra lateral no canto esquerdo em amarelo, com foco em destaque.
                    </span>
                </ImageContainer>

                <Row>

                    <SidebarExampleContainer>
                        <div className="components">
                            <Title size="24">Os componentes</Title>

                            <p>
                                Nesta seção são listados os componentes de um tipo previamente selecionado. Um componente se trata de um dispositivo, esse sempre será representado na plataforma pela imagem de seu correspondente físico, podendo existir somente de forma virtual ou ter de fato um elemento concreto ligado a ele. Assim, esses serão usados na criação de fluxos, recebendo, manipulando e devolvendo dados.
                            </p>
                        </div>
                        <ImageContainer
                            width='300'
                            height='400'
                        >
                            <img
                                src={imgBarraLateralElements}
                                alt="Descricao dos elementos da barra lateral"
                                loading='lazy'
                            />
                        </ImageContainer>

                        <div className="selected-component">
                            <Title size="24">Selecionar tipo do componente</Title>
                            <p>
                                Tais componentes são atualmente divididos em cinco tipos, portanto, há cinco botões presentes na interface no extremo esquerdo da barra lateral, que podem ser selecionados individualmente.
                            </p>
                        </div>

                    </SidebarExampleContainer>

                </Row>

                <Row>
                    <ButtonDescriptionContainer>
                        <ButtonDescriptionItem
                            className='entry'
                        >
                            <Title size='20'>Entrada</Title>
                            <Paragraph size='12'>
                                Selecionando esta opção serão apresentados os componentes de entrada virtuais que permitem a comunicação no sentido usuário para computador, sempre fornecerão ao sistema algum tipo de informação proveniente de interações externas, sejam essas humanas ou não. Sendo assim, dispositivos como botões ou sensores de temperatura são componentes de entrada, visto que entregam ao sistema, respectivamente, um sinal positivo/negativo e uma temperatura;
                            </ Paragraph>
                            <ImageContainer
                                width='56'
                                height='56'
                                className='img-entry'
                            >
                                <img src={imgMenuBtnEntradas} alt="Botão para componentes de entrada" loading="lazy" />
                            </ImageContainer>
                        </ButtonDescriptionItem>

                        <ButtonDescriptionItem
                            className='exit'
                        >
                            <Title size='20'>Saída</Title>
                            <Paragraph size='12'>
                                Selecionando esta opção serão apresentados os componentes de saída virtuais que permitem a comunicação no sentido computador para usuário. Assim, podendo exibir uma resposta no meio externo após certa operação ser concluída. Dois exemplos de componentes de saída são os dispositivos LED e Buzzer, que ao final de um processo podem emitir, respectivamente, um sinal luminoso e um som.
                            </ Paragraph>
                            <ImageContainer
                                width='56'
                                height='56'
                                className='img-exit'
                            >
                                <img src={imgMenuBtnSaidas} alt="Botão para dispositivos de saida" loading="lazy" />
                            </ImageContainer>
                        </ButtonDescriptionItem>

                        <ButtonDescriptionItem
                            className='conditional'
                        >
                            <Title size='20'>Condicionais</Title>
                            <Paragraph size='12'>
                                Selecionando esta opção serão apresentadas as condicionais, esses componentes são encontrados somente no ambiente virtual e nunca como um dispositivo físico. Serão usados para processar e tratar informações recebidas pelos componentes de entrada, por fim as entregando para os componentes de saída.
                            </ Paragraph>
                            <ImageContainer
                                width='56'
                                height='56'
                                className='img-conditional'
                            >
                                <img src={imgMenuBtnCondicionais} alt="Botão para dispositivos condicionais" loading="lazy" />
                            </ImageContainer>
                        </ButtonDescriptionItem>

                        <ButtonDescriptionItem
                            className='events'
                        >
                            <Title size='20'>Eventos</Title>
                            <Paragraph size='12'>
                                Selecionando esta opção serão apresentados os componentes de evento, esses componentes, assim como as condicionais, também são encontrados no ambiente virtual. São dos mais variados tipos, recebendo e passando determinada informação em conjunto à um evento, podem, por exemplo, mudar a cor de um led RGB ou esperar uma certa quantidade de segundos antes de transmitir o dado.
                            </ Paragraph>
                            <ImageContainer
                                width='56'
                                height='56'
                                className='img-events'
                            >
                                <img src={imgMenuBtnEventos} alt="Botão para dispositivos condicionais" loading="lazy" />
                            </ImageContainer>
                        </ButtonDescriptionItem>
                    </ButtonDescriptionContainer>
                </Row>
            </SidebarContent>


        </SidebarContainer>
    )
}

export default SidebarSection;