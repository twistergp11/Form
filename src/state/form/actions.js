const INPUT = 'INPUT';
const NEXT_STEP = 'NEXT_STEP';
const PREVIOUS_STEP = 'PREVIOUS_STEP';
const SUBMIT = 'SUBMIT';
const RESET = 'RESET';

const input = ({ name, value }) => ({ type: 'INPUT', payload: { name, value } });
const nextStep = () => ({ type: 'NEXT_STEP' });
const previousStep = () => ({ type: 'PREVIOUS_STEP' });
const submit = () => ({ type: 'SUBMIT' });
const reset = () => ({ type: 'RESET' });

export {
  INPUT,
  NEXT_STEP,
  PREVIOUS_STEP,
  SUBMIT,
  RESET,
  input,
  nextStep,
  previousStep,
  submit,
  reset,
}