import React, { useContext, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
  console.log("ROUTE", route);
  console.log("NAVIGATION", navigation);
  const id = route.params.id;
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
