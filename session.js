
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Selamat datang kembali " + user);
  } else {
     user = prompt("Isi nama mu:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     alert('Selamat Datang '+user)
     }
  }
}

function checkPassw() {
  let passwor
  let psw = getCookie("password");
  let pass = 'password';
  if (psw != "") {
    alert("Selamat datang kembali");
  } else {
     psw=prompt('Masukkan password untuk membuka postingan');
     if (passwor==pass) {
       setCookie("password", psw, 30);
     alert('Selamat Datang');
     } else {
         location.href='javascript:window.location.href=window.location.href';
     }
  }
}

