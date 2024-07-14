export default async function getMockData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(
    "https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  const test = await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log(response);

  return response;
}
