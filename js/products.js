/**
 * BUILDSUPPLY DATA REPOSITORY (products.js)
 * Isolated product, category, and brand data model.
 * Architected for seamless drop-in replacement with REST/GraphQL API backends.
 */

const PRODUCTS_DATA = [
  {
    id: 1,
    slug: "masterflow-micro-concrete",
    name: "MasterFlow High-Strength Micro Concrete",
    brand: "Apex Concrete Labs",
    category: "Repair & Rehabilitation",
    image: "assets/images/products/prod-01.jpg",
    badge: "Structural Grade",
    shortDesc: "Dual-shrinkage compensated, flowable micro-concrete engineered for structural jacketing, heavy column encasement, and beam repair.",
    packaging: ["25 kg Moisture-Resistant Bag", "50 kg Heavy Duty Bag"],
    coverage: "Approx. 12-13 Litres of fresh mortar per 25 kg bag when mixed with recommended water ratio.",
    benefits: [
      "Controlled expansion counteracting plastic and drying shrinkage",
      "High ultimate compressive strength exceeding 60 N/mm² at 28 days",
      "Self-compacting fluidity allowing void-free placement through congested rebar",
      "Low water permeability protecting embedded reinforcement steel from carbonation"
    ],
    applications: [
      "Structural column jacketing and section enlargement",
      "Bridge pier rehabilitation and girder repairs",
      "Heavy industrial machine base foundation leveling",
      "Precast concrete joint grouting"
    ],
    suitableFor: ["Contractors", "Civil Engineering Firms", "Infrastructure Projects", "Structural Retrofit Teams"],
    techHighlights: {
      "Compressive Strength (28 Days)": "> 60 MPa (ASTM C109)",
      "Flexural Strength": "> 7.5 MPa (ASTM C348)",
      "Fresh Wet Density": "Approx. 2250 kg/m³",
      "Expansion Rate": "0.5% - 2.0% (Unrestrained)",
      "Shelf Life": "12 months in unopened sealed bags under covered storage"
    },
    featured: true
  },
  {
    id: 2,
    slug: "aquadura-2k-waterproofing",
    name: "AquaDura 2K Polymer Waterproofing Coat",
    brand: "DuraBuild Polymers",
    category: "Waterproofing Solutions",
    image: "assets/images/products/prod-02.jpg",
    badge: "Elastomeric 2K",
    shortDesc: "Two-component, acrylic polymer-modified flexible cementitious waterproof coating designed for negative and positive water pressure resistance.",
    packaging: ["20 kg Combo Kit (10kg Powder + 10kg Liquid)", "50 kg Commercial Pack"],
    coverage: "Approx. 1.8 - 2.0 kg/m² for two coats at 1.2 mm total dry film thickness.",
    benefits: [
      "Excellent crack bridging ability accommodating substrate thermal movements",
      "Breathable membrane allowing water vapor transmission while blocking liquid ingress",
      "Non-toxic and certified suitable for potable water reservoir retention structures",
      "Direct tile laying possible over cured membrane without bonding keys"
    ],
    applications: [
      "Basement retaining walls, rafts, and lift pit waterproofing",
      "Water storage reservoirs, overhead tanks, and swimming pools",
      "Wet areas including sunken toilets, bathrooms, and commercial kitchens",
      "Balconies, podium decks, and terraced gardens"
    ],
    suitableFor: ["Waterproofing Contractors", "Residential Developers", "Commercial Complexes", "Plumbing Contractors"],
    techHighlights: {
      "Elongation at Break": "> 85% at 28 days",
      "Adhesion to Concrete": "> 1.5 N/mm² (Cohesive failure in concrete)",
      "Hydrostatic Resistance": "Up to 5 Bar positive pressure",
      "Pot Life": "45 - 60 minutes at 30°C",
      "Standard Compliance": "Meets ASTM D412 & BS 1881 Part 208"
    },
    featured: true
  },
  {
    id: 3,
    slug: "ultraplasticizer-superplasticizer",
    name: "UltraPlasticizer Polycarboxylate Admixture",
    brand: "MasterAdmix Int.",
    category: "Concrete & Cement Solutions",
    image: "assets/images/products/prod-03.jpg",
    badge: "High Range PCE",
    shortDesc: "Advanced Polycarboxylate Ether (PCE) superplasticizer for ready-mix concrete, achieving high slump retention, high early strength, and superior water reduction.",
    packaging: ["220 kg HDPE Drum", "1000 kg IBC Container", "Bulk Tanker Supply"],
    coverage: "Dosage: 0.5% to 1.8% by weight of cementitious materials depending on mix design.",
    benefits: [
      "Water reduction capability exceeding 30% without slump loss or segregation",
      "Extended slump retention up to 120 minutes in elevated ambient temperatures",
      "Enhances early stripping strength, accelerating formwork turnaround cycles",
      "Chloride-free formulation preventing premature rebar corrosion"
    ],
    applications: [
      "High performance concrete (M40 to M80+ grades)",
      "Ready-mix concrete (RMC) with long haulage transit durations",
      "Heavily reinforced architectural self-compacting concrete (SCC)",
      "Precast concrete beam and slab production"
    ],
    suitableFor: ["RMC Batching Plants", "Precast Manufacturers", "Infrastructure Contractors", "Highway Builders"],
    techHighlights: {
      "Appearance": "Light amber free-flowing liquid",
      "Specific Gravity": "1.08 ± 0.02 at 25°C",
      "pH Value": "6.0 - 7.5",
      "Chloride Content": "Nil (< 0.1% as per IS 9103)",
      "Standard Compliance": "ASTM C494 Type F & G, IS 9103"
    },
    featured: true
  },
  {
    id: 4,
    slug: "structojoint-pu-sealant",
    name: "StructoJoint High-Movement Polyurethane Sealant",
    brand: "StructoSeal Tech",
    category: "Adhesives & Sealants",
    image: "assets/images/products/prod-04.jpg",
    badge: "Low Modulus PU",
    shortDesc: "One-component, moisture-curing polyurethane elastomeric joint sealant with high movement capability for building façade and civil expansion joints.",
    packaging: ["600 ml Foil Sausage", "310 ml Cartridge"],
    coverage: "Approx. 6 running meters per 600 ml sausage for a standard 10mm x 10mm joint.",
    benefits: [
      "Movement accommodation factor of ± 25% (Class 25LM)",
      "Bubble-free curing mechanism even under high humidity conditions",
      "Outstanding UV, weathering, and ozone resistance without embrittlement",
      "Non-staining formulation suitable for precast panels, marble, and granite facades"
    ],
    applications: [
      "Expansion and control joints in precast concrete buildings",
      "Perimeter caulking around aluminum windows and curtain wall systems",
      "Subway tunnel segmental joints and airport apron movement joints",
      "Parapet wall and podium expansion joints"
    ],
    suitableFor: ["Façade Contractors", "Civil Engineers", "Precast Installers", "Commercial Builders"],
    techHighlights: {
      "Hardness (Shore A)": "25 ± 5 (ASTM D2240)",
      "Modulus at 100% Elongation": "0.38 MPa (ISO 8339)",
      "Tensile Strength": "> 1.4 MPa",
      "Service Temperature": "-40°C to +80°C",
      "Standard Compliance": "ISO 11600 Type F Class 25LM, ASTM C920"
    },
    featured: true
  },
  {
    id: 5,
    slug: "profloor-heavy-duty-epoxy",
    name: "ProFloor Heavy-Duty Epoxy Floor Topping",
    brand: "ProFlooring Tech",
    category: "Flooring Solutions",
    image: "assets/images/products/prod-05.jpg",
    badge: "Industrial Epoxy",
    shortDesc: "Three-component, solvent-free epoxy screed and self-leveling topping for industrial floors exposed to heavy forklift traffic and chemical spills.",
    packaging: ["15 kg System Kit", "30 kg Heavy-Duty Screed Pack"],
    coverage: "Approx. 1.7 kg/m² per mm thickness. Typical build: 2.0 mm to 4.0 mm.",
    benefits: [
      "Extreme abrasion resistance under solid rubber and steel wheeled transport",
      "Seamless, hygienic surface resistant to bacterial growth and simple to decontaminate",
      "Superior resistance to acids, alkalis, mineral oils, hydraulic fluids, and fuels",
      "High compressive strength exceeding 70 MPa within 7 days cure"
    ],
    applications: [
      "Automobile assembly plants, engineering workshops, and hangars",
      "Pharmaceutical cleanrooms and food & beverage processing facilities",
      "High-bay logistics warehouses and distribution centers",
      "Chemical storage bays and battery charging rooms"
    ],
    suitableFor: ["Industrial Flooring Applicators", "Plant Engineers", "Pharma Facility Managers", "Warehouses"],
    techHighlights: {
      "Compressive Strength": "> 70 N/mm² at 7 days (BS 6319 Part 2)",
      "Tensile Strength": "> 15 N/mm² (BS 6319 Part 7)",
      "Flexural Strength": "> 28 N/mm² (BS 6319 Part 3)",
      "Bond Strength": "> 2.5 N/mm² (Substrate concrete failure)",
      "Traffic Readiness": "Light foot traffic 24h, full mechanical load 72h"
    },
    featured: true
  },
  {
    id: 6,
    slug: "primebond-epoxy-injection-resin",
    name: "PrimeBond Structural Epoxy Injection Resin",
    brand: "PrimeBond Technologies",
    category: "Repair & Rehabilitation",
    image: "assets/images/products/prod-06.jpg",
    badge: "Low Viscosity",
    shortDesc: "Ultra-low viscosity, solventless two-part epoxy resin system formulated for pressure injection grouting of fine cracks in structural reinforced concrete.",
    packaging: ["1.0 kg Pack (Part A + B)", "4.5 kg Twin Canister Set"],
    coverage: "Fills volumetric crack voids at approx. 1.1 kg per litre volume.",
    benefits: [
      "Ultra-low viscosity penetrates hairline fissures down to 0.2 mm width",
      "High mechanical bond strength significantly exceeds the tensile strength of parent concrete",
      "Deep moisture-tolerant formulation bonds effectively to damp surfaces",
      "Restores monolithic structural integrity to cracked beams, slabs, and columns"
    ],
    applications: [
      "Seismic and load-induced crack injection in structural bridges and buildings",
      "Anchoring dowel bars and starter rods into existing concrete",
      "Honeycombed concrete consolidation via low-pressure injection packers",
      "Sealing hollow tiles and delaminated screeds"
    ],
    suitableFor: ["Structural Repair Contractors", "Rehabilitation Engineers", "Bridge Maintenance Departments"],
    techHighlights: {
      "Mixed Viscosity": "180 - 250 mPa.s at 25°C",
      "Compressive Strength": "> 80 N/mm² at 7 days",
      "Tensile Strength": "> 35 N/mm² (ASTM D638)",
      "Slant Shear Bond": "> 20 N/mm² (BS 6319 Part 4)",
      "Pot Life": "30 - 40 minutes at 30°C"
    },
    featured: false
  },
  {
    id: 7,
    slug: "duracure-synthetic-curing-agent",
    name: "DuraCure Synthetic Concrete Curing Compound",
    brand: "UltraChem Systems",
    category: "Surface Treatment",
    image: "assets/images/products/prod-07.jpg",
    badge: "Water Retention 90%+",
    shortDesc: "Aluminized synthetic resin based liquid membrane curing compound minimizing moisture loss from fresh concrete surfaces.",
    packaging: ["20 Litre Can", "200 Litre Barrel"],
    coverage: "Approx. 4.5 to 5.5 m² per litre depending on surface texture and wind conditions.",
    benefits: [
      "Prevents plastic shrinkage cracking and surface crazing in high heat/wind environments",
      "Eliminates the continuous cost and labor of water curing and wet hessian covers",
      "Ensures optimal cement hydration, maximizing surface abrasion resistance and hardness",
      "Reflective formulation deflects solar radiation, lowering early internal hydration peaks"
    ],
    applications: [
      "Pavement quality concrete (PQC) highways and airport runways",
      "Large industrial floor slabs and rooftop podium decks",
      "Canal lining slabs and dam spillways",
      "Precast production yards without steam curing chambers"
    ],
    suitableFor: ["Highway Contractors", "Civil Engineering Contractors", "Industrial Flooring Contractors"],
    techHighlights: {
      "Water Retention Efficiency": "> 90% (ASTM C156)",
      "Drying Time": "2 hours at 30°C to touch",
      "Specific Gravity": "0.88 ± 0.02 at 25°C",
      "Standard Compliance": "ASTM C309 Type 1 or Type 2, Class B"
    },
    featured: false
  },
  {
    id: 8,
    slug: "crystoseal-crystalline-slurry",
    name: "CrystoSeal In-Depth Crystalline Slurry",
    brand: "AquaShield Global",
    category: "Waterproofing Solutions",
    image: "assets/images/products/prod-08.jpg",
    badge: "Self-Healing Crystalline",
    shortDesc: "Surface-applied cementitious crystalline waterproofing system that penetrates deep into concrete capillaries, sealing micro-cracks permanently.",
    packaging: ["25 kg Paper Bag with Polyethylene Liner"],
    coverage: "Approx. 0.8 - 1.0 kg/m² per coat. Minimum 2 coats required.",
    benefits: [
      "Penetrates deep into concrete capillaries using osmotic pressure, forming insoluble crystals",
      "Self-heals dynamic micro-cracks up to 0.4 mm width when moisture is reintroduced",
      "Effective against extreme hydrostatic pressure from both positive and negative sides",
      "Cannot be punctured, torn, or separated at seams like sheet membranes"
    ],
    applications: [
      "Water retaining structures: Sewage treatment plants, water treatment dams, reservoirs",
      "Underground basements, elevator pits, and foundation retaining walls",
      "Tunnels, culverts, and subway underground stations",
      "Marine structures and dry docks"
    ],
    suitableFor: ["Infrastructure Builders", "Deep Foundation Contractors", "Waterproofing Specialists"],
    techHighlights: {
      "Permeability Reduction": "> 85% compared to control concrete (CRD-C 48-92)",
      "Self-Healing Capacity": "Fills cracks up to 0.4 mm within 28 days",
      "Resistance to Water Head": "Tested up to 12 Bar (120 meters water head)",
      "Potable Water Approval": "Tested non-toxic per BS 6920"
    },
    featured: true
  },
  {
    id: 9,
    slug: "supergrip-tile-stone-adhesive",
    name: "SuperGrip Polymer Modified Tile & Stone Adhesive",
    brand: "UltraChem Systems",
    category: "Tile & Stone Solutions",
    image: "assets/images/products/prod-09.jpg",
    badge: "Type 2 Certified",
    shortDesc: "High-performance cementitious adhesive fortified with redispersible polymers for fixing large-format vitrified tiles, granite, and marble on floors and walls.",
    packaging: ["20 kg Bag", "40 kg Master Pack"],
    coverage: "Approx. 3.0 - 4.5 kg/m² using a 6mm x 6mm notched trowel.",
    benefits: [
      "Zero vertical slip allowing installation of heavy format wall cladding from top down",
      "Extended open time (30 minutes) giving installers ample leeway for precision alignment",
      "High tensile adhesion exceeding 1.5 N/mm² under dry and wet conditioning",
      "Accommodates thermal expansion and contraction over underfloor heating systems"
    ],
    applications: [
      "Large-format slim tiles and vitrified tiles on internal and external walls",
      "Natural granite and marble fixing on building lobbies and commercial floors",
      "Swimming pool tile cladding and wet area installations",
      "Tile-on-tile renovation without hacking existing substrates"
    ],
    suitableFor: ["Tiling Contractors", "Interior Contractors", "Architects", "Hospitality Projects"],
    techHighlights: {
      "Tensile Adhesion (Initial)": "> 1.5 N/mm² (EN 12004 C2TE)",
      "Slip Resistance": "< 0.5 mm (EN 1308)",
      "Open Time": "30 minutes at 25°C",
      "Standard Compliance": "IS 15477:2019 Type 2 & Type 3, EN 12004 C2TE"
    },
    featured: false
  },
  {
    id: 10,
    slug: "zincguard-rebar-primer",
    name: "ZincGuard Anti-Corrosion Rebar Primer",
    brand: "PrimeBond Technologies",
    category: "Repair & Rehabilitation",
    image: "assets/images/products/prod-10.jpg",
    badge: "Zinc Rich Active",
    shortDesc: "Two-component, zinc-rich epoxy coating providing active galvanic cathodic protection to exposed rebar steel in concrete repairs.",
    packaging: ["1.0 Litre Twin Pack", "5.0 Litre Commercial Pack"],
    coverage: "Approx. 7.5 to 9.0 m² per litre at 50 microns dry film thickness.",
    benefits: [
      "Sacrificial zinc action provides galvanic cathodic protection against electrochemical rust",
      "Forms a tough, impervious chemical barrier resisting chloride ingress and moisture",
      "Excellent adhesion to grit-blasted or mechanically wire-brushed structural steel",
      "Compatible with all cementitious micro-concretes and structural repair mortars"
    ],
    applications: [
      "Protection of exposed reinforcement steel in spalled concrete repairs",
      "Corrosion protection in coastal marine atmosphere bridges and docks",
      "Industrial chemical plant concrete repair works",
      "Structural retrofitting and column rehabilitation"
    ],
    suitableFor: ["Repair Applicators", "Port & Maritime Authorities", "Structural Engineers"],
    techHighlights: {
      "Metallic Zinc Content in Dry Film": "> 82% by weight",
      "Dry Film Thickness": "45 - 60 microns per coat",
      "Touch Dry Time": "30 minutes at 30°C",
      "Overcoating Window": "2 to 24 hours"
    },
    featured: false
  },
  {
    id: 11,
    slug: "bitumelt-torch-on-membrane",
    name: "BituMelt Torch-On Bituminous Membrane",
    brand: "DuraBuild Polymers",
    category: "Waterproofing Solutions",
    image: "assets/images/products/prod-11.jpg",
    badge: "SBS 4mm",
    shortDesc: "Polymer-modified SBS bituminous waterproofing membrane reinforced with non-woven spunbond polyester for heavy-duty roof and substructure tanking.",
    packaging: ["1m x 10m Roll (10 m² total roll)"],
    coverage: "1 roll covers approx. 8.8 m² net area allowing 100mm side and 150mm end overlaps.",
    benefits: [
      "High puncture resistance and tensile strength accommodating structural stresses",
      "Remains flexible down to -10°C without cracking or thermal fatigue",
      "Uniform factory-controlled thickness eliminating jobsite application variance",
      "Excellent resistance to hydrostatic soil pressure and groundwater salts"
    ],
    applications: [
      "Rooftop terraces, podiums, and inverted roof assemblies",
      "Deep basement retaining walls and foundation sub-grade tanking",
      "Bridge deck waterproofing under asphalt wearing courses",
      "Culverts and subterranean tunnels"
    ],
    suitableFor: ["Waterproofing Contractors", "Roofing Specialists", "Civil Contractors"],
    techHighlights: {
      "Thickness": "3.0 mm or 4.0 mm nominal",
      "Reinforcement Carrier": "180 g/m² non-woven polyester",
      "Tensile Strength (L/T)": "850 / 650 N/50mm (ASTM D5147)",
      "Cold Flexibility": "No cracks at -10°C (EN 1109)",
      "Softening Point": "> 120°C"
    },
    featured: false
  },
  {
    id: 12,
    slug: "precisionflow-non-shrink-grout",
    name: "PrecisionFlow Non-Shrink Precision Grout",
    brand: "Apex Concrete Labs",
    category: "Construction Chemicals",
    image: "assets/images/products/prod-12.jpg",
    badge: "High Flow Grout",
    shortDesc: "High early and ultimate strength, cementitious non-shrink grout for precision machinery baseplates, stanchions, and turbine anchor bolts.",
    packaging: ["25 kg Weatherproof Bag"],
    coverage: "Approx. 13.5 Litres of mixed grout per 25 kg bag at flowable consistency.",
    benefits: [
      "Controlled expansion counteracting settlement shrinkage in plastic and hardened states",
      "Early strength development allows heavy equipment commissioning within 24-48 hours",
      "High dynamic fatigue resistance withstands cyclical vibrating machinery shocks",
      "High contact area (> 95%) ensuring uniform stress distribution beneath baseplates"
    ],
    applications: [
      "Precision turbine, generator, and heavy compressor baseplate bedding",
      "Structural steel stanchion base grouting in high-rise buildings",
      "Precast concrete beam seating and crane rail bedding",
      "Bridge bearing seat grouting"
    ],
    suitableFor: ["Industrial Erectors", "Mechanical Contractors", "Power Plant Builders"],
    techHighlights: {
      "Compressive Strength (1 Day)": "> 28 MPa",
      "Compressive Strength (28 Days)": "> 75 MPa",
      "Flexural Strength (28 Days)": "> 9.5 MPa",
      "Expansion Percentage": "+0.2% to +1.5% (ASTM C827)",
      "Standard Compliance": "ASTM C1107 Grade B & C"
    },
    featured: false
  }
];

const BRANDS_DATA = [
  {
    id: 1,
    name: "UltraChem Systems",
    logo: "assets/images/brands/brand-1.svg",
    tag: "Polymers & Admixtures",
    description: "Global manufacturer of high-grade concrete plasticizers, curing compounds, and advanced polymer solutions.",
    productCount: 14,
    partnerTier: "Authorized Master Distributor"
  },
  {
    id: 2,
    name: "DuraBuild Polymers",
    logo: "assets/images/brands/brand-2.svg",
    tag: "Waterproofing Solutions",
    description: "Pioneers in high-performance acrylic, elastomeric, and torch-on bituminous waterproofing membranes.",
    productCount: 18,
    partnerTier: "Certified Distribution Partner"
  },
  {
    id: 3,
    name: "StructoSeal Tech",
    logo: "assets/images/brands/brand-3.svg",
    tag: "Joints & Sealants",
    description: "Engineered expansion joint sealants, polysulphide, and polyurethane elastomeric mastics for infrastructure.",
    productCount: 12,
    partnerTier: "Authorized Regional Partner"
  },
  {
    id: 4,
    name: "Apex Concrete Labs",
    logo: "assets/images/brands/brand-4.svg",
    tag: "Micro Concrete & Grouts",
    description: "Formulators of high-strength micro-concrete, precision machine grouts, and cementitious admixtures.",
    productCount: 16,
    partnerTier: "Authorized Master Distributor"
  },
  {
    id: 5,
    name: "ProFlooring Tech",
    logo: "assets/images/brands/brand-5.svg",
    tag: "Epoxy & Polyurethane",
    description: "Heavy-duty industrial flooring systems, epoxy screeds, and cleanroom antimicrobial floor coatings.",
    productCount: 15,
    partnerTier: "Exclusive Sector Partner"
  },
  {
    id: 6,
    name: "AquaShield Global",
    logo: "assets/images/brands/brand-6.svg",
    tag: "Crystalline Systems",
    description: "Deep crystalline penetration and self-healing waterproofing technologies for water-retaining assets.",
    productCount: 10,
    partnerTier: "Authorized Technical Distributor"
  },
  {
    id: 7,
    name: "MasterAdmix Int.",
    logo: "assets/images/brands/brand-7.svg",
    tag: "Plasticizers & Retarders",
    description: "Third-generation polycarboxylate ethers (PCE) and retarders for ready-mix concrete batching plants.",
    productCount: 20,
    partnerTier: "Authorized Master Distributor"
  },
  {
    id: 8,
    name: "PrimeBond Technologies",
    logo: "assets/images/brands/brand-8.svg",
    tag: "Structural Adhesives",
    description: "Epoxy injection resins, rebar corrosion primers, and high-load carbon fiber structural retrofits.",
    productCount: 11,
    partnerTier: "Certified Distribution Partner"
  }
];

const CATEGORIES_DATA = [
  { id: "all", name: "All Solutions" },
  { id: "Construction Chemicals", name: "Construction Chemicals" },
  { id: "Waterproofing Solutions", name: "Waterproofing Solutions" },
  { id: "Concrete & Cement Solutions", name: "Concrete & Cement Solutions" },
  { id: "Repair & Rehabilitation", name: "Repair & Rehabilitation" },
  { id: "Adhesives & Sealants", name: "Adhesives & Sealants" },
  { id: "Flooring Solutions", name: "Flooring Solutions" },
  { id: "Surface Treatment", name: "Surface Treatment" },
  { id: "Tile & Stone Solutions", name: "Tile & Stone Solutions" }
];

// Helper Data Access Functions (Ready for REST API swap)
function getAllProducts() {
  return PRODUCTS_DATA;
}

function getFeaturedProducts() {
  return PRODUCTS_DATA.filter(p => p.featured);
}

function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === Number(id));
}

function getProductBySlug(slug) {
  return PRODUCTS_DATA.find(p => p.slug === slug);
}

function getAllBrands() {
  return BRANDS_DATA;
}

function getAllCategories() {
  return CATEGORIES_DATA;
}

// Export for module systems or global window attachment
if (typeof window !== "undefined") {
  window.BuildSupplyData = {
    products: PRODUCTS_DATA,
    brands: BRANDS_DATA,
    categories: CATEGORIES_DATA,
    getAllProducts,
    getFeaturedProducts,
    getProductById,
    getProductBySlug,
    getAllBrands,
    getAllCategories
  };
}
