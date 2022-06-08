
// Promise
// const endpoint = [ 
//     "https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs",
// ];
// const promise = fetch(endpoint);
// promise
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// });

const url = 'https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs';
function addPost({id,title,createdAt,image,content}) {
    fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    id,
    title,
    createdAt,
    image,
    content
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
 async function getSource() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

 function renderCource(item) {
    
}

getSource();
const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('submit', function(e) {
    e.preventDefault();
    const source = {
         id: this.elements['id'].value,
         title: this.elements['title'].value,
         createdAt: this.elements['createdAt'].value,
         image: this.elements["image"].value,
         content: this.elements['content'].value,
    };
    addPost(source);
    this.reset()
});