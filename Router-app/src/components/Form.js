import React, { Component } from 'react';
import '../style.css';

const Form = () => {
    return (
        <div className="row form-style">
        <form className="col s6">

        <div className="row">
        <div className="input-field col s6">
        <input id="first_name" type="text" className="validate" />
        <label for="first_name">First Name</label>
        </div>

        <div className="input-field col s6">
        <input id="last_name" type="text" className="validate" />
        <label for="last_name">Last Name</label>
        </div>
        </div>

        <div className="column">
        <p>
            <label>
                <input className="with-gap" name="group1" type="radio"  />
                <span>Male</span>
            </label>
        </p>

        <p>
            <label>
                <input className="with-gap" name="group1" type="radio"  />
                <span>Female</span>
            </label>
        </p>
        </div>

        <div className="row">
        <div className="input-field col s12">
        <input id="Birth" type="text" className="validate" />
        <label for="Birth">Date of Birth</label>
        </div>
        </div>

        <div className="row">
        <div className="input-field col s12">
        <input id="new_line" type="text" className="validate" />
        <label for="new_line">Description</label>
        </div>
        </div>

        <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>

        </form>
        </div>
    )
}

export default Form;
