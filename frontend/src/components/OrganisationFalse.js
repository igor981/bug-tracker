import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate,  } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { login } from "../actions/auth";
const OrganisationFalse = () => {
    const { user: currentUser } = useSelector((state) => state.auth);

  const [orgName, setOrgName] = useState("");
  const [orgDesc, setOrgDesc] = useState("");
  const [loading, setLoading] = useState(false);



  const onChangeOrgName = (e) => {
    const orgName = e.target.value;
    setOrgName(orgName);
  };

  const onChangeOrgDesc = (e) => {
    const orgDesc = e.target.value;
    setOrgDesc(orgDesc);
  };

  const handleSubmit = (e) => {
      setLoading(true)

  }
    return (
        <div className='organisation'>
            <h1> Organisation </h1>
            <div className='organisation__create'>
                <h2>Create an organisation</h2>
                <form className='organisation__form' onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor='orgname'>Organisation name</label>
                    <input 
                    type="text"
                    className="form-control"
                    name="orgname"
                    value={orgName}
                    onChange={onChangeOrgName}
                    ></input>
                    <label htmlFor='orgDesc'>Description</label>
                    <textarea className="form-control"
                    name="orgDesc"
                    value={orgDesc}
                    onChange={onChangeOrgDesc}></textarea>
                    <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Create Organisation</span>
            </button>
                </form>

            </div>
            <div className='organisation__join'>
                <h2>Join an organisation</h2>
                <p>Click on an invitation link to join an organisation.</p>
            </div>
        </div>
    )
}

export default OrganisationFalse
