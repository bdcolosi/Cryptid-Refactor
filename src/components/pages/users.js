import React from "react";
import axios from 'axios';

const TestApi = (props) => {
    const [testApi, setTestApi] = React.useState('');

    axios.get('http://localhost:3001/users')
        .then(response => response.data)
        .then(response => setTestApi(response))

    return (
        <p>{testApi}</p>
    )
}



export default TestApi