import React, {useState, useCallback} from 'react';
import IpAddress from '../lib/LogicalAddressing/IpAddress';

const Form = () => {
    const [inputs, setInputs] = useState({input1: '', input2: '', input3: '', input4: ''});

    // Constant array for input configuration
    const inputFields = [
        {name: 'input1', label: 'Number 1:'},
        {name: 'input2', label: 'Number 2:'},
        {name: 'input3', label: 'Number 3:'},
        {name: 'input4', label: 'Number 4:'},
    ];

    // Handles input changes for all fields
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs((prev) => ({...prev, [name]: value}));
    };

    // State to track the selected encoding format
    const [encoding, setEncoding] = useState('decimal');

    // Handles encoding change
    const handleEncodingChange = (event) => {
        setEncoding(event.target.value);
    };

    // State to store the list of values
    const [list, setList] = useState([]);

    // Extracted function to render input fields dynamically
    const renderInputField = ({name, label}) => (
        <div key={name}>
            <label>
                {label}
                <input
                    type="number"
                    name={name}
                    value={inputs[name]}
                    onChange={handleChange}
                />
            </label>
            <br/>
        </div>
    );

    // Handles form submission
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            const values = Object.values(inputs).map(Number); // Convert inputs to numbers
            setList((prevList) => [...prevList, new IpAddress(values)]); // Add new values to the list
            const ipAddress = new IpAddress(values);
            console.log(ipAddress.toString());

            if (encoding === 'binary') {
                console.log(ipAddress.toBinary());
            } else if (encoding === 'decimal')
            {
                console.log(ipAddress.toDecimal());
            }
        },
        [inputs]
    );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Encoding:
                        <select value={encoding} onChange={handleEncodingChange}>
                            <option value="decimal">Decimal</option>
                            <option value="binary">Binary</option>
                        </select>
                    </label>
                </div>
                {inputFields.map(renderInputField)} {/* Dynamically render input fields */}
                <input type="submit" value="Submit"/>
            </form>
            <ul>
                {list.map((values, index) => (
                    <li key={index}>
                        {encoding === 'binary' ? (
                            values.toBinary()
                        ) : encoding === 'decimal' ? (
                            values.toDecimal()
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Form;