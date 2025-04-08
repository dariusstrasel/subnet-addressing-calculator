import React from 'react';

const Form = () => {
    return (
        <form>
            Input Text:
            <br/>
            <label>
                <input type="text" name="input"/>
            </label>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    );
};

export default Form;