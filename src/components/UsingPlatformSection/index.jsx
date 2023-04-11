import imgAddComponentesEx1 from '../../assets/images/usando-plataforma/add-componentes-ex1.png';
import imgAddComponentesEx2 from '../../assets/images/usando-plataforma/add-componentes-ex2.png';
import imgCriandoConexao1 from '../../assets/images/usando-plataforma/criando-conexao-ex1.png';
import imgCriandoConexao2 from '../../assets/images/usando-plataforma/criando-conexao-ex2.png';
import imgCriandoConexao3 from '../../assets/images/usando-plataforma/criando-conexao-ex3.png';
import imgHabilitandoBtnExcluir from '../../assets/images1/habilitando-botao-excluir-linha.png';
import imgExcluirArrastando from '../../assets/images1/excluir-arrastando.png';
import imgExcluirBtnAction from '../../assets/images1/excluir-botao-action.png';
import imgConfirmExclusion from '../../assets/images1/confirm-exclusion.png';
import imgCriandoFluxos1 from '../../assets/images1/criando-fluxos1.png';
import imgCriandoFluxos2 from '../../assets/images1/criando-fluxos2.png';
import imgManuseandoFluxos1 from '../../assets/images1/manuseando-fluxos1.png';
import imgManuseandoFluxos2 from '../../assets/images1/manuseando-fluxos2.png';

import {
    Column,
    ImageContainer,
    ListItem,
    OrderList,
    Paragraph,
    Row,
    Title
} from "../../styles/common";
import { AddComponentsCard, AddComponentsContainer, CreateConnectionCard, CreateConnectionListCard, UsingPlatformContainer, UsingPlatformContent, UsingPlatformHeader } from "./styles";


function UsingPlatformSection() {

    return (
        <UsingPlatformContainer id='using-platform-section'>
            <UsingPlatformHeader>
                <Title size='40'>
                    Usando a plataforma microdigo
                </Title>
            </UsingPlatformHeader>

            <UsingPlatformContent>
                <OrderList>
                    <ListItem>
                        <Title size='24'>Adicionando componentes ao painel de montagem</Title>
                        <Row>
                            <AddComponentsContainer>
                                <AddComponentsCard
                                    textAlign="end"
                                >
                                    <Paragraph size='16'>
                                        <span>1.</span>Selecione na barra lateral através dos botões circulares qual o tipo do componente desejado.
                                    </Paragraph>
                                    <ImageContainer
                                        width='300'
                                        height='400'
                                    >
                                        <img src={imgAddComponentesEx1} alt="Imagem 1 do passo a passo para selecionar componente de entrada" loading="lazy" />
                                        <span className="legend">Componente de entrada sendo selecionado</span>
                                    </ImageContainer>
                                </AddComponentsCard>

                                <AddComponentsCard>
                                    <ImageContainer
                                        width='300'
                                        height='400'
                                    >
                                        <img src={imgAddComponentesEx2} alt="Potenciômetro sendo arrastado" loading="lazy" />
                                        <span className="legend">Componente de Entrada “Potenciômetro” sendo arrastado para o painel de montagem.</span>
                                    </ImageContainer>

                                    <Paragraph size='16'>
                                        <span>2.</span>Com o tipo selecionado, escolha dentre os componentes apresentados. Clique no elemento, arraste e solte-o no painel de montagem. Arrastando tal componente é possível reposicioná-lo na tela como desejado.
                                    </Paragraph>
                                </AddComponentsCard>
                            </AddComponentsContainer>


                        </Row>
                    </ListItem>

                    <ListItem>
                        <Title size='24' >Criando conexões</Title>
                        <Row
                            gap='32'
                        >
                            <CreateConnectionListCard>

                                <CreateConnectionCard>
                                    <Paragraph size='16'>
                                        <span>3.</span>Certifique-se de que há dois componentes com conectores de tipos diferentes na tela, por exemplo, se adicionar um componente de entrada (conector à direita), pode acrescentar uma condicional ou componente de saída (que contém conectores à esquerda).
                                    </Paragraph>

                                    <ImageContainer
                                        width='320'
                                        height='140'
                                    >
                                        <img src={imgCriandoConexao1} alt="Potenciometro e condicional E no painel de montagem" loading="lazy" />
                                        <span className="legend">Potenciômetro e condicional E no painel de montagem.</span>
                                    </ImageContainer>
                                </CreateConnectionCard>

                                <CreateConnectionCard>
                                    <Paragraph size='16'>
                                        <span>4.</span>Clique em um dos conectores e arraste, assim será visível o surgimento de uma linha amarela.
                                    </Paragraph>

                                    <ImageContainer
                                        width='320'
                                        height='140'
                                    >
                                        <img src={imgCriandoConexao2} alt="Criação da linha de conexão entre potenciometro e componente E" loading="lazy" />
                                        <span className="legend">Interação com conector à direita do Potenciômetro criando uma linha de conexão</span>
                                    </ImageContainer>
                                </CreateConnectionCard>

                                <CreateConnectionCard>
                                    <Paragraph size='16'>
                                        <span>5.</span>Para criar a conexão, solte a linha amarela sobre o conector do segundo componente. Mas, caso queira cancelar a ação, basta soltar a linha em qualquer espaço vazio do painel de montagem.
                                    </Paragraph>

                                    <ImageContainer
                                        width='320'
                                        height='140'
                                    >
                                        <img src={imgCriandoConexao3} alt="Criação da linha finalizada" loading="lazy" />
                                        <span className="legend">Conexão entre dois componentes criada</span>
                                    </ImageContainer>
                                </CreateConnectionCard>
                            </CreateConnectionListCard>

                        </Row>
                    </ListItem>

                    <ListItem>
                        <Title size='24' >Excluindo conexões e componentes</Title>
                        <Row
                            gap='32'
                        >
                            <Paragraph>
                                Para excluir uma conexão, clique sobre a linha que deseja apagar, isso fará um botão de exclusão aparecer.
                            </Paragraph>

                            <ImageContainer
                                width='370'
                                height='160'
                            >
                                <img src={imgHabilitandoBtnExcluir} alt="Habilitando botão de excluir linha" loading="lazy" />
                                <span className="legend">Botão de exclusão apareceu sobre linha amarela</span>
                            </ImageContainer>

                            <Paragraph>
                                {`Aperte o botão de exclusão para apagar a conexão. Em caso de querer cancelar a ação de excluir conexão, clique sobre a linha como feito anteriormente, ao lado do botão.
                                 Caso queira apagar o componente, clique no componente que deseja excluir, arraste-o para a barra lateral e solte.
                                `}
                            </Paragraph>

                            <ImageContainer
                                width='204'
                                height='270'
                            >
                                <img src={imgExcluirArrastando} alt="Excluir componente através do arraste" loading="lazy" />
                                <span className="legend">Potenciômetro sendo excluído através da barra lateral</span>
                            </ImageContainer>

                            <Paragraph>
                                Outra forma de apagar um componente é clicando sobre ele e então clicando no símbolo de lixeira à esquerda superior desse.
                            </Paragraph>

                            <ImageContainer
                                width='215'
                                height='200'
                            >
                                <img src={imgExcluirBtnAction} alt="Excluir componente através do botão action" loading="lazy" />
                                <span className="legend">Potenciômetro sendo excluído através do botão de exclusão</span>
                            </ImageContainer>

                            <Paragraph>
                                Confirme a exclusão por fim apertando o botão “Confirmar”.
                            </Paragraph>

                            <ImageContainer
                                width='291'
                                height='220'
                            >
                                <img src={imgConfirmExclusion} alt="Confirmar exclusão do componente através de pop-up" loading="lazy" />
                                <span className="legend">Potenciômetro sendo excluído do painel de montagem</span>
                            </ImageContainer>
                        </Row>

                    </ListItem>

                    <ListItem>
                        <Title size='24' >Criando fluxos</Title>
                        <Row
                            gap='32'
                        >

                            <Paragraph>
                                Arraste para o painel de montagem os componentes desejados. Para criar um fluxo é necessário um componente de entrada e um de saída, certifique-se que dentre os componentes escolhidos haja pelo menos um de cada.
                            </Paragraph>

                            <ImageContainer
                                width='291'
                                height='220'
                            >
                                <img src={imgCriandoFluxos1} alt="Criando fluxos maiores" loading="lazy" />
                                <span className="legend">Sensor de luz, sensor de temperatura, condicionais E e OU e LED adicionados ao painel de montagem. </span>
                            </ImageContainer>

                            <Paragraph>
                                Organize os elementos na tela da forma que deseja e crie as conexões, iniciando com componentes de entrada e terminando com componentes de saída.
                            </Paragraph>

                            <ImageContainer
                                width='291'
                                height='220'
                            >
                                <img src={imgCriandoFluxos2} alt="Criacao de fluxo finalizada" loading="lazy" />
                                <span className="legend">Fluxo criado</span>
                            </ImageContainer>
                        </Row>
                    </ListItem>

                    <ListItem>
                        <Title size='24' >Manuseando fluxos criados</Title>
                        <Row
                            gap='32'
                        >

                            <Paragraph>
                                Caso haja componentes de entrada virtuais em determinado fluxo, esse poderá ser alterado através da plataforma. Em cima dos componentes virtuais de entrada há um slider, sendo possível alterar o valor desse.
                            </Paragraph>

                            <ImageContainer
                                width='468'
                                height='180'
                            >
                                <img src={imgManuseandoFluxos1} alt="Alterando valor do componente" loading="lazy" />
                                <span className="legend">Sensor de luz recebendo valor 0 / Sensor de luz recebendo valor 50</span>
                            </ImageContainer>

                            <ImageContainer
                                width='515'
                                height='130'
                            >
                                <img src={imgManuseandoFluxos2} alt="Alterando valor do componente" loading="lazy" />
                                <span className="legend">Componente de entrada sensor de luz, ao ter o valor modificado, faz componente de saída LED acender</span>
                            </ImageContainer>
                        </Row>
                    </ListItem>

                </OrderList>

            </UsingPlatformContent>

        </UsingPlatformContainer>
    )
}

export default UsingPlatformSection;