// script.js
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // 清除之前的消息
    messageDiv.textContent = '';

    // 验证用户名和密码
    if (username === 'test' && password === '12345678') {
        // 模拟 API 请求
        try {
            const response = await fetch('https://example.com/login', { // 替换为实际的 API URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // 登录成功
                messageDiv.textContent = 'Login Success!';
            } else {
                // 登录失败
                messageDiv.textContent = 'Login Failed!';
            }
        } catch (error) {
            // 网络错误
            messageDiv.textContent = 'Network Error!';
        }
    } else {
        // 验证失败
        messageDiv.textContent = 'Invalid username or password!';
    }
}
