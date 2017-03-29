import React from 'react';
import './canvas.css';
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
            <div className='frame' id="frame" >
                <Stage width={this.state.width} height={this.state.height}>
                    <Layer className="dots-inBoxes">
                        <Rect
                            x={10} y={10} width={50} height={50}
                            fill={this.state.color1}
                            shadowBlur={10}
                            onClick={this.handleClick}
                        />
                        <Circle
                            x={200} y={100} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={300} y={100} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={400} y={100} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={300} y={200} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={200} y={200} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={200} y={300} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Rect
                            x={390} y={200} width={20} height={100}
                            fill={this.state.color1}
                            shadowBlur={10}
                            onClick={this.handleClick}
                        />
                        <Rect
                            x={390} y={100} width={20} height={100}
                            fill={this.state.color2}
                            shadowBlur={10}
                            onClick={this.handleClick}
                        />
                        <Rect
                            x={200} y={290} width={100} height={20}
                            fill={this.state.color2}
                            shadowBlur={10}
                            onClick={this.handleClick}
                        />
                        <Rect
                            x={200} y={90} width={100} height={20}
                            fill={this.state.color2}
                            shadowBlur={10}
                            onClick={this.handleClick}
                        />
                    </Layer>
                </Stage>
            </div>
        )
    }
}
export default CanvasElm;