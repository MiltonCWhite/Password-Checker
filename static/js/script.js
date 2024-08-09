document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.getElementById('checkButton');

    checkButton.addEventListener('click', function () {
        checkPassword();
    });
});

function checkPassword() {
    const password = document.getElementById('password').value;
    fetch('/check_password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password }),
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.found) {
            resultDiv.innerHTML = `This password was found <span style="color: red;">${data.count} times</span>... you should probably change your password.`;
            resultDiv.style.color = 'red';
        } else {
            resultDiv.innerHTML = `This password was <span style="color: green;">NOT found</span>. You're good to go!`;
            resultDiv.style.color = 'green';
        }
    });
}
