
  fetch('https://acnhapi.com/v1/villagers/der08')
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Error: " + response.status);
        }
    })
    .then(info => {
        const name = info.name['name-USen'];
        const birthday = info['birthday-string'];

        console.log(name + "'s birthday is on " + birthday);
    })
    .catch(error => {
        console.log(error);
    })