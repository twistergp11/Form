import React from 'react';
import useFormState from './context/useFormState';
import { input, nextStep, previousStep, submit } from './state/actions';
import { steps, buttonText } from './steps';

const Form = () => {
  const {
    state: { fields, step, maxSteps, hasNext, hasPrevious, hasSubmit },
    dispatch,
  } = useFormState();

  const { title, fields: stepFields } = steps[step];
  const { nextText, previousText, submitText } = buttonText;

  const handleChange = ({ target: { name, value } }) => {
    dispatch(input({ name, value }));
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrevious = () => {
    dispatch(previousStep());
  };

  const handleSubmit = () => {
    dispatch(submit());
  };

  return (
    <div>
      <h1>{`Step ${step}/${maxSteps} - ${title}`}</h1>
      {stepFields.map((name) => (
        <input name={name} value={fields[value]} onChange={handleChange} />
      ))}
      {hasPrevious && <button onClick={handlePrevious}>{previousText}</button>}
      {hasNext && <button onClick={handleNext}>{nextText}</button>}
      {hasSubmit && <button onClick={handleSubmit}>{submitText}</button>}
    </div>
  );
};
