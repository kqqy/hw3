let currentMethod = 'account';

function selectTab(method) {
    currentMethod = method;

    document.getElementById('account-inputs').style.display = method === 'account' ? 'block' : 'none';
    document.getElementById('number-inputs').style.display = method === 'number' ? 'block' : 'none';

    document.getElementById('account-tab').classList.toggle('active', method === 'account');
    document.getElementById('number-tab').classList.toggle('active', method === 'number');
}

function nextStep() {
    const value = currentMethod === 'account' ? document.getElementById('account').value.trim() : document.getElementById('number').value.trim();

    if (currentMethod === 'account') {
        if (!isValidUsername(value)) {
            showError('account', '你的證件號碼無法用於登入，請改用Email或手機號碼。或改用 忘記密碼 找到帳號來登入');
            return;
        }
    } else if (currentMethod === 'number') {
        if (!isValidPhoneNumber(value)) {
            showError('number', '台灣手機可輸入 09 開頭之 10 位數字');
            return;
        }
    }

    document.getElementById('account-inputs').style.display = 'none';
    document.getElementById('number-inputs').style.display = 'none';
    document.querySelector('.tab-buttons').style.display = 'none';
    document.querySelector("button[onclick='nextStep()']").style.display = 'none';
    document.getElementById('password-inputs').style.display = 'block';
}

function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const hintElement = document.getElementById(inputId + '-hint');

    inputElement.classList.add('error');
    hintElement.classList.add('error');
    hintElement.innerText = message;
}

function isValidUsername(username) {
    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const idpattern = /^[A-Z]{1}[0-9]{9}$/;
    return emailpattern.test(username) || idpattern.test(username);
}

function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^09\d{8}$/;
    return phonePattern.test(phoneNumber);
}
