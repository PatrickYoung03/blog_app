import React, { useContext } from "react";

import { View, Text, StyleSheet, FlatList, Button, Image } from "react-native";

import { Context } from "../context/BlogContext";

import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          const { id, title } = item;
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(id)}>
                  <EvilIcons name="trash" size={35} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    borderColor: "grey",
    borderWidth: 1,
    height: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
  },
});

export default IndexScreen;
