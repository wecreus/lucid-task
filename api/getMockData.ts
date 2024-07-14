export default async function getMockData(search: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(
    `https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete?name=${search}`,
    options
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return [];
      }
    })
    .catch((error) => {
      return [];
    });

  return response;
}
