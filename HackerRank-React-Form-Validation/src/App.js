import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    state = {
        isValid: false
    }
    render() {
        return (<div>
            <Form isFormValid={isValid => this.setState({isValid})} />
            {this.state.isValid === true && <Message>Form is complete!</Message>}
            {this.state.isValid === false && <Message>Form is Incomplete!</Message>}
        </div>);
    }
}

export default App;
