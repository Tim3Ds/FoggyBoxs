import React from 'react';
import './canvas.js';

class Form extends React.Component{
    constructor(props){
        super(props);

    }
    
    render(){
        return(
            <div className='canvas'>
                <canvas id="myCanvas" width="200" height="100">
                    browser support missing
                </canvas>
            </div>
        )
    }
}