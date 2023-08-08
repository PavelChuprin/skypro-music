// Получаем все треки из бэкенда

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
