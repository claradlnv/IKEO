import { furnitureList } from "../datas/furnitureList"
import "../styles/ItemList.css"
import CardItem from "./CardItem"
import styled from 'styled-components'

const DivItemList = styled.div`
    display: flex;
    position: absolute;
    left: 63px;
    top: 150px;
    width: 1344px;
    height: 827px;
    flex-wrap: wrap;
    column-gap: 45px;
    row-gap: 25px;
    justify-content: flex-start;
`

function ItemList(){
    return (
        <DivItemList>
                {furnitureList.map((furniture, index) => 
                   <CardItem 
                        key={`${furniture.name}-${index}`}
                        name={furniture.name}
                        price={furniture.price}
                        image={furniture.image}
                   />
                )}
        </DivItemList>
    )
}

export default ItemList