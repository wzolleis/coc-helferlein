import { InjectedFormikProps, withFormik } from 'formik';
import React from 'react';
import { object, string } from 'yup';

interface FormValues {
    clanTag: string;
}

interface FormProps {
    clanTag?: string;
}

const InnerForm: React.FC<InjectedFormikProps<FormProps, FormValues>> = (
    props
) => (
    <form onSubmit={props.handleSubmit}>
        <div className={'form-group'}>
            <input
                id='clanTag'
                placeholder='#xyz123'
                type='text'
                onChange={props.handleChange}
                value={props.values.clanTag}
            />
            {props.touched.clanTag && props.errors.clanTag &&
            <div>{props.errors.clanTag}</div>}
            <button className={'btn btn-primary'}
                    type='submit'
                    disabled={props.isSubmitting}
            >
                Submit
            </button>
        </div>
    </form>
);

const UserSearchForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: () => ({clanTag: '#QLGYVPQ9'}),
    validationSchema: object().shape({
            clanTag: string()
                .required('ohne Clan Tag geht hier nix')
        }
    ),
    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(
            () => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            },
            1000
        );
    }
})(InnerForm);

export default UserSearchForm;