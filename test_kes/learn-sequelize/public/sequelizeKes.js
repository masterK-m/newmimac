// 사용자 로딩
function getUserKes() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      var usersKes = JSON.parse(xhr.responseText);
      var tbody = document.querySelector('#user-list tbody');
      tbody.innerHTML = '';
      usersKes.map(function (usersKes) {
        var row = document.createElement('tr');
        var td = document.createElement('td');
        td.textContent = usersKes.id;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = usersKes.name;
        row.appendChild(td);
        tbody.appendChild(row);
      });
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('GET', '/usersKes');
  xhr.send();
}

// 사용자 등록 시
document.getElementById('user-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = e.target.name.value;
  if (!name) {
    return alert('이름을 입력하세요');
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getUserKes();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('POST', '/usersKes');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ name: name}));
  e.target.name.value = '';
});
