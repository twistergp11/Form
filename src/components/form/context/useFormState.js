import { useContext } from 'react';
import FormContext from './FormContext';

const useFormState = () => useContext(FormContext);

export default useFormState;
