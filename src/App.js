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
        pageTitle: 'Задачи'
    };

    addTaskHandler = () => {
        console.log('asd')
    };

    render() {
        const tasks = this.state.tasks;
        return (
            <div style={{textAlign: 'center'}} className="App">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-12 offset-0">
                            <h1 className={'mb-4'}>{this.state.pageTitle}</h1>
                            <Task name={tasks[0].name} src={tasks[0].src}/>
                            <Task name={tasks[1].name} src={tasks[1].src}/>
                            <Task name={tasks[2].name} src={tasks[2].src}/>
                        </div>
                        <div className="col-lg-6 offset-lg-3 col-12 offset-0 text-left">
                            <button onClick={this.addTaskHandler} className={'btn btn-white text-primary mt-1'}>+
                                Добавить задачу
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
