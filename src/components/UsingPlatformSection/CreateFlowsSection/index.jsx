import imgCriandoFluxos1 from '@/assets/images/usando-plataforma/criando-fluxo-ex1.png';
import imgCriandoFluxos2 from '@/assets/images/usando-plataforma/criando-fluxo-ex2.png';

import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';

import * as C from "@/styles/common";
import * as CF from "./styles";

const CreateFlowsSection = () => {
  return (
    <C.ListItem id='create-flows'>

      <C.Title3 >Criando fluxos</C.Title3>
      <C.Row
        gap='32'
      >
        <CF.CreateFlowContainer>
          <C.Column
            width='50%'
            gap='24'
          >
            <C.SequencyNumber>11.</C.SequencyNumber>
            <C.ImageContainer
              width='480'
              height='300'
              className='container-img'
            >
              <img src={imgCriandoFluxos1} alt="Criando fluxos maiores" loading="lazy" />
              <span className="legend">Sensor de luz, sensor de temperatura, condicionais E e OU e LED adicionados ao painel de montagem. </span>
            </C.ImageContainer>
            <C.Paragraph
              size='14'
              textAlign='center'
            >
              Arraste para o painel de montagem os componentes desejados. Para criar um fluxo é necessário um componente de entrada e um de saída, certifique-se que dentre os componentes escolhidos haja pelo menos um de cada.
            </C.Paragraph>
          </C.Column>


          <C.Column
            width='50%'
            gap='24'
          >
            <C.SequencyNumber>12.</C.SequencyNumber>
            <C.ImageContainer
              width='480'
              height='280'
              className='container-img'
            >
              <img src={imgCriandoFluxos2} alt="Criacao de fluxo finalizada" loading="lazy" />
              <span className="legend">Fluxo criado</span>
            </C.ImageContainer>

            <C.Paragraph size='14'>
              Organize os elementos na tela da forma que deseja e crie as conexões, iniciando com componentes de entrada e terminando com componentes de saída.
            </C.Paragraph>
          </C.Column>
        </CF.CreateFlowContainer>

        <ButtonEnableVideo
          text={'Criando fluxos'}
          url='https://www.youtube.com/embed/Om96P9YDypM'
        />

      </C.Row>
    </C.ListItem>
  );
};

export default CreateFlowsSection;
