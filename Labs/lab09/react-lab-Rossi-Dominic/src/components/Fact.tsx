import { useEffect, useState, React } from 'react';
function Fact() {
    const [data, setData] = useState({fact: ""});
    useEffect(() => {
    async function getFact() {
        const response = await fetch('https://catfact.ninja/fact')
        const mydata = await response.json()
        setData(mydata)
    }
    getFact()
}, []) //The [] causes this to run only once
return <p>{data.fact}</p>
}
export default Fact;