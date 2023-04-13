import imgAddComponentesEx1 from '../../assets/images/usando-plataforma/add-componentes-ex1.png';
import imgAddComponentesEx2 from '../../assets/images/usando-plataforma/add-componentes-ex2.png';
import imgCriandoConexao1 from '../../assets/images/usando-plataforma/criando-conexao-ex1.png';
import imgCriandoConexao2 from '../../assets/images/usando-plataforma/criando-conexao-ex2.png';
import imgCriandoConexao3 from '../../assets/images/usando-plataforma/criando-conexao-ex3.png';
import imgExcluindoConexao1 from '../../assets/images/usando-plataforma/excluindo-conexao-ex1.png';
import imgExcluindoConexao2 from '../../assets/images/usando-plataforma/excluindo-conexao-ex2.png';
import imgExcluindoConexao3 from '../../assets/images/usando-plataforma/excluindo-conexao-ex3.png';
import imgExcluindoConexao4 from '../../assets/images/usando-plataforma/excluindo-conexao-ex4.png';
import imgCriandoFluxos1 from '../../assets/images/usando-plataforma/criando-fluxo-ex1.png';
import imgCriandoFluxos2 from '../../assets/images/usando-plataforma/criando-fluxo-ex2.png';
import imgMovendoFluxo1 from '../../assets/images/usando-plataforma/movendo-fluxo-ex1.png';
import imgMovendoFluxo2 from '../../assets/images/usando-plataforma/movendo-fluxo-ex2.png';
import imgMovendoFluxo3 from '../../assets/images/usando-plataforma/movendo-fluxo-ex3.png';
import imgMovendoFluxo4 from '../../assets/images/usando-plataforma/movendo-fluxo-ex4.png';

import {
    Column,
    ImageContainer,
    ListItem,
    OrderList,
    Paragraph,
    Row,
    Title
} from "../../styles/common";
import {
    AddComponentsCard,
    AddComponentsContainer,
    CreateConnectionCard,
    CreateConnectionListCard,
    CreateFlowContainer,
    DeleteComponentCard,
    DeleteComponentListCard,
    MovementFlowContainer,
    SequencyNumber,
    UsingPlatformContainer,
    UsingPlatformContent,
    UsingPlatformHeader
} from "./styles";


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

                            <DeleteComponentListCard>
                                <DeleteComponentCard>
                                    <Column gap='24'>
                                        <Paragraph size='12'>
                                            <span>6.</span>Para excluir uma conexão, clique sobre a linha que deseja apagar, isso fará um botão de exclusão aparecer.
                                        </Paragraph>

                                        <ImageContainer
                                            width='100%'
                                            height='100%'
                                        >
                                            <img src={imgExcluindoConexao1} alt="Habilitando botão de excluir linha" loading="lazy" />
                                            <span className="legend">Botão de exclusão apareceu sobre linha amarela</span>
                                        </ImageContainer>
                                    </Column>

                                    <Paragraph size='12'>
                                        <span>7.</span>{`Aperte o botão de exclusão para apagar a conexão. Em caso de querer cancelar a ação de excluir conexão, clique sobre a linha como feito anteriormente, ao lado do botão.
                                        Caso queira apagar o componente, clique no componente que deseja excluir, arraste-o para a barra lateral e solte.
                                        `}
                                    </Paragraph>
                                </DeleteComponentCard>

                                <DeleteComponentCard>
                                    <ImageContainer
                                        width='170'
                                        height='220'
                                    >
                                        <img src={imgExcluindoConexao2} alt="Excluir componente através do arraste" loading="lazy" />
                                        <span className="legend">Potenciômetro sendo excluído através da barra lateral</span>
                                    </ImageContainer>

                                    <Paragraph size='12'>
                                        <span>8.</span> Outra forma de apagar um componente é clicando sobre ele e então clicando no símbolo de lixeira à esquerda superior desse.
                                    </Paragraph>
                                </DeleteComponentCard>

                                <DeleteComponentCard>
                                    <ImageContainer
                                        width='170'
                                        height='170'
                                    >
                                        <img src={imgExcluindoConexao3} alt="Excluir componente através do botão action" loading="lazy" />
                                        <span className="legend">Potenciômetro excluído pelo botão de exclusão</span>
                                    </ImageContainer>

                                    <Paragraph size='12'>
                                        <span>9.</span>Outra forma de apagar um componente é clicando sobre ele e então clicando no símbolo de lixeira à esquerda superior desse.
                                    </Paragraph>
                                </DeleteComponentCard>

                                <DeleteComponentCard>
                                    <ImageContainer
                                        width='180'
                                        height='180'
                                    >
                                        <img src={imgExcluindoConexao4} alt="Confirmar exclusão do componente através de pop-up" loading="lazy" />
                                        <span className="legend">Potenciômetro sendo excluído do painel de montagem</span>
                                    </ImageContainer>

                                    <Paragraph size='12'>
                                        <span>10.</span>Confirme a exclusão por fim apertando o botão “Confirmar”.
                                    </Paragraph>
                                </DeleteComponentCard>
                            </DeleteComponentListCard>











                        </Row>

                    </ListItem>

                    <ListItem>
                        <Title size='24' >Criando fluxos</Title>
                        <Row
                            gap='32'
                        >
                            <CreateFlowContainer>
                                <Column
                                    width='320'
                                    gap='24'
                                >
                                    <SequencyNumber>11.</SequencyNumber>
                                    <ImageContainer
                                        width='100%'
                                        height='100%'
                                    >
                                        <img src={imgCriandoFluxos1} alt="Criando fluxos maiores" loading="lazy" />
                                        <span className="legend">Sensor de luz, sensor de temperatura, condicionais E e OU e LED adicionados ao painel de montagem. </span>
                                    </ImageContainer>
                                    <Paragraph
                                        size='14'
                                        textAlign='center'
                                    >
                                        Arraste para o painel de montagem os componentes desejados. Para criar um fluxo é necessário um componente de entrada e um de saída, certifique-se que dentre os componentes escolhidos haja pelo menos um de cada.
                                    </Paragraph>
                                </Column>


                                <Column
                                    width='320'
                                    gap='24'
                                >
                                    <SequencyNumber>12.</SequencyNumber>
                                    <ImageContainer
                                        width='100%'
                                        height='100%'
                                    >
                                        <img src={imgCriandoFluxos2} alt="Criacao de fluxo finalizada" loading="lazy" />
                                        <span className="legend">Fluxo criado</span>
                                    </ImageContainer>

                                    <Paragraph size='14'>
                                        Organize os elementos na tela da forma que deseja e crie as conexões, iniciando com componentes de entrada e terminando com componentes de saída.
                                    </Paragraph>
                                </Column>
                            </CreateFlowContainer>

                        </Row>
                    </ListItem>

                    <ListItem>
                        <Title size='24' >Manuseando fluxos criados</Title>
                        <Row
                            gap='32'
                        >
                            <MovementFlowContainer>

                                <Column
                                    width='400'
                                    gap='24'
                                >
                                    <SequencyNumber>13.</SequencyNumber>
                                    <Paragraph size='16'>
                                        Caso haja componentes de entrada virtuais em determinado fluxo, esse poderá ser alterado através da plataforma. Em cima dos componentes virtuais de entrada há um slider, sendo possível alterar o valor desse.
                                    </Paragraph>
                                </Column>


                                <DeleteComponentCard>
                                    <ImageContainer
                                        width='150'
                                        height='150'
                                    >
                                        <img src={imgMovendoFluxo1} alt="Alterando valor do componente" loading="lazy" />
                                        <span className="legend">Sensor de luz recebendo valor 0</span>
                                    </ImageContainer>

                                    <ImageContainer
                                        width='150'
                                        height='150'
                                    >
                                        <img src={imgMovendoFluxo2} alt="Alterando valor do componente" loading="lazy" />
                                        <span className="legend">Sensor de luz recebendo valor 500.</span>
                                    </ImageContainer>
                                </DeleteComponentCard>

                                <DeleteComponentCard>
                                    <ImageContainer
                                        width='180'
                                        height='100'
                                    >
                                        <img src={imgMovendoFluxo3} alt="Alterando valor do componente" loading="lazy" />
                                    </ImageContainer>

                                    <ImageContainer
                                        width='180'
                                        height='120'
                                    >
                                        <img src={imgMovendoFluxo4} alt="Alterando valor do componente" loading="lazy" />
                                        <span className="legend">Componente de entrada sensor de luz, ao ter o valor modificado, faz componente de saída LED acender.</span>
                                    </ImageContainer>
                                </DeleteComponentCard>

                            </MovementFlowContainer>
                        </Row>
                    </ListItem>

                </OrderList>

            </UsingPlatformContent>

        </UsingPlatformContainer>
    )
}

export default UsingPlatformSection;