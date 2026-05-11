export function Gallery() {
  const galleryItems = [
    {
      id: 1,
      year: "2019 - 2020",
      name: "704Spadina",
      theme: "TTC",
      category: "light",
      image: "/img/Canoes/704SpadinaThumb.png",
      link: "/canoes/2020",
    },
    {
      id: 2,
      year: "2018 - 2019",
      name: "Polaris",
      theme: "Great Outdoors",
      category: "light",
      image: "/img/Canoes/PolarisThumb.jpg",
      link: "/canoes/2019",
    },
    {
      id: 3,
      year: "2017 - 2018",
      name: "TrackOne",
      theme: "Amusement Park",
      category: "light",
      image: "/img/Canoes/TrackOneThumb.jpg",
      link: "/canoes/2018",
    },
    {
      id: 4,
      year: "2016 - 2017",
      name: "Kamaji",
      theme: "Studio Ghibli: Spirited Away",
      category: "light",
      image: "/img/Canoes/KamajiThumb.jpg",
      link: "/canoes/2017",
    },
    {
      id: 5,
      year: "2015 - 2016",
      name: "Orion",
      theme: "Outer Space",
      category: "light",
      image: "/img/Canoes/OrionThumb.jpg",
      link: "/canoes/2016",
    },
    {
      id: 6,
      year: "2014 - 2015",
      name: "Vuelie",
      theme: "Frozen",
      category: "light",
      image: "/img/Canoes/VuelieThumb.jpg",
      link: "/canoes/2015",
    },
    {
      id: 7,
      year: "2013 - 2014",
      name: "Jinkies",
      theme: "Scooby Doo",
      category: "light",
      image: "/img/Canoes/JinkiesThumb.jpg",
      link: "/canoes/2014",
    },
    {
      id: 8,
      year: "2012 - 2013",
      name: "Cheshire's Grin",
      theme: "Alice in Wonderland",
      category: "light",
      image: "/img/Canoes/cheshiresgrinthumb.jpg",
      link: "/canoes/2013",
    },
    {
      id: 9,
      year: "2011 - 2012",
      name: "Unladen Swallow",
      theme: "Monty Python and the Holy Grail",
      category: "light",
      image: "/img/Canoes/UnladenSwallowThumb.jpg",
      link: "/canoes/2012",
    },
    {
      id: 10,
      year: "2010 - 2011",
      name: "Wakka Wakka",
      theme: "Pac-Man",
      category: "light",
      image: "/img/Canoes/wakkawakkathumb.jpg",
      link: "/canoes/2011",
    },
    {
      id: 11,
      year: "2009 - 2010",
      name: "Braaaaainzzz",
      theme: "Zombies!!!",
      category: "light",
      image: "/img/Canoes/brainzthumb.jpg",
      link: "/canoes/2010",
    },
    {
      id: 12,
      year: "2008 - 2009",
      name: "The One Canoe",
      theme: "Lord of the Rings",
      category: "heavy",
      image: "/img/Canoes/TheOnethumb.jpg",
      link: "/canoes/2009",
    },
    {
      id: 13,
      year: "2007 - 2008",
      name: "Bluenose",
      theme: "Sailing",
      category: "light",
      image: "/img/Canoes/bluenosethumb.jpg",
      link: "/canoes/2008",
    },
    {
      id: 14,
      year: "2006 - 2007",
      name: "Ecto-2",
      theme: "Ghostbusters",
      category: "heavy",
      image: "/img/Canoes/ecto2thumb.jpg",
      link: "/canoes/2007",
    },
    {
      id: 15,
      year: "2005 - 2006",
      name: "Vitruvius",
      theme: "The Romans",
      category: "heavy",
      image: "/img/Canoes/vitruviusthumb.jpg",
      link: "/canoes/2006",
    },
    {
      id: 16,
      year: "2004 - 2005",
      name: "Classified",
      theme: "Secret Agent",
      category: "heavy",
      image: "/img/Canoes/classifiedthumb.jpg",
      link: "/canoes/2005",
    },
    {
      id: 17,
      year: "2003 - 2004",
      name: "Nikko",
      theme: "The Wizard of Oz",
      category: "heavy",
      image: "/img/Canoes/nikkothumb.jpg",
      link: "/canoes/2004",
    },
    {
      id: 18,
      year: "2002 - 2003",
      name: "Prospero",
      theme: "Shakespeare",
      category: "all",
      image: "/img/Canoes/prosperothumb.jpg",
      link: "/canoes/2003",
    },
    {
      id: 19,
      year: "2001 - 2002",
      name: "Canoe Du Jour",
      theme: "Concrete Chefs",
      category: "light",
      image: "/img/Canoes/ironchefthumb.jpg",
      link: "/canoes/2002",
    },
    {
      id: 20,
      year: "2000 - 2001",
      name: "Greased Concrete",
      theme: "Grease",
      category: "heavy",
      image: "/img/Canoes/greased_concretethumb.jpg",
      link: "/canoes/2001",
    },
    {
      id: 21,
      year: "1999 - 2000",
      name: "Konkuritodo",
      theme: "Samurai",
      category: "heavy",
      image: "/img/Canoes/Konkuritodothumb.jpg",
      link: "/canoes/2000",
    },
    {
      id: 22,
      year: "1998 - 1999",
      name: "Santa Concreta",
      theme: "Pirates",
      category: "light",
      image: "/img/Canoes/santaconcretathumb.jpg",
      link: "/canoes/1999",
    },
  ]

  return (
    <section id="gallery" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Our Canoes</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Our canoes since 1998
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group cursor-pointer block hover:opacity-90 transition-opacity"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.year}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.year} // {item.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">Theme: {item.theme}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
