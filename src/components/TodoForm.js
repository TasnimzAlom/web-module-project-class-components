import React from 'react'


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
           [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({ ...this.state, id: "" });
        this.setState({ task: "" });
        this.handleSubmit=this.handleSubmit.bind(this) 
    }

    render() {
        
         return (
             <div>
                 <form onSubmit={this.handleSubmit}>
                   
                 <input
                         type="text"
                         name="task"
                         placeholder="New Todo"
                         id="task"
                         value={this.state.task}
                         onChange={this.handleChange}
                            
                 />
                     <button>Add Todo</button>
                 </form>
            </div>
        )
    }
}

export default TodoForm