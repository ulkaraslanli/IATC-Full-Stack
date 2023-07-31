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



function getCurrentDateAndTime() {
  const now = new Date();
  
  const days = ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'];
  const dayIndex = now.getDay();
  const dayOfWeek = days[dayIndex];

  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const time = now.toLocaleTimeString('en-US', options);

  console.log(`Cari gün: ${dayOfWeek}`);
  console.log(`Cari saat: ${time}`);
}

getCurrentDateAndTime();