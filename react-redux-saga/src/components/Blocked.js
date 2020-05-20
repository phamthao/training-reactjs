import React from 'react';

function Blocked() {
    let d = new Date();
    localStorage.setItem('lockTime', d.setTime(d.getTime() + (5*1000)));

    return (
        <div>
            <h3>Blocked 5s</h3>
        </div>
    );
}

export default Blocked;