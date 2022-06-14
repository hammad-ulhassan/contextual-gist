import moment from "moment";
import { REACT_APP_ACCESS_TOKEN } from "../globals/constants/key";
// import headers from "../credentials";

export async function getAllPublicGists(page, pageSize) {
  const resp = await fetch(
    "https://api.github.com/gists/public?" +
      new URLSearchParams({ per_page: pageSize, page: page }),
    { headers: new Headers({
      Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
      Accept: "application/json",
    }), }
  );
  let res = await resp.json();
  res = await res.map((gist) => {
    return {
      gist,
      date: moment(gist.created_at).format("DD-MM-YYYY"),
      time: moment(gist.created_at).format("HH:mm"),
      keyword: gist.description,
      notebook: [...Object.keys(gist.files)],
      key: gist.id,
    };
  });

  return res;
}

export const getGist = async (id) => {
  const response = await fetch(`https://api.github.com/gists/${id}`, {
    headers: new Headers({
      Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
      Accept: "application/json",
    }),
  });
  if (!response.ok) {
    throw new Error("Gist Data coud not be fetched!");
  } else {
    const res = await response.json();
    return res;
  }
};
export const getUserGists = async (login) => {
  const resp = await fetch(`https://api.github.com/users/${login}/gists`, {
    headers: new Headers({
      Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
      Accept: "application/json",
    }),
  });
  if (!resp.ok) {
    throw new Error("User Gists coud not be fetched!");
  } else {
    let res = await resp.json();
    res = await res.map((gist) => {
      return {
        gist,
        date: moment(gist.created_at).format("DD-MM-YYYY"),
        time: moment(gist.created_at).format("HH:mm"),
        keyword: gist.description,
        notebook: [...Object.keys(gist.files)],
        key: gist.id,
      };
    });
    return res;
  }
};

export const createGist = async (gistPostData) => {
  const resp = await fetch("https://api.github.com/gists", {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
      Accept: "application/json",
    }),
    body: JSON.stringify(gistPostData),
  });
  const res = await resp.json();
  return res;
};

export const editGist = async (gist_id, gistPostData) => {
  const resp = await fetch(`https://api.github.com/gists/${gist_id}`, {
    method: "patch",
    headers: new Headers({
      Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
      Accept: "application/json",
    }),
    body: JSON.stringify(gistPostData),
  });
  const res = await resp.json();
  return res;
};
