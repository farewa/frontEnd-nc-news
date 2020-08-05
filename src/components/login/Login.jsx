import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Formik } from "formik";
import { StyledButton, MessageTag } from "../styled/lib";
import * as Yup from "yup";
import * as api from "../../api";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("choose a username"),
});

export const LogInBox = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Formik
      initialValues={{ user }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const usernameResponse = await api.getUser(values.username);
        setUser(usernameResponse.username);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"> username</label>
            <select
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            >
              <option value="" label="select a username"></option>
              <option value="tickle122" label="tickle122"></option>
              <option value="grumpy19" label="grumpy19"></option>
              <option value="happyamy2016" label="happyamy2016"></option>
              <option value="cooljmessy" label="cooljmessy"></option>
              <option value="weegembump" label="weegembump"></option>
              <option value="jessjelly" label="jessjelly"></option>
            </select>
            {errors.username && touched.username && (
              <div className="input-feedback">{errors.username}</div>
            )}
            <StyledButton type="submit" disabled={isSubmitting}>
              login
            </StyledButton>
            {user && (
              <div>
                <MessageTag>logged in as {user}</MessageTag>
                <StyledButton
                  onClick={() => setUser("")}
                  disabled={isSubmitting}
                  type={"reset"}
                >
                  logout
                </StyledButton>
              </div>
            )}
        </form>
      )}
    </Formik>
  );
};
