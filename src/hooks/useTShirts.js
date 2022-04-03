import { useEffect, useState } from "react"

const useTShirts = () => {
    const [tShirts, serTShirts] = useState([]);

    useEffect(() => {
        fetch('tshirts.json')
            .then(res => res.json())
            .then(data => serTShirts(data));
    }, [])
    return [tShirts, serTShirts];
}

export default useTShirts;