import React from 'react'

export default function Form(props){
    const {values, update, submit} = props

    const onChange = evt =>{
        const name = evt.target.name;
        const value = evt.target.value;
        update(name,value);
    }
    const onSubmit = evt =>{
        evt.preventDefault();
        submit();
    }

    return(
        <form onSubmit = {onSubmit}>
            <div>
                <label>Name 
                    <input 
                        type = 'text'
                        name = 'name'
                        value = {values.name}
                        placeholder ='Type in your name'
                        maxLength = '50'
                        onChange = {onChange}
                    />
                </label>

                <label>Email 
                    <input 
                        type = 'email'
                        name = 'email'
                        value = {values.email}
                        placeholder ='Type in your email'
                        maxLength = '50'
                        onChange = {onChange}
                    />
                </label>

                <label>Role
                    {/* 🔥 STEP 5 - Make dropdown for role. */}
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Front-end Developer'>Front-end Developer</option>
                        <option value='Back-end Developer'>Back-end Developer</option>
                        <option value='Designer'>Designer</option>
                    </select>
                </label>

                <div className = 'submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}