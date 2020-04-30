import React, { useContext } from 'react';
import FormContext from './FormContext';

const useFormState = Component => (props) => useContext(FormContext);

export default useFormState;