import imgPainelMontagem from '@/assets/images/painel-montagem/example-painel-montagem.png';
import imgFluxos from '@/assets/images/painel-montagem/fluxos.png';
import imgConectoresConexoes from '@/assets/images/painel-montagem/conectores-conexoes.png';
import imgBotaoZoom from '@/assets/images/botoes/botao-zoom.png';
import imgZoomIn from '@/assets/images/painel-montagem/zoom-in.png';
import imgZoomOut from '@/assets/images/painel-montagem/zoom-out.png';
import imgBotaoFaq from '@/assets/images/botoes/botao-faq.png';
import imgMovimentacaoEx1 from '@/assets/images/painel-montagem/movimentacao-ex1.png';
import imgMovimentacaoEx2 from '@/assets/images/painel-montagem/movimentacao-ex2.png';

import ButtonEnableVideo from '@/components/shared/ButtonEnableVideo';

import * as C from "@/styles/common";
import * as M from "./styles";

import { useAnchor } from '@/hooks/useAnchors';
import { useRef, useEffect, useState } from 'react';

function MoutingPanelItem() {

  const { registerSection } = useAnchor();

  const [sectionRefs] = useState({
    moutingPanel: {
      name: 'painel_de_montagem',
      ref: useRef(null)
    },
    flowsConnectorsConnections: {
      name: 'fluxos_conectores_conexoes',
      ref: useRef(null)
    },
    zoomFaq: {
      name: 'zoom_faq',
      ref: useRef(null)
    },
    movement: {
      name: 'movimentacao',
      ref: useRef(null)
    }
  });

  useEffect(() => {
    const listRefs = Object.values(sectionRefs);

    listRefs.forEach(element => {
      registerSection({
        name: element.name,
        ref: element.ref.current
      })
    })

  }, [sectionRefs]);

  return (
    <M.MoutingPanelContainer
      id='painel_de_montagem'
      ref={sectionRefs.moutingPanel.ref}
    >
      <M.MoutingPanelHeader>
        <C.Title3>Painel de montagem</C.Title3>
      </M.MoutingPanelHeader>

      <M.MoutingPanelContent>
        <C.Row gap='12'>
          <C.Paragraph size='16'>Esta é a área onde serão criados os fluxos. </ C.Paragraph>

          <C.ImageContainer
            width='100%'
            height='100%'
          >
            <img
              src={imgPainelMontagem}
              alt="Ilustação do painel de montagem"
              loading="lazy"
            />
            <span className="legend">Painel de montagem</span>
          </C.ImageContainer>

          <ButtonEnableVideo
            text={'Painel de montagem'}
            url={'https://www.youtube.com/embed/67py8B5ieZM'}
          />

        </C.Row>

        <C.OrderList gap='80'>
          <C.ListItem
            id='fluxos_conectores_conexoes'
            ref={sectionRefs.flowsConnectorsConnections.ref}
          >
            <C.Row
              gap='24'

            >
              <C.Title4 >Fluxos</C.Title4>

              <M.MoutingPanelListCard>
                <M.MoutingPanelCard>
                  <C.ImageContainer
                    width='100%'
                    height='100%'
                  >
                    <img
                      src={imgFluxos}
                      alt="Ilustação do painel de montagem"
                      loading="lazy"
                    />
                    <span className="legend">Representação dos fluxos</span>
                  </C.ImageContainer>
                  <C.Paragraph size='14'>
                    Um fluxo sempre será montado pelo usuário no painel de montagem. Pode ser descrito como o processamento de certa informação, portanto, após a criação da lógica o usuário deverá passar ao computador certo dado, que será processado e então devolvido. Um fluxo sempre iniciará a partir de um componente de entrada e terminará em um de saída.
                  </ C.Paragraph>

                </M.MoutingPanelCard>

                <M.MoutingPanelCard>
                  <C.ImageContainer
                    width='100%'
                    height='100%'
                  >
                    <img
                      src={imgConectoresConexoes}
                      alt="Ilustação da representação dos conectores e conexoes"
                      loading="lazy"
                    />

                    <span className="legend">Conexão e conectores</span>
                  </C.ImageContainer>

                  <C.Paragraph size='14'>
                    Quando arrastar um componente da barra lateral ao painel de montagem este irá ter um conector, representado por um pequeno ponto ao lado direito, esquerdo ou em ambos os lados, e é por meio deles que serão feitas as conexões. Um conector à direita tem função de transmitir algum dado, enquanto um à esquerda irá recebê-lo, portanto, os fluxos sempre serão feitos a partir da junção desses dois conectores, estando ambos em elementos diferentes.
                  </ C.Paragraph>
                </M.MoutingPanelCard>
              </M.MoutingPanelListCard>

              <ButtonEnableVideo
                text={'Fluxos, conectores e conexões'}
                url={'https://www.youtube.com/embed/0AamXQvrZDg'}
              />

            </C.Row>
          </C.ListItem>

          <C.ListItem
            id='zoom_faq'
            ref={sectionRefs.zoomFaq.ref}
          >
            <C.Title4>Zoom e Faq</C.Title4>

            <C.Row
              gap='12'
            >


              <M.ZoomContainer>

                <C.Column gap='24'>
                  <C.Paragraph size='16'>
                    Ao selecionar o botão de zoom, no canto direito inferior da tela, um slider se tornará visível à direita da interface; ao arrastá-lo é possível aproximar e afastar os componentes.
                  </ C.Paragraph>
                  <C.ImageContainer
                    width='100'
                    height='100'
                  >
                    <img
                      src={imgBotaoZoom}
                      alt="Ilustação do botao de zoom"
                      loading="lazy"
                      title="Botão de zoom"
                    />

                  </C.ImageContainer>
                </C.Column>

                <C.Column gap='24'>
                  <C.ImageContainer
                    width='400'
                    height='220'
                    className='container-img'
                  >
                    <img
                      src={imgZoomIn}
                      alt="Ilustação do zoom in"
                      loading="lazy"
                      title="Zoom in"
                    />
                    <span className="legend">Exemplo de zoom mínimo</span>
                  </C.ImageContainer>

                  <C.ImageContainer
                    width='400'
                    height='220'
                    className='container-img'
                  >
                    <img
                      src={imgZoomOut}
                      alt="Ilustação do zoom out"
                      loading="lazy"
                      title="Zoom out"
                    />

                    <span className="legend">Exemplo de zoom máximo</span>

                  </C.ImageContainer>


                </C.Column>
              </M.ZoomContainer>
            </C.Row>

            <C.Row
              gap='12'
            >

              <C.Paragraph size='16'>
                Do inglês “Frequently Asked Questions”, que significa basicamente perguntas frequentes, ao selecionar este botão aparecerá uma área de perguntas e respostas para sanar possíveis dúvidas em relação ao funcionamento da plataforma.
              </ C.Paragraph>

              <C.ImageContainer
                width='100'
                height='100'
              >
                <img
                  src={imgBotaoFaq}
                  alt="Ilustação do botão de faq"
                  loading="lazy"
                  title="Botão de faq"
                />

              </C.ImageContainer>
            </C.Row>

            <ButtonEnableVideo
              text={'Zoom e FAQ'}
              url={'https://www.youtube.com/embed/-8JV-SIpr50'}
            />

          </C.ListItem>

          <C.ListItem
            id='movimentacao'
            ref={sectionRefs.movement.ref}
          >
            <C.Row gap='12'>
              <C.Title4>Movimentação</C.Title4>
              <C.Paragraph size='14'>
                É possível clicar e arrastar a área em branco e assim se mover pelo painel de montagem.
              </C.Paragraph>

              <M.MovimentationContainer>
                <C.ImageContainer
                  width='50%'
                  height='50%'
                  className='container-img'
                >
                  <img
                    src={imgMovimentacaoEx1}
                    alt="Ilustação do botão de faq"
                    loading="lazy"
                    title="Botão de faq"
                  />

                </C.ImageContainer>

                <C.ImageContainer
                  width='50%'
                  height='50%'
                  className='container-img'
                >
                  <img
                    src={imgMovimentacaoEx2}
                    alt="Ilustação do botão de faq"
                    loading="lazy"
                    title="Botão de faq"
                  />

                </C.ImageContainer>
              </M.MovimentationContainer>

              <ButtonEnableVideo
                text={'Movimentação'}
                url={'https://www.youtube.com/embed/EEG7heLEqR8'}
              />

            </C.Row>
          </C.ListItem>
        </C.OrderList>

      </M.MoutingPanelContent>
    </M.MoutingPanelContainer>
  )
}

export default MoutingPanelItem;
