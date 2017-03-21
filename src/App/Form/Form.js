import React from 'react';
import './Form.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        //bind the specific instance of onchange from
        //this particular class to the onchange method
        this.onSubmit = this.onSubmit.bind(this);
        this.onEnter = this.onEnter.bind(this);

        //set default form state
        this.state = {
            name: '',
            email: '',
            phone: '',
            valid: (id)=>{
                let reg = '';
                let elm = document.getElementById(id);
                switch(id){
                    case 'name':
                        reg = /^[a-z ,.'-]+$/i;
                        break;
                    case 'email':
                        reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        break;
                    case 'phone':
                        reg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/
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

    onChangeName(event){
        this.state.valid('name');
        this.setState({
            name: event.target.value
        })
    }
    onChangeEmail(event){
        this.state.valid('email');
        this.setState({
            email: event.target.value
        })
    }
    onChangePhone(event){
        this.state.valid('phone');
        this.setState({
            phone: event.target.value
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
                name:'',
                email: '',
                phone: ''
            });
            document.getElementById('Valid').innerHTML= `<p>Your input was Valid And loged to Console</p>`
        }
    }

    render(){
        return(
            <div>
                <div className='form'>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input 
                                type="text" id="name"
                                onChange={this.onChangeName.bind(this)}
                                onKeyDown={this.onEnter}
                                placeholder="Your Name"
                                value={this.state.name}
                                />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input 
                                type="text" id='email'
                                onChange={this.onChangeEmail.bind(this)}
                                onKeyDown={this.onEnter}
                                placeholder="your@email.address"
                                value={this.state.email}
                                />
                        </td>
                        
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>
                            <input 
                                type="text" id='phone'
                                onChange={this.onChangePhone.bind(this)}
                                onKeyDown={this.onEnter}
                                placeholder="***-***-****"
                                value={this.state.phone}
                                />
                        </td>
                    </tr>
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
                <div id="Valid">

                </div>
            </div>
        )
    }
}

export default Form;