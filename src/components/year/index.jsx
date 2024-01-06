export default function Year(){
    const d = new Date()
    const year = d.getFullYear()
    return <p>{year}</p>
}