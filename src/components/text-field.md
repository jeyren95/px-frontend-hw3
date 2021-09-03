```jsx
    const Demo = () => {
        const [input, setInput] = React.useState("")

        return (
            <>
                <div className="mb-5">
                    <TextField 
                    label="Username" 
                    id="username" 
                    type="text"
                    name="username"
                    onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <TextField 
                    label="Password" 
                    id="password" 
                    type="password"
                    name="password"
                    onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </>
            
        )
    }

<Demo />

```