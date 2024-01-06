export default function Time(){
    const date = new Date()
    const time = date.toLocaleTimeString()
    return <p>{time}</p>

}