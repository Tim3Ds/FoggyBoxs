import React from 'react';
import {Layer, Rect, Circle, Stage } from 'react-konva';
import Konva from 'konva';

class CanvasElm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            color0: 'green',
            color1: 'red',
            color2: 'green',
            width: innerWidth*.8,
            height: innerHeight*.8,
            touch: {
                x: 0,
                y: 0
            }
        };
        this.handleClick = this.handleClick.bind(this);
        
    }
    


    handleClick() {
      this.setState({
        color0: Konva.Util.getRandomColor(),
        color1: Konva.Util.getRandomColor(),
        color2: Konva.Util.getRandomColor()
      });
    }
    render(){
        return(
            <Stage width={200} height={100}>
                <Layer>
                    <Circle
                        x={50} y={50} radius={30}
                        fill='#333'
                        shadowBlur='5'
                        strokeWidth={this.state.isMouseInside ? 5 : 1}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    />
                    <Circle
                        x={150} y={50} radius={30}
                        fill='#333'
                        shadowBlur='5'
                        strokeWidth={this.state.isMouseInside ? 5 : 1}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    />
                    <Rect
                        x={50} y={40} width={100} height={20}
                        fill={this.state.color2}
                        shadowBlur={20}
                        onClick={this.handleClick}
                    />
                </Layer>
            </Stage>
        )
    }
}
export default CanvasElm;