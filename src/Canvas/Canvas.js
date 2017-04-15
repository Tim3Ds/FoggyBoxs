import React from 'react';
import './canvas.css';
import {Layer, Rect, Circle, Text, Stage } from 'react-konva';
import Konva from 'konva';

class CanvasElm extends React.Component{
    constructor(props){
        super(props);
        this.defaultColor = '';
        this.state = {
            color1_2: this.defaultColor, color2_3: this.defaultColor,
            color1_4: this.defaultColor,
            color2_5: this.defaultColor,
            color3_6: this.defaultColor,
            color4_5: this.defaultColor, color5_6: this.defaultColor,
            color4_7: this.defaultColor,
            color5_8: this.defaultColor,
            color6_9: this.defaultColor,
            color7_8: this.defaultColor, color8_9: this.defaultColor,
            active1_2: false, active2_3: false,
            active1_4: false,
            active2_5: false,
            active3_6: false,
            active4_5: false, active5_6: false,
            active4_7: false,
            active5_8: false,
            active6_9: false,
            active7_8: false, active8_9: false,
            node1: false, node2: false, node3: false,
            node4: false, node5: false, node6: false,
            node7: false, node8: false, node9: false,
            nodesWide: 3,
            nodesHeigh: 3,
            width: innerWidth*.8,
            height: innerHeight*.8,
            p1color: "red",
            p2color: "green",
            turn: 1,
        };
        this.handleClick = this.handleClick.bind(this);
        this.getNewPlayerColor = this.getNewPlayerColor.bind(this);
        this.activateNodes = this.activateNodes.bind(this);
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

    activateNodes(pid, nodeA, nodeB){
        let A = "node" + nodeA;
        let B = "node" + nodeB;
        this.setState({
            [A]: true,
            [B]: true
        })
        // check for a new squar
        if(nodeA === nodeB%this.state.nodesWide){
            if(this.state["node" + (nodeA+1)]){
                if(this.state["node" + (nodeB+1)]){
                    let tagID = nodeA + '-' + (nodeB+1);
                    console.log("pid: ", pid, " nodeA: ", nodeA, " nodeB: ", nodeB, " tagID: ", tagID);
                    // document.getElementById(tagID).innerText = 'P1';
                }
            }
        }else if(nodeA+1 === nodeB){
            if(this.state["node" + (nodeA+this.state.nodesWide)]){
                if(this.state["node" + (nodeB+this.state.nodesWide)]){
                    let tagID = nodeA + '-' + (nodeB+1);
                    console.log("pid: ", pid, " nodeA: ", nodeA, " nodeB: ", nodeB, " tagID: ", tagID);
                    // document.getElementById(tagID).r = Konva.Text({
                    //     text: pid
                    // });
                    
                }
            }
        }
    }

    handleClick(id, nodeA, nodeB) {
        let color = "color" + id;
        let activate = "active" + id;
        console.log('color: ', color);
        if(!this.state[activate]){
            if(this.state.turn === 1){
                this.setState({
                    [color]: this.state.p1color,
                    [activate]: true,
                    turn: 2,
                });
                this.activateNodes(1, nodeA, nodeB);
            }else{
                this.setState({
                    [color]: this.state.p2color,
                    [activate]: true,
                    turn: 1,
                });
                this.activateNodes(2, nodeA, nodeB);
            }
        }
    }
    render(){
        return(
            <div className='frame' id="frame" >
                <Stage width={115*this.state.nodesWide} height={115*this.state.nodesHeigh}>
                    <Layer className="dots-inBoxes">
                        <Rect
                            x={80} y={10} width={100} height={50}
                            fill={this.state.p1color}
                            shadowBlur={10}
                            onClick={()=>{this.getNewPlayerColor(1)}}
                        />
                        <Text 
                            x={50} y={25}
                            text="P1"
                            id="P1Tag"
                            fontSize={20}
                        />
                        <Rect
                            x={230} y={10} width={100} height={50}
                            fill={this.state.p2color}
                            shadowBlur={10}
                            onClick={()=>{this.getNewPlayerColor(2)}}
                        />
                        <Text 
                            x={200} y={25}
                            text="P2"
                            id="P2Tag"
                            fontSize={20}
                        />
                        <Circle
                            x={100} y={100} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            id='1'
                        />
                        <Text 
                            x={125} y={125}
                            text=""
                            id="1-5"
                            fontSize={50}
                        />
                        <Circle
                            x={200} y={100} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            id='2'
                        />
                        <Text 
                            x={225} y={125}
                            text=""
                            id="2-7"
                            fontSize={50}
                        />
                        <Circle
                            x={300} y={100} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            id='3'
                        />
                        <Circle
                            x={100} y={200} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            id='4'
                        />
                        <Text 
                            x={225} y={125}
                            text=""
                            id="4-8"
                            fontSize={50}
                        />
                        <Circle
                            x={200} y={200} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            id='5'
                        />
                        <Text 
                            x={225} y={125}
                            text=""
                            id="5-9"
                            fontSize={50}
                        />
                        <Circle
                            x={300} y={200} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            id='6'
                        />
                        <Circle
                            x={100} y={300} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            id='7'
                        />
                        <Circle
                            x={200} y={300} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            id='8'
                        />
                        <Circle
                            x={300} y={300} radius={30}
                            fill='#333'
                            shadowBlur='5'
                            id='9'
                        /> 
                        <Rect
                            x={100} y={90} width={100} height={20}
                            fill={this.state.color1_2}
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("1_2", 1, 2);
                            }}
                        />
                        <Rect
                            x={200} y={90} width={100} height={20}
                            fill={this.state.color2_3}
                            id='7'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("2_3", 2, 3);
                            }}
                        />

                        <Rect
                            x={90} y={100} width={20} height={100}
                            fill={this.state.color1_4}
                            id='1_4'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick('1_4', 1, 4);
                            }}
                        />
                        <Rect
                            x={190} y={100} width={20} height={100}
                            fill={this.state.color2_5}
                            id='2_5'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("2_5", 2, 5);
                            }}
                        />
                        <Rect
                            x={290} y={100} width={20} height={100}
                            fill={this.state.color3_6}
                            id='3_6'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("3_6", 3, 6);
                            }}
                        />

                        <Rect
                            x={100} y={190} width={100} height={20}
                            fill={this.state.color4_5}
                            id='3'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("4_5", 4, 5);
                            }}
                        />
                        <Rect
                            x={200} y={190} width={100} height={20}
                            fill={this.state.color5_6}
                            id='9'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("5_6", 5, 6);
                            }}
                        />

                        <Rect
                            x={90} y={200} width={20} height={100}
                            fill={this.state.color4_7}
                            id='4_7'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("4_7", 4, 7);
                            }}
                        />
                        <Rect
                            x={190} y={200} width={20} height={100}
                            fill={this.state.color5_8}
                            id='5_8'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("5_8", 5, 8);
                            }}
                        />
                        <Rect
                            x={290} y={200} width={20} height={100}
                            fill={this.state.color6_9}
                            id='6_9'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("6_9", 6, 9);
                            }}
                        />
                       
                        <Rect
                            x={100} y={290} width={100} height={20}
                            fill={this.state.color7_8}
                            id='5'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("7_8", 7, 8);
                            }}
                        />
                        <Rect
                            x={200} y={290} width={100} height={20}
                            fill={this.state.color8_9}
                            id='11'
                            shadowBlur={10}
                            onClick={()=>{
                                this.handleClick("8_9", 8, 9);
                            }}
                        />
                    </Layer>
                </Stage>
            </div>
        )
    }
}
export default CanvasElm;