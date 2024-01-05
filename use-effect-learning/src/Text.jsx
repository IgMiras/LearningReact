import { useState, useEffect } from 'react'

const Text = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        console.log('Component MOUNTED')

        return () => {
            console.log("Component UNMOUNTED")
        }
    }, [])

    return (
        <div>
            <input type="text" 
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />

            <h1>{text}</h1>
        </div>
    )
}

export default Text