import moment from "moment";

export const getUser = async ({login}) => {
  const response = await fetch(`https://api.github.com/users/${login}`, {
    headers: new Headers({
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      Accept: "application/json",
    }),
  });
  if (!response.ok) {
    throw new Error("User Data coud not be fetched!");
  } else {
    const res = await response.json();
    return res;
  }
};
