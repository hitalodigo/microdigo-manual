import styled from "styled-components";

const imageAlignTypes = {
  'left': () => '0 auto 0 0',
  'right': () => '0 0 0 auto',
  'center': () => '0 auto'
}

const Title = styled.h1`
    font-size: 4.8rem;

    @media (max-width: 768px) {
      font-size: 4rem;
    }

    @media (max-width: 480px) {
      font-size: 3rem;
    }
`

const Title2 = styled.h2`
    font-size: 4rem;

    @media (max-width: 768px) {
      font-size: 3.2rem;
    }

    @media (max-width: 480px) {
      font-size: 2.8rem;
    }
`

const Title3 = styled.h3`
    font-size: 3.2rem;

    @media (max-width: 768px) {
      font-size: 2.8rem;
    }

    @media (max-width: 480px) {
      font-size: 2.4rem;
    }
`

const Title4 = styled.h4`
    font-size:2.8rem;

    @media (max-width: 768px) {
      font-size: 2.4rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
`

const Title5 = styled.h5`
    font-size: 2.4rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
`

const Row = styled.div`

    display: flex;
    flex-direction: ${({ orientation }) => orientation ? orientation : 'column'};
    align-items: ${({ orientation }) => orientation === 'row' ? 'center' : 'flex-start'};
    gap: ${({ gap }) => gap ? `${gap / 10}rem` : 0};
    flex-wrap:${({ wrap }) => wrap ? wrap : 'nowrap'};
`

const Column = styled.div`
    width: ${({ width }) => width ? `${width / 10}rem` : '100%'};
    display: flex;
    flex-direction: column;
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};;
    gap: ${({ gap }) => gap ? `${gap / 10}rem` : 0};
`

const Paragraph = styled.p`
    font-size: ${({ size }) => size ? `${size / 10}rem` : 0};
    text-align: ${({ textAlign }) => textAlign ? textAlign : 'initial'};
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width ? `${props.width / 10}rem` : 0};
    height: ${(props) => props.height ? `${props.height / 10}rem` : 0};
    margin: ${({ align }) => {
    const typeAlign = imageAlignTypes[align];

    if (!typeAlign) return '0 auto';

    return typeAlign();
  }};
    gap:1.2rem;

    img{
        width: 100%;
        height: 100%;
    }

    .legend{
        width:100%;
        font-size: 1.2rem;
        text-align: center;
        font-weight: bold;
    }

`

const OrderList = styled.ol`
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => gap ? `${gap / 10}rem` : '4.4rem'};
    padding-left: 4rem;

`

const DesorderList = styled.ul`
    padding-left: 4rem;
`

const ListItem = styled.li`
    font-size: 2rem;

    > h1 + div,
    > h2 + div,
    > h3 + div,
    > h4 + div,
    > h5 + div{
        margin-top: 3.2rem;
    }

    > div + div,
    button:last-child{
        margin-top: ${({ lastChildMarginTop }) => lastChildMarginTop ? `${lastChildMarginTop / 10}rem` : '4.4rem'};
    }

`

const SequencyNumber = styled.span`
    width: 100%;
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
    color: var(--red);
`
const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`


export {
  Title,
  Title2,
  Title3,
  Title4,
  Title5,
  Row,
  Column,
  Paragraph,
  ImageContainer,
  OrderList,
  DesorderList,
  ListItem,
  SequencyNumber,
  IframeContainer
}
