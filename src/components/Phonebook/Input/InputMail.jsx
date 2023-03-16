import React from 'react';
import Input from '../Input/Input.styled';
import PropTypes from 'prop-types';

const InputMail = ({onchange, value})=>(
    <Input
     type= "email"
     name= "email"
     required
     placeholder="Enter e-mail"
     onchange = {onchange}
     value = {value}
    />
);

export default InputMail;

InputMail.propTypes ={
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};