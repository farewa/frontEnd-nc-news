import { useReducer, useEffect, useCallback } from "react";
import axios from "axios";

export const useArticles = (topic = "") => {
  const initialState = {
    loading: true,
    data: "",
    error: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          loading: true,
        };
      case "SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.data,
        };
      case "ERROR":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchArticles = useCallback(() => {
    const fetchingArticles = async () => {
      try {
        const response = await axios.get(
          "https://b-end-nc-news-app.herokuapp.com/api/articles",
          { params: { topic } }
        );
        dispatch({ type: "SUCCESS", data: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", error });
      }
    };
    fetchingArticles();
  }, [topic]);

  useEffect(() => {
    let mounted = true;
    dispatch({ type: "LOADING" });

    if (mounted) {
      fetchArticles();
    }

    return () => {
      mounted = false;
    };
  }, [fetchArticles]);

  return state;
};
