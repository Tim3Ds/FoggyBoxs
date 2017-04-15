import React from 'react';
import './canvas.css';
import {Layer, Rect, Circle, Stage } from 'react-konva';
import Konva from 'konva';

class CanvasElm extends React.Component{
    constructor(props){
        super(props);
        this.defaultColor = '#333';
        this.state = {
            color0: this.defaultColor,
            color1: this.defaultColor,
            color2: this.defaultColor,
            color3: this.defaultColor,
            color4: this.defaultColor,
            color5: this.defaultColor,
            color6: this.defaultColor,
            color7: this.defaultColor,
            color8: this.defaultColor,
            color9: this.defaultColor,
            color10: this.defaultColor,
            color11: this.defaultColor,
            active0: false,
            active1: false,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            active6: false,
            active7: false,
            active8: false,
            active9: false,
            active10: false,
            active11: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false,
            width: innerWidth*.8,
            height: innerHeight*.8,
            p1color: "red",
            p2color: "green",
            turn: 1,
        };
        this.handleClick = this.handleClick.bind(this);
        this.getNewPlayerColor= this.getNewPlayerColor.bind(this);
    }
    
    getNewPlayerColor(id){
        if(id === 1){
            this.setState({
                p1color: Konva.Util.getRandomColor()
            })
        }else{
            this.setState({
                p2color: Konva.Util.getRandomColor()
            })
        }
    }

    handleClick(id, nodeA, nodeB) {
        let color = "color" + id;
        let activate = "active" + id;
        if(!this.state[activate]){
            if(this.state.turn === 1){
                this.setState({
                    [color]: this.state.p1color,
                    [activate]: true,
                    turn: 2,
                });
            }else{
                this.setState({
                    [color]: this.state.p2color,
                    [activate]: true,
                    turn: 1,
                });
            }
        }
    }
    render(){
        return(
            <div className='frame' id="frame" >
                <Stage width={this.state.width} height={this.state.height}>
                    <Layer className="dots-inBoxes">
                        <Rect
                            x={10} y={10} width={100} height={50}
                            fill={this.state.p1color}
                            shadowBlur={10}
                            onClick={()=>{this.getNewPlayerColor(1)}}
                        />
                        <Rect
                            x={210} y={10} width={100} height={50}
                            fill={this.state.p2color}
                            shadowBlur={10}
                            onClick={()=>{this.getNewPlayerColor(2)}}
                        />
                        <Circle
                            x={100} y={100} radius={30}
                            fill='#333'
                            shadowBlur='5'
                        />
                        <Circle
                            x={200} y={100} radius={30}
                            fill='#333'
                            shadowBlur='5'
                        />
                        <Circle
                            x={300} y={100} radius={30}
                            fill='#333'
                            shadowBlur='5'
                        />
                        <Circle
                            x={100} y={200} radius={30}
                            fill='#333'
                            shadowBlur='5'
                        />
                        <Circle
                            x={200} y={200} radius={30}
                            fill='#333'
                            shadowBlur='5'
                        />
                        <Circle
                            x={300} y={200} radius={30}
                            fill='#333'
                            shadowBlur='5'
                        />
                        <Circle
                            x={100} y={300} radius={30}
                            fill='#333'
                            shadowBlur='5'
                        />
                        <Circle
                            x={200} y={300} radius={30}
                            fill='#333'
                            shadowBlur='5'
                        />
                        <Circle
                            x={300} y={300} radius={30}
                            fill='#333'
                            shadowBlur='5'
                        />
                        <Rect
                            x={90} y={100} width={20} height={100}
                            fill={this.state.color0}
                            id='0'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(0);
                            }}
                        />
                        <Rect
                            x={190} y={100} width={20} height={100}
                            fill={this.state.color2}
                            id='2'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(2);
                            }}
                        />
                        <Rect
                            x={290} y={100} width={20} height={100}
                            fill={this.state.color4}
                            id='4'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(4);
                            }}
                        />
                        <Rect
                            x={90} y={200} width={20} height={100}
                            fill={this.state.color6}
                            id='6'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(6);
                            }}
                        />
                        <Rect
                            x={190} y={200} width={20} height={100}
                            fill={this.state.color8}
                            id='8'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(8);
                            }}
                        />
                        <Rect
                            x={290} y={200} width={20} height={100}
                            fill={this.state.color10}
                            id='10'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(10);
                            }}
                        />
                        <Rect
                            x={100} y={90} width={100} height={20}
                            fill={this.state.color1}
                            id='1'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(1);
                            }}
                        />
                        <Rect
                            x={100} y={190} width={100} height={20}
                            fill={this.state.color3}
                            id='3'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(3);
                            }}
                        />
                        <Rect
                            x={100} y={290} width={100} height={20}
                            fill={this.state.color5}
                            id='5'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(5);
                            }}
                        />
                        <Rect
                            x={200} y={90} width={100} height={20}
                            fill={this.state.color7}
                            id='7'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(7);
                            }}
                        />
                        <Rect
                            x={200} y={190} width={100} height={20}
                            fill={this.state.color9}
                            id='9'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(9);
                            }}
                        />
                        <Rect
                            x={200} y={290} width={100} height={20}
                            fill={this.state.color11}
                            id='11'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick(11);
                            }}
                        />
                    </Layer>
                </Stage>
            </div>
        )
    }
}
export default CanvasElm;