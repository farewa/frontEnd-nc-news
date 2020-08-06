import React, { useContext, useState, useCallback, useEffect } from "react";
import { UserContext } from "../../App";
import { Formik } from "formik";
import { StyledButton, MessageTag } from "../styled/lib";
import * as Yup from "yup";
import * as api from "../../api";
import {LogOut} from './Logout'



const validationSchema = Yup.object().shape({
  username: Yup.string().required("choose a username"),
});

export const LogInBox = () => {
  const { user, setUser } = useContext(UserContext);

  const [users, setTopics] = useState([]);
  const [error, setError] = useState({});

  const fetchUsers = useCallback(() => {
    const fetchingUsers = async () => {
      try {
        const usersResponse = await api.getAllUsers();
        setTopics(usersResponse);
      } catch (error) {
        setError(error);
      }
    };
    fetchingUsers();
  }, []);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetchUsers();
    }

    return () => {
      mounted = false;
    };
  }, [fetchUsers]);

  return (
    <div>
    {user ? <LogOut /> : 
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
            {users.map((user) => {
              return <option value ={user.username} label={user.username}></option>
            })}
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
    }
    </div>
  );
};
