import {makeRequest} from "./authHelpers.js";
import Auth from "./auth.js"

const auth = new Auth();


const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    auth.login(getPosts);
  });
  async function getPosts() {
    try {
      const data = await makeRequest('posts', 'GET', null, auth.token);
      // make sure the element is shown
      document.getElementById('content').classList.remove('hidden');
      console.log(data);
      var ul = document.getElementById('list');
      ul.innerHTML = '';
      for (var i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(data[i].title));
        ul.appendChild(li);
      }
      myErrors.clearError();
    } catch (error) {
      // if there were any errors display them
      myErrors.handleError(error);
    }
  }
  document.getElementById('createSubmit').addEventListener('click', () => {
    createPost();
  });
// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
//     });