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