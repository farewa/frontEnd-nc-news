import React, { useContext } from "react";
import { UserContext, SetUserContext } from "../../App";
import { Formik } from "formik";
import * as Yup from "yup";
import { Error } from "./LoginError";
import * as api from "../../api";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, "Please enter a character")
    .max(20, "please enter a shorter username")
    .required("Must enter a username"),
});

export const LogInBox = () => {
  const username = useContext(UserContext);
  console.log(username);
  const settingUser = useContext(SetUserContext);
  return (
    <Formik
      initialValues={{ username }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const usernameResponse = await api.getUser(values.username);
        settingUser(usernameResponse.username);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username"> Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              className={
                touched.username && errors.username ? "has-error" : null
              }
            />
            <Error touched={touched.username} message={errors.username} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};
