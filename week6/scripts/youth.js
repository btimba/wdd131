const events = [
    {
        title:"Three Dams Hike",
        description: "Embark on an early morning hike and enjoy the beautiful sunrise",
        image: "images/FnS-hike.webp"

    },

    {
        title:"Lagoon Swimming",
        description:"Take a dip in the fresh water and bask in the cool white sand",
        image:"images/Ym-swim.webp"
    },

    {
        title:"Overnight Camp",
        description:"Gather together for a movie night outdoors on a projector",
        image:"images/YM-movie-night.webp",
    }
];

// selecting the container
const eventsList = document.getElementById("events-list");

// Looping through to create HTML for each event
events.forEach(event => {
    const eventItem = document.createElement("article");
    eventItem.classList.add("event");

    eventItem.innerHTML = `
    <img src="${event.image}" alt="${event.title}" loading="lazy">
    <div class ="event-details">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
    </div> 
    `;

    eventsList.appendChild(eventItem);
});