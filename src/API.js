const URL_USER = "https://skypro-music-api.skyeng.tech/user";

export const fetchRegister = async (email, password) => {
  return fetch(URL_USER + "/signup/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 401) {
      throw new Error("Такой аккаунт уже существует");
    }
    throw new Error("Ошибка сервера");
  });
};

export const fetchLogin = async (email, password) => {
  return fetch(URL_USER + "/login/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 401) {
      throw new Error("Аккаунт не найден");
    }
    throw new Error("Ошибка сервера");
  });
};

export const getAccessToken = async (email, password) => {
  return fetch(URL_USER + "/token/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Ошибка сервера");
  });
};

export const updateToken = async (token) => {
  return fetch(URL_USER + "/token/refresh/", {
    method: "POST",
    body: JSON.stringify({
      refresh: token,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error();
    })
    .then((json) => json)
    .catch(() => {
      throw new Error("проблема");
    });
};
