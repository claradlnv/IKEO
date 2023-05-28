import { styled } from "styled-components"

const CardWrapper = styled.div`
    height: 400px;
    width: 300px;
    border-radius: 12px;
    border: 1px solid black;
`

const CardImage = styled.img`
    margin-inline: 25px;
    margin-block-start: 22px;
    margin-block-end: 23px;
    width: 250px;
    height: 250px;
`

const CardName = styled.span`
    margin-inline-start: 25px;
`

function CardItem({name, price, image}){
    return (
        <CardWrapper>
            <CardImage src={image} alt={name} />
            <CardName>{name} - {price}</CardName>
        </CardWrapper>
    )
}

export default CardItem