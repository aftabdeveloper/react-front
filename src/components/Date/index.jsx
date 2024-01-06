export default function Dates(){
    let d = new Date()
    let date = d.toLocaleDateString()
    return <p>{date}</p>

}