const requestURL = 'https://jsonplaceholder.typicode.com/photos';
const properties = document.querySelectorAll('div.property');

const myId = (min, max) => {
  let id = min + Math.random() * (max - min + 1);
  return Math.round(id);
}

const sendRequest = (url) => {
  return fetch(url).then(response => {
    return response.json();
  });
};

const addNewPicture = (data) => {
  properties.forEach(property => {
    let newData = data[myId(1, 300)];

    property.querySelector('img').setAttribute('src', newData.thumbnailUrl);
    property.querySelector('.title').innerHTML = newData.title;
  });
};

document.querySelector('.request-button').addEventListener('click', () => {
  sendRequest(requestURL)
  .then(data => addNewPicture(data))
  .catch(err => console.log('Error: ', err));
});