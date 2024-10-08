const ram = [
  {
    name: "Corsair Vengeance LPX 16 GB",
    price: 38.99,
    speed: [4, 3200],
    modules: [2, 8],
    price_per_gb: 2.437,
    color: "Black / Yellow",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "Corsair Vengeance 32 GB",
    price: 113.99,
    speed: [5, 5600],
    modules: [2, 16],
    price_per_gb: 3.562,
    color: "Black",
    first_word_latency: 12.857,
    cas_latency: 36,
  },
  {
    name: "G.Skill Trident Z5 RGB 32 GB",
    price: 117.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.687,
    color: "Black",
    first_word_latency: 12,
    cas_latency: 36,
  },
  {
    name: "Corsair Vengeance 32 GB",
    price: 114.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.593,
    color: "Black / Gray",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "Corsair Vengeance RGB Pro 32 GB",
    price: 94.99,
    speed: [4, 3600],
    modules: [2, 16],
    price_per_gb: 2.968,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 18,
  },
  {
    name: "G.Skill Trident Z5 RGB 64 GB",
    price: 217.99,
    speed: [5, 6400],
    modules: [2, 32],
    price_per_gb: 3.406,
    color: "Black / Silver",
    first_word_latency: 10,
    cas_latency: 32,
  },
  {
    name: "Corsair Vengeance LPX 32 GB",
    price: 69.98,
    speed: [4, 3600],
    modules: [2, 16],
    price_per_gb: 2.187,
    color: "Black / Yellow",
    first_word_latency: 10,
    cas_latency: 18,
  },
  {
    name: "Corsair Vengeance RGB 32 GB",
    price: 127.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 4,
    color: "White",
    first_word_latency: 12,
    cas_latency: 36,
  },
  {
    name: "TEAMGROUP T-Force Delta RGB 32 GB",
    price: 106.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.343,
    color: "White",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "TEAMGROUP T-Force Delta RGB 32 GB",
    price: 106.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.343,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "Corsair Vengeance RGB Pro 16 GB",
    price: 55.99,
    speed: [4, 3200],
    modules: [2, 8],
    price_per_gb: 3.499,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "Corsair Vengeance 16 GB",
    price: 74.98,
    speed: [5, 5200],
    modules: [2, 8],
    price_per_gb: 4.686,
    color: "Black",
    first_word_latency: 15.385,
    cas_latency: 40,
  },
  {
    name: "G.Skill Flare X5 32 GB",
    price: 102.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.218,
    color: "Black",
    first_word_latency: 12,
    cas_latency: 36,
  },
  {
    name: "G.Skill Trident Z5 Neo RGB 32 GB",
    price: 112.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.531,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "Silicon Power GAMING 16 GB",
    price: 32.97,
    speed: [4, 3200],
    modules: [2, 8],
    price_per_gb: 2.061,
    color: "Black / Gray",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "Corsair Vengeance 64 GB",
    price: 159.99,
    speed: [5, 5200],
    modules: [2, 32],
    price_per_gb: 2.5,
    color: "Black",
    first_word_latency: 15.385,
    cas_latency: 40,
  },
  {
    name: "G.Skill Ripjaws V 16 GB",
    price: 3914.75,
    speed: [4, 4800],
    modules: [2, 8],
    price_per_gb: 244.672,
    color: "Black",
    first_word_latency: 7.083,
    cas_latency: 17,
  },
  {
    name: "G.Skill Flare X5 32 GB",
    price: 104.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.281,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "TEAMGROUP T-Create Expert 32 GB",
    price: 97.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.062,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "G.Skill Ripjaws V 16 GB",
    price: 37,
    speed: [4, 3200],
    modules: [2, 8],
    price_per_gb: 2.312,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "TEAMGROUP T-Force Vulcan Z 16 GB",
    price: 32.99,
    speed: [4, 3200],
    modules: [2, 8],
    price_per_gb: 2.062,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "Corsair Vengeance RGB 32 GB",
    price: 134.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 4.218,
    color: "Black",
    first_word_latency: 13.333,
    cas_latency: 40,
  },
  {
    name: "Corsair Vengeance RGB 32 GB",
    price: 109.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.437,
    color: "Black",
    first_word_latency: 12,
    cas_latency: 36,
  },
  {
    name: "Corsair Vengeance LPX 16 GB",
    price: 49.99,
    speed: [4, 3600],
    modules: [2, 8],
    price_per_gb: 3.124,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 18,
  },
  {
    name: "G.Skill Ripjaws V 32 GB",
    price: 66.98,
    speed: [4, 3200],
    modules: [2, 16],
    price_per_gb: 2.093,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "Corsair Dominator Titanium 64 GB",
    price: 309.99,
    speed: [5, 6600],
    modules: [2, 32],
    price_per_gb: 4.844,
    color: "White",
    first_word_latency: 9.697,
    cas_latency: 32,
  },
  {
    name: "G.Skill Flare X5 32 GB",
    price: 96.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.031,
    color: "Black",
    first_word_latency: 10.667,
    cas_latency: 32,
  },
  {
    name: "Corsair Vengeance LPX 32 GB",
    price: 66.98,
    speed: [4, 3200],
    modules: [2, 16],
    price_per_gb: 2.093,
    color: "Black / Yellow",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "Corsair Vengeance 32 GB",
    price: 94.99,
    speed: [5, 5200],
    modules: [2, 16],
    price_per_gb: 2.968,
    color: "Black",
    first_word_latency: 15.385,
    cas_latency: 40,
  },
  {
    name: "G.Skill Ripjaws S5 32 GB",
    price: 109.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.437,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "Corsair Vengeance RGB 64 GB",
    price: 224.99,
    speed: [5, 6000],
    modules: [2, 32],
    price_per_gb: 3.515,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "TEAMGROUP T-Force Vulcan Z 32 GB",
    price: 57.99,
    speed: [4, 3600],
    modules: [2, 16],
    price_per_gb: 1.812,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 18,
  },
  {
    name: "Corsair Vengeance RGB Pro SL 32 GB",
    price: 82.99,
    speed: [4, 3600],
    modules: [2, 16],
    price_per_gb: 2.593,
    color: "White / Black",
    first_word_latency: 10,
    cas_latency: 18,
  },
  {
    name: "Kingston FURY Beast RGB 16 GB",
    price: null,
    speed: [5, 6000],
    modules: [2, 8],
    price_per_gb: null,
    color: "Black",
    first_word_latency: 12,
    cas_latency: 36,
  },
  {
    name: "TEAMGROUP T-Force Vulcan Z 32 GB",
    price: 52.75,
    speed: [4, 3200],
    modules: [2, 16],
    price_per_gb: 1.648,
    color: "Gray",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "Silicon Power Value Gaming 32 GB",
    price: 94.97,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 2.968,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "Silicon Power GAMING 32 GB",
    price: 51.49,
    speed: [4, 3200],
    modules: [2, 16],
    price_per_gb: 1.609,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "G.Skill Trident Z5 Neo 64 GB",
    price: 209.99,
    speed: [5, 6000],
    modules: [2, 32],
    price_per_gb: 3.281,
    color: "Black / Silver",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "Corsair Vengeance RGB 32 GB",
    price: 124.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.906,
    color: "Gray",
    first_word_latency: 10,
    cas_latency: 30,
  },
  {
    name: "Kingston FURY Beast 16 GB",
    price: 49.19,
    speed: [4, 3200],
    modules: [2, 8],
    price_per_gb: 3.074,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "G.Skill Trident Z5 RGB 32 GB",
    price: 132.99,
    speed: [5, 7200],
    modules: [2, 16],
    price_per_gb: 4.156,
    color: "Black",
    first_word_latency: 9.444,
    cas_latency: 34,
  },
  {
    name: "Corsair Vengeance LPX 64 GB",
    price: 129.99,
    speed: [4, 3200],
    modules: [2, 32],
    price_per_gb: 2.031,
    color: "Black / Yellow",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "TEAMGROUP T-Force Delta RGB 32 GB",
    price: 69.98,
    speed: [4, 3600],
    modules: [2, 16],
    price_per_gb: 2.187,
    color: "White",
    first_word_latency: 10,
    cas_latency: 18,
  },
  {
    name: "Kingston FURY Beast 32 GB",
    price: 119.99,
    speed: [5, 6000],
    modules: [2, 16],
    price_per_gb: 3.75,
    color: "Black",
    first_word_latency: 12,
    cas_latency: 36,
  },
  {
    name: "Corsair Vengeance RGB Pro 16 GB",
    price: 62.99,
    speed: [4, 3200],
    modules: [2, 8],
    price_per_gb: 3.937,
    color: "White",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "G.Skill Trident Z5 RGB 32 GB",
    price: 109.99,
    speed: [5, 6400],
    modules: [2, 16],
    price_per_gb: 3.437,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 32,
  },
  {
    name: "Corsair Dominator Titanium 64 GB",
    price: 309.99,
    speed: [5, 6600],
    modules: [2, 32],
    price_per_gb: 4.844,
    color: "Black",
    first_word_latency: 9.697,
    cas_latency: 32,
  },
  {
    name: "Corsair Vengeance RGB 128 GB",
    price: 459.99,
    speed: [5, 5600],
    modules: [4, 32],
    price_per_gb: 3.594,
    color: "Black",
    first_word_latency: 14.286,
    cas_latency: 40,
  },
  {
    name: "G.Skill Trident Z RGB 32 GB",
    price: 84.99,
    speed: [4, 3200],
    modules: [2, 16],
    price_per_gb: 2.656,
    color: "Black",
    first_word_latency: 10,
    cas_latency: 16,
  },
  {
    name: "G.Skill Trident Z5 RGB 32 GB",
    price: 109.99,
    speed: [5, 6400],
    modules: [2, 16],
    price_per_gb: 3.437,
    color: "White / Black",
    first_word_latency: 10,
    cas_latency: 32,
  },
];


ram.map((obj) => {
    obj.cat = "ram";
  })

ram.filter(item => item.price)


export default ram