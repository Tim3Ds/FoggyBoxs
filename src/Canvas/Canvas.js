import React from 'react';
import './canvas.css';
import {Layer, Rect, Circle, Stage, Group } from 'react-konva';
import Konva from 'konva';

class Canvas extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            color: 'green',
            width: 500,
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
            <div className='frame' id="frame" >
                <Stage width={this.state.width} height={this.state.height}>
                    <Layer className="dots-inBoxes">
                        <Rect
                            x={10} y={10} width={50} height={50}
                            fill={this.state.color}
                            shadowBlur={10}
                            onClick={this.handleClick}
                        />
                        <Circle
                            x={200} y={100} radius={30}
                            fill='black'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={300} y={100} radius={30}
                            fill='black'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={400} y={100} radius={30}
                            fill='black'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={200} y={100} radius={30}
                            fill='black'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={200} y={200} radius={30}
                            fill='black'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                        <Circle
                            x={200} y={300} radius={30}
                            fill='black'
                            strokeWidth={this.state.isMouseInside ? 5 : 1}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                    </Layer>
                </Stage>
            </div>
        )
    }
}
export default Canvas;