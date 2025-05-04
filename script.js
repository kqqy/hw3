let currentMethod = 'account';

function selectTab(method) {
    currentMethod = method;
    document.getElementById('account-inputs').style.display = method === 'account' ? 'block' : 'none';
    document.getElementById('number-inputs').style.display = method === 'number' ? 'block' : 'none';

    document.getElementById('account-tab').classList.toggle('active', method === 'account');
    document.getElementById('number-tab').classList.toggle('active', method === 'number');
}

function nextStep(){
    const value = currentMethod === 'account' ? document.getElementById('account').value.trim():document.getElementById('number').value.trim();

    if(!value) {
        alert(`請輸入${currentMethod === 'account'?'身份證或Email':'手機號碼'}`);
        return;
    }

    document.getElementById('account-inputs').style.display = 'none';
    document.getElementById('number-inputs').style.display = 'none';
    document.querySelector('.tab-buttons').style.display = 'none';
    document.querySelector("button[onclick='nextStep()']").style.display = 'none';
    document.getElementById('password-inputs').style.display = 'block';
}

function login(){
    const pwd = document.getElementById('password').value.trim();
    if(!pwd) {
        alert('請輸入密碼');
        return;
    }
    alert('登入成功')
}