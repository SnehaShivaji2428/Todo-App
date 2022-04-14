import React, {useState} from 'react';

function Todo(props) {
    const [data, setData] = useState("");
    const [items, setItems] = useState([]);
    const handleChange = (event) => {
        setData(event.target.value);
    }
    const addItem = () => {
        if(!data){

        } else {
            setItems([ ...items, data]);
            setData("");
        }
    }
    const deleteItem = (id) => {
        const updatedItem = items.filter((element, index) => {
            return index !== id;
        });
        setItems(updatedItem);
    }
    const deleteAllItem = () => {
        setItems([]);
    }
    return (
        <>
            <div className='container'>
                <h1 className='my-3' style={props.myStyle}>TODO LIST</h1>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} my-3`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btn}</label>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add items..." value={data} onChange={handleChange} style={props.myStyle}/>
                    <div className="d-grid gap-2 col-3 mx-auto">
                        <button className={`btn btn-${props.butn}`} type="button" onClick={addItem}>Add</button>
                    </div>
                </div>
                <div>
                    {
                        items.map((element, index)=>{
                            return (
                                <div className="input-group mb-3" key={index}>
                                    <input className="form-control" type="text" value={element} style={props.myStyle} aria-label="Disabled input example" disabled readOnly />
                                    <div className="d-grid gap-2 col-3 mx-auto">
                                        <button className={`btn btn-${props.butn}`} type="button" onClick={() => deleteItem(index)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>   
                <div className="input-group mb-3">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className={`btn btn-${props.butn}`} type="button" onClick={deleteAllItem}>Delete All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo