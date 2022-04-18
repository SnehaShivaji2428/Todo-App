import React, {useEffect, useState} from 'react';
const getItems = () => {
    let list = localStorage.getItem("List");
    if (list){
        return JSON.parse(list);
    } else {
        return [];
    }
}

function Todo(props) {
    const [data, setData] = useState("");
    const [items, setItems] = useState(getItems());
    const [edit, setEdit] = useState("Add");
    const [idex, setIdex] = useState(null);
    const handleChange = (event) => {
        setData(event.target.value);
    }
    const addItem = () => {
        if(!data){
            alert("Please Enter Something.")
        } else if(data && edit === "Edit"){
            setItems(
                items.map((element) => {
                    if (element.id === idex){
                        return { ...element, name:data}
                    }
                    return element;
                })
            )
            setEdit("Add");
            setData("");
            setIdex(null);
        } else {
            const allData = { id: new Date().getTime().toString(), name: data}
            setItems([ ...items, allData]);
            setData("");
        }
    }
    const deleteItem = (index) => {
        const updatedItem = items.filter((element) => {
            return index !== element.id;
        });
        setItems(updatedItem);
    }
    const editItem = (id) => {
        let newEdit = items.find((element) => {
            return element.id === id
        })
        setEdit("Edit");
        setData(newEdit.name);
        setIdex(id);
    }
    const deleteAllItem = () => {
        setItems([]);
    }
    useEffect(() => {
        localStorage.setItem("List", JSON.stringify(items))
    }, [items]);
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
                        <button className={`btn btn-${props.butn}`} type="button" onClick={addItem}>{edit}</button>
                    </div>
                </div>
                <div>
                    {
                        items.map((element)=>{
                            return (
                                <div className="input-group mb-3" key={element.id}>
                                    <input className="form-control" type="text" value={element.name} style={props.myStyle} aria-label="Disabled input example" disabled readOnly />
                                    <div className="d-grid gap-2 col-1.5 mx-auto">
                                        <button className={`btn btn-outline-${props.butn}`} type="button" onClick={() => editItem(element.id)}>Edit</button>
                                    </div>
                                    <div className="d-grid gap-2 col-1.5 mx-auto">
                                        <button className={`btn btn-outline-${props.butn}`} type="button" onClick={() => deleteItem(element.id)}>Delete</button>
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