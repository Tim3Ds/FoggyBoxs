import React from 'react';
import './canvas.css';

class Canvas extends React.Component{
    // constructor(props){
    //     super(props);

    // }
    
    render(){
        return(
            <div className='foggy'>
                <canvas id="dots-inBoxes" width="400" height="300">
                    browser support missing
                </canvas>
            </div>
        )
    }
}
export default Canvas;