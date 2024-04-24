
const submitBtn = document.querySelector('#Submit');


const handleSubmit = function (e) {
    e.preventDefault();
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const username = document.querySelector('#Username');
    const title = document.querySelector('#Title');
    const content = document.querySelector('#Content');

    blogs.push({
        username: username.value,
        title: title.value,
        content: content.value,
    })

  localStorage.setItem('blogs', JSON.stringify(blogs));

  window.location.href = '/blog.html';
}

submitBtn.addEventListener('click', handleSubmit);