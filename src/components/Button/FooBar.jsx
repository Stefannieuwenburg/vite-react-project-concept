
// New way to do onClick
const handleClick = (value) => () => console.log(value);

export const FooBar = () => <button style={{ color: "green" }} onClick={handleClick("Bar")}>Speak</button>;
