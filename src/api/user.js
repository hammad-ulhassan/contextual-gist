import { CREDENTIAL_STATE } from "../globals/constants/localStorageAccessors";

export const getUser = async (login) => {
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

export const getAuthUserData = async () => {

  const authToken = JSON.parse(localStorage.getItem(CREDENTIAL_STATE))?.token || process.env.REACT_APP_ACCESS_TOKEN

  const response = await fetch(`https://api.github.com/user`, {
    headers: new Headers({
      Authorization: `Bearer ${authToken}`,
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
