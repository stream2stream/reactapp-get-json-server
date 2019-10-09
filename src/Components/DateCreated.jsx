import React, { useState, useEffect } from 'react';

const DateCreated = props => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        props.updateDateCreated(date);
    });

    return (
        <span>&nbsp;{!props.dateCreated ?
            `${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`
            :
            `${props.dateCreated.toLocaleDateString()} @ ${props.dateCreated.toLocaleTimeString()}`}
        </span>
    );
};

export default DateCreated;
