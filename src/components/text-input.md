```jsx

    const Demo = () => {
        const [input, setInput] = React.useState("")

        return (
            <> 
                <div className="mb-5">
                    <TextInput 
                    placeholder="Default pink focus color"
                    id="username" 
                    name="username" 
                    type="text" 
                    onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <TextInput 
                    placeholder="Blue focus color"
                    focusColor="blue"
                    id="username" 
                    name="username" 
                    type="text" 
                    onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <TextInput 
                    placeholder="Yellow focus color"
                    focusColor="yellow"
                    id="username" 
                    name="username" 
                    type="text" 
                    onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </>
        )
    }

<Demo />

```