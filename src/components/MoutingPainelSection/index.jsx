import imgPainelMontagem from '../../assets/images/painel-montagem/example-painel-montagem.png';
import imgFluxos from '../../assets/images/painel-montagem/fluxos.png';
import imgConectoresConexoes from '../../assets/images/painel-montagem/conectores-conexoes.png';
import imgBotaoZoom from '../../assets/images/botoes/botao-zoom.png';
import imgZoomIn from '../../assets/images/painel-montagem/zoom-in.png';
import imgZoomOut from '../../assets/images/painel-montagem/zoom-out.png';
import imgBotaoFaq from '../../assets/images/botoes/botao-faq.png';


import {
    ImageContainer,
    OrderList,
    Paragraph,
    Row,
    Title,
    ListItem,
    Column
} from "../../styles/common";
import {
    MoutingPanelContainer,
    MoutingPanelHeader,
    MoutingPanelContent,
    MoutingPanelListCard,
    MoutingPanelCard
} from "./styles";


function MoutingPanelSection() {

    return (
        <MoutingPanelContainer id='mouting-panel-section'>
            <MoutingPanelHeader>
                <Title size='40'>Painel de montagem</Title>
            </MoutingPanelHeader>

            <MoutingPanelContent>
                <Paragraph size='16'>Esta é a área onde serão criados os fluxos. </ Paragraph>

                <ImageContainer
                    width='100%'
                    height='100%'
                >
                    <img
                        src={imgPainelMontagem}
                        alt="Ilustação do painel de montagem"
                        loading="lazy"
                    />
                    <span className="legend">Painel de montagem</span>
                </ImageContainer>

                <OrderList gap='64'>
                    <ListItem>
                        <Row
                            gap='24'
                        >
                            <Title size='24'>Fluxos</Title>

                            <MoutingPanelListCard>
                                <MoutingPanelCard>
                                    <ImageContainer
                                        width='100%'
                                        height='100%'
                                    >
                                        <img
                                            src={imgFluxos}
                                            alt="Ilustação do painel de montagem"
                                            loading="lazy"
                                        />
                                        <span className="legend">Representação dos fluxos</span>
                                    </ImageContainer>
                                    <Paragraph size='14'>
                                        Um fluxo sempre será montado pelo usuário no painel de montagem. Pode ser descrito como o processamento de certa informação, portanto, após a criação da lógica o usuário deverá passar ao computador certo dado, que será processado e então devolvido. Um fluxo sempre iniciará a partir de um componente de entrada e terminará em um de saída.
                                    </ Paragraph>

                                </MoutingPanelCard>

                                <MoutingPanelCard>
                                    <ImageContainer
                                        width='100%'
                                        height='100%'
                                    >
                                        <img
                                            src={imgConectoresConexoes}
                                            alt="Ilustação da representação dos conectores e conexoes"
                                            loading="lazy"
                                        />

                                        <span className="legend">Conexão e conectores</span>
                                    </ImageContainer>

                                    <Paragraph size='14'>
                                        Quando arrastar um componente da barra lateral ao painel de montagem este irá ter um conector, representado por um pequeno ponto ao lado direito, esquerdo ou em ambos os lados, e é por meio deles que serão feitas as conexões. Um conector à direita tem função de transmitir algum dado, enquanto um à esquerda irá recebê-lo, portanto, os fluxos sempre serão feitos a partir da junção desses dois conectores, estando ambos em elementos diferentes.
                                    </ Paragraph>
                                </MoutingPanelCard>
                            </MoutingPanelListCard>

                        </Row>
                    </ListItem>

                    <ListItem>
                        <Row
                            gap='12'
                        >
                            <Title size='20'>Zoom</Title>


                            <Row orientation='row'>

                                <Column gap='24'>
                                    <Paragraph size='16'>
                                        Ao selecionar o botão de zoom, no canto direito inferior da tela, um slider se tornará visível à direita da interface; ao arrastá-lo é possível aproximar e afastar os componentes.
                                    </ Paragraph>
                                    <ImageContainer
                                        width='100'
                                        height='100'
                                    >
                                        <img
                                            src={imgBotaoZoom}
                                            alt="Ilustação do botao de zoom"
                                            loading="lazy"
                                            title="Botão de zoom"
                                        />

                                    </ImageContainer>
                                </Column>

                                <Column gap='24'>
                                    <ImageContainer
                                        width='400'
                                        height='220'
                                    >
                                        <img
                                            src={imgZoomIn}
                                            alt="Ilustação do zoom in"
                                            loading="lazy"
                                            title="Zoom in"
                                        />
                                        <span className="legend">Exemplo de zoom mínimo</span>
                                    </ImageContainer>

                                    <ImageContainer
                                        width='400'
                                        height='220'
                                    >
                                        <img
                                            src={imgZoomOut}
                                            alt="Ilustação do zoom out"
                                            loading="lazy"
                                            title="Zoom out"
                                        />

                                        <span className="legend">Exemplo de zoom máximo</span>

                                    </ImageContainer>
                                </Column>
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
                                width='100'
                                height='100'
                            >
                                <img
                                    src={imgBotaoFaq}
                                    alt="Ilustação do botão de faq"
                                    loading="lazy"
                                    title="Botão de faq"
                                />

                            </ImageContainer>
                        </Row>
                    </ListItem>
                </OrderList>

            </MoutingPanelContent>
        </MoutingPanelContainer>
    )
}

export default MoutingPanelSection;