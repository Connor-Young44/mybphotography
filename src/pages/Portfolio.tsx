import React, { useState } from "react";
import "../styles/portfolio.css";

type PortfolioItem = {
  title: string;
  image: string;
  category: string;
  description?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Finn on a Beach",
    image: "/images/IMG_1932.jpeg",
    category: "Portrait",
    description: "Finn on a beach mate.",
  },
  {
    title: "Boy on Beach",
    image: "/images/IMG_1936.jpeg",
    category: "Portrait",
    description: "Capturing a little boy enjoying the sun.",
  },
  {
    title: "Boy on a Wall",
    image: "/images/IMG_1952.jpeg",
    category: "Portrait",
    description: "Capturing a little boy looking into the distance.",
  },
  {
    title: "Calm over the field",
    image: "/images/IMG_2017.jpeg",
    category: "Landscape",
    description: "A beautiful silence over an uncut field.",
  },
  {
    title: "Still Calm over the field",
    image: "/images/IMG_2019.jpeg",
    category: "Landscape",
    description: "A beautiful silence over an uncut field.",
  },
  {
    title: "Two People on a Beach",
    image: "/images/IMG_1938.jpeg",
    category: "Landscape",
    description: "Two people on a beach trying to avoid the wind.",
  },
  {
    title: "Dog in Grass",
    image: "/images/IMG_2056.jpeg",
    category: "Animals",
    description: "Dog in grass looks naughty.",
  },
  {
    title: "Dog in Grass 2",
    image: "/images/IMG_2058.jpeg",
    category: "Animals",
    description: "Dog in grass looks happy.",
  },
  {
    title: "Break the silence",
    image: "/images/IMG_2071.jpeg",
    category: "Landscape",
    description: "An improvised boom box breaks the silence.",
  },
  {
    title: "Memorial",
    image: "/images/IMG_2074.jpeg",
    category: "Landscape",
    description: "A monument to remember what happend.",
  },
  {
    title: "Flags",
    image: "/images/IMG_2078.jpeg",
    category: "Landscape",
    description: "Some flags mate.",
  },
  {
    title: "Costal lookout",
    image: "/images/IMG_2136.jpeg",
    category: "Landscape",
    description: "A beautiful look down a harch coastline.",
  },
  {
    title: "Boy on a Pier",
    image: "/images/IMG_2152.jpeg",
    category: "Portrait",
    description: "Capturing a little boy looking out to sea.",
  },
  {
    title: "Cheeky Bugger",
    image: "/images/IMG_2162.jpeg",
    category: "Portrait",
    description: "Cheeky boy looking out from a pier.",
  },
  {
    title: "Prancing Around",
    image: "/images/IMG_2171.jpeg",
    category: "Portrait",
    description: "Little boy running down a rustic pier.",
  },
  {
    title: "On Guard",
    image: "/images/IMG_2230.jpeg",
    category: "Landscape",
    description: "A little boy patrols the wall.",
  },
  {
    title: "Frolicking in the Fields",
    image: "/images/IMG_2264.jpeg",
    category: "Landscape",
    description: "A little boy enjoys the rural life.",
  },
  {
    title: "Dog in Grass 3",
    image: "/images/IMG_2276.jpeg",
    category: "Animals",
    description: "Dog in grass looks tired after running around.",
  },
  {
    title: "Dog in Grass 4",
    image: "/images/IMG_2278.jpeg",
    category: "Animals",
    description: "Dog in grass looks super tired after running around.",
  },
  {
    title: "Silly Faces",
    image: "/images/IMG_2323.jpeg",
    category: "Portrait",
    description: "Ice cream and silly friendsr.",
  },
  {
    title: "Sunset Picnic",
    image: "/images/IMG_2296.jpeg",
    category: "Landscape",
    description: "Young love enjoying a sunset picnic.",
  },
  {
    title: "Winding Road",
    image: "/images/IMG_2336.jpeg",
    category: "Landscape",
    description: "A rural road with river comforting.",
  },
  {
    title: "Dog on Wall",
    image: "/images/IMG_2340.jpeg",
    category: "Animals",
    description: "Dog looks over wall for something to bark at.",
  },
  {
    title: "Pause for Prayer",
    image: "/images/IMG_2341.jpeg",
    category: "Landscape",
    description: "WW2 vehicle parked as soilders attend service.",
  },
  {
    title: "Deer in a Field",
    image: "/images/IMG_2345.jpeg",
    category: "Landscape",
    description: "Deer in a field mate.",
  },
  {
    title: "Far Away Thoughts",
    image: "/images/IMG_2351.jpeg",
    category: "Landscape",
    description: "Memorial in the distance but not a distant thought.",
  },
  {
    title: "Let it Out",
    image: "/images/IMG_2354.jpeg",
    category: "Portrait",
    description: "Boy shouts at sky.",
  },
  {
    title: "Soaring Hights",
    image: "/images/IMG_2366.jpeg",
    category: "Animals",
    description: "Bird soars gracefully.",
  },
  {
    title: "Wall of Wonders",
    image: "/images/IMG_2399.jpeg",
    category: "Portrait",
    description: "Such a cool dude.",
  },
  {
    title: "Creeping Around",
    image: "/images/IMG_2400.jpeg",
    category: "Landscape",
    description: "Aged house with creaping hugs from plant.",
  },
  {
    title: "Kid in the Grass",
    image: "/images/IMG_2402.jpeg",
    category: "Portrait",
    description: "Girl in the grass poses for photo.",
  },
  {
    title: "Quick get the Water",
    image: "/images/IMG_2428.jpeg",
    category: "Landscape",
    description: "Running for water to make the sand castles.",
  },
  {
    title: "Silent Watcher",
    image: "/images/IMG_2446.jpeg",
    category: "Landscape",
    description: "An aged defender still watches on.",
  },
  {
    title: "Elephant in the Room",
    image: "/images/IMG_2451.jpeg",
    category: "Animals",
    description: "Nelly the eliphant comes looking for trouble.",
  },
  {
    title: "Roaring",
    image: "/images/IMG_2455.jpeg",
    category: "Animals",
    description: "RRRROOOOAAAARRRRRR.",
  },
  {
    title: "King of the Jungle",
    image: "/images/IMG_2469.jpeg",
    category: "Animals",
    description: "Is this muffasa??",
  },
  {
    title: "Long and Tall",
    image: "/images/IMG_2474.jpeg",
    category: "Animals",
    description: "Long and Tall.",
  },
  {
    title: "Run Away!",
    image: "/images/IMG_2493.jpeg",
    category: "Landscape",
    description: "A little boy runs to a big door.",
  },
  {
    title: "Run Back!",
    image: "/images/IMG_2499.jpeg",
    category: "Landscape",
    description: "A little boy runs away from a big door.",
  },
  {
    title: "Sleeping Beauty",
    image: "/images/IMG_2503.jpeg",
    category: "Animals",
    description: "A small fox sleeps in the warm sun",
  },
  {
    title: "Currius Kid",
    image: "/images/IMG_2507.jpeg",
    category: "Portrait",
    description: "Little girl checks on mothers where-abouts.",
  },
  {
    title: "Tony the Tiger",
    image: "/images/IMG_2513.jpeg",
    category: "Animals",
    description: "Tigers are cool",
  },
  {
    title: "Little Cutie",
    image: "/images/IMG_2521.jpeg",
    category: "Portrait",
    description: "AAAWWWWWWWWW baby Pennnnnnyyyyyyy.",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(portfolioItems.map((item) => item.category))),
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <p>
          Explore a selection of my work across landscapes, portraits, and events. Click any image for a closer look.
        </p>
        <div className="portfolio-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div className="portfolio-card" key={item.title}>
            <div className="portfolio-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="portfolio-category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;