import React, { useReducer } from 'react';
import FormContext from './FormContext';
import { formReducer, initialFormState } from '../state/reducers';
import { getDerivedValues } from '../state/selectors';

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const derivedValues = getDerivedValues(state);

  return (
    <FormContext.Provider
      value={{ state: { ...state, ...derivedValues }, dispatch }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
