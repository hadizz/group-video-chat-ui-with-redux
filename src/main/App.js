import React from 'react';
import styles from "./App.module.css"
import generateClassName from "../utils/dom";

function App() {

    const [people, setPeople] = React.useState([
        {id: 0, name: "ali", color: "red"},
        {id: 1, name: "john", color: "blue"},
        {id: 2, name: "david", color: "green"},
        {id: 3, name: "sara", color: "pink"},
    ]);

    const onDragStart = (ev, id) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData("id", id);
    }

    const onDragOver = (ev, id) => {
        console.log("onDragOver", id)
        ev.preventDefault();
    }

    const onDrop = (ev, dest) => {
        let start = ev.dataTransfer.getData("id");
        console.log("onDrop", start, dest)

        const arr = [...people];

        const temp1 = arr[start].id;
        arr[start].id = arr[dest].id;
        arr[dest].id = temp1;

        const temp2 = arr[start];
        arr[start] = arr[dest];
        arr[dest] = temp2;

        setPeople(arr);
    }

    const Box = ({id, name, color}) => (
        <div
            className={generateClassName(["p-8 bordered radius-8", styles.box])}
            onDragStart={(e) => onDragStart(e, id)}
            onDragOver={(e) => onDragOver(e, id)}
            onDrop={(e) => onDrop(e, id)}
            draggable
            style={{ backgroundColor: color}}
        >
            {name}
        </div>
    )

    return (
        <div className="d-flex flex-column flex-x-between h100vh">
            <div>header</div>
            <div
                className={styles.root}
            >
                {
                    people.map((person, index) => <Box {...person} />)
                }
            </div>
            <div>bottom</div>
        </div>
    );
}

export default App;
