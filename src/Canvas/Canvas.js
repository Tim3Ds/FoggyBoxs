import React from 'react';
import './canvas.css';
import Popup from 'react-popup'
import {Layer, Rect, Circle, Text, Stage, Group } from 'react-konva';
import Konva from 'konva';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const gameArray = []
let linesArray = []


class CanvasElm extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.getNewPlayerColor = this.getNewPlayerColor.bind(this);
        this.nodesSquare = this.nodesSquare.bind(this);
        this.changeTag = this.changeTag.bind(this);
        this.updateTag = this.updateTag.bind(this);
        this.endGame = this.endGame.bind(this);
        this.Dot = this.Dot.bind(this);
        this.hLine = this.hLine.bind(this);
        this.vLine = this.vLine.bind(this);
        this.Tag = this.Tag.bind(this);
        this.redrawElements = this.redrawElements.bind(this);

        this.state = {
            rcLen: 10*innerWidth*.008,
            rcWide: 4*innerWidth*.008,
            r: 2*innerWidth*.008,
            nodesWide: parseInt(this.props.match.params.x,(3,10)),
            nodesHeigh: parseInt(this.props.match.params.y,(3,10)),
            boxCount: 0,
            boxActive: 0,
            width: innerWidth*.9,
            height: innerHeight*.9,
            p1color: "red",
            P1Tag: ["TK",1,0],
            ranColor: '',
            p2color: "green",
            P2Tag: ["CP",2,0],
            turn: 1,
        };
        
        
        
    };
    componentDidMount() {
        
        for(let y=1;y<=this.state.nodesHeigh;y++){
            for(let x=1;x<=this.state.nodesWide;x++){
                gameArray.push([this.Dot(x, y)])
            }
        }
        for(let y=1;y<=this.state.nodesHeigh;y++){
            for(let x=1;x<this.state.nodesWide;x++){
                let a = x+((y-1)*this.state.nodesWide),b = (x+1)+((y-1)*this.state.nodesWide)
                this.setState({
                    ['color'+a+'_'+b]: '',
                    ['active'+a+'_'+b]: false,
                });
                linesArray.push([this.hLine(x, y)])
            }
        }
        for(let y=1;y<this.state.nodesHeigh;y++){
            for(let x=1;x<=this.state.nodesWide;x++){
                let a = x+((y-1)*this.state.nodesWide),b = (x+this.state.nodesWide)+((y-1)*this.state.nodesWide);
                this.setState({
                    ['color'+a+'_'+b]: '',
                    ['active'+a+'_'+b]: false,
                })
                linesArray.push([this.vLine(x, y)])
            }
        }
        for(let x=1;x<this.state.nodesHeigh;x++){
            for(let y=1;y<this.state.nodesWide;y++){
                let a = x+((y-1)*this.state.nodesWide),b = x+((y-1)*this.state.nodesWide);
                this.setState({
                    boxCount: this.state.boxCount++,
                    ['Tag'+a+'_'+(b+1+this.state.nodesWide)]: ''
                })
                linesArray.push([this.Tag(x, y)])
            }
        }
        console.log(this.state, this.props);
        this.setState({
            ranColor: Konva.Util.getRandomColor(),
        })
    }
    redrawElements() {
        linesArray = [];
        for(let y=1;y<=this.state.nodesHeigh;y++){
            for(let x=1;x<this.state.nodesWide;x++){
                linesArray.push([this.hLine(x, y)])
            }
        }
        for(let y=1;y<this.state.nodesHeigh;y++){
            for(let x=1;x<=this.state.nodesWide;x++){
                linesArray.push([this.vLine(x, y)])
            }
        }
        for(let y=1;y<this.state.nodesHeigh;y++){
            for(let x=1;x<this.state.nodesWide;x++){
                linesArray.push([this.Tag(x, y)])
            }
        }
        // dummy state change for force a reRender because 
        // elemants are not a part of the render funtion 
        this.setState({
            ranColor: Konva.Util.getRandomColor(),
        })
        console.log('update', this.state);
        this.setState({
            ranColor: Konva.Util.getRandomColor(),
        })
    }

    Dot(x, y){
        return(
            <Circle
                x={(x*this.state.rcLen)+((this.state.width/2)-(this.state.rcLen*this.state.nodesWide)*.7)} y={(y*this.state.rcLen)+(this.state.r*2)} radius={this.state.r}
                fill='#333'
                shadowBlur='5'
            />
        );
    }
    
    hLine(x, y){
        let a = x+((y-1)*this.state.nodesWide),b = (x+1)+((y-1)*this.state.nodesWide)
        return (
            <Rect
                x={(x*this.state.rcLen)+((this.state.width/2)-(this.state.rcLen*this.state.nodesWide)*.7)} y={(y*this.state.rcLen)-(this.state.rcWide/2)+(this.state.r*2)} width={this.state.rcLen} height={this.state.rcWide}
                fill={this.state['color'+a+'_'+b]}
                shadowBlur={10}
                onClick={()=>{return this.handleClick(a+'_'+b, a, b);}}
                onTap={()=>{return this.handleClick(a+'_'+b, a, b);}}
            />
        );
    }
    vLine(x, y){
        let a = x+((y-1)*this.state.nodesWide),b = (x+this.state.nodesWide)+((y-1)*this.state.nodesWide);
        return(
            <Rect
                x={(x*this.state.rcLen)-(this.state.rcWide/2)+((this.state.width/2)-(this.state.rcLen*this.state.nodesWide)*.7)} y={(y*this.state.rcLen)+(this.state.r*2)} width={this.state.rcWide} height={this.state.rcLen}
                fill={this.state['color'+a+'_'+b]}
                shadowBlur={10}
                onClick={()=>{return this.handleClick(a+'_'+b, a, b);}}
                onTap={()=>{return this.handleClick(a+'_'+b, a, b);}}
            />
        );
    }
    Tag(x, y){
        let a = x+((y-1)*this.state.nodesWide),b = x+((y-1)*this.state.nodesWide);
        return(
            <Text 
                x={(x*this.state.rcLen)+(this.state.rcLen*.15)+((this.state.width/2)-(this.state.rcLen*this.state.nodesWide)*.7)} y={(y*this.state.rcLen)+(this.state.rcLen*.25)+(this.state.r*2)}
                text={this.state['Tag'+a+'_'+(b+1+this.state.nodesWide)]}
                fontSize={this.state.r/.42}
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
        if(this.state.boxCount+1 === (this.state.P1Tag[2]+this.state.P2Tag[2])){
            if(this.state.P1Tag[2]>this.state.P2Tag[2]){
                Popup.alert('Player '+ this.state.P1Tag[0] +' Wins this Game')
            } else if(this.state.P1Tag[2]<this.state.P2Tag[2]){
                Popup.alert('Player '+ this.state.P2Tag[0] +' Wins this Game')
            } else {
                Popup.alert('Game was a Tie');
            }
            // setTimeout(()=>{
            //     window.location.href = '/Game/' + parseInt(this.props.match.params.x,(3,10)) +'/'+ parseInt(this.props.match.params.y,(3,10));
            // }, 7000);
            
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
        this.redrawElements();
    }
    
    render(){
        return(
            <div className='frame' id="frame" >
                <Popup />
                <Stage width={this.state.width} height={this.state.height}>
                    <Layer ref='layer' className="dots-inBoxes">
                        <Text 
                            x={this.state.width*.20} y={this.state.height*.7}
                            text={"Turn: " + this.state['P'+this.state.turn+'Tag'][0]}
                            fontSize={this.state.r/.25}
                        />
                        <Text 
                            x={(this.state.width*.66)-(this.state.r/.25)} y={this.state.height*.7}
                            text={this.state.nodesWide}
                            fontSize={this.state.r/.25}
                            onClick={()=>{this.changeSizeWide(this)}}
                            onTap={()=>{this.changeSizeWide(this)}}
                        />
                        <Text 
                            x={this.state.width*.66} y={this.state.height*.7}
                            text={'X'}
                            fontSize={this.state.r/.25}
                        />
                        <Text 
                            x={(this.state.width*.66)+(this.state.r/.25)} y={this.state.height*.7}
                            text={this.state.nodesHeigh}
                            fontSize={this.state.r/.25}
                            onClick={()=>{this.changeSizeHigh(this)}}
                            onTap={()=>{this.changeSizeWide(this)}}
                        />
                        <Rect
                            x={this.state.width*.33} y={this.state.r} width={this.state.rcLen} height={this.state.r/.25}
                            fill={this.state.p1color}
                            shadowBlur={10}
                            onClick={()=>{this.getNewPlayerColor(1)}}
                            onTap={()=>{this.getNewPlayerColor(1)}}
                        />
                        <Text 
                            x={(this.state.width*.33)-(this.state.rcLen+this.state.r*2)} y={this.state.r}
                            text={this.state.P1Tag[0]}
                            id="P1Tag"
                            fontSize={this.state.r/.25}
                            onClick={()=>{this.changeTag(1, this)}}
                            onTap={()=>{this.changeTag(1, this)}}
                        />
                        <Rect
                            x={(this.state.width*.66)} y={this.state.r} width={this.state.rcLen} height={this.state.r/.25}
                            fill={this.state.p2color}
                            shadowBlur={10}
                            onClick={()=>{this.getNewPlayerColor(2)}}
                            onTap={()=>{this.getNewPlayerColor(2)}}
                        />
                        <Text 
                            x={(this.state.width*.66)-(this.state.rcLen+this.state.r*2)} y={this.state.r}
                            text={this.state.P2Tag[0]}
                            id="P2Tag"
                            fontSize={this.state.r/.25}
                            onClick={()=>{this.changeTag(2, this)}}
                            onTap={()=>{this.changeTag(2, this)}}
                        />
                        <Group ref=''>
                            {gameArray}
                            {linesArray}
                        </Group>
                    </Layer>
                </Stage>
            </div>
        )
    }
}
const Game = () => (
    <Router >
        <Route basename='/Game' path='/Game/:x/:y' component={CanvasElm}/>
    </Router>
)
export default Game;