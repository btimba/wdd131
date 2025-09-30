const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
	templeName: "Abidjan Ivory Coast",
	location: "Abidjan, Ivory Coast",
	dedicated: "2015, January, 18",
	area: 17362,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
  },

  {
	templeName: "Harare Zimbabwe",
	location: "Harare, Zimbabwe",
	dedicated: "2026, March, 1",
	area: 17250,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-63352-main.jpg"
  },

  {
	templeName: "Johannesburg South Africa",
	location: "Johannesburg, South Africa",
	dedicated: "1985, September, 7",
	area: 10700,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },

  {
	templeName: "Accra Ghana",
	location: "Accra, Ghana",
	dedicated: "2004, January, 11",	
	area: 17500,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },

  {
	templeName: "Durban South Africa",
	location: "Durban, South Africa",
	dedicated: "2023, June, 18",	
	area:19860,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
  }
];

// Initial display of all temples
createTempleCards(temples);

function createTempleCards(filteredTemples) {
	const gallery = document.querySelector("div.gallery");
	gallery.innerHTML = "";

	filteredTemples.forEach ((temple) => {
		let card = document.createElement("section");
		let name = document.createElement("h2");
		let location = document.createElement("p");
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.textContent = `Location ${temple.location}`;
		dedicated.textContent = `Dedicated ${temple.dedicated}`;
		area.textContent = `Area ${temple.area} sq ft`;
		img.setAttribute('src', temple.imageUrl);
		img.setAttribute('alt', `Image of ${temple.templeName}`);
		img.setAttribute('loading', 'lazy');

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(img);

		gallery.appendChild(card);
	});
}

// Menu links 
const homeLink = document.querySelector('.navigation .active');
const oldLink = document.querySelector('#old');
const newLink = document.querySelector('#new');
const largeLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');

// Event listeners for menu old temples(before 1900)
oldLink.addEventListener('click', (event) => {
	let old= temples.filter(temple => {
		let year = parseInt(temple.dedicated.split(",")[0]);
		return year < 1900;
	});
	createTempleCards(old);
	//event.preventDefault();
});

//New temples
newLink.addEventListener('click', (event) => {
	let recent= temples.filter(temple => {
		let year = parseInt(temple.dedicated.split(",")[0]);
		return year >= 2000;
	});		
	createTempleCards(recent);
	//event.preventDefault();
});

//Large temples(> 90,000 sq ft)
largeLink.addEventListener('click', (event) => {
	let large= temples.filter(temple => temple.area > 90000);		
	createTempleCards(large);
	//event.preventDefault();
});

//Small temples(< 10,000 sq ft)
smallLink.addEventListener('click', (event) => {
	let small= temples.filter(temple => temple.area < 10000);		
	createTempleCards(small);
	//event.preventDefault();
});

//Home link to show all temples
homeLink.addEventListener('click', (event) => {
	createTempleCards(temples);
	//event.preventDefault();
});

// active link highlighting
const links = document.querySelectorAll('.navigation a');
links.forEach(link => {
	link.addEventListener('click', () => {
		links.forEach(l => l.classList.remove('active'));
		link.classList.add('active');
	});	
});