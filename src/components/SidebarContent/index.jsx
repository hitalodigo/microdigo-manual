import { ImageContainer, ListItem, OrderList, Paragraph, Row, Title } from "../../styles/common";
import { SidebarContainer, SidebarContentHeader, SidebarContentSection } from "./styles";

function SidebarContent() {


    return (
        <SidebarContainer>
            <SidebarContentHeader>
                <Title
                    size='40'
                >
                    Barra lateral
                </Title>
            </SidebarContentHeader>

            <SidebarContentSection>
                <Paragraph size='16'>A barra lateral, encontrada na esquerda da tela, é dividida em duas colunas: a primeira, onde será possível selecionar o tipo do componente por meio de botões; a segunda, onde irá aparecer uma série de elementos ligados ao tipo escolhido, os quais podem ser arrastados para a área mais clara, chamada painel de montagem.</ Paragraph>
                <ImageContainer
                    width='310'
                    height='315'
                >
                    <img src="src/assets/images/barra-lateral.png" alt="Imagem do cabeçalho" loading="lazy" />
                    <span className="legend">
                        Identificação de cada elemento presente na barra lateral.
                    </span>
                </ImageContainer>

                <Row
                    gap='12'
                >
                    <Title size='24'>Componentes</Title>
                    <Paragraph size='16'>Nesta seção são listados os componentes de um tipo previamente selecionado. Um componente se trata de um dispositivo, esse sempre será representado na plataforma pela imagem de seu correspondente físico, podendo existir somente de forma virtual ou ter de fato um elemento concreto ligado a ele. Assim, esses serão usados na criação de fluxos, recebendo, manipulando e devolvendo dados.</ Paragraph>
                </Row>

                <Row
                    gap='12'
                >
                    <Title size='24'>
                        Selecionar Tipo dos componentes
                    </Title>
                    <Paragraph size='16'>
                        Tais componentes são atualmente divididos em quatro tipos, portanto, há quatro botões presentes na interface no extremo esquerdo da barra lateral, que podem ser selecionados individualmente.
                    </ Paragraph>


                    <OrderList>
                        <ListItem>
                            <Row
                                gap='12'
                            >
                                <Title size='20'>Entrada</Title>
                                <Paragraph size='16'>
                                    Selecionando esta opção serão apresentados os componentes de entrada virtuais que permitem a comunicação no sentido usuário para computador, sempre fornecerão ao sistema algum tipo de informação proveniente de interações externas, sejam essas humanas ou não. Sendo assim, dispositivos como botões ou sensores de temperatura são componentes de entrada, visto que entregam ao sistema, respectivamente, um sinal positivo/negativo e uma temperatura;
                                </ Paragraph>
                                <ImageContainer
                                    width='75'
                                    height='100'
                                >
                                    <img src="src/assets/images/menu-btn-entradas.png" alt="Botão para componentes de entrada" loading="lazy" />
                                    <span className="legend">Botão de entradas</span>
                                </ImageContainer>
                            </Row>
                        </ListItem>

                        <ListItem>
                            <Row
                                gap='12'
                            >
                                <Title size='20'>Saída</Title>
                                <Paragraph size='16'>
                                    Selecionando esta opção serão apresentados os componentes de saída virtuais que permitem a comunicação no sentido computador para usuário. Assim, podendo exibir uma resposta no meio externo após certa operação ser concluída. Dois exemplos de componentes de saída são os dispositivos LED e Buzzer, que ao final de um processo podem emitir, respectivamente, um sinal luminoso e um som.
                                </ Paragraph>
                                <ImageContainer
                                    width='75'
                                    height='100'
                                >
                                    <img src="src/assets/images/menu-btn-saidas.png" alt="Botão para dispositivos de saida" loading="lazy" />
                                    <span className="legend">Botão de saídas</span>
                                </ImageContainer>
                            </Row>
                        </ListItem>

                        <ListItem>
                            <Row
                                gap='12'
                            >
                                <Title size='20'>Condicionais</Title>
                                <Paragraph size='16'>
                                    Selecionando esta opção serão apresentadas as condicionais, esses componentes são encontrados somente no ambiente virtual e nunca como um dispositivo físico. Serão usados para processar e tratar informações recebidas pelos componentes de entrada, por fim as entregando para os componentes de saída.
                                </ Paragraph>
                                <ImageContainer
                                    width='75'
                                    height='100'
                                >
                                    <img src="src/assets/images/menu-btn-condicionais.png" alt="Botão para dispositivos condicionais" loading="lazy" />
                                    <span className="legend">Botão de condicionais</span>
                                </ImageContainer>
                            </Row>
                        </ListItem>

                        <ListItem>
                            <Row
                                gap='12'
                            >
                                <Title size='20'>Físicos</Title>
                                <Paragraph size='16'>
                                    Selecionando esta opção serão apresentados os componentes físicos, também chamados de endpoint’s; tais elementos podem variar entre componentes de entrada e saída e serão aqueles que têm seu correspondente físico, podendo ser manuseado e, por meio da plataforma, interagem com outros componentes, sendo esses virtuais ou não.

                                </ Paragraph>
                                <ImageContainer
                                    width='75'
                                    height='100'
                                >
                                    <img src="src/assets/images/menu-btn-fisicos.png" alt="Botão para dispositivos condicionais" loading="lazy" />
                                    <span className="legend">Botão dos físicos</span>
                                </ImageContainer>
                            </Row>
                        </ListItem>
                    </OrderList>

                </Row>
            </SidebarContentSection>


        </SidebarContainer>
    )
}

export default SidebarContent;