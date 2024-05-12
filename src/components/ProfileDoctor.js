import React, { useState } from "react";
import './ProfileDoctor.css';


const ProfileDoctor = () => {
    const [id, setId] = useState("loading...");
    const [contributionStatus, setContributionStatus] = useState(false);
    const [addMore, setAddMoreStatus] = useState(false);
    const [spe, setSpec] = useState("loading...");
    const [contri, setContri] = useState("loading...");
    const [incen, setIncen] = useState("loading...");
    const [fieldDetails, setFieldDetails] = useState([{ patientId: "loading...", problem: "loading...", desc: "loading...lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll" }]);

    const [patientId, setpatientId] = useState('');
    const [problem, setProblem] = useState('');
    const [desc, setdesc] = useState('');
    const [clearButton, setClearButton] = useState(false);


    const clickhandler = () => {
        setFieldDetails([...fieldDetails, { patientId: "12", problem: "12", desc: "12" }]);
    }
    const addPatient = () => {
        setAddMoreStatus(true);
        setContributionStatus(false);
        setClearButton(true);
    }

    const viewContri = () => {
        setAddMoreStatus(false);
        setContributionStatus(true);
        setClearButton(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(patientId);
        console.log(problem);
        console.log(desc);
    }
    const clearScreen = () => {
        setAddMoreStatus(false);
        setContributionStatus(false);
        setClearButton(false);
    }
    const resetHandler = () => {
        setProblem('');
        setpatientId('');
        setdesc('');
    }
    return (
        <div className="profileDocWrapper">
            <div className="topRight">
                {/* <div className="logOut"></div> */}
                <div className="logOut" onClick={clickhandler}>Reset Password </div>
                <div className="logOut" onClick={clickhandler}>Log out </div>
            </div>
            <hr />
            <div className="profileNav">
                <div className="g1">Id:</div>
                <div className="g1">{id}</div>
                <div className="g1">Specialization:</div>
                <div className="g1">{spe}</div>
                <div className="g1">Contributions:</div>
                <div className="g1">{contri}</div>
                <div className="g1">Incentive earns: </div>
                <div className="g1">{incen}</div>
            </div>
            <div className="buttonKeeper">
                <button className="add" onClick={addPatient}>Add Patient Details</button>
                <button className="add" onClick={viewContri}>View Contributions</button>
            </div>
            <div>
                {
                    contributionStatus &&
                    <div className="contribution">
                        <div className="contriHeading">
                        <div className="column">S.No.</div>
                                        <div className="column">Patient's ID</div>
                                        <div className="column">Problem</div>
                                       <div className="column"> Description</div>
                        </div>
                        {
                            fieldDetails.map((input, index) => {
                                return (
                                    <div className="tupple" key={index}>
                                        <div className="column">{index + 11}</div>
                                        <div className="column">{input.patientId}</div>
                                        <div className="column">{input.problem}</div>
                                       {/* <div className="column"> {input.desc}</div> */}
                                       <textarea className="column" disabled>{input.desc}</textarea>
                                    </div>
                                );
                            })
                        }
                    </div>

                }
                {
                    addMore &&
                    <div className="addPatientForm">
                        <div className="signinDoctor ">
                            <form className="login-form" onSubmit={handleSubmit}>
                                <h2 className="formdoc">Enter Patient Details</h2>
                                <div className="form-group">
                                    <label htmlFor="patientId" className="formDoc1">Patient ID</label>
                                    <input
                                        type="text"
                                        id="patientId"
                                        className="form-input"
                                        placeholder="Enter Patient's ID"
                                        value={patientId}
                                        onChange={(e) => setpatientId(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="problem" className="formDoc1">Enter Problem</label>
                                    <input
                                        type="text"
                                        id="problem"
                                        className="form-input"
                                        placeholder="Enter problem"
                                        value={problem}
                                        onChange={(e) => setProblem(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="desc" className="formDoc1">Description</label>
                                    <input
                                        type="text"
                                        id="desc"
                                        className="form-input"
                                        placeholder="Enter Description about problem"
                                        value={desc}
                                        onChange={(e) => setdesc(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="submitResetButton">
                                <button type="submit" className="submitDoc" >Submit details</button>
                                <button className="submitDoc" onClick={resetHandler}>Reset Details</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
                <div className="clearButton">
                    {
                        clearButton &&
                        <button className="add" onClick={clearScreen}>Clear Screen</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileDoctor;

