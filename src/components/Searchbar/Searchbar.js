import React from 'react';
import { Formik, Form, Field } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={values => {
          onSubmit(values);
        }}
      >
        <Form className='SearchForm'>
          <div>
            <Field
            className = "SearchForm-input"
              type="text"
              name="query"
              placeholder="Search image and photo"
            />
            <button className='SearchForm-button' type="submit">Search</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
