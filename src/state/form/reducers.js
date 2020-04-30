import { INPUT, NEXT_STEP, PREVIOUS_STEP, SUBMIT, RESET } from './actions';

const clamp = (min, max, number) => Math.min(max, Math.max(min, number));

const initialFormState = {
  fields: {
    username: "",
    password: "",
    address: "",
    city: "",
    card: "",
    cvv: "",
  },
  step: 0,
  maxSteps: 3,
  done: false,
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case INPUT:
      const { name, value } = payload;
      return {
        ...state,
        fields: {
          ...state.fields,
          [name]: value,
        },
      };
    case NEXT_STEP:
      return {
        ...state,
        step: clamp(0, state.maxSteps, state.step + 1),
      }
    case PREVIOUS_STEP:
      return {
        ...state,
        step: clamp(0, state.maxSteps, state.step - 1),
      }
    case SUBMIT:
      return {
        ...state,
        done: true,
      }
    case RESET:
      return initialFormState;
    default:
      return state;
  }
};

export { formReducer, initialFormState }