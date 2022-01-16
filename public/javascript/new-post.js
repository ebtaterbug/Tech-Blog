async function newPostHandler(event) {
    event.preventDefault();
  
    document.location.replace('/new-post');
}
  
document.querySelector('.btn').addEventListener('click', newPostHandler);