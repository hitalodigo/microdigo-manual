import imgPainelMontagem from '../../assets/images/painel-montagem.png';
import imgExemploFluxo from '../../assets/images/exemplo-fluxo.png';
import imgConectoresConexoes from '../../assets/images/conectores-conexoes.png';
import imgBotaoZoom from '../../assets/images/botao-zoom.png';
import imgZoomInOut from '../../assets/images/zoom-in-out.png';
import imgBotaoFaq from '../../assets/images/botao-faq.png';


import {
    ImageContainer,
    OrderList,
    Paragraph,
    Row,
    Title,
    DesorderList,
    ListItem
} from "../../styles/common";
import {
    MoutingPanelContainer,
    MoutingPanelHeader,
    MoutingPanelSection
} from "./styles";


function MoutingPanelContent() {

    return (
        <MoutingPanelContainer>
            <MoutingPanelHeader>
                <Title size='40'>Painel de montagem</Title>
            </MoutingPanelHeader>

            <MoutingPanelSection>
                <Paragraph size='16'>Esta é a área onde serão criados os fluxos. </ Paragraph>

                <ImageContainer
                    width='440'
                    height='260'
                >
                    <img
                        src={imgPainelMontagem}
                        alt="Ilustação do painel de montagem"
                        loading="lazy"
                    />
                    <span className="legend">Painel de montagem</span>
                </ImageContainer>

                <OrderList>
                    <ListItem>
                        <Row
                            gap='12'
                        >
                            <Title size='24'>Fluxos</Title>
                            <Paragraph size='16'>
                                Um fluxo sempre será montado pelo usuário no painel de montagem. Pode ser descrito como o processamento de certa informação, portanto, após a criação da lógica o usuário deverá passar ao computador certo dado, que será processado e então devolvido. Um fluxo sempre iniciará a partir de um componente de entrada e terminará em um de saída.
                            </ Paragraph>

                            <ImageContainer
                                width='328'
                                height='200'
                            >
                                <img
                                    src={imgExemploFluxo}
                                    alt="Ilustação do painel de montagem"
                                    loading="lazy"
                                />
                                <span className="legend">Representação dos fluxos</span>
                            </ImageContainer>

                            <DesorderList>
                                <ListItem>
                                    <Row
                                        gap='12'
                                    >
                                        <Title size='20'>Conectores e Conexões</Title>

                                        <Paragraph size='16'>
                                            Quando arrastar um componente da barra lateral ao painel de montagem este irá ter um conector, representado por um pequeno ponto ao lado direito, esquerdo ou em ambos os lados, e é por meio deles que serão feitas as conexões. Um conector à direita tem função de transmitir algum dado, enquanto um à esquerda irá recebê-lo, portanto, os fluxos sempre serão feitos a partir da junção desses dois conectores, estando ambos em elementos diferentes.
                                        </ Paragraph>

                                        <ImageContainer
                                            width='288'
                                            height='180'
                                        >
                                            <img
                                                src={imgConectoresConexoes}
                                                alt="Ilustação da representação dos conectores e conexoes"
                                                loading="lazy"
                                            />

                                            <span className="legend">Conexão e conectores</span>
                                        </ImageContainer>
                                    </Row>
                                </ListItem>
                            </DesorderList>
                        </Row>
                    </ListItem>

                    <ListItem>
                        <Row
                            gap='12'
                        >
                            <Title size='20'>Zoom</Title>
                            <Paragraph size='16'>
                                Ao selecionar o botão de zoom, no canto direito inferior da tela, um slider se tornará visível à direita da interface; ao arrastá-lo é possível aproximar e afastar os componentes.
                            </ Paragraph>

                            <Row orientation='row'>
                                <ImageContainer
                                    width='83'
                                    height='83'
                                >
                                    <img
                                        src={imgBotaoZoom}
                                        alt="Ilustação do botao de zoom"
                                        loading="lazy"
                                        title="Botão de zoom"
                                    />
                                    <span className="legend">Botão de zoom</span>

                                </ImageContainer>

                                <ImageContainer
                                    width='800'
                                    height='280'
                                >
                                    <img
                                        src={imgZoomInOut}
                                        alt="Ilustação do zoom in"
                                        loading="lazy"
                                        title="Zoom in"
                                    />
                                    <span className="legend">Zoom in/Zoom out</span>
                                </ImageContainer>
                            </Row>
                        </Row>

                    </ListItem>

                    <ListItem>
                        <Row
                            gap='12'
                        >
                            <Title size='20'>FAQ</Title>

                            <Paragraph size='16'>
                                Do inglês “Frequently Asked Questions”, que significa basicamente perguntas frequentes, ao selecionar este botão aparecerá uma área de perguntas e respostas para sanar possíveis dúvidas em relação ao funcionamento da plataforma.
                            </ Paragraph>

                            <ImageContainer
                                width='85'
                                height='90'
                            >
                                <img
                                    src={imgBotaoFaq}
                                    alt="Ilustação do botão de faq"
                                    loading="lazy"
                                    title="Botão de faq"
                                />
                                <span className="legend">Botão de Faq</span>
                            </ImageContainer>
                        </Row>
                    </ListItem>
                </OrderList>

            </MoutingPanelSection>
        </MoutingPanelContainer>
    )
}

export default MoutingPanelContent;