const steps = [
  {
    title: 'User Info',
    fields: ['username', 'password'],
  },
  {
    title: 'Address Info',
    fields: ['address', 'city'],
  },
  {
    title: 'Billing Info',
    fields: ['card', 'cvv'],
  },
];

const buttonText = {
  nextText: 'Next',
  previousText: 'Previous',
  submitText: 'Submit',
};

export { steps, buttonText };
