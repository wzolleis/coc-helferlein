import { InjectedFormikProps, withFormik } from 'formik';
import React from 'react';
import { object, string } from 'yup';
import { TOMS_HUETTE_CLAN_TAG } from '../../../common/cocConstants';

interface FormValues {
    clanTag: string;
}

export interface ClanSelectionFormProps {
    clanTag?: string;
    onFetchCwlInfo: (clanTag: string) => void;
}

type ValidationVisible = string | boolean;

interface FormValidationProps {
    showValidation?: ValidationVisible;
    message?: string;
}

const FormValidation: React.FC<FormValidationProps> = (props) => {
    return (
        <div>
            {props.showValidation && <div className={'alert alert-danger'}>{props.message}</div>}
        </div>
    );
};

export type ClanSelectionExtendedProps = InjectedFormikProps<ClanSelectionFormProps, FormValues>;

export const InnerForm: React.FC<ClanSelectionExtendedProps> = (props) => {
    const showValidationMessage = props.touched.clanTag && props.errors.clanTag;
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={'form-group'}>
                <label htmlFor='clanTag'>Clan Tag</label>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text' id='clan-tag-prepend'>#</span>
                    </div>
                    <input
                        id='clanTag'
                        placeholder='xyz123'
                        type='text'
                        className={'form-control'}
                        onChange={props.handleChange}
                        value={props.values.clanTag}
                    />
                    <div/>
                    <div className='input-group-append'>
                        <button id='clan-selection-btn' className={'btn btn-primary'} type='submit' disabled={props.isSubmitting}>
                            Clan War League Informationen
                        </button>
                    </div>
                </div>
                <FormValidation showValidation={showValidationMessage} message={props.errors.clanTag}/>
            </div>
        </form>
    );
};


const ClanSelectionComponent = withFormik<ClanSelectionFormProps, FormValues>({
    mapPropsToValues: () => ({clanTag: TOMS_HUETTE_CLAN_TAG}),
    validationSchema: object().shape({
            clanTag: string()
                .required('ohne Clan Tag geht hier nix')
        }
    ),
    handleSubmit: (values: FormValues, {props, setSubmitting}) => {
        props.onFetchCwlInfo(values.clanTag);
        setSubmitting(false);
    }
})(InnerForm);

export default ClanSelectionComponent;