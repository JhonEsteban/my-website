import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './ContactForm.scss';

import sendEmail from '../../services/sendEmail';
import useAlerts from '../../hooks/useAlerts';

const initialState = {
  name: '',
  email: '',
  description: '',
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { successAlert, loaderAlert } = useAlerts();

  const handleValidateForm = ({ name, email, description }) => {
    let formErros = {};
    const isValidName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const isValidEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!name) {
      formErros.name = 'Debe ingresar un nombre';
    } else if (!isValidName.test(name)) {
      formErros.name = 'El nombre no puede tener caracteres especiales';
    }

    if (!email) {
      formErros.email = 'Debe ingresar un correo';
    } else if (!isValidEmail.test(email)) {
      formErros.email =
        'Ingresar un correo válido, ejemplo: usuario123@gmail.com';
    }

    if (!description) {
      formErros.description = 'Debe ingresar una descripción';
    }

    return formErros;
  };

  const handleSendForm = (values, { resetForm }) => {
    setLoading(true);
    loaderAlert();

    sendEmail(values).then((resp) => {
      setLoading(false);
      successAlert(resp.message);
    });

    resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      validate={handleValidateForm}
      onSubmit={handleSendForm}
    >
      {({ errors }) => (
        <Form className='form'>
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
              <span style={{ color: 'red', fontSize: '1.5rem' }}>
                {errors.name}
              </span>
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
              <span style={{ color: 'red', fontSize: '1.5rem' }}>
                {errors.email}
              </span>
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
              <span style={{ color: 'red', fontSize: '1.5rem' }}>
                {errors.description}
              </span>
            )}
          />

          <button className='form__button' type='submit'>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
