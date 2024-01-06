export default function Month(){
    const d = new Date()
    const month = d.getMonth()+1
    return <p>{month}</p>
}