function openBox() {
    document.querySelector('.box').classList.toggle('open');
    document.getElementById('message').style.display = 'block';
}

function sendResponse(response) {
    const email = 'biparnaktd123@gmail.com'; // Replace with your email
    const subject = 'Engagement Response';
    const body = `She said ${response}!`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
