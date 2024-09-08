function openBox() {
    document.querySelector('.box').classList.toggle('open');
    document.getElementById('message').style.display = 'block';
}

function sendResponse(response) {
    const email = 'name@company.com'; // Replace with your email
    const subject = 'Engagement Response'; //Massage Subject 
    const body = `She said ${response}!`; //Massage body 
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
