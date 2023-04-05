import {
    ImageContainer,
    ListItem,
    OrderList,
    Paragraph,
    Row,
    Title
} from "../../styles/common";
import { UsingPlatformContainer, UsingPlatformContent, UsingPlatformHeader } from "./styles";


function UsingPlatform() {

    return (
        <UsingPlatformContainer>
            <UsingPlatformHeader>
                <Title size='40'>
                    Usando a plataforma microdigo
                </Title>
            </UsingPlatformHeader>

            <UsingPlatformContent>
                <OrderList>
                    <ListItem>
                        <Title size='24'>Adicionando componentes ao painel de montagem</Title>
                        <Row
                            gap='32'
                        >
                            <Paragraph>
                                Selecione na barra lateral através dos botões circulares qual o tipo do componente desejado.
                            </Paragraph>
                            <ImageContainer
                                width='146'
                                height='290'
                            >
                                <img src="src/assets/images/selecionando-componente-entrada.png" alt="Imagem 1 do passo a passo para selecionar componente de entrada" loading="lazy" />
                                <span className="legend">Seção componentes de entrada selecionada</span>
                            </ImageContainer>
                            <Paragraph>
                                Com o tipo selecionado, escolha dentre os componentes apresentados. Clique no elemento, arraste e solte-o no painel de montagem. Arrastando tal componente é possível reposicioná-lo na tela como desejado.
                            </Paragraph>

                            <ImageContainer
                                width='190'
                                height='190'
                            >
                                <img src="src/assets/images/componente-entrada-arrastando.png" alt="Potenciômetro sendo arrastado" loading="lazy" />
                                <span className="legend">"Potenciômetro" sendo arrastado para o painel de montagem</span>
                            </ImageContainer>
                        </Row>
                    </ListItem>

                    <ListItem>
                        <Title size='24' >Criando conexões</Title>
                        <Row
                            gap='32'
                        >
                            <Paragraph>
                                Certifique-se de que há dois componentes com conectores de tipos diferentes na tela, por exemplo, se adicionar um componente de entrada (conector à direita), pode acrescentar uma condicional ou componente de saída (que contém conectores à esquerda).
                            </Paragraph>

                            <ImageContainer
                                width='375'
                                height='160'
                            >
                                <img src="src/assets/images/criando-conexao1.png" alt="Potenciometro e condicional E no painel de montagem" loading="lazy" />
                                <span className="legend">Potenciômetro e condicional E no painel de montagem</span>
                            </ImageContainer>

                            <Paragraph>
                                Clique em um dos conectores e arraste, assim será visível o surgimento de uma linha amarela.
                            </Paragraph>

                            <ImageContainer
                                width='370'
                                height='160'
                            >
                                <img src="src/assets/images/criando-conexao2.png" alt="Criação da linha de conexão entre potenciometro e componente E" loading="lazy" />
                                <span className="legend">Interação com conector à direita do Potenciômetro criando uma linha de conexão</span>
                            </ImageContainer>

                            <Paragraph>
                                Para criar a conexão, solte a linha amarela sobre o conector do segundo componente. Mas, caso queira cancelar a ação, basta soltar a linha em qualquer espaço vazio do painel de montagem.
                            </Paragraph>

                            <ImageContainer
                                width='370'
                                height='160'
                            >
                                <img src="src/assets/images/criando-conexao3.png" alt="Criação da linha finalizada" loading="lazy" />
                                <span className="legend">Conexão entre dois componentes criada</span>
                            </ImageContainer>
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
                                <img src="src/assets/images/habilitando-botao-excluir-linha.png" alt="Habilitando botão de excluir linha" loading="lazy" />
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
                                <img src="src/assets/images/excluir-arrastando.png" alt="Excluir componente através do arraste" loading="lazy" />
                                <span className="legend">Potenciômetro sendo excluído através da barra lateral</span>
                            </ImageContainer>

                            <Paragraph>
                                Outra forma de apagar um componente é clicando sobre ele e então clicando no símbolo de lixeira à esquerda superior desse.
                            </Paragraph>

                            <ImageContainer
                                width='215'
                                height='200'
                            >
                                <img src="src/assets/images/excluir-botao-action.png" alt="Excluir componente através do botão action" loading="lazy" />
                                <span className="legend">Potenciômetro sendo excluído através do botão de exclusão</span>
                            </ImageContainer>

                            <Paragraph>
                                Confirme a exclusão por fim apertando o botão “Confirmar”.
                            </Paragraph>

                            <ImageContainer
                                width='291'
                                height='220'
                            >
                                <img src="src/assets/images/confirm-exclusion.png" alt="Confirmar exclusão do componente através de pop-up" loading="lazy" />
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
                                <img src="src/assets/images/criando-fluxos1.png" alt="Criando fluxos maiores" loading="lazy" />
                                <span className="legend">Sensor de luz, sensor de temperatura, condicionais E e OU e LED adicionados ao painel de montagem. </span>
                            </ImageContainer>

                            <Paragraph>
                                Organize os elementos na tela da forma que deseja e crie as conexões, iniciando com componentes de entrada e terminando com componentes de saída.
                            </Paragraph>

                            <ImageContainer
                                width='291'
                                height='220'
                            >
                                <img src="src/assets/images/criando-fluxos2.png" alt="Criacao de fluxo finalizada" loading="lazy" />
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
                                <img src="src/assets/images/manuseando-fluxos1.png" alt="Alterando valor do componente" loading="lazy" />
                                <span className="legend">Sensor de luz recebendo valor 0 / Sensor de luz recebendo valor 50</span>
                            </ImageContainer>

                            <ImageContainer
                                width='515'
                                height='130'
                            >
                                <img src="src/assets/images/manuseando-fluxos2.png" alt="Alterando valor do componente" loading="lazy" />
                                <span className="legend">Componente de entrada sensor de luz, ao ter o valor modificado, faz componente de saída LED acender</span>
                            </ImageContainer>
                        </Row>
                    </ListItem>

                    <ListItem>
                        <Title size='24' >Conectando Dispositivos Físicos</Title>
                        <Row
                            gap='32'
                        >

                            <Paragraph>
                                Primeiramente é preciso ter em mãos um dispositivo físico, também chamado de endpoint. Clique no botão connect para conectá-lo com a plataforma. Ao fim do pareamento, uma tela de configuração irá aparecer.
                            </Paragraph>

                            <ImageContainer
                                width='273'
                                height='318'
                            >
                                <img src="src/assets/images/formulario-registro.png" alt="Formulario para registro de dispostivo físico, não preenchido" loading="lazy" />
                                <span className="legend">Formulário para registro de dispositivo físico</span>
                            </ImageContainer>

                            <Paragraph>
                                Preencha as áreas com o nome e a cor que deseja para o dispositivo, depois, selecione qual sensor está ligado ao endpoint. Para finalizar a configuração aperte o botão “Salvar”.
                            </Paragraph>

                            <ImageContainer
                                width='283'
                                height='350'
                            >
                                <img src="src/assets/images/formulario-registro-preenchido.png" alt="Formulario para registro de dispostivo físico, preenchido" loading="lazy" />
                                <span className="legend">Formulário preenchido para registro de dispositivo físico</span>
                            </ImageContainer>
                        </Row>

                    </ListItem>

                </OrderList>

            </UsingPlatformContent>

        </UsingPlatformContainer>
    )
}

export default UsingPlatform;