import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'


function CartItems({ items, setCartItems }) {

    const changeItemQuantity = (e, index) => {
        const newItems = [...items]
        newItems[index].quantity = e.target.value;
        setCartItems(newItems);
    }

    const deleteItems = (indextoDelete) => {
        const newItems = items.filter((value, index)=>{
            return index !== indextoDelete;
        })
        setCartItems(newItems);
    }

    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr></hr>
            <div className="CartItems-items">
                {items.map((item, index) =>
                    <CartItem 
                        index={index}
                        item={item}
                        key={index}
                        changeItemQuantity={changeItemQuantity}
                        deleteItems={deleteItems}
                    />
                )}
            </div>
        </div>
    )
}

export default CartItems
