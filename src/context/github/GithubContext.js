import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  // GETING INITIAL USER FOR TESTING PURPORSE
  //   const fetchUsers = async () => {
  //     setLoading();
  //     // const { data } = await axios.get(
  //     //   `${process.env.REACT_APP_GITHUB_URL}/users`,
  //     //   header
  //     // );

  //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
  //       headers: {
  //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //       },
  //     });
  //     const data = await response.json();
  //     dispatch({
  //       type: "GET_USERS",
  //       payload: data,
  //     });
  //   };

  //   Clear Users
  //   const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        dispatch,
        // fetchUsers,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
