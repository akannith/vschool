import Item from './Item'

export default function ItemList(props) {

    const {items} = props
        console.log(items)
    const itemElements = items.map((item, _id) => {
        return (
            <Item {...item} 
            key = {item._id} 
            />
        )
    })
        
    return(
        <div>
            {itemElements}
        </div>
    )
}