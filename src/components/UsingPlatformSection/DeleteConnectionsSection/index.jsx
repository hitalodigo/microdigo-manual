import imgExcluindoConexao1 from '@/assets/images/usando-plataforma/excluindo-conexao-ex1.png';
import imgExcluindoConexao2 from '@/assets/images/usando-plataforma/excluindo-conexao-ex2.png';
import imgExcluindoConexao3 from '@/assets/images/usando-plataforma/excluindo-conexao-ex3.png';
import imgExcluindoConexao4 from '@/assets/images/usando-plataforma/excluindo-conexao-ex4.png';

import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';

import * as C from "@/styles/common";
import * as DC from "./styles";

const DeleteConnectionsSections = () => {
  return (
    <C.ListItem
      lastChildMarginTop='64'
      id='delete-connections'
    >

      <C.Title3>Excluindo conexões e componentes</C.Title3>
      <C.Row
        gap='32'
      >

        <DC.DeleteComponentListCard>
          <DC.DeleteComponentCard>
            <C.Column gap='24'>
              <C.Paragraph size='12'>
                <span>6.</span>Para excluir uma conexão, clique sobre a linha que deseja apagar, isso fará um botão de exclusão aparecer.
              </C.Paragraph>

              <C.ImageContainer
                width='100%'
                height='100%'
              >
                <img src={imgExcluindoConexao1} alt="Habilitando botão de excluir linha" loading="lazy" />
                <span className="legend">Botão de exclusão apareceu sobre linha amarela</span>
              </C.ImageContainer>
            </C.Column>

            <C.Paragraph size='12'>
              <span>7.</span>{`Aperte o botão de exclusão para apagar a conexão. Em caso de querer cancelar a ação de excluir conexão, clique sobre a linha como feito anteriormente, ao lado do botão.
                        Caso queira apagar o componente, clique no componente que deseja excluir, arraste-o para a barra lateral e solte.
                        `}
            </C.Paragraph>
          </DC.DeleteComponentCard>

          <DC.DeleteComponentCard>
            <C.ImageContainer
              width='170'
              height='220'
            >
              <img src={imgExcluindoConexao2} alt="Excluir componente através do arraste" loading="lazy" />
              <span className="legend">Potenciômetro sendo excluído através da barra lateral</span>
            </C.ImageContainer>

            <C.Paragraph size='12'>
              <span>8.</span> Outra forma de apagar um componente é clicando sobre ele e então clicando no símbolo de lixeira à esquerda superior desse.
            </C.Paragraph>
          </DC.DeleteComponentCard>

          <DC.DeleteComponentCard>
            <C.ImageContainer
              width='170'
              height='170'
            >
              <img src={imgExcluindoConexao3} alt="Excluir componente através do botão action" loading="lazy" />
              <span className="legend">Potenciômetro excluído pelo botão de exclusão</span>
            </C.ImageContainer>

            <C.Paragraph size='12'>
              <span>9.</span>Outra forma de apagar um componente é clicando sobre ele e então clicando no símbolo de lixeira à esquerda superior desse.
            </C.Paragraph>
          </DC.DeleteComponentCard>

          <DC.DeleteComponentCard>
            <C.ImageContainer
              width='180'
              height='180'
            >
              <img src={imgExcluindoConexao4} alt="Confirmar exclusão do componente através de pop-up" loading="lazy" />
              <span className="legend">Potenciômetro sendo excluído do painel de montagem</span>
            </C.ImageContainer>

            <C.Paragraph size='12'>
              <span>10.</span>Confirme a exclusão por fim apertando o botão “Confirmar”.
            </C.Paragraph>
          </DC.DeleteComponentCard>
        </DC.DeleteComponentListCard>

      </C.Row>

      <ButtonEnableVideo text={'Excluindo componentes'} />

    </C.ListItem>
  );
};

export default DeleteConnectionsSections;
