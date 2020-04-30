import React from "react";
import Form from "./Form";
import FormProvider from "./FormProvider";

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
