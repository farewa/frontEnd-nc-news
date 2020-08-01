import { useEffect, useCallback, useReducer } from "react";
import { reducer } from "./reducer";
import { axiosInstance } from "../api";

export const useSingleArticle = (article_id) => {
  const initialState = {
    loading: true,
    data: "",
    error: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSingleArticle = useCallback(() => {
    const fetchArticle = async () => {
      try {
        const response = await axiosInstance.get(`/articles/${article_id}`);
        dispatch({ type: "SUCCESS", data: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", error });
      }
    };
    fetchArticle();
  }, [article_id]);

  useEffect(() => {
    let mounted = true;
    dispatch({ type: "LOADING" });

    if (mounted) {
      fetchSingleArticle();
    }

    return () => {
      mounted = false;
    };
  }, [fetchSingleArticle]);

  return state;
};
