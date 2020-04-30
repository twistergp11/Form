const hasNext = state => state.step < state.maxSteps - 1;
const hasPrevious = state => state.step > 0;
const hasSubmit = state => state.step === state.maxSteps - 1;

const getDerivedValues = state => ({
  hasNext: hasNext(state),
  hasPrevious: hasPrevious(state),
  hasSubmit: hasSubmit(state),
});

export { getDerivedValues }