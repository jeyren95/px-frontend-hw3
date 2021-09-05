```jsx
    const Demo = () => {
        return (
            <div className="flex gap-5"> 
                <ListingItem 
                title="Bike"
                description="Juice Drink Concept"
                price={938}
                condition="used_fair"
                imageUrl="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
                availability="single-item"
                onlyOne
                onClick={() => alert("Adding item to cart...")}
                />

                <ListingItem 
                title="Tuna"
                description="NIKE FREE"
                price={999}
                condition="used_fair"
                imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
                availability="in-stock"
                numOfStock={2}
                onClick={() => alert("Adding item to cart...")}
                    />    
                
            </div>          
        )
    }

<Demo />
```