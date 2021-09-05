```jsx
const Demo = () => {
    return (
        <>
            <CartItem 
            title="Bike"
            imageUrl="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
            price={938}
            quantity={1}
            onClick={() => alert("Deleting item from cart...")}        
            />
            <CartItem 
            title="Tuna"
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
            price={999}
            quantity={1}
            onClick={() => alert("Deleting item from cart...")}        
            />
        </>
    )
}

return <Demo />


```