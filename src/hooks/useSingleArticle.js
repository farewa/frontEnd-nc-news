import { useEffect, useCallback, useReducer } from "react";
import { reducer } from "./reducer";
import { axiosInstance } from "../api";

export const useSingleArticle = (article_id, type) => {
  const initialState = {
    loading: true,
    data: "",
    error: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSingleArticle = useCallback(() => {
    const typeLookUp = {
      singleArticle: `/articles/${article_id}`,
      comments: `/articles/${article_id}/comments`,
    };

    const fetchArticle = async () => {
      try {
        const response = await axiosInstance.get(typeLookUp[type]);

        dispatch({ type: "SUCCESS", data: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", error });
      }
    };
    fetchArticle();
  }, [article_id, type]);

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
