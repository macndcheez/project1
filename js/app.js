// make music load
window.addEventListener('load', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
    backgroundMusic.volume = 0.2
})

fetch('https://acnhapi.com/v1/villagers/')
.then(response => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error("Error: " + response.status);
    }
})
.then(info => {
    const button = document.getElementById('button');
    const monthSelect = document.getElementById('monthSelect');
    const daySelect = document.getElementById('daySelect');
    
    // hold hidden value and redirect to page
    function redirectToResultPage(event) {
        // prevent form submission
        event.preventDefault();
        // get the value of selected month/day
        const selectedMonth = monthSelect.value;
        const selectedDay = daySelect.value;
        
        // store value in localStorage instead of query
        localStorage.setItem('selectedMonth', selectedMonth);
        localStorage.setItem('selectedDay', selectedDay);
        
        // redirect to result.html
        window.location.href = 'result.html';
    }
    
    button.addEventListener('click', redirectToResultPage);
    
    let villagers = Object.keys(info);
    villagers.forEach(v => {
        const villager = info[v];
        const name = villager.name['name-USen'];
        const birthday = villager['birthday-string'];
        const personality = villager['personality'];
        const species = villager['species'];
        const gender = villager['gender'];
        const pic = villager['image-uri'];
        const saying = villager['saying'];
        
        // console.log(
            //     name +"'s birthday is on " + birthday + ".", 
            //     "They are a " + gender + " " + species + " with a " + personality + " personality.",
            //     'Their favorite saying is, "' + phrase + '"'
            
            //     );
        });
    })
    
    .catch(error => {
        console.log(error);
    });
    
// mute button functions
const backgroundMusic = document.getElementById('backgroundMusic');
const muteBtn = document.getElementById('muteBtn');
    
let isMuted = false;

// function for making button textcontent change
function toggleMute() {
    if (isMuted)  {
        backgroundMusic.muted = false;
        muteBtn.textContent = '🔆';
    } else {
        backgroundMusic.muted = true;
        muteBtn.textContent = '🔇';
    }
    isMuted = !isMuted;
}
muteBtn.addEventListener('click', toggleMute);