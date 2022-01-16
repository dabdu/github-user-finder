import axios from "axios";

const URL = "https://api.github.com";
const TOKEN = "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";

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    try {
      const response = await axios.get(`${URL}/search/users?${params}`,{  Authorization: `token ${TOKEN}`});
         return response.data.items;
    } catch (error) {
      console.error(error);
    }
};

// GET USER AND REPOS
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([

      axios.get(`${URL}/users/${login}`,{  Authorization: `token ${TOKEN}`}),
      axios.get(`${URL}/users/${login}/repos`,{  Authorization: `token ${TOKEN}`})
        // return response.data.items;
  //   github.get(`/users/${login}`),
  //   github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};

//   GEt Single user Profile
// export const getUser = async (login) => {
//   const response = await fetch(`${URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${TOKEN}`,
//     },
//   });
//   const data = await response.json();
//   return data;
// };
// // GET USER REPOS
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });
//   const response = await fetch(`${URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${TOKEN}`,
//     },
//   });
//   const data = await response.json();
//   return data;
// };
