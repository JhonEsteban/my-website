import './ContactForm.scss';

import { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
  const [submittedForm, setSubmittedForm] = useState(false);

  const handleValidateForm = ({ name, email, description }) => {
    let formErros = {};
    const isValidName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const isValidEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!name) {
      formErros.name = 'Por favor ingresa un nombre';
    } else if (!isValidName.test(name)) {
      formErros.name = 'El nombre no puede tener caracteres especiales';
    }

    if (!email) {
      formErros.email = 'Por favor ingresa un correo';
    } else if (!isValidEmail.test(email)) {
      formErros.email = 'Ingresar un correo valido';
    }

    if (!description) {
      formErros.description = 'Por favor ingresa una descripción';
    }

    return formErros;
  };

  const handleSendForm = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        description: '',
      }}
      validate={handleValidateForm}
      onSubmit={handleSendForm}
    >
      {({ errors }) => (
        <Form className='form'>
          {submittedForm && (
            <p style={{ color: 'green', margin: 'auto' }}>
              Enviado con exito!!
            </p>
          )}

          <Field
            name='name'
            type='text'
            autoComplete='off'
            className='form__input'
            placeholder='Nombre *'
          />

          <ErrorMessage
            name='name'
            component={() => (
              <span style={{ color: 'red' }}>{errors.name}</span>
            )}
          />

          <Field
            name='email'
            type='email'
            autoComplete='off'
            className='form__input'
            placeholder='Correo *'
          />

          <ErrorMessage
            name='email'
            component={() => (
              <span style={{ color: 'red' }}>{errors.email}</span>
            )}
          />

          <Field
            as='textarea'
            name='description'
            cols='30'
            rows='10'
            className='form__input'
            placeholder='Descripción *'
          ></Field>

          <ErrorMessage
            name='description'
            component={() => (
              <span style={{ color: 'red' }}>{errors.description}</span>
            )}
          />

          <button className='form__button' type='submit'>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
