import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999).toString(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogPosts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    // dispatch({ type: "add_blogpost", payload: { title: title, content: content } }) is the same as below
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_blogpost",
      payload: {
        id: id,
        title: title,
        content: content,
      },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
