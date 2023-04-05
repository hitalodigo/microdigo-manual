import {
    HomeContainer,
    HomeHeader,
    HomeSection,
    YouWillLearnContainer
} from "./styles";
import { Paragraph, Row, Title } from '../../styles/common'

function HomeContent() {
    return (
        <HomeContainer>
            <HomeHeader>
                <Title
                    size='40'
                >
                    Bem-vindo ao manual da plataforma microdigo!
                </Title>
            </HomeHeader>

            <HomeSection>
                <Row
                    gap='12'
                >
                    <Paragraph size='16'>
                        {`Esta página fornecerá uma introdução aos principais conceitos e funcionalidades existentes dentro da plataforma. 
                        Se você ainda não utilizou a plataforma, recomendamos que efetue a leitura do manual antes utilizá-la.`}
                    </Paragraph>

                    <Paragraph size='16'>Recomendamos também que para melhor utilizar a plataforma, esteja em uma conexão de internet estável e utilize os navegadores <strong>Google Chrome</strong>, <strong>Microsoft Edge</strong> ou <strong>Opera</strong></ Paragraph>
                </Row>
                <YouWillLearnContainer>
                    <h2>Você vai aprender</h2>
                    <ul>
                        <li>O que é o elemento Cabeçalho</li>
                        <li>O que é a Barra Lateral</li>
                        <li>O que são componentes</li>
                        <li>Quais são os tipos de componentes existentes</li>
                        <li>O que é o Painel de montagem</li>
                        <li>O que são fluxos, conectores e conexões</li>
                        <li>Como utilizar o zoom e faq</li>
                        <li>Como adicionar componentes ao painel de montagem</li>
                        <li>Como criar conexões</li>
                        <li>Como excluir conexões e componentes</li>
                        <li>Como criar fluxos</li>
                        <li>Como manusear fluxos criados</li>
                    </ul>
                </YouWillLearnContainer>
            </HomeSection>

        </HomeContainer>
    )
}

export default HomeContent;