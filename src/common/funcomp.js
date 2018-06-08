import React from 'react';
import './funcomp.css';

export const Alert = ({message}) => {
    if (message) {
        return (
            <div className="alert alert-danger" >{message}</div>
        );
    }
    return null
};



export const Loading = ({isLoading}) => {
    if (isLoading) {
        return (
            <h3 className="">Loading...
                <Spinner/>
            </h3>
        );
    }
    return null
};

export const Spinner = () => {
    return (<div className="spinner"/>);
};

