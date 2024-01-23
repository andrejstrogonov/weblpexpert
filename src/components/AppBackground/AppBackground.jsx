import React from 'react';
import './style.css';

import Background1 from './application-background/neom-XDtzu1D2P8c-unsplash.jpg';
import Background2 from './application-background/neom-kXbit_yx8t4-unsplash.jpg';
import Background3 from './application-background/neom-wTmGtmGQCjQ-unsplash.jpg';

const AppBackground = () => {
    return (
        <React.StrictMode>
            <picture id="" className="applicationBackground" src="">
                <source src="" type="" />
                <img className="applicationBackground-img" src={Background3} />
            </picture>
        </React.StrictMode>
    );
};

export default AppBackground;
