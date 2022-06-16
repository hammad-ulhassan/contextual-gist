import { Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Empty = () =>{
    return(
        <>
            <Typography.Title>404</Typography.Title>
            <Link to="/home">Home</Link>
        </>
    );
}

export default Empty;