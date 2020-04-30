import React from "react";
import Form from "./Form";
import { FormProvider, Form } from "components/Form";

function App() {
  return (
    <div>
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
