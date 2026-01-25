import { useState } from 'react';
import { useEffect } from 'react';

type props = { subheading : string, paragraph : string}

export const HeadingWithText = ({ subheading, paragraph } : props ) : any => {
    const [count, setCount] = useState(0);
    setCount(1);

    const [check, setCheck] = useState(true);
    // setCheck(!check);
    const turnOnOrOff = () => {
        setCheck(!check);
    }

    useEffect(() => {
        console.log("Runs obly when count changes");
    }, [count])

    useEffect(() => {
        if (check) {
            console.log("I am on.")
        } else {
            console.log("I am off.")
        }
        
    }, [check])

    return <div className="flex flex-col">
        <h6>{subheading}</h6>
        <p>{paragraph}</p>
    </div>;
}