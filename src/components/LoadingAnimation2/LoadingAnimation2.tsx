import React from 'react';

import './loading-animation.css';

export const LoadingAnimation2 = () => {
    const styles = Array(20).fill(0).map( (_,index) =>  ( { "--i": index+1 } as React.CSSProperties) );

    return (
        <div className="loadingBox">
            <section>
                <div className="loader">
                    {styles.map( style =><span style={style}> </span>)}
                </div>
            </section>
        </div>
    );
    
}