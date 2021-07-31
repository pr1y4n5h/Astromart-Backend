const products = [
  {
    name: "Relativity",
    image: "https://images-na.ssl-images-amazon.com/images/I/813ExjDkhxS.jpg",
    category: "books",
    price: 199,
    off: 35,
    deluxe: true,
    rating: 4.6,
    stock: true,
    details:
      "Dealing with the theory of relativity—special relativity and general relativity—and the considerations on the universe as a whole, this book gives an insight into the scientific theory about the relationship between space and time, the theory of gravitation and the universe.",
  },

  {
    name: "NASA Grey Sweatshirt",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61Dgw5pj3GL._AC_UX569_.jpg",
    category: "clothing",
    price: 499,
    off: 30,
    deluxe: true,
    rating: 4.2,
    stock: true,
    details:
      "Love science and everything that has to do with outer space? Get this cute and trendy 'NASA' logo sweatshirt to show how nerdy and cool you are. Great for anyone who wants to be an astronaut or wishes they were one! Also makes a great gift!",
  },

  {
    name: "Voyager Golden Record necklace",
    image:
      "https://i.etsystatic.com/8259588/r/il/67ea57/1664649054/il_794xN.1664649054_iw5i.jpg",
    category: "jewellery",
    price: 1999,
    off: 17,
    deluxe: false,
    rating: 4.9,
    stock: true,
    details:
      "This Voyager Golden Record cover necklace is a piece of science jewelry which is perfect for the astronomy, NASA and space geeks. The Voyager Golden Records are phonograph records which were sent to outer space, beyond the solar system, on the Voyager spacecrafts in 1977. They contain a message to aliens or future humans. This time capsule contains images and a variety of natural sounds selected by a committee chaired by Carl Sagan to portray the diversity of life and culture on Earth.",
  },

  {
    name: "Moon Lamp, Welkey Plus",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71%2BpkePyKzL._AC_SX679_.jpg",
    category: "gadgets",
    price: 799,
    off: 60,
    deluxe: false,
    rating: 4.7,
    stock: true,
    details:
      "The moon lamp with the diameter 4.8 inch is made of PLA material with 3D technology, Environmentally and energy-saving, makes it fall resistant. Our Moon light was the first to apply for ETL certification in the market, Ensuring this moon night light safer to use for our client.",
  },

  {
    name: "Aerospace Unisex Tee",
    image:
      "https://i.etsystatic.com/18378886/r/il/95c2cf/2659298454/il_794xN.2659298454_fmn3.jpg",
    category: "clothing",
    price: 399,
    off: 45,
    deluxe: true,
    rating: 4.1,
    stock: true,
    details:
      "These Tees are made with premium quality materials and designed to help you look and feel your best! They are soft and lightweight, with the right amount of stretch. It’s comfortable and flattering for both men and women.",
  },

  {
    name: "LEGO International Space Station Building Kit",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91g71Jc3KcL._AC_SL1500_.jpg",
    category: "gadgets",
    price: 1699,
    off: 32,
    deluxe: true,
    rating: 4.7,
    stock: true,
    details:
      "Challenge your construction skills with this LEGO Ideas ISS (21321) display model, featuring 2 rotating joints with 8 adjustable ‘solar panels’, posable Canadarm2 and other authentic details to discover as you build. This ISS model comes with a stand, 2 astronaut microfigures, a brick-built mini NASA space shuttle and 3 mini cargo spacecrafts to create a spectacular display and rekindle nostalgic memories of childhood LEGO projects. A super treat for yourself, birthday present or holiday gift idea for space fans, adults aged 16+ or any experienced LEGO builder, this 864-piece set offers hours of creative fun, whether built solo or with friend.",
  },

  {
    name: "Space Exploration Earrings",
    image:
      "https://i.etsystatic.com/6255452/r/il/f45e35/2634338543/il_794xN.2634338543_ik49.jpg",
    category: "jewellery",
    price: 599,
    off: 31,
    deluxe: true,
    rating: 3.8,
    stock: true,
    details:
      "The future is now! These shiny earrings will show off your love of everything space, science, and sci-fi! Wear them to your next scientific conference or sci-fi convention - they can do it all! Shiny silver-plated earrings on surgical steel or sterling silver hooks. Each piece ships in an organza jewelry bag or gift box, with a card detailing the materials used (including specific rock/mineral information for stone jewelry).",
  },

  {
    name: "Solar System Mug",
    image:
      "https://i.etsystatic.com/23380950/r/il/0ba00f/2663985308/il_794xN.2663985308_95ke.jpg",
    category: "others",
    price: 549,
    off: 25,
    deluxe: false,
    rating: 3.6,
    stock: false,
    details:
      "Add a splash of color to your morning coffee or tea ritual! These ceramic mugs not only have a beautiful design on them, but also a colorful rim, handle, and inside, so the mug is bound to spice up your mug rack.",
  },

  {
    name: "Star Map Notebook",
    image:
      "https://i.etsystatic.com/8140833/r/il/912a19/2168987001/il_794xN.2168987001_lf5z.jpg",
    category: "books",
    price: 899,
    off: 30,
    deluxe: true,
    rating: 4,
    stock: true,
    details:
      "Record your celestial observations, track meteor showers, or draft your latest astronomical theories in this Star Map notebook. Emblazoned with a map of the night sky nestled among astronomical events, this book is sure to elevate your musings and inspire your analyses.",
  },

  {
    name: "Southern Sky Wine Glass Set",
    image:
      "https://i.etsystatic.com/8140833/r/il/19958b/1247610732/il_794xN.1247610732_dn1p.jpg",
    category: "others",
    price: 1499,
    off: 16,
    deluxe: false,
    rating: 4,
    stock: true,
    details:
      "Whether you call the southern hemisphere home or you've just made amazing memories below the equator, you'll love sharing a bottle of wine among the stars of the southern sky. This pair of elegant stemless wine glasses shows the southern hemisphere's night sky in summer and in winter, one season on each glass.",
  },

  {
    name: "Galaxy & Star Projector",
    image:
      "https://cdn.shopify.com/s/files/1/0491/2853/8276/products/StarLightGalaxy_Brochure_001.v2_1024x1024.jpg?v=1613244186",
    category: "gadgets",
    price: 3999,
    off: 45,
    deluxe: true,
    rating: 4.3,
    stock: false,
    details:
      "Never get bored with the many galaxy light variations from this bedroom night light! Choose or combine 4 different colors and pick your motion. The light can be blue, white, red, or green or a combination of any 2 of those colors. Plus, you can select either stationary or set it to motion at different speeds. Letting you visit a different galaxy every night!",
  },

  {
    name: "Lukzer Space Telescope",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71NQodmxIES._SX425_.jpg",
    category: "gadgets",
    price: 1649,
    off: 26,
    deluxe: true,
    rating: 4.5,
    stock: true,
    details:
      "The beginner telescope with 50mm objective diameter and 360mm focal length, configure two different magnification 18x and 60x. Additional 1.5x erecting eyepiece included, expand the magnification to 27x and 90x. High Quality Optical Glass Lens and Metal Optical Tube. Complete with Aluminum Table Top Tripod & 1.5x Erecting Eyepiece & 2 Eyepieces (18x and 60x). Caution: Do not view sun through telescope as serious injury to the eye will occur. Children under the age of 8 must be supervised by an adult when using telescope.",
  },

  {
    name: "Astrophysics for Babies",
    image: "https://images-na.ssl-images-amazon.com/images/I/81xIYAUuYwL.jpg",
    category: "books",
    price: 499,
    off: 8,
    deluxe: true,
    rating: 4.1,
    stock: false,
    details:
      "Help your future genius become the smartest baby in the room! It only takes a small spark to ignite a child's mind. Written by an expert, Astrophysics for Babies is a colorfully simple introduction to the study of how physics and chemistry affect heavenly bodies in space. Babies (and grownups!) will learn all about our universe. With a tongue-in-cheek approach that adults will love, this installment of the Baby University board book series is the perfect way to introduce basic concepts to even the youngest scientists.",
  },

  {
    name: "Pale Blue Dot",
    image: "https://images-na.ssl-images-amazon.com/images/I/813ExjDkhxS.jpg",
    category: "books",
    price: 428,
    off: 31,
    deluxe: true,
    rating: 4.5,
    stock: false,
    details:
      "In Cosmos, the late astronomer Carl Sagan cast his gaze over the magnificent mystery of the Universe and made it accessible to millions of people around the world. Now in this stunning sequel, Carl Sagan completes his revolutionary journey through space and time. Future generations will look back on our epoch as the time when the human race finally broke into a radically new frontier—space. In Pale Blue Dot, Sagan traces the spellbinding history of our launch into the cosmos and assesses the future that looms before us as we move out into our own solar system and on to distant galaxies beyond. The exploration and eventual settlement of other worlds is neither a fantasy nor luxury, insists Sagan, but rather a necessary condition for the survival of the human race.",
  },

  {
    name: "Particle accelerator wall art poster",
    image:
      "https://i.etsystatic.com/22080352/r/il/6c4aaf/2775209483/il_794xN.2775209483_c7im.jpg",
    category: "others",
    price: 749,
    off: 12,
    deluxe: true,
    rating: 4.2,
    stock: true,
    details:
      'Ultra high quality art print. Frame is not included - you will get just the print.The original drawings were cleaned and restored but since in most cases they are at least 100 years old, the print will never look as if it was created using modern technology. The lines will be slightly distorted and have jagged edges, showing sings of wear which only adds to the authentic and vintage look. We do not "over-restore" the prints to make them look clean in modern understanding.',
  },

  {
    name: "Pioneer Plaque silver necklace",
    image:
      "https://i.etsystatic.com/8259588/r/il/758eeb/1400896887/il_794xN.1400896887_81wm.jpg",
    category: "jewellery",
    price: 1399,
    off: 22,
    deluxe: true,
    rating: 4.5,
    stock: true,
    details:
      "The NASA Pioneer plaque is a message from mankind to aliens, which was sent to outer space, beyond our solar system, On the antenna of Pioneer spacecrafts (10 and 11). The plaque was originally made of gold-anodizes aluminium, and here you can have it as a silver necklace. Great as a science gift for all the astronomy and astrophysics geeks out there.",
  },

  {
    name: "Dwarf Planet Pluto Jewelry",
    image:
      "https://i.etsystatic.com/6713025/r/il/0a8c0d/853978416/il_794xN.853978416_dtv9.jpg",
    category: "jewellery",
    price: 1499,
    off: 26,
    deluxe: false,
    rating: 4.2,
    stock: false,
    details:
      "Pluto Jewelry - We know poor ol' Pluto was downgraded to a dwarf planet, but how could we NOT feature this fantastic new digital image from the New Horizons probe! 1 inch (25mm) diameter pendant. Your eye-catching glass pendant starts as a crystal clear domed glass cabochon. The high-definition laser printed digital image is securely bonded to the reverse side of the glass using a multistage process, rendering a 3-dimensional effect. Pendants are sealed with a thick, durable coat of white jewelry resin.",
  },

  {
    name: "Astrophysicist Hoodie",
    image:
      "https://i.etsystatic.com/10157633/r/il/f5f082/2613131759/il_794xN.2613131759_d4do.jpg",
    category: "clothing",
    price: 799,
    off: 22,
    deluxe: false,
    rating: 4.1,
    stock: true,
    details:
      "Love science and everything that has to do with outer space? Get this cute and trendy 'NASA' logo sweatshirt to show how nerdy and cool you are. Great for anyone who wants to be an astronaut or wishes they were one! Also makes a great gift!",
  },

  {
    name: "Space Matters T-Shirt",
    image:
      "https://i.etsystatic.com/17664594/r/il/b6b667/2018193907/il_794xN.2018193907_jfx6.jpg",
    category: "clothing",
    price: 399,
    off: 19,
    deluxe: true,
    rating: 3.8,
    stock: false,
    details:
      "Space Matters T-Shirt. Astronomy And Space Shirt for Astronomers, Astrophysics, Special &General Relativity fans everywhere! Original Big Bang Expansion Graphic design. Act now and get your new favorite Quantum Physics Shirt or gift it to family and friends. Add a dash of astronomical inspiration to your tee collection with this Space Matters t-shirt. It makes the perfect gift for the space lover in your life who loves astronomy tee shirts.",
  },

  {
    name: "Constellations Star Map",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Xn4WyjS9L._AC_.jpg",
    category: "others",
    price: 1199,
    off: 33,
    deluxe: false,
    rating: 2.9,
    stock: false,
    details:
      "A glow-in-the-dark map showing the major constellations visible year-round from North America, Europe, and Asia. Glows for many hours after exposure to lamp light. 24 x 28.5 inches - made in the USA. Comes rolled in a heavy-duty tube. Put over a bed or on a wall; great as a night light and educational tool.",
  },
];

module.exports = products;
