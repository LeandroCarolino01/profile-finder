// init github
const github = new Github;

// Init UI
const ui = new UI;

// Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {

                } else {
                    // show profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // Clear profile
    }
})