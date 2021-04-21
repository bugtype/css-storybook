import React from 'react';

import './hover-animation.css';

export const HoverAnimation = () => (

    <div className="hover-animation-continer">
        <ul className="hover-animation">
            <li>
                <a href="#">
                    {/* <i className="fa fa-twitter" aria-hidden="true" /> */}
                    <div>
                        A
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        B
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        C
                    </div>
                </a>
            </li>
        </ul>
    </div>
);
