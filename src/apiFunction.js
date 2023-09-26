export const getSomething = (url, setState) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          'La consulta sobre el clima de la ciudad escogida no es válida'
        );
      }
      return response.json();
    })
    .then((data) => {
      setState(data);
      console.log(data);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
};
