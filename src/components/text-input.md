```jsx

    const Demo = () => {
        const [input, setInput] = React.useState("")

        return (
            <TextInput 
            id="username" 
            name="username" 
            type="text" 
            onChange={(e) => setInput(e.target.value)}
            />
        )
    }

<Demo />

```