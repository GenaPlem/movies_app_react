import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

import {setSearchedMovies} from "../../store/action";

const FormikForm = ({searchedMovies, setSearchedMovies}) => {
    const initialValues = { search: '' };
    const placeholder = {};
    const navigate = useNavigate();

    const handleValidate = value => {
        const errors = {};
        if (!value.search) {
            errors.search = ''
            placeholder.search = 'Required'
        } else if (value.search.length < 3) {
            errors.search = 'Min length 3 symbols'
        }
        return errors;
    }

    const handleSubmit = (value, {setSubmitting, resetForm}) => {
        navigate(`/search/${value.search}`);
        setSubmitting(false);
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={handleValidate}
        >
            {({ isSubmitting }) => (
                <Form className='header__search'>
                    <ErrorMessage name='search' component='span' className='header__search__error'/>
                    <Field type='search' name='search' className='header__search__input' placeholder={placeholder.search}/>
                    <button type='submit' disabled={isSubmitting} className='header__search__submit'>search</button>
                </Form>
            )}
        </Formik>
)}

const mapStateToProps = state => ({
    searchedMovies: state.searched,
})

const mapDispatchToProps = {
    setSearchedMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormikForm);