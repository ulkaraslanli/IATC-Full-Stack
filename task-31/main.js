fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(({ users }) => {
    console.log(users)
    users.forEach(user => {
        document.querySelector('tbody').innerHTML += `
    <tr>
    <td>${user.firstName}</td>
    <td></td>
    <td></td>
  </tr>`
    });
});