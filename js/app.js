
  fetch('https://acnhapi.com/v1/villagers/')
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Error: " + response.status);
        }
    })
    .then(info => {
        console.log(info);
    let animals = Object.keys(info) 
    animals.forEach(a => {
        info[a]
        console.log(info[a]);
    })
    
        const name = info.name['name-USen'];
        const birthday = info['birthday-string'];
        const personality = info['personality'];
        const species = info['species'];
        const gender = info['gender'];
        const pic = info['image-uri'];
        const phrase = info['saying'];

        const button = $("#button")
        button.click(e =>{
            console.log(
                name +"'s birthday is on " + birthday + ".", 
                "They are a " + gender + " " + species + " with a " + personality + " personality.",
                'Their favorite saying is, "' + phrase + '"'
                );

        });

    })
    .catch(error => {
        console.log(error);
    })


    document.getElementById('button').addEventListener('click', redirectToResultPage)
    // hold hidden value and redirect to page
    function redirectToResultPage() {
        const monthSelect = document.getElementById('monthSelect');
        const daySelect = document.getElementById('daySelect');

        // get the value of selected month/day
        const selectedMonth = monthSelect.value;
        const selectedDay = daySelect.value;

        // set values in hidden form
        document.getElementById('hiddenMonth').value = selectedMonth;
        document.getElementById('hiddenDay').value = selectedDay;

        // submit it
        document.getElementById('hiddenForm').submit();
    }

    