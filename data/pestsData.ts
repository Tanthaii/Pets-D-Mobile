const pestsData = [
  {
    id: "yellow-rice-borer",
    name: "Yellow Rice Borer",
    scientificName: "Scirpophaga incertulas",
    description:
      'A serious pest of rice crops that bores into rice stems, causing "deadhearts" in young plants and "whiteheads" in older ones. The larvae feed inside the stem, disrupting nutrient flow.',
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/Yellow+Rice+Borer.png",
    category: "Moth",
    threatLevel: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "weevil",
    name: "Rice Weevil",
    scientificName: "Sitophilus oryzae",
    description:
      "A major stored grain pest that attacks rice, wheat, and other cereals. Adult weevils bore into stored grains to lay eggs, while larvae develop inside, causing significant post-harvest losses.",

    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/Sitophilus.oryzae.7438.jpg",
    category: "Beetle",
    threatLevel: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "wasp",
    name: "Rice Field Wasp",
    scientificName: "Anagrus spp.",
    description:
      "While most wasps in rice fields are beneficial as natural enemies of pest insects, some species can damage rice plants. They are important in the ecosystem balance.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/common-wasp-hero.jpg",
    category: "Wasp",
    threatLevel: "Low",
    createdAt: new Date().toISOString(),
  },
  {
    id: "snail",
    name: "Golden Apple Snail",
    scientificName: "Pomacea canaliculata",
    description:
      "An invasive species that feeds on young rice seedlings, causing significant damage in wetland rice. They can destroy newly transplanted rice fields within days.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/apple-snail-adult-600x400-172906.jpg",
    category: "Snail",
    threatLevel: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "small-brown-planthopper",
    name: "Small Brown Planthopper",
    scientificName: "Laodelphax striatellus",
    description:
      "Smaller than the brown planthopper but equally damaging. They transmit viral diseases and cause direct feeding damage to rice plants.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/brown-planthopper.png?auto=format&fit=crop&q=80&w=800",
    category: "Bug",
    threatLevel: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "slug",
    name: "Rice Field Slug",
    scientificName: "Deroceras reticulatum",
    description:
      "These mollusks feed on rice seedlings and young plants, particularly in wet conditions. They are most active at night and leave slime trails.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/3620110301_e0bd427e3e_c.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Slug",
    threatLevel: "Medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: "rice-leafhopper",
    name: "Rice Leafhopper",
    scientificName: "Nephotettix spp.",
    description:
      "Both nymphs and adults suck plant sap from leaves and leaf sheaths. They are important vectors of viral diseases like rice tungro disease.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/Green+Rice+Leafhopper.png?auto=format&fit=crop&q=80&w=800",
    category: "Bug",
    threatLevel: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "rice-leaf-roller",
    name: "Rice Leaf Roller",
    scientificName: "Cnaphalocrocis medinalis",
    description:
      "The larvae fold rice leaves longitudinally and feed inside the fold, reducing photosynthetic area. Heavy infestations can cause significant yield loss.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/rice+leaffolder.png?auto=format&fit=crop&q=80&w=800",
    category: "Moth",
    threatLevel: "Medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: "rice-gall-midge",
    name: "Rice Gall Midge",
    scientificName: "Orseolia oryzae",
    description:
      'The larvae cause the rice tillers to form a tubular gall called "silver shoot" or "onion shoot", preventing panicle formation. Severely affected fields show stunted growth.',
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/gall+midge.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Fly",
    threatLevel: "Medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: "moth",
    name: "Rice Moth",
    scientificName: "Corcyra cephalonica",
    description:
      "A serious pest of stored rice and other grains. Larvae feed on grain kernels and create webbing that can bind kernels together.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/Moth_900_x_450.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Moth",
    threatLevel: "Medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: "grasshopper",
    name: "Rice Grasshopper",
    scientificName: "Oxya spp.",
    description:
      "Defoliators that can cause severe damage to rice crops, especially during the vegetative stage. They feed on leaves, creating irregular patterns of damage.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/Rice+Grasshopper.png?auto=format&fit=crop&q=80&w=800",
    category: "Grasshopper",
    threatLevel: "Medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: "earwig",
    name: "Rice Field Earwig",
    scientificName: "Euborellia stali",
    description:
      "These nocturnal insects can be both beneficial and harmful. While they prey on some rice pests, they may also damage young rice plants.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/earwig.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Earwig",
    threatLevel: "Low",
    createdAt: new Date().toISOString(),
  },
  {
    id: "earthworms",
    name: "Rice Field Earthworm",
    scientificName: "Pheretima spp.",
    description:
      "Generally beneficial organisms that improve soil structure and fertility, but high populations in rice paddies can sometimes disrupt young rice roots.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/41535.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Worm",
    threatLevel: "Low",
    createdAt: new Date().toISOString(),
  },
  {
    id: "caterpillar",
    name: "Rice Swarming Caterpillar",
    scientificName: "Spodoptera mauritia",
    description:
      "Larvae feed voraciously on rice leaves, especially during the vegetative stage. Large populations can completely defoliate rice plants.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/New-Project-40.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Moth",
    threatLevel: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "brown-planthopper",
    name: "Brown Planthopper",
    scientificName: "Nilaparvata lugens",
    description:
      'One of the most serious rice pests in Asia. It damages plants by sucking sap and can transmit viral diseases. Large populations can cause "hopper burn" where patches of rice plants turn brown and die.',
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/IMG_4924.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Bug",
    threatLevel: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "beetle",
    name: "Rice Black Bug",
    scientificName: "Scotinophara coarctata",
    description:
      'Both adults and nymphs suck sap from the base of the rice plant, causing yellowing and wilting. Heavy infestations can lead to "bugburn".',
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/Frequently-Asked-Questions-About.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Beetle",
    threatLevel: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "bees",
    name: "Rice Field Bee",
    scientificName: "Apis spp.",
    description:
      "Generally beneficial insects that help with pollination of surrounding crops. They may visit rice fields for water or nectar from weeds.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/WJPEG-Honey-bee-Hoss-NY-No-file.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Bee",
    threatLevel: "Low",
    createdAt: new Date().toISOString(),
  },
  {
    id: "asiatic-rice-borer",
    name: "Asiatic Rice Borer",
    scientificName: "Chilo suppressalis",
    description:
      "Larvae bore into rice stems, causing deadhearts in vegetative stage and whiteheads in reproductive stage. A major pest in many Asian rice-growing regions.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/5559585.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Moth",
    threatLevel: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "ants",
    name: "Rice Field Ant",
    scientificName: "Solenopsis geminata",
    description:
      "Can be both beneficial and harmful. They prey on some rice pests but may also protect and tend honeydew-producing insects like planthoppers.",
    image:
      "https://mybucket-aws02-asd.s3.us-east-1.amazonaws.com/ant-life-in-pictures.jpg?auto=format&fit=crop&q=80&w=800",
    category: "Ant",
    threatLevel: "Low",
    createdAt: new Date().toISOString(),
  },
];

export default pestsData;
