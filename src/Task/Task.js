import React from 'react'

// function Task() {
//     return (
//         <h2>Компонент задачи</h2>
//     )
// }

// const task = () => {
//     return (
//                 <h2>Компонент задачи</h2>
//     )
// }

// const task = () => (
//     <div>Компонент задачи
//         <strong>test</strong>
//     </div>
// )

export default (props) => (
    <div className={'task-card'}>
        <div>
            <input className={'task-card__checkbox'} type="checkbox"/>
            <span>{props.name}</span>
        </div>
        <img className={'task-card__avatar'} src={props.src} alt=""/>
        {props.children}
    </div>
)
