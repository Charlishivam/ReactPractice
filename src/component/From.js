import React from 'react';
import { useState } from "react";



export default function Form({ handleSubmit, name }) {
    const [formValues, setFormValues] = useState({
        customer_name: "",
        customer_number: "",
        customer_email: ""
    });

    // spread operator -> ... -> [] -> normal value -> object

    // Popular -> reusable components

    // reactjs nodejs python  -> Devops ->

    // localsotrage -> browser close

    // cookies -> time

    // session storage -> when i close a tab

    //  password -> function(p) -> ekufgeiulgfui343453jk54n37645 ->

    //  header + redux store + BE + cloud authentication

    //  1 -> header -> authenticate
    //  2 -> authenticated value
    //  3 -> BE authenticate
    //  4 -> Cloud -> authenticate -> DATABASE
    //  5 -> store -> authenticated

    function handleChange(e) {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <form>
                <label>
                    Enter your {name}:{/* props */}
                    <input
                        className="inputStyle"
                        placeholder='Enter your customer name...'
                        type='text'
                        name='customer_name'
                        value={formValues.customer_name}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <br />
                <br />
                <label>
                    Enter your number:
                    <input
                        className="inputStyle"
                        placeholder='Enter your customer number...'
                        type='number'
                        name='customer_number'
                        value={formValues.customer_number}
                        onChange={(e) => handleChange(e)}
                    />

                </label>
                <br />
                <br />
                <label>
                    Enter your email:
                    <input
                        className="inputStyle"
                        placeholder='Enter your customer email...'
                        type='number'
                        name='customer_email'
                        value={formValues.customer_email}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <br />
                <br />
                <button onClick={() => handleSubmit()} type="button">
                    Submit
                </button>
            </form>
        </>
    );
}


