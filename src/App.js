import React, {Component} from 'react';
import './App.css';
import Task from './Task/Task';
import './bootstrap.min.css';

class App extends Component {

    state = {
        tasks: [
            {
                name: 'Draft copy',
                src: 'https://cdn.dribbble.com/users/162405/avatars/small/e7eee87a3ff47698761874fe291779ff.jpg?1488991848'
            },
            {
                name: 'Copy/Design',
                src: 'https://cdn.dribbble.com/users/1351232/avatars/normal/37f205f6405274a6b993b719fae6b790.png?1472563936'
            },
            {
                name: 'Copy',
                src: 'https://cdn.dribbble.com/users/162405/avatars/small/e7eee87a3ff47698761874fe291779ff.jpg?1488991848'
            },
        ],
        pageTitle: 'Задачи',
        showNewTask: false,
        newTaskName: ''
    };

    showTaskHandler = () => {
        this.setState({
            showNewTask: !this.state.showNewTask
        })
    };

    addTaskHandler = () => {
        let tasks = [...this.state.tasks];
        tasks.push({
            name: this.state.newTaskName,
            src: 'https://cdn.dribbble.com/users/162405/avatars/small/e7eee87a3ff47698761874fe291779ff.jpg?1488991848'
        });
        console.log(tasks)
    };

    inputHandler = (event) => {
        this.setState({
            newTaskName: event.target.value
        });
    };

    render() {

        let newTask = null;
        if (this.state.showNewTask) {
            newTask = <div>
                <input onChange={this.inputHandler} className={'form-control mt-2'} type="text"/>
                <div className="btn-group mt-3">
                    <button onClick={this.addTaskHandler} className={'btn btn-light text-primary'}>Добавить</button>
                    <button onClick={this.showTaskHandler} className={'btn btn-secondary'}>Отмена</button>
                </div>
            </div>
        }

        return (
            <div style={{textAlign: 'center'}} className="App">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-12 offset-0">
                            <h1 className={'mb-4'}>{this.state.pageTitle}</h1>

                            {this.state.tasks.map((task, index) => {
                                    return (
                                        <Task key={index} name={task.name} src={task.src}/>
                                    )
                                }
                            )}

                        </div>
                        <div className="col-lg-6 offset-lg-3 col-12 offset-0 text-left">
                            <button onClick={this.showTaskHandler} className={'btn btn-white text-primary mt-1'}>+
                                Добавить задачу
                            </button>
                            {newTask}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
