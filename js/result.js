// make music load 
  window.addEventListener('load', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
    backgroundMusic.volume = 0.2;
})

document.addEventListener('DOMContentLoaded', () => {
    // grab from localStorage
    const selectedMonth = localStorage.getItem('selectedMonth');
    const selectedDay = localStorage.getItem('selectedDay');
    console.log(selectedMonth, selectedDay)
    
    fetch('https://acnhapi.com/v1/villagers/')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error: " + response.status);
        }
    })
    .then(info => {
        // empty array so i can push matching villager in it
        let matchingVillagers = [];
        for (const villagerId in info) {
            const villager = info[villagerId];
            const birthday = villager['birthday-string'];
            // had to format birthday to match it to the birthday-string in the json api file
            const formattedBirthday = formatDate(birthday);
            if (`"${selectedMonth} ${selectedDay}"` === formattedBirthday) {
                matchingVillagers.push(villager);
                // console.log(selectedMonth, selectedDay)
          }
        }
  
        if (matchingVillagers.length > 0) {
          const villager = matchingVillagers[0];
          const name = villager.name['name-USen'];
          const personality = villager['personality'];
          const birthday = villager['birthday-string'];
          const gender = villager['gender'];
          const species = villager['species'];
          const saying = villager['saying'];
          const imageUri = villager['image_uri'];
  
          document.getElementById('villagerName').textContent = name;
          document.getElementById('personality').textContent = personality;
          document.getElementById('birthday').textContent = birthday;
          document.getElementById('gender').textContent = gender;
          document.getElementById('species').textContent = species;
          document.getElementById('saying').textContent = saying;
          document.getElementById('villagerImg').setAttribute('src', imageUri);
        } else {
          document.getElementById('villagerInfo').innerHTML = '<p>No matching villager found.</p>';
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

// function for bday format 
  function formatDate(birthday) {
    const dateArray = birthday.split(' ');
    const day = dateArray[1];
    const month = dateArray[0];
    return `"${month} ${day}"`;
  }
  
// mute button functions
const backgroundMusic = document.getElementById('backgroundMusic');
const muteBtn = document.getElementById('muteBtn');
console.log(muteBtn);

let isMuted = false;

// function for making button textcontent change
function toggleMute() {
  if (isMuted) {
    backgroundMusic.muted = false;
    muteBtn.textContent = '🔆';
  } else {
    backgroundMusic.muted = true;
    muteBtn.textContent = '🔇';
  }
  isMuted = !isMuted;
}
muteBtn.addEventListener('click', toggleMute);