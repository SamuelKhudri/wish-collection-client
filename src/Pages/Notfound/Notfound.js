import React from 'react';
import './Notfound.css';
import ntf from '../../image/notfound.png';

const Notfound = () => {
    return (
        <div class="notfound">
            <img className='img-fluid' src={ntf} alt="" />
            <h3>The page you are looking for is not available</h3>
        </div>
    );
};

export default Notfound;