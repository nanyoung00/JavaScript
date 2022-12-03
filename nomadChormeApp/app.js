const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
// HTML에서 요소를 가져온다

function onLoginBtnClick() {
    console.dir(loginInput.value); // input의 내용 가져오기, console.dir()은 객체를 가져올 때 쓴다
}

loginButton.addEventListener("click", onLoginBtnClick);
// 클릭했을 떄의 event, loginBUtton에 대한 click을 감지할 준비가 되었다