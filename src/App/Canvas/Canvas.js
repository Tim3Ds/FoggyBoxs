import React from 'react';
import './canvas.css';

class Canvas extends React.Component{
    // constructor(props){
    //     super(props);

    // }
    
    render(){
        return(
            <div className='frame'>
                <div className='glass'>
                    <canvas id="dots-inBoxes">
                        browser support missing
                    </canvas>
                </div>
            </div>
        )
    }
}
export default Canvas;