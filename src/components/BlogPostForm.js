import React, { useContext, useState } from "react";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ submitPost, initialState }) => {
  const [title, setTitle] = useState(initialState.title);
  const [content, setContent] = useState(initialState.content);

  return (
    <View>
      <Text style={style.title}>Title</Text>
      <TextInput
        value={title}
        style={style.input}
        onChangeText={(v) => setTitle(v)}
      />
      <Text style={style.title}>Content</Text>
      <TextInput
        value={content}
        style={style.input}
        onChangeText={(v) => setContent(v)}
      />
      <Button title="Confirm" onPress={() => submitPost(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialState: {
    title: "",
    content: "",
  },
};

const style = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 18,
    padding: 5,
    margin: 5,
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 5,
  },
});

export default BlogPostForm;
