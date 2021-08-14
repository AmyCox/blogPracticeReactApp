import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
          <EvilIcons name="pencil" size={35}></EvilIcons>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  console.log(id);
  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
