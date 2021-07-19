import {Field, Form, Formik} from "formik";
import React from "react";

export const SearchField: React.FC = React.memo(() => {
    return (
        <Formik
            initialValues={{term: '', friend: null}}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field as="select" name="color">
                        <option value="null">All</option>
                        <option value="true">Followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>
                </Form>
            )}
        </Formik>
    )
})