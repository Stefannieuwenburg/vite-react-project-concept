
export const ButtonOnclick = () => {
    const printHello = () => {
        console.log('hello')
    }
    return <button onClick={printHello}style={{ color:"red"}}>click me</button>;
}
 
