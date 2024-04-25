
const submitBtn = document.querySelector('#Submit');


const handleSubmit = function (e) {
    e.preventDefault();

    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const username = document.querySelector('#Username');
    const title = document.querySelector('#Title');
    const content = document.querySelector('#Content');
    const usernameV = document.getElementById("Username").value;
    const titleV = document.getElementById("Title").value;
    const contentV = document.getElementById("Content").value;

if (usernameV === '' || titleV === '' || contentV === '') {
  
  window.alert('please complete the form')

  return;

};

    blogs.push({
        username: username.value,
        title: title.value,
        content: content.value,
    })

  localStorage.setItem('blogs', JSON.stringify(blogs));

  window.location.href = '/blog.html';
}

submitBtn.addEventListener('click', handleSubmit);