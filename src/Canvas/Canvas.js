import React from 'react';
import './canvas.css';
import {Layer, Rect, Stage} from 'react-konva';
import Konva from 'konva';

class Canvas extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            color: 'green',
            width: 300,
            height: 500,
            touch: {
                x: 0,
                y: 0
            }
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    }
    render(){
        return(
            <div className='frame' ref="frame">
                <Stage width={this.state.width} height={this.state.height}>
                    <Layer>
                        <Rect
                            x={10} y={10} width={50} height={50}
                            fill={this.state.color}
                            shadowBlur={10}
                            onClick={this.handleClick}
                        />
                    </Layer>
                </Stage>
            </div>
        )
    }
}
export default Canvas;