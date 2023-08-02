import imgCriandoConexao1 from '@/assets/images/usando-plataforma/criando-conexao-ex1.png';
import imgCriandoConexao2 from '@/assets/images/usando-plataforma/criando-conexao-ex2.png';
import imgCriandoConexao3 from '@/assets/images/usando-plataforma/criando-conexao-ex3.png';

import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';

import * as C from "@/styles/common";
import * as CC from './styles';

const CreateConnectionsSection = () => {
  return (
    <C.ListItem
      lastChildMarginTop='64'
      id='creation-connections'
    >
      <C.Title3>Criando conexões</C.Title3>
      <C.Row
        gap='32'
      >
        <CC.CreateConnectionListCard>

          <CC.CreateConnectionCard>
            <C.Paragraph size='16'>
              <span>3.</span>Certifique-se de que há dois componentes com conectores de tipos diferentes na tela, por exemplo, se adicionar um componente de entrada (conector à direita), pode acrescentar uma condicional ou componente de saída (que contém conectores à esquerda).
            </C.Paragraph>

            <C.ImageContainer
              width='320'
              height='140'
              className='container-img'
            >
              <img src={imgCriandoConexao1} alt="Potenciometro e condicional E no painel de montagem" loading="lazy" />
              <span className="legend">Potenciômetro e condicional E no painel de montagem.</span>
            </C.ImageContainer>
          </CC.CreateConnectionCard>

          <CC.CreateConnectionCard>
            <C.Paragraph size='16'>
              <span>4.</span>Clique em um dos conectores e arraste, assim será visível o surgimento de uma linha amarela.
            </C.Paragraph>

            <C.ImageContainer
              width='320'
              height='140'
              className='container-img'
            >
              <img src={imgCriandoConexao2} alt="Criação da linha de conexão entre potenciometro e componente E" loading="lazy" />
              <span className="legend">Interação com conector à direita do Potenciômetro criando uma linha de conexão</span>
            </C.ImageContainer>
          </CC.CreateConnectionCard>

          <CC.CreateConnectionCard>
            <C.Paragraph size='16'>
              <span>5.</span>Para criar a conexão, solte a linha amarela sobre o conector do segundo componente. Mas, caso queira cancelar a ação, basta soltar a linha em qualquer espaço vazio do painel de montagem.
            </C.Paragraph>

            <C.ImageContainer
              width='320'
              height='140'
              className='container-img'
            >
              <img src={imgCriandoConexao3} alt="Criação da linha finalizada" loading="lazy" />
              <span className="legend">Conexão entre dois componentes criada</span>
            </C.ImageContainer>
          </CC.CreateConnectionCard>
        </CC.CreateConnectionListCard>

      </C.Row>

      <ButtonEnableVideo text={'Criando conexões'} />
    </C.ListItem>
  );
};

export default CreateConnectionsSection;
