function clickregister()
{
    alert("注册成功")
}

function clicklogin()
{
    alert("返回登陆界面")
    window.open("login.html")
}

function validateForm()
{
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;
    var text = "{username: "+ username + " , password: " + password+" }"
    var blob = new Blob([text], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = './output.txt';
    a.click();
    URL.revokeObjectURL(url);
}