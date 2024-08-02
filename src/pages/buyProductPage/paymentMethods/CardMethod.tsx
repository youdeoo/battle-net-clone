import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import BackToPreviousPageButton from '../BackToPreviousPageButton';

type TFormValues = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
}

const formSchema = yup.object({
  firstName: yup.string().required('Please enter a first name'),
  lastName: yup.string().required('Please enter a last name'),
  address: yup
    .string()
    .required('Please enter a street addres')
    .min(5)
    .max(100)
    .matches(/^[a-zA-Z0-9\s,'-]*$/),
  city: yup
    .string()
    .required('Please enter a city')
    .matches(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/, 'Invalid city name'),
  postalCode: yup
    .string()
    .required('Please enter a postal code')
    .length(6)
    .matches(/^\d{2}-\d{3}$/, 'Postal code must be in the format: 00-200')
});

const CardMethod = () => {
  const formValues: TFormValues = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: ''
  };

  const getBorderColor = (fieldError: string | undefined, fielTouched: boolean | undefined): string => {
    return fieldError && fielTouched ? 'border-yellow hover:border-yellow' : 'border-lighterBorderGray';
  }

  return (
    <div className='mt-8'>
      <h1 className='text-2xl text-white font-bold mb-4'>Billing Information</h1>
      <Formik
        initialValues={formValues}
        validationSchema={formSchema}
        onSubmit={(
          {
            firstName,
            lastName,
            address,
            city,
            postalCode
          }: TFormValues, { resetForm }) => {
          alert(
            `firstName: ${firstName},
            lastName: ${lastName},
            address: ${address},
            city: ${city},
            postalCode: ${postalCode}`
          );
          resetForm();
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor='firstName' className='gray-text-uppercase text-xs'>
                First Name
              </label>
              <Field
                className={`${getBorderColor(errors.firstName, touched.firstName)} form-input`}
                id='firstName'
                name='firstName'
                type='text'
              />
              <ErrorMessage name='firstName'>
                {(msg) => (
                  <div className='flex items-center gap-2'>
                    <img
                      className='size-4'
                      src='/icons/triangle-warn.svg'
                      alt='Invalid first name error message'
                      loading='lazy'
                    />
                    <span className='text-sm text-yellow'>{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </div>
            <div className='mt-2'>
              <label htmlFor='lastName' className='gray-text-uppercase text-xs'>
                Last Name
              </label>
              <Field
                className={`${getBorderColor(errors.lastName, touched.lastName)} form-input`}
                id='lastName'
                name='lastName'
                type='text'
              />
              <ErrorMessage name='lastName'>
                {(msg) => (
                  <div className='flex items-center gap-2'>
                    <img
                      className='size-4'
                      src='/icons/triangle-warn.svg'
                      alt='Invalid last name error message'
                      loading='lazy'
                    />
                    <span className='text-sm text-yellow'>{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </div>
            <div className='mt-2'>
              <label htmlFor='address' className='gray-text-uppercase text-xs'>
                Addres
              </label>
              <Field
                className={`${getBorderColor(errors.address, touched.address)} form-input`}
                id='address'
                name='address'
                type='text'
              />
              <ErrorMessage name='address'>
                {(msg) => (
                  <div className='flex items-center gap-2'>
                    <img
                      className='size-4'
                      src='/icons/triangle-warn.svg'
                      alt='Invalid address error message'
                      loading='lazy'
                    />
                    <span className='text-sm text-yellow'>{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </div>
            <div className='mt-2'>
              <label htmlFor='city' className='gray-text-uppercase text-xs'>
                City
              </label>
              <Field
                className={`${getBorderColor(errors.city, touched.city)} form-input`}
                id='city'
                name='city'
                type='text'
              />
              <ErrorMessage name='city'>
                {(msg) => (
                  <div className='flex items-center gap-2'>
                    <img
                      className='size-4'
                      src='/icons/triangle-warn.svg'
                      alt='Invalid city error message'
                      loading='lazy'
                    />
                    <span className='text-sm text-yellow'>{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </div>
            <div className='mt-2'>
              <label htmlFor='postalCode' className='gray-text-uppercase text-sm'>
                Postal Code
              </label>
              <Field
                className={`${getBorderColor(errors.postalCode, touched.postalCode)} form-input`}
                id='postalCode'
                name='postalCode'
                type='text'
              />
              <ErrorMessage name='postalCode'>
                {(msg) => (
                  <div className='flex items-center gap-2'>
                    <img
                      className='size-4'
                      src='/icons/triangle-warn.svg'
                      alt='Invalid postal code error message'
                      loading='lazy'
                    />
                    <span className='text-sm text-yellow'>{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </div>
            <button
              className='blue-button p-2 mt-8 mb-4'
              disabled={isSubmitting}
              type='submit'
            >
              Continue to Payment
            </button>
            <BackToPreviousPageButton />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CardMethod;