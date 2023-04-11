import styled from "styled-components";

const imageAlignTypes = {
    'left': () => '0 auto 0 0',
    'right': () => '0 0 0 auto',
    'center': () => '0 auto'
}

const Title = styled.h1`
    font-size: ${(props) => props.size ? `${props.size / 10}rem` : 0};
`

const Row = styled.div`

    display: flex;
    flex-direction: ${({ orientation }) => orientation ? orientation : 'column'};
    align-items: ${({ orientation }) => orientation === 'row' ? 'center' : 'flex-start'};
    gap: ${({ gap }) => gap ? `${gap / 10}rem` : 0};
`

const Column = styled.div`
    width: ${({ width }) => width ? width : '100%'};
    display: flex;
    flex-direction: column;
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};;
    gap: ${({ gap }) => gap ? `${gap / 10}rem` : 0};
`

const Paragraph = styled.p`     
    font-size: ${({ size }) => size ? `${size / 10}rem` : 0};
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${(props) => props.width ? `${props.width / 10}rem` : 0};
    height: ${(props) => props.height ? `${props.height / 10}rem` : 0};
    margin: ${({ align }) => {
        const typeAlign = imageAlignTypes[align];

        if (!typeAlign) return '0 auto';

        return typeAlign();
    }};

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

    > h1 + div{
        margin-top: 3.2rem;
    }

`

export {
    Title,
    Row,
    Column,
    Paragraph,
    ImageContainer,
    OrderList,
    DesorderList,
    ListItem
}