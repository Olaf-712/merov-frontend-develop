import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    email: '',
    password: '',
};

const UpdateInfoSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function UpdateInfo() {
    return (
        <React.Fragment>
            <Formik
                initialValues={initialValues}
                validationSchema={UpdateInfoSchema}
                onSubmit={(fields) => {
                    console.log(`SUCCESS!! :-)\n\n${JSON.stringify(fields, null, 4)}`);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label className="form-label">Email</label>
                                <Field
                                    name="email"
                                    type="text"
                                    className={`form-control${errors.email && touched.email ? ' is-invalid' : ''}`}
                                />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">Password</label>
                                <Field
                                    name="password"
                                    type="text"
                                    className={`form-control${errors.password && touched.password ? ' is-invalid' : ''}`}
                                />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                        </div>

                        <div className="mt-3">
                            <button htmlType="submit" className="btn btn-custom btn-primary mr-2">
                                Save
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    );
}
export default UpdateInfo;
