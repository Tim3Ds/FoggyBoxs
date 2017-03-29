import React from 'react';
import './Form.css';
import Picker from './ColorPicker'
import Canvas from './CanvasLineColor'

class Form extends React.Component{
    constructor(props){
        super(props);
        //bind the specific instance of onchange from
        //this particular class to the onchange method
        this.onSubmit = this.onSubmit.bind(this);
        this.onEnter = this.onEnter.bind(this);

        //set default form state
        this.state = {
            tag: '',
            boxX: 1,
            boxY: 1,
            lineColor: '',
            valid: (id)=>{
                let reg = '';
                let elm = document.getElementById(id);
                switch(id){
                    case 'tag':
                        reg = /^[a-z][1-9]{2}$/;
                        break;
                    case 'boxs':
                        reg = /^[1-9]{1,3}[X\s.]{1}[1-9]{1,3}$/
                        break;
                    case 'lineColor':
                        reg = /^(#[a-f0-9]{3}([a-f0-9]{3})?)$/i
                        break;
                    default:
                        break;
                }
                if(!reg.test(elm.value)){
                    document.getElementById('Valid').innerHTML= ``
                    elm.className = 'error';
                    return false;
                }else{
                    elm.className = 'good';
                    return true;
                }
                
            }
            
        };
    }

    onChangeTag(event){
        this.state.valid('tag');
        this.setState({
            tag: event.target.value
        })
    }
    onChangeBoxs(event){
        this.state.valid('boxs');
        var result = event.target.value.toUpperCase().split('X');
        this.setState({
            boxX: result[0],
            boxY: result[1]
        })
    }
    onChangeLineColor(event){
        this.state.valid('lineColor');
        this.setState({
            lineColor: event.target.value
        })
    }

    onEnter(event){
        if(event.keyCode === 13){
            this.onSubmit();
        }
    }

    onSubmit(event){
        event.preventDefault();
        if(this.state.valid('name')&&this.state.valid('email')&&this.state.valid('phone')){
            this.props.getInfo(this.state);
            this.setState({
                tag: '',
                boxX: 1,
                boxY: 1,
                lineColor: '',
            });
            document.getElementById('Valid').innerHTML= `<p>Your input was Valid And loged to Console</p>`
        }
    }

    render(){
        return(
            <div>
                <div className='form'>
                    <ul>
                        <li>
                            <div id="tagImg"/>
                            <input 
                                type="text" id="tag"
                                onChange={this.onChangeTag.bind(this)}
                                onKeyDown={this.onEnter}
                                placeholder="Name Tage"
                                value={this.state.tag}
                                />
                        </li>
                   
                        <li>
                            <div id="boxImg"/>
                            <input 
                                type="text" id='boxs'
                                onChange={this.onChangeBoxs.bind(this)}
                                onKeyDown={this.onEnter}
                                placeholder="Box Size 1X1"
                                value={this.state.boxX+'x'+this.state.boxY}
                                />
                        </li>
                        <li>
                            <Canvas className='Canv'/>
                            <Picker />
                            <input 
                                type="text" id='lineColor'
                                onChange={this.onChangeLineColor.bind(this)}
                                onKeyDown={this.onEnter}
                                placeholder="line color hex code"
                                value={this.state.lineColor}
                                />
                        </li>
                    </ul>
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Form;