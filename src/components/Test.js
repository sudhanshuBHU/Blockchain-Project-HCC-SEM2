import React from "react";
import "./Test.css";
import { useState } from "react";

// import { useSelector } from "react-redux";
// import { address,balance } from "../redux/CounterSlice";
export default function Test() {
    // const address1 = useSelector((state) => state.account.addressAccount);
    // const balance1 = useSelector((state) => state.account.bal);
    const [fieldValues, setFieldValue] = useState([{ name: "", price: "" }]);

    const submit = (e) => {
        e.preventDefault();
        console.log("Submit");
        console.log({ fieldValues });
    }
    const changeHandler = (index, value) => {
        let data = [...fieldValues];
        data[index][value.target.name]=value.target.value;
        setFieldValue(data);
    }
    const removeHandler = (index) => {
        let data = [...fieldValues];
        data.splice(index, 1);
        setFieldValue(data);
    }
    const addmore=()=>{
        setFieldValue([...fieldValues, {name:"",price:""}]);
    }
    return (
        <div className="formWrapper">
            <h2>Dynamic Form</h2>
            <form onSubmit={submit}>
                {
                    fieldValues.map((value, index) => {
                        return (
                            <div className="main" key={index}>
                                <div className="inputName">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={event=>changeHandler(index, event)}
                                        value={value.name} />
                                </div>
                                <div className="price">
                                    <input
                                        type="text"
                                        name="price"
                                        placeholder="Price"
                                        onChange={event=>changeHandler(index, event)}
                                        value={value.price} />

                                </div>
                                <div className="remove">
                                    <button className="about" onClick={()=>removeHandler(index)}>Remove</button>
                                </div>
                            </div>
                        );
                    })
                }
                <button className="about" onClick={addmore}>Add names</button>
                <button className="about" onClick={submit}>Submit</button>
            </form>
        </div>






        // <div>
        // {/* <p>Address: {address1}</p> */}
        // {/* <p> Balance: {balance1}</p> */}
        // {/* </div> */}
    );
}