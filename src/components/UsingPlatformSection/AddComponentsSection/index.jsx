import imgAddComponentesEx1 from '@/assets/images/usando-plataforma/add-componentes-ex1.png';
import imgAddComponentesEx2 from '@/assets/images/usando-plataforma/add-componentes-ex2.png';

import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';

import * as C from "@/styles/common";
import * as AC from './styles';

const AddComponentsSection = () => {

  return (
    <C.ListItem
      lastChildMarginTop='64'
      id='adding-components'
    >

      <C.Title3>Adicionando componentes ao painel de montagem</C.Title3>
      <C.Row>
        <AC.AddComponentsContainer>
          <AC.AddComponentsCard
            textAlign="end"
          >
            <C.Paragraph size='16'>
              <span>1.</span>Selecione na barra lateral através dos botões circulares qual o tipo do componente desejado.
            </C.Paragraph>
            <C.ImageContainer
              width='300'
              height='400'
              className='container-img'
            >
              <img src={imgAddComponentesEx1} alt="Imagem 1 do passo a passo para selecionar componente de entrada" loading="lazy" />
              <span className="legend">Componente de entrada sendo selecionado</span>
            </C.ImageContainer>
          </AC.AddComponentsCard>

          <AC.AddComponentsCard>
            <C.ImageContainer
              width='300'
              height='400'
              className='container-img'
            >
              <img src={imgAddComponentesEx2} alt="Potenciômetro sendo arrastado" loading="lazy" />
              <span className="legend">Componente de Entrada “Potenciômetro” sendo arrastado para o painel de montagem.</span>
            </C.ImageContainer>

            <C.Paragraph size='16'>
              <span>2.</span>Com o tipo selecionado, escolha dentre os componentes apresentados. Clique no elemento, arraste e solte-o no painel de montagem. Arrastando tal componente é possível reposicioná-lo na tela como desejado.
            </C.Paragraph>
          </AC.AddComponentsCard>
        </AC.AddComponentsContainer>

        <ButtonEnableVideo
          text={'Adicionando componentes'}
          url='https://www.youtube.com/embed/DcHXYJX7kjY'
        />
      </C.Row>
    </C.ListItem>
  );
};

export default AddComponentsSection;
