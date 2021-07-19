import {Field, Form, Formik} from "formik";
import React from "react";

type SearchFieldPropsType = {
    getUsers: (currentPage: number, pageSize: number, term: string | null, friend: null | boolean) => void
    pageSize: number
}

export const SearchField: React.FC<SearchFieldPropsType> = React.memo((props) => {
    return (
        <Formik
            initialValues={{term: '', friend: null}}
            onSubmit={(values) => {
                props.getUsers(1, props.pageSize, values.term, values.friend)
            }}
        >
            <Form>
                <Field type="text" name="term"/>
                <Field as="select" name="friend">
                    <option value="null">All</option>
                    <option value="true">Followed</option>
                    <option value="false">Unfollowed</option>
                </Field>
                <button type="submit">find</button>
            </Form>
        </Formik>
    );
})