import React, {Component} from 'react';

class TeamMembers extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            name: '',
            age: ''
        };
    }
    render() {
        return (
            <div>
                <label>Friend's Name</label>
                <input value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                <br/>
                <label>Friend's Age</label>
                <input value={this.state.age} onChange={e => this.setState({age: e.target.value})}/>
                <br/>
                <button>Submit</button>
            </div>
        );
    }
}

export default TeamMembers;