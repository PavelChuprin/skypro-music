export const getTracksAll = () => {
  return fetch("https://painassasin.online/catalog/track/all/", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw Error("Ошибка сервера");
    })
    .then((json) => json);
};

export const fetchRegister = async (email, password) => {
  return fetch("https://painassasin.online/user/signup/", {
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
  return fetch("https://painassasin.online/user/login/", {
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
