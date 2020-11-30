import React, { useContext, useState } from "react";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((item) => item.id === id);

  console.log(blogPost, id);

  return (
    <BlogPostForm
      submitPost={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
      initialState={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
