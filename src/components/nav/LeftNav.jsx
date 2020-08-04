import React, { useState, useCallback, useEffect } from "react";
import { Link } from "@reach/router";
import { UL } from "../styled/lib";
import * as api from "../../api";

export const LeftNav = () => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState({});

  const fetchTopics = useCallback(() => {
    const fetchingTopics = async () => {
      try {
        const topicsResponse = await api.getTopics();
        setTopics(topicsResponse);
      } catch (error) {
        setError(error);
      }
    };
    fetchingTopics();
  }, []);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetchTopics();
    }

    return () => {
      mounted = false;
    };
  }, [fetchTopics]);

  return (
    <UL>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/articles">Articles</Link>
      </li>
      {topics &&
        topics.map((topic) => {
          return (
            <li key={topic.slug}>
              {" "}
              <Link to={`/${topic.slug}`}> {topic.slug} </Link>
            </li>
          );
        })}
    </UL>
  );
};
