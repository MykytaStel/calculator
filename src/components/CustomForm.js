// CustomForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';

const CustomForm = () => {
  return (
    <Formik
      initialValues={{
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: ''
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="input1">Input 1</label>
          <Field type="text" id="input1" name="input1" />

          <label htmlFor="input2">Input 2</label>
          <Field type="text" id="input2" name="input2" />

          {/* Add the rest of the custom inputs similarly */}
          <label htmlFor="input8">Input 8</label>
          <Field type="text" id="input8" name="input8" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
