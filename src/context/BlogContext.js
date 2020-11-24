import React, { useState, useReducer } from "react";

import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "EDIT_POST":
      return state.map((blogPost) => {
        blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    case "ADD_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_POST", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_POST", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: "EDIT_POST", payload: { id, title, content } });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Blog one", content: "test", id: 1 }]
);
