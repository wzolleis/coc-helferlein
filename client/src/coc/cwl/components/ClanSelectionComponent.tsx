import React from 'react';
import { Field, Form, FormikBag, Formik, FormikProps } from 'formik';

interface ClanSelectionComponentFormValues {
    clanTag: string;
}

type ClanSelectionComponentProps = FormikProps<ClanSelectionComponentFormValues>;

const ClanSelectionComponent: React.FC<{}> = () => {
    const initialValues: ClanSelectionComponentFormValues = {clanTag: ''};
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: ClanSelectionComponentProps, actions) => {
                    console.log({values, actions});
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
                render={(formikBag: FormikBag<any, ClanSelectionComponentFormValues>) => (
                    <Form>
                        <Field
                            name='clanTag'
                            render={({field, form, meta}) => (
                                <div>
                                    <input type='text' {...field} placeholder='#xyzabc123'/>
                                    {meta.touched && meta.error && meta.error}
                                </div>
                            )}
                        />
                    </Form>
                )}
            />
        </div>
    );
};

export default ClanSelectionComponent;