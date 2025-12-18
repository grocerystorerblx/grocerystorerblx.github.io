getLastUpdated = async () => {
    const url = 'https://api.github.com/repos/grocerystorerblx/grocerystorerblx.github.io';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const date = new Date(data.updated_at);
        
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        const month = monthNames[date.getMonth()];
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${month} ${day}`;

        const lastUpdatedDiv = document.getElementById("update");
        lastUpdatedDiv.innerHTML = `Last updated: ${formattedDate}`;
    })

        .catch(err => {
            console.error("Error fetching last updated date: ", err);
            const lastUpdatedDiv = document.getElementById("update");
            lastUpdatedDiv.innerHTML = "Last updated: Error fetching last updated date";
        })
};



main = async () => {
    await getLastUpdated();
    await fetchLatestBlogs();
}

main();


// console

document.addEventListener('keydown', (function() {
    const wordToMatch = 'console';
    let buffer = '';

    return function(event) {
        const key = event.key;

        buffer += key;

        if (buffer.length > wordToMatch.length) {
            buffer = buffer.slice(-wordToMatch.length);
        }

        if (buffer === wordToMatch) {
          document.getElementById("console").style.display = "block";

            buffer = '';
        }
    };
})());


function boYo() {
  document.getElementById("trailer").src=("https://www.youtube.com/embed/Z-ap5Fp2T6c?si=kycaEyBmtn9ZAf-6");
}

function artIsDead() {
  document.getElementById("trailer").src=("https://www.youtube.com/embed/Eo9pU1q8sy8?si=siYtYQuWCJNiXa_5");
}

function what() {
  document.getElementById("trailer").src=("https://www.youtube.com/embed/ejc5zic4q2A?si=siYtYQuWCJNiXa_5");
}


function expectations() {
  document.getElementById("trailer").src=("https://www.youtube.com/embed/llGvsgN17CQ?si=MK51kpZgfwO31lSl");
}

function comedy() {
  document.getElementById("trailer").src=("https://www.youtube.com/embed/6A6V36mWEAE?si=R-vldBpyJGdqaEwr");
}

function funnyFeeling() {
  document.getElementById("trailer").src=("https://www.youtube.com/embed/ObOqq1knVxs?si=DgQVAAHAdwW807yN");
}

function theChicken() {
  document.getElementById("trailer").src=("https://www.youtube.com/embed/NeOhV4zOxJ4?si=jszkVyo_JVjvVGqj");
}

function closeGUI(){
  document.getElementById("console").style.display = "none";
}