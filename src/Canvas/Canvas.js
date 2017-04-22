import React from 'react';
import './canvas.css';
import Popup from 'react-popup'
import {Layer, Rect, Circle, Text, Stage } from 'react-konva';
import Konva from 'konva';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Dot = (x, y, game)=>{
    return(
        <Circle
            x={(x*100)} y={y*100} radius={game.state.r}
            fill='#333'
            shadowBlur='5'
            id='1'
        />
    );
}

const gameArray = []

class CanvasElm extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.getNewPlayerColor = this.getNewPlayerColor.bind(this);
        this.nodesSquare = this.nodesSquare.bind(this);
        this.changeTag = this.changeTag.bind(this);
        this.updateTag = this.updateTag.bind(this);
        this.endGame = this.endGame.bind(this);
        this.hLine = this.hLine.bind(this);
        this.vLine = this.vLine.bind(this);
        this.Tag = this.Tag.bind(this);

        this.state = {
            rcLen: 100,
            rcWide: 20,
            r: 20,
            nodesWide: parseInt(this.props.match.params.x),
            nodesHeigh: parseInt(this.props.match.params.y),
            boxCount: 0,
            boxActive: 0,
            width: innerWidth*.8,
            height: innerHeight*.8,
            p1color: "red",
            P1Tag: ["TK",1,0],
            p2color: "green",
            P2Tag: ["CP",2,0],
            turn: 1,
        };
        
        
        
    };
    componentDidMount() {
        for(let y=1;y<=this.state.nodesHeigh;y++){
            for(let x=1;x<=this.state.nodesWide;x++){
                gameArray.push([Dot(x, y, this)])
            }
        }
        for(let y=1;y<=this.state.nodesHeigh;y++){
            for(let x=1;x<this.state.nodesWide;x++){
                gameArray.push([this.hLine(x, y, this)])
            }
        }
        for(let y=1;y<this.state.nodesHeigh;y++){
            for(let x=1;x<=this.state.nodesWide;x++){
                gameArray.push([this.vLine(x, y, this)])
            }
        }
        for(let x=1;x<this.state.nodesHeigh;x++){
            for(let y=1;y<this.state.nodesWide;y++){
                gameArray.push([this.Tag(x, y, this)])
            }
        }
        console.log(gameArray, this.state, this.props);
    }
    hLine(x, y, game){
        let a = x+((y-1)*this.state.nodesWide),b = (x+1)+((y-1)*this.state.nodesWide)
        this.setState({
            ['color'+a+'_'+b]: '',
            ['active'+a+'_'+b]: false,
        });
        let fun = ()=>{return this.handleClick(a+'_'+b, a, b);};
        let color = this.state['color'+a+'_'+b];
        return(
            <Rect
                x={(x*100)} y={(y*100)-10} width={this.state.rcLen} height={this.state.rcWide}
                fill={color}
                shadowBlur={10}
                onClick={fun}
            />
        );
    }
    vLine(x, y, game){
        let a = x+((y-1)*this.state.nodesWide),b = (x+this.state.nodesWide)+((y-1)*this.state.nodesWide);
        this.setState({
            ['color'+a+'_'+b]: '',
            ['active'+a+'_'+b]: false,
        })
        let fun = ()=>{return this.handleClick(a+'_'+b, a, b);};
        let color = this.state['color'+a+'_'+b];
        return(
            <Rect
                x={(x*100)-10} y={(y*100)} width={this.state.rcWide} height={this.state.rcLen}
                fill={color}
                shadowBlur={10}
                onClick={fun}
            />
        );
    }
    Tag(x, y, game){
        let a = x+((y-1)*this.state.nodesWide),b = x+((y-1)*this.state.nodesWide);
        this.setState({
            boxCount: this.state.boxCount++,
            ['Tag'+a+'_'+(b+1+this.state.nodesWide)]: ''
        })
        return(
            <Text 
                x={(x*100)+15} y={(y*100)+25}
                text={this.state['Tag'+a+'_'+(b+1+this.state.nodesWide)]}
                fontSize={50}
            />
        )
    }
    changeSizeWide(game){
        let selectedTag = this.state.nodesWide;
        Popup.prompt('Number of Boxes Wide', 'Changing this will Reload Game', {
            placeholder: selectedTag,
            type: 'text'
        }, {
            text: 'save',
            className: 'success',
            action: function (Box) {
                game.updateWide(Box.value);
                Box.close();
            }
        });
        
    };
    updateWide(width){
        if(width !== ''){
            width.trim();
            window.location.href = '/Game/'+width+'/'+this.state.nodesHeigh;
        }
    };
    changeSizeHigh(game){
        let selectedTag = this.state.nodesHeigh;
        Popup.prompt('Number of Boxes High', 'Changing this will Reload Game', {
            placeholder: selectedTag,
            type: 'text'
        }, {
            text: 'save',
            className: 'success',
            action: function (Box) {
                game.updateHigh(Box.value);
                Box.close();
            }
        });
        
    };
    updateHigh(height){
        if(height !== ''){
            height.trim();
            window.location.href = '/Game/'+this.state.nodesWide+'/'+height;
        }
    };
    changeTag(id, game){
        let tempID = this.state['P'+id+'Tag'];
        let selectedTag = tempID[0];
        Popup.prompt('Change your Box Tag', '', {
            placeholder: selectedTag,
            type: 'text'
        }, {
            text: 'save',
            className: 'success',
            action: function (Box) {
                game.updateTag(id, Box.value);
                Box.close();
            }
        });
        
    };

    updateTag(id, newTag){
        console.log(id, this.state.P1Tag, this.state.P2Tag, newTag)
        if(newTag !== ''){
            newTag.toLocaleUpperCase().trim();
            this.setState({
                ['P'+id+'Tag']: [newTag,1]
            });
        }
    };

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
    };

    endGame(){
        if(this.state.boxCount === (this.state.P1Tag[2]+this.state.P2Tag[2])){
            if(this.state.P1Tag[2]>this.state.P2Tag[2]){
                Popup.alert('Player '+ this.state.P1Tag[0] +' Wins this Game')
            } else if(this.state.P1Tag[2]<this.state.P2Tag[2]){
                Popup.alert('Player '+ this.state.P2Tag[0] +' Wins this Game')
            } else {
                Popup.alert('Game was a Tie');
            }
            setTimeout(()=>{
                window.location.href = '/Game';
            }, 3000);
            
        }

    }
    nodesSquare(pid, nodeA, nodeB){
        
        // check for a new square
        //check vertical 
        if(nodeA === nodeB-this.state.nodesWide){
            console.log(nodeA, '|', nodeB)
            if(this.state["active" + (nodeA+1) + "_" + (nodeB+1)]){
                console.log("active" + (nodeA+1) + "_" + (nodeB+1), this.state["active" + (nodeA+1) + "_" + (nodeB+1)])
                if(this.state["active"+(nodeA)+"_"+(nodeA+1)]&&this.state["active"+(nodeB)+"_"+(nodeB+1)]){
                    let tagID = "Tag" + (nodeA) + "_" + (nodeB+1);
                    console.log("pid: ", pid, " nodeA: ", nodeA, " nodeB: ", nodeB, " tagID: ", tagID);
                    this.setState({
                        [tagID]: pid[0],
                        turn: pid[1],
                        [pid]: [pid[0],pid[1],pid[2]++],
                        boxActive: this.state.boxActive++,
                    });
                    this.endGame(pid);
                }
            }
            if(this.state["active" + (nodeA-1) + "_" + (nodeB-1)]){
                console.log("active" + (nodeA-1) + "_" + (nodeB-1), this.state["active" + (nodeA-1) + "_" + (nodeB-1)])
                if(this.state["active"+(nodeA-1)+"_"+(nodeA)]&&this.state["active"+(nodeB-1)+"_"+(nodeB)]){
                    let tagID = "Tag" + (nodeA-1) + "_" + (nodeB);
                    console.log("pid: ", pid, " nodeA: ", nodeA, " nodeB: ", nodeB, " tagID: ", tagID);
                    this.setState({
                        [tagID]: pid[0],
                        turn: pid[1],
                        [pid]: [pid[0],pid[1],pid[2]++],
                        boxActive: this.state.boxActive++,
                    });
                    this.endGame(pid);
                }
            }
        // check horizontal 
        }
        if(nodeA === nodeB-1){
            console.log(nodeA, '_', (nodeB));
            if(this.state["active" + (nodeA+this.state.nodesWide)+"_"+(nodeB+this.state.nodesWide)]){
                console.log("active" + (nodeA+this.state.nodesWide)+"_"+(nodeB+this.state.nodesWide), this.state["active" + (nodeA+this.state.nodesWide)+"_"+(nodeB+this.state.nodesWide)])
                if(this.state["active" + nodeA + "_" + (nodeA+this.state.nodesWide)]&&this.state["active" + nodeB + "_" + (nodeB+this.state.nodesWide)]){
                    let tagID = "Tag" + nodeA + "_" + (nodeB+this.state.nodesWide);
                    console.log("pid: ", pid, " nodeA: ", nodeA, " nodeB: ", nodeB, " tagID: ", tagID);
                    this.setState({
                        [tagID]: pid[0],
                        turn: pid[1],
                        [pid]: [pid[0],pid[1],pid[2]++],
                        boxActive: this.state.boxActive++,
                    });
                    this.endGame(pid);
                    
                }
            }
            if(this.state["active" + (nodeA-this.state.nodesWide)+"_"+(nodeB-this.state.nodesWide)]){
                console.log("active" + (nodeA-this.state.nodesWide)+"_"+(nodeB-this.state.nodesWide), this.state["active" + (nodeA-this.state.nodesWide)+"_"+(nodeB-this.state.nodesWide)])
                if(this.state["active" + (nodeA-this.state.nodesWide) + "_" + (nodeA)]&&this.state["active" + (nodeB-this.state.nodesWide) + "_" + (nodeB)]){
                    let tagID = "Tag" + (nodeA-this.state.nodesWide) + "_" + (nodeB);
                    console.log("pid: ", pid, " nodeA: ", nodeA, " nodeB: ", nodeB, " tagID: ", tagID);
                    this.setState({
                        [tagID]: pid[0],
                        turn: pid[1],
                        [pid]: [pid[0],pid[1],pid[2]++],
                        boxActive: this.state.boxActive++,
                    });
                    this.endGame(pid);
                }
            }
        }
    }
    

    handleClick(id, nodeA, nodeB) {
        let color = "color" + id;
        let activate = "active" + id;
        console.log(color, activate);
        if(!this.state[activate]){
            if(this.state.turn === 1){
                this.setState({
                    [color]: this.state.p1color,
                    [activate]: true,
                    turn: 2
                });
                this.nodesSquare(this.state.P1Tag, nodeA, nodeB);
                console.log(this.state);
            }else{
                this.setState({
                    [color]: this.state.p2color,
                    [activate]: true,
                    turn: 1
                });
                this.nodesSquare(this.state.P2Tag, nodeA, nodeB);
                console.log(this.state);
            }
        }
    }
    render(){
        return(
            <div className='frame' id="frame" >
                <Popup />
                <Stage width={115*this.state.nodesWide+50} height={115*this.state.nodesHeigh+25}>
                    <Layer className="dots-inBoxes">
                        <Text 
                            x={105*this.state.nodesWide*.33} y={115*this.state.nodesHeigh}
                            text={"Turn: " + this.state['P'+this.state.turn+'Tag'][0]}
                            fontSize={20}
                        />
                        <Text 
                            x={(105*this.state.nodesWide*.66)-15} y={115*this.state.nodesHeigh}
                            text={this.state.nodesWide}
                            fontSize={20}
                            onClick={()=>{this.changeSizeWide(this)}}
                        />
                        <Text 
                            x={105*this.state.nodesWide*.66} y={115*this.state.nodesHeigh}
                            text={'X'}
                            fontSize={20}
                        />
                        <Text 
                            x={(105*this.state.nodesWide*.66)+16} y={115*this.state.nodesHeigh}
                            text={this.state.nodesHeigh}
                            fontSize={20}
                            onClick={()=>{this.changeSizeHigh(this)}}
                        />
                        <Rect
                            x={50*this.state.nodesWide/2} y={10} width={100} height={50}
                            fill={this.state.p1color}
                            shadowBlur={10}
                            onClick={()=>{this.getNewPlayerColor(1)}}
                        />
                        <Text 
                            x={36*this.state.nodesWide/2} y={25}
                            text={this.state.P1Tag[0]}
                            id="P1Tag"
                            fontSize={20}
                            onClick={()=>{this.changeTag(1, this)}}
                        />
                        <Rect
                            x={160*this.state.nodesWide/2} y={10} width={100} height={50}
                            fill={this.state.p2color}
                            shadowBlur={10}
                            onClick={()=>{this.getNewPlayerColor(2)}}
                        />
                        <Text 
                            x={146*this.state.nodesWide/2} y={25}
                            text={this.state.P2Tag[0]}
                            id="P2Tag"
                            fontSize={20}
                            onClick={()=>{this.changeTag(2, this)}}
                        />
                        {gameArray}
                    </Layer>
                </Stage>
            </div>
        )
    }
}
const Game = () => (
    <Router>
        <Route path='/Game/:x/:y' component={CanvasElm}/>
    </Router>
)
export default Game;