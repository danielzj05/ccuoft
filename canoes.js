// Canoe gallery data
const galleryItems = [
  {
    id: 1,
    year: "2019 - 2020",
    name: "704Spadina",
    theme: "TTC",
    category: "light",
    image: "img/Canoes/704SpadinaThumb.png",
    link: "canoes/canoe2020.html",
  },
  {
    id: 2,
    year: "2018 - 2019",
    name: "Polaris",
    theme: "Great Outdoors",
    category: "light",
    image: "img/Canoes/PolarisThumb.jpg",
    link: "canoes/canoe2019.html",
  },
  {
    id: 3,
    year: "2017 - 2018",
    name: "TrackOne",
    theme: "Amusement Park",
    category: "light",
    image: "img/Canoes/TrackOneThumb.jpg",
    link: "canoes/canoe2018.html",
  },
  {
    id: 4,
    year: "2016 - 2017",
    name: "Kamaji",
    theme: "Studio Ghibli: Spirited Away",
    category: "light",
    image: "img/Canoes/KamajiThumb.jpg",
    link: "canoes/canoe2017.html",
  },
  {
    id: 5,
    year: "2015 - 2016",
    name: "Orion",
    theme: "Outer Space",
    category: "light",
    image: "img/Canoes/OrionThumb.jpg",
    link: "canoes/canoe2016.html",
  },
  {
    id: 6,
    year: "2014 - 2015",
    name: "Vuelie",
    theme: "Frozen",
    category: "light",
    image: "img/Canoes/VuelieThumb.jpg",
    link: "canoes/canoe2015.html",
  },
  {
    id: 7,
    year: "2013 - 2014",
    name: "Jinkies",
    theme: "Scooby Doo",
    category: "light",
    image: "img/Canoes/JinkiesThumb.jpg",
    link: "canoes/canoe2014.html",
  },
  {
    id: 8,
    year: "2012 - 2013",
    name: "Cheshire's Grin",
    theme: "Alice in Wonderland",
    category: "light",
    image: "img/Canoes/cheshiresgrinthumb.jpg",
    link: "canoes/canoe2013.html",
  },
  {
    id: 9,
    year: "2011 - 2012",
    name: "Unladen Swallow",
    theme: "Monty Python and the Holy Grail",
    category: "light",
    image: "/img/Canoes/UnladenSwallowThumb.jpg",
    link: "/canoes/canoe2012.html",
  },
  {
    id: 10,
    year: "2010 - 2011",
    name: "Wakka Wakka",
    theme: "Pac-Man",
    category: "light",
    image: "/img/Canoes/wakkawakkathumb.jpg",
    link: "/canoes/canoe2011.html",
  },
  {
    id: 11,
    year: "2009 - 2010",
    name: "Braaaaainzzz",
    theme: "Zombies!!!",
    category: "light",
    image: "img/Canoes/brainzthumb.jpg",
    link: "canoes/canoe2010.html",
  },
  {
    id: 12,
    year: "2008 - 2009",
    name: "The One Canoe",
    theme: "Lord of the Rings",
    category: "heavy",
    image: "img/Canoes/TheOnethumb.jpg",
    link: "canoes/canoe2009.html",
  },
  {
    id: 13,
    year: "2007 - 2008",
    name: "Bluenose",
    theme: "Sailing",
    category: "light",
    image: "img/Canoes/bluenosethumb.jpg",
    link: "canoes/canoe2008.html",
  },
  {
    id: 14,
    year: "2006 - 2007",
    name: "Ecto-2",
    theme: "Ghostbusters",
    category: "heavy",
    image: "img/Canoes/ecto2thumb.jpg",
    link: "canoes/canoe2007.html",
  },
  {
    id: 15,
    year: "2005 - 2006",
    name: "Vitruvius",
    theme: "The Romans",
    category: "heavy",
    image: "img/Canoes/vitruviusthumb.jpg",
    link: "canoes/canoe2006.html",
  },
  {
    id: 16,
    year: "2004 - 2005",
    name: "Classified",
    theme: "Secret Agent",
    category: "heavy",
    image: "img/Canoes/classifiedthumb.jpg",
    link: "canoes/canoe2005.html",
  },
  {
    id: 17,
    year: "2003 - 2004",
    name: "Nikko",
    theme: "The Wizard of Oz",
    category: "heavy",
    image: "img/Canoes/nikkothumb.jpg",
    link: "canoes/canoe2004.html",
  },
  {
    id: 18,
    year: "2002 - 2003",
    name: "Prospero",
    theme: "Shakespeare",
    category: "all",
    image: "img/Canoes/prosperothumb.jpg",
    link: "canoes/canoe2003.html",
  },
  {
    id: 19,
    year: "2001 - 2002",
    name: "Canoe Du Jour",
    theme: "Concrete Chefs",
    category: "light",
    image: "img/Canoes/ironchefthumb.jpg",
    link: "canoes/canoe2002.html",
  },
  {
    id: 20,
    year: "2000 - 2001",
    name: "Greased Concrete",
    theme: "Grease",
    category: "heavy",
    image: "img/Canoes/greased_concretethumb.jpg",
    link: "canoes/canoe2001.html",
  },
  {
    id: 21,
    year: "1999 - 2000",
    name: "Konkuritodo",
    theme: "Samurai",
    category: "heavy",
    image: "img/Canoes/Konkuritodothumb.jpg",
    link: "canoes/canoe2000.html",
  },
  {
    id: 22,
    year: "1998 - 1999",
    name: "Santa Concreta",
    theme: "Pirates",
    category: "light",
    image: "img/Canoes/santaconcretathumb.jpg",
    link: "canoes/canoe1999.html",
  },
];

// Generate gallery items when page loads
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('canoes-gallery');
  
  if (!gallery) return;
  
  // Generate HTML for each canoe
  gallery.innerHTML = galleryItems.map(item => `
    <a href="${item.link}" class="gallery-item">
      <div class="gallery-image">
        <img src="${item.image}" alt="${item.name} - ${item.year}" loading="lazy">
      </div>
      <h3>${item.year} // ${item.name}</h3>
      <p>Theme: ${item.theme}</p>
    </a>
  `).join('');
});
