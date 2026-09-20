/**
 * Interactive Indian Art Map
 * Cultural Heritage Visualization
 * 
 * Tech Stack: HTML5, CSS3, JavaScript, Leaflet.js, OpenStreetMap
 * Features:
 *  - 8 Verified Indian Art Locations with Real Coordinates
 *  - Custom Themed Leaflet Markers and Dynamic Interactive Popups
 *  - Dynamic Sidebar Directory with Live Search & Category Filtering
 *  - Detailed Exploration Modal with In-depth Academic Highlights
 *  - Smooth Camera Animations (pan & zoom) and Reset View Action
 */

// =============================================================================
// 1. DATA SOURCE: 8 Primary Art & Cultural Heritage Locations of India
// =============================================================================

const artLocations = [
  {
    id: "ajanta",
    index: 1,
    name: "Ajanta Caves",
    location: "Ajanta",
    state: "Maharashtra",
    artForm: "Ajanta Cave Paintings & Murals",
    category: "Cave & Rock-Cut",
    coordinates: [20.5519, 75.7033],
    zoomLevel: 13,
    imageUrl: "img/ajanta.jpg",
    imageAlt: "Masterpiece fresco of Bodhisattva Padmapani holding a blue lotus in Cave 1 at Ajanta Caves, Maharashtra",
    imageAttribution: "Archaeological Survey of India / Wikimedia Commons (Public Domain)",
    period: "2nd century BCE – 5th/6th century CE (Satavahana & Vakataka dynasties)",
    medium: "Tempera technique on mud plaster with natural mineral pigments (lapis lazuli, ochre, gypsum, lampblack)",
    shortDescription: "World-famous rock-cut Buddhist cave monuments featuring masterwork tempera wall murals. The paintings vividly narrate the Jataka tales, life of Lord Buddha, and iconic figures like Bodhisattva Padmapani and Vajrapani with expressive linework.",
    detailedOverview: "Carved into a semicircular horseshoe cliff along the Waghur River in Aurangabad district, Maharashtra, Ajanta constitutes 30 rock-cut cave monuments. The paintings represent the zenith of classical ancient Indian mural painting. Artists prepared rock surfaces with layers of clay, cow dung, and rice husks before applying fine lime plaster and painting on dry surfaces (tempera).",
    features: [
      "Masterful depiction of Bodhisattva Padmapani holding a blue lotus, epitomizing compassion and graceful posture (tribhanga).",
      "Sophisticated anatomical modeling and shading technique creating three-dimensional volume on flat rock walls.",
      "Vibrant use of lapis lazuli imported from Badakhshan, reflecting ancient trade routes and royal patronage."
    ],
    techniques: "Executed using dry fresco (tempera) with cow-hair brushes. Natural mineral dyes derived from local rocks, soot, and kaolin clay were bound using animal glue and plant resins.",
    academicSignificance: "Ajanta is designated as a UNESCO World Heritage site and represents the foundational benchmark for ancient Asian Buddhist wall painting, influencing art across Sri Lanka, Central Asia, and East Asia."
  },
  {
    id: "ellora",
    index: 2,
    name: "Ellora Caves",
    location: "Ellora",
    state: "Maharashtra",
    artForm: "Ellora Rock-Cut Cave Art & Sculpture",
    category: "Cave & Rock-Cut",
    coordinates: [20.0268, 75.1780],
    zoomLevel: 13,
    imageUrl: "img/ellora.jpg",
    imageAlt: "Monolithic rock-cut Kailasa Temple (Cave 16) carved top-down from basalt cliff at Ellora Caves",
    imageAttribution: "Photo by Vyacheslav Argenberg / Wikimedia Commons (CC BY 4.0)",
    period: "6th – 10th century CE (Rashtrakuta & Yadava dynasties)",
    medium: "Monolithic basalt rock excavation and high-relief stone carving",
    shortDescription: "A monumental complex of 34 excavated rock-cut caves celebrating the harmonious co-existence of Buddhist, Hindu, and Jain traditions. It houses the Kailasa Temple (Cave 16), the largest monolithic rock excavation on Earth.",
    detailedOverview: "Ellora stands as a testament to the supreme mastery of ancient Indian stone cutters and sculptors. Cave 16 (the Kailasa Temple) was carved top-down from an unbroken basalt cliff, removing over 200,000 tonnes of rock without scaffolding. The complex illustrates religious synthesis where 12 Buddhist, 17 Hindu, and 5 Jain caves coexisted peacefully.",
    features: [
      "Cave 16: The breathtaking monolithic Kailasa Temple designed as Mount Kailash, the sacred abode of Lord Shiva.",
      "Dynamic narrative friezes depicting the Ramayana, Mahabharata, and Ravana shaking Mount Kailash with dramatic kinetic tension.",
      "Intricately sculpted monolithic elephants, multi-tiered pillared halls, and colossal dvarapalas (guardians)."
    ],
    techniques: "Subtractive excavation technique working from top to bottom and outside in, ensuring sculptors did not risk falling rock or architectural miscalculations.",
    academicSignificance: "Ellora illustrates the zenith of Indian rock-cut architecture, demonstrating engineering precision, profound religious tolerance, and artistic virtuosity under Rashtrakuta rule."
  },
  {
    id: "thanjavur",
    index: 3,
    name: "Thanjavur",
    location: "Thanjavur (Tanjore)",
    state: "Tamil Nadu",
    artForm: "Thanjavur (Tanjore) Painting",
    category: "Classical Painting",
    coordinates: [10.7870, 79.1378],
    zoomLevel: 13,
    imageUrl: "img/thanjavur.jpg",
    imageAlt: "Classical Thanjavur (Tanjore) sacred painting with relief gesso work and pure 22-carat gold foil",
    imageAttribution: "Wikimedia Commons (CC BY-SA 3.0)",
    period: "16th – 18th century CE (Nayak & Maratha rulers of Thanjavur)",
    medium: "Gesso embossing (sukku powder & glue), 22-carat pure gold leaf foil, semi-precious stones/cut glass on wood canvas",
    shortDescription: "A revered South Indian classical painting style renowned for luminous gold foil embellishments, relief gesso work, and vibrant devotional themes. Paintings predominantly feature Hindu deities characterized by plump, serene faces and large almond eyes.",
    detailedOverview: "Originating in the historic cultural capital of the Chola and Maratha kingdoms in Tamil Nadu, Thanjavur painting is crafted on a wooden board (palagai padam) wrapped in unbleached cotton. Artists raise details with a special paste of unslaked lime and tamarind seed glue, subsequently layering pure 22-carat gold leaf and precious stones to create a glowing celestial aura.",
    features: [
      "Signature depiction of Bala Krishna (Baby Krishna) playfully holding butter with cherubic, radiant expressions.",
      "Three-dimensional gesso relief technique that catches lamp light in temple sanctums and royal prayer halls.",
      "Strict iconographical norms rooted in Agama shastras, framed by archways (prabhavalis) and floral borders."
    ],
    techniques: "Wooden planks (jackfruit or teak) layered with cloth, coated with chalk and gum. After drying, intricate gesso work is done, followed by gold leaf pasting, stone setting, and fine water-based coloring.",
    academicSignificance: "Represents one of the most resilient classical schools of Indian sacred art, holding a Geographical Indication (GI) tag for its distinctive material heritage and craftsmanship."
  },
  {
    id: "khajuraho",
    index: 4,
    name: "Khajuraho",
    location: "Khajuraho",
    state: "Madhya Pradesh",
    artForm: "Khajuraho Temple Sculptures",
    category: "Temple Sculpture",
    coordinates: [24.8318, 79.9199],
    zoomLevel: 13,
    imageUrl: "img/khajuraho.jpg",
    imageAlt: "Kandariya Mahadeva Temple with intricate carved sandstone sculptures and monumental shikhara spire at Khajuraho",
    imageAttribution: "Wikimedia Commons (CC BY-SA 4.0)",
    period: "950 – 1050 CE (Chandela Rajput dynasty)",
    medium: "Buff-colored carved sandstone (Nagara-style temple architecture)",
    shortDescription: "Celebrated UNESCO World Heritage complex of Nagara-style Hindu and Jain temples adorned with intricate stone sculptures. The carvings depict divine deities, celestial nymphs (Apsaras), musicians, battle scenes, and profound celebrations of human love and everyday medieval life.",
    detailedOverview: "Built by the Chandela monarchs, the temples of Khajuraho (such as Kandariya Mahadeva and Lakshmana) are architectural masterpieces where the temple structure itself is conceived as a cosmic mountain (Meru). The exterior friezes celebrate the purusharthas—Dharma, Artha, Kama, and Moksha—integrating spiritual transcendence with sensual aesthetic expression.",
    features: [
      "Superbly detailed Apsaras (celestial maidens) depicted applying makeup, removing thorns, braiding hair, and writing letters.",
      "Kandariya Mahadeva temple featuring over 800 individual sculptural figures carved in high relief with rhythmic balance.",
      "Complex geometric mandalas and soaring shikhara spires simulating Himalayan peaks."
    ],
    techniques: "Interlocking sandstone blocks assembled without mortar using precision mortise and tenon joints, sculpted with delicate chisels to create fluid fabric folds and expressive jewellery.",
    academicSignificance: "Khajuraho is an invaluable archaeological treasury showcasing the pinnacle of medieval central Indian Nagara temple architecture and nuanced sculptural aesthetics."
  },
  {
    id: "madhubani",
    index: 5,
    name: "Madhubani",
    location: "Madhubani (Mithila Region)",
    state: "Bihar",
    artForm: "Madhubani / Mithila Painting",
    category: "Folk & Tribal",
    coordinates: [26.3547, 86.0728],
    zoomLevel: 12,
    imageUrl: "img/madhubani.jpg",
    imageAlt: "Intricate Madhubani (Mithila) folk painting created with natural mineral and vegetable dyes depicting nature and mythology",
    imageAttribution: "Wikimedia Commons (CC BY-SA 4.0)",
    period: "Ancient ritual origins, traditionally practiced across centuries by women in Mithila",
    medium: "Twigs, nib pens, matchsticks, and fingers using natural organic dyes on handmade paper, canvas, and mud walls",
    shortDescription: "A vibrant folk art tradition characterized by intricate two-dimensional geometric patterns, eye-catching floral borders, and absence of empty spaces. Themes feature Hindu deities, nature motifs (fish, lotus, sun), and matrimonial rituals such as the Kohbar.",
    detailedOverview: "Madhubani painting was traditionally practiced by the women of the Mithila region of Bihar and southern Nepal on freshly plastered mud walls of their huts during festivals, births, and weddings. The composition is famously free of negative space; every millimeter is adorned with flowers, geometric crosshatching, leaves, and wildlife symbolizing prosperity and cosmic harmony.",
    features: [
      "Distinctive double-line contours with gap-filling parallel lines and dotting (Kachni and Bharni styles).",
      "Symbolic motifs: Fish (fertility and good fortune), Peacocks (love and beauty), Lotus (purity), and Sun/Moon (divine witness).",
      "Kohbar chamber paintings created specifically for wedding ceremonies to bestow marital blessings."
    ],
    techniques: "Pigments prepared naturally from turmeric (yellow), indigo (blue), pomegranate and kusum flowers (red/orange), soot/lampblack (black), and banyan leaf sap. Applied using bamboo twigs with cotton wraps.",
    academicSignificance: "A globally recognized GI-tagged living folk tradition that transitioned from domestic ritual mud art to an internationally acclaimed contemporary medium supporting rural women artisans."
  },
  {
    id: "warli",
    index: 6,
    name: "Warli Region",
    location: "Palghar & Dahanu (Warli Region)",
    state: "Maharashtra",
    artForm: "Warli Tribal Painting",
    category: "Folk & Tribal",
    coordinates: [19.9880, 72.8258],
    zoomLevel: 11,
    imageUrl: "img/warli.jpg",
    imageAlt: "Warli indigenous tribal painting painted with white rice paste on red ochre background showing the Tarpa dance",
    imageAttribution: "Wikimedia Commons (CC BY-SA 3.0)",
    period: "Ancient indigenous tribal tradition (documented roots dating back to the 10th century CE or earlier)",
    medium: "Rice paste (white pigment) mixed with water and gum, painted on mud, cow-dung, and red ochre (geru) backgrounds",
    shortDescription: "An elemental indigenous tribal art created by the Warli tribe in the Sahyadri mountains. Using basic geometric forms—circles, triangles, and squares—it captures community life, the sacred Tarpa circle dance, farming, harvest, and reverence for Mother Nature.",
    detailedOverview: "Unlike classical Indian art focused on royal courts or mythological gods, Warli art is deeply secular, animistic, and communitarian. The pictorial vocabulary is derived from observations of nature: the circle represents the sun and moon, the triangle symbolizes mountains and pointed trees, while the square (chauk) symbolizes sacred human enclosures or farm fields.",
    features: [
      "The iconic Tarpa Dance motif: Dancers linking hands in an outward spiral mirroring the circle of life and the changing seasons.",
      "Human and animal figures constructed from two inverse triangles joined at the tip, symbolizing balance and movement.",
      "Devchauk and Lagnachauk sacred paintings centered around Palaghata, the goddess of fertility and harvest."
    ],
    techniques: "Wall background prepared with cow dung, clay, and red ochre. Paint is formulated from ground white rice paste mixed with natural tree gum, applied with chewed bamboo sticks acting as brushes.",
    academicSignificance: "Celebrated globally for its visual minimalism and philosophical ecological harmony, demonstrating how complex human communal rituals can be expressed through pure geometric abstraction."
  },
  {
    id: "puri",
    index: 7,
    name: "Puri (Raghurajpur)",
    location: "Puri & Raghurajpur Crafts Village",
    state: "Odisha",
    artForm: "Pattachitra Cloth Scroll Painting",
    category: "Classical Painting",
    coordinates: [19.8135, 85.8312],
    zoomLevel: 13,
    imageUrl: "img/puri.jpg",
    imageAlt: "Intricate Pattachitra cloth scroll painting depicting divine mythological narratives from Puri, Odisha",
    imageAttribution: "Subhashish Panigrahi / Wikimedia Commons (CC BY-SA 3.0)",
    period: "12th century CE onwards (deeply tied to the Shri Jagannath Temple tradition)",
    medium: "Handmade cotton cloth treated with tamarind seed paste and chalk (patta), painted with mineral and plant pigments",
    shortDescription: "A traditional cloth-based scroll painting tradition of Odisha deeply intertwined with the worship of Lord Jagannath, Balabhadra, and Subhadra. Renowned for its sharp black outlines, intricate floral borders, and rhythmic depictions of Krishna Leela.",
    detailedOverview: "The term 'Pattachitra' derives from Sanskrit: 'Patta' meaning cloth and 'Chitra' meaning painting. The artisans (chitrakaras), clustered in heritage villages like Raghurajpur near Puri, historically painted these sacred scrolls for the annual Anavasara period, when the sanctum idols of the Jagannath temple are withdrawn from public sight for ritual rejuvenation.",
    features: [
      "Elaborately ornamental multi-layered borders framing mythological narrative episodes.",
      "Iconic portrayal of Lord Jagannath with his round cosmic eyes and radiant primary colors.",
      "Distinct stylistic conventions: profiles with sharp prominent noses, elongated eyes, and dynamic hand mudras."
    ],
    techniques: "Cotton cloth is layered with tamarind seed gum and soft soapstone powder, polished with sea shells until smooth as ivory. Pigments are harvested from conch shells (white), hingula (red), haritala (yellow), and lampblack, sealed with natural tree resin lacquer.",
    academicSignificance: "One of India's oldest surviving narrative scroll painting traditions, preserving generational oral lore, temple iconography, and specialized natural material alchemy."
  },
  {
    id: "jaipur",
    index: 8,
    name: "Jaipur",
    location: "Jaipur",
    state: "Rajasthan",
    artForm: "Rajasthani / Jaipur Miniature & Decorative Arts",
    category: "Classical Painting",
    coordinates: [26.9124, 75.7873],
    zoomLevel: 12,
    imageUrl: "img/jaipur.jpg",
    imageAlt: "Rajasthani royal miniature painting on handmade paper with delicate gold leaf and fine brushwork, Jaipur school",
    imageAttribution: "Wikimedia Commons (Public Domain)",
    period: "16th – 18th century CE (Kachhwaha Rajput rulers & Mughal court synthesis)",
    medium: "Mineral, gold, and gemstone colors on layered handmade Wasli paper using fine squirrel-hair brushes",
    shortDescription: "The prestigious royal school of Rajasthani miniature painting and court decorative arts. Renowned for exquisite linework, rich jewel tones, and opulent gold leaf, capturing courtly durbars, hunting processions, Ragamala musical poetry, and Radha-Krishna lore.",
    detailedOverview: "Under the patronage of Sawai Jai Singh and successive rulers, Jaipur developed a distinctive school combining bold indigenous Rajasthani folk colors with the refined naturalism and subtle shading of Mughal court ateliers. Artists worked in the royal 'Suratkhana' (painting department), creating portable masterworks, illustrated manuscripts, and lacquered decorative objects.",
    features: [
      "Ultra-fine detailing executed with single-hair squirrel brushes, capable of rendering individual strands of pearl necklaces and translucent muslin garments.",
      "Ragamala and Barahmasa paintings personifying musical modes and the twelve emotional seasons of romance and monsoon skies.",
      "Luminous pigments derived from precious stones like lapis lazuli, malachite, cinnabar, and burnished real gold leaf (varak)."
    ],
    techniques: "Painted on Wasli paper made by bonding multiple sheets of handmade pulp with rice glue. After painting, the artwork is burnished from the back with an agate stone (aqeeq) to achieve an enamel-like gleam.",
    academicSignificance: "Exemplifies the pinnacle of Indian miniature precision, royal archival visual storytelling, and cross-cultural aesthetic synthesis during India's early modern period."
  }
];

// =============================================================================
// 2. APPLICATION STATE & SOPHISTICATED HERITAGE COLOR PALETTE
// =============================================================================

const AppState = {
  map: null,
  markers: {},
  activeLocationId: null,
  activeFilter: "all",
  searchQuery: "",
  indiaCenter: [22.8, 80.5],
  indiaDefaultZoom: 5
};

// Refined Indian Heritage Palette (Deep Indigo, Muted Terracotta, Antique Gold, Subtle Teal)
const categoryColors = {
  "Cave & Rock-Cut": "#A04A36",       // Muted Terracotta
  "Folk & Tribal": "#C59B4B",         // Antique Gold
  "Classical Painting": "#1E3A63",    // Deep Heritage Indigo
  "Temple Sculpture": "#1D6A73"       // Subtle Mineral Teal
};

// =============================================================================
// 3. MAP INITIALIZATION & CONTROLS
// =============================================================================

/**
 * Initializes the Leaflet map centered over the Indian subcontinent
 */
function initMap() {
  AppState.map = L.map("map", {
    center: AppState.indiaCenter,
    zoom: AppState.indiaDefaultZoom,
    minZoom: 4,
    maxZoom: 18,
    zoomControl: true,
    scrollWheelZoom: true,
    attributionControl: false
  });

  // 100% Free Tile Layers (NO API key required, NO watermarks, NO 403 blocks)
  
  // 1. OpenStreetMap Humanitarian (HOT) - Clean, vibrant, genuine OSM data, no API key
  const osmHOT = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://www.hotosm.org/" target="_blank" rel="noopener">Humanitarian OpenStreetMap Team</a> | Indian Art Heritage',
    maxZoom: 19
  });

  // 2. Esri World Topographic - Elegant heritage terrain style, no API key
  const esriTopo = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, METI | Indian Art Heritage',
    maxZoom: 18
  });

  // 3. OpenStreetMap France - Classic standard OSM cartography, no API key
  const osmFR = L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors | Indian Art Heritage',
    maxZoom: 19
  });

  // Set OpenStreetMap (HOT) as the default basemap
  osmHOT.addTo(AppState.map);

  // Layer Switcher for quick selection between styles
  const baseMaps = {
    "OpenStreetMap (HOT)": osmHOT,
    "Heritage Topo (Esri)": esriTopo,
    "OpenStreetMap (Classic)": osmFR
  };
  L.control.layers(baseMaps, null, { position: "topright" }).addTo(AppState.map);

  // Position zoom controls in the top right for optimal visibility
  AppState.map.zoomControl.setPosition("topright");

  // Create markers for all 8 locations
  renderMapMarkers();
}

/**
 * Creates custom styled HTML Leaflet markers with pulsating aura and index badge
 */
function createCustomPinIcon(item, isActive = false) {
  const bgColor = categoryColors[item.category] || "#1E3A63";
  const activeClass = isActive ? "pin-active" : "";

  const html = `
    <div class="custom-art-pin ${activeClass}" id="marker-pin-${item.id}" title="${item.name} (${item.artForm})">
      <div class="pin-outer-pulse" style="background: ${bgColor}44;"></div>
      <div class="pin-core" style="background-color: ${bgColor};">
        <span>${item.index}</span>
      </div>
    </div>
  `;

  return L.divIcon({
    className: "custom-leaflet-marker-wrapper",
    html: html,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -24]
  });
}

/**
 * Renders all markers on the map with custom popups
 */
function renderMapMarkers() {
  artLocations.forEach(item => {
    const icon = createCustomPinIcon(item, false);
    const marker = L.marker(item.coordinates, {
      icon: icon,
      title: `${item.name} - ${item.artForm}`,
      alt: `Marker for ${item.name}`
    });

    // Generate custom popup content
    const popupHtml = createPopupContent(item);
    marker.bindPopup(popupHtml, {
      maxWidth: 340,
      className: "art-leaflet-popup"
    });

    // Marker click event
    marker.on("click", () => {
      focusLocation(item.id, false); // Don't double zoom since Leaflet opens popup
    });

    marker.addTo(AppState.map);
    AppState.markers[item.id] = marker;
  });
}

/**
 * Generates custom museum-grade HTML markup for the marker popup
 */
function createPopupContent(item) {
  const categoryColor = categoryColors[item.category] || "#1E3A63";
  
  return `
    <div class="art-popup" data-location-id="${item.id}">
      <div class="popup-header">
        <span class="popup-category-pill" style="background-color: ${categoryColor};">
          ${item.category}
        </span>
        <h3 class="popup-title">${item.name}</h3>
        <p class="popup-subtitle">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${item.location}, ${item.state}</span>
        </p>
      </div>
      <div class="popup-body">
        <div class="popup-art-form">${item.artForm}</div>
        <p class="popup-desc">${item.shortDescription}</p>
        <div class="popup-footer">
          <button class="btn-popup-explore" onclick="openDetailModal('${item.id}')" aria-label="Explore details about ${item.name}">
            <span>Explore Exhibition</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// =============================================================================
// 4. SIDEBAR RENDERING & LOCATION SELECTION
// =============================================================================

/**
 * Generates polished exhibition cards dynamically based on current search and filter criteria
 */
function renderSidebarList() {
  const container = document.getElementById("locations-list");
  const countBadge = document.getElementById("location-count");
  if (!container) return;

  // Filter items
  const filtered = artLocations.filter(item => {
    const matchesCategory = (AppState.activeFilter === "all") || (item.category === AppState.activeFilter);
    const query = AppState.searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) ||
      item.artForm.toLowerCase().includes(query) ||
      item.state.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Update badge count
  if (countBadge) {
    countBadge.textContent = `${filtered.length} Location${filtered.length === 1 ? '' : 's'}`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="sidebar-empty-state">
        <svg class="empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="11" cy="11" r="8" stroke-width="1.75"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="1.75"></line>
        </svg>
        <p class="empty-title">No Art Traditions Found</p>
        <p class="empty-desc">Try clearing your search query or selecting another tradition filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isActive = item.id === AppState.activeLocationId;
    const catColor = categoryColors[item.category] || "#1E3A63";

    return `
      <article 
        class="location-card ${isActive ? 'active' : ''}" 
        id="card-${item.id}"
        role="button"
        tabindex="0"
        onclick="focusLocation('${item.id}', true)"
        onkeydown="handleCardKeydown(event, '${item.id}')"
        aria-label="Select ${item.name}, ${item.artForm} in ${item.state}"
      >
        <div class="card-media-wrapper">
          <img class="card-thumb-img" src="${item.imageUrl}" alt="${item.imageAlt}" loading="lazy" onerror="handleImageError(this, '${item.id}')">
          <span class="card-number-badge" style="background-color: ${catColor};">${item.index}</span>
        </div>

        <div class="card-content">
          <div class="card-top">
            <span class="card-category-badge" data-cat="${item.category}">${item.category}</span>
            <span class="card-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${item.state}</span>
            </span>
          </div>

          <h3 class="card-title">${item.name}</h3>
          <div class="card-art-form">
            <span>${item.artForm}</span>
          </div>

          <p class="card-snippet">${item.shortDescription}</p>

          <div class="card-footer-action">
            <span class="card-hint-text">Click to focus on map</span>
            <button 
              type="button" 
              class="btn-card-explore" 
              onclick="event.stopPropagation(); openDetailModal('${item.id}')"
              title="Open comprehensive cultural info"
            >
              <span>Explore</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Accessible keyboard handler for sidebar cards (Enter or Space to select)
 */
function handleCardKeydown(event, locationId) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    focusLocation(locationId, true);
  }
}

/**
 * Focuses on a location: pans the Leaflet map smoothly, opens the marker popup,
 * and highlights the corresponding sidebar card.
 */
function focusLocation(locationId, shouldFly = true) {
  const item = artLocations.find(l => l.id === locationId);
  if (!item) return;

  AppState.activeLocationId = locationId;

  // Update active state in sidebar cards
  document.querySelectorAll(".location-card").forEach(card => {
    card.classList.remove("active");
  });
  const activeCard = document.getElementById(`card-${locationId}`);
  if (activeCard) {
    activeCard.classList.add("active");
    // Smoothly scroll the card into view
    activeCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Update marker visuals
  Object.keys(AppState.markers).forEach(id => {
    const locItem = artLocations.find(l => l.id === id);
    if (locItem) {
      AppState.markers[id].setIcon(createCustomPinIcon(locItem, id === locationId));
    }
  });

  const marker = AppState.markers[locationId];

  if (shouldFly && marker) {
    // Smooth camera transition to target coordinates with nice zoom
    AppState.map.flyTo(item.coordinates, item.zoomLevel || 12, {
      duration: 1.4,
      easeLinearity: 0.25
    });

    // Open popup after camera settles
    setTimeout(() => {
      marker.openPopup();
    }, 450);
  } else if (marker && !marker.isPopupOpen()) {
    marker.openPopup();
  }

  // On mobile devices, close the sidebar drawer after selecting
  if (window.innerWidth <= 900) {
    closeMobileSidebar();
  }
}

/**
 * Resets the map camera to display the entire Indian subcontinent overview
 */
function resetMapView() {
  AppState.activeLocationId = null;

  // Close any active popups
  AppState.map.closePopup();

  // Reset marker icons
  artLocations.forEach(item => {
    if (AppState.markers[item.id]) {
      AppState.markers[item.id].setIcon(createCustomPinIcon(item, false));
    }
  });

  // Remove sidebar active class
  document.querySelectorAll(".location-card").forEach(c => c.classList.remove("active"));

  // Smoothly fly back to India overview
  AppState.map.flyTo(AppState.indiaCenter, AppState.indiaDefaultZoom, {
    duration: 1.5,
    easeLinearity: 0.25
  });
}

// =============================================================================
// 5. DETAILED EXPLORATION MODAL
// =============================================================================

/**
 * Opens the comprehensive information card modal for a given art tradition
 */
function openDetailModal(locationId) {
  const item = artLocations.find(l => l.id === locationId);
  if (!item) return;

  AppState.activeLocationId = locationId;

  // Populate modal fields
  document.getElementById("modal-category").textContent = item.category;
  document.getElementById("modal-state").textContent = item.state;
  document.getElementById("modal-art-title").textContent = item.artForm;
  document.getElementById("modal-location-subtitle").textContent = `${item.name} • ${item.location}, ${item.state}`;
  
  // Populate hero image with error handling
  const heroImg = document.getElementById("modal-hero-img");
  const heroAttr = document.getElementById("modal-img-attribution");
  if (heroImg) {
    heroImg.src = item.imageUrl;
    heroImg.alt = item.imageAlt || item.artForm;
    heroImg.onerror = () => handleImageError(heroImg, item.id);
  }
  if (heroAttr) {
    heroAttr.textContent = `Source: ${item.imageAttribution || 'Wikimedia Commons (Free Educational License)'}`;
  }

  document.getElementById("modal-period").textContent = item.period;
  document.getElementById("modal-medium").textContent = item.medium;
  document.getElementById("modal-coords").textContent = `${item.coordinates[0].toFixed(4)}° N, ${item.coordinates[1].toFixed(4)}° E`;

  document.getElementById("modal-description").textContent = item.detailedOverview;
  document.getElementById("modal-techniques").textContent = item.techniques;
  document.getElementById("modal-significance").textContent = item.academicSignificance;

  // Render bullet characteristics
  const featuresList = document.getElementById("modal-features-list");
  featuresList.innerHTML = item.features.map(f => `<li>${f}</li>`).join("");

  // Setup View on Map Button
  const flyToBtn = document.getElementById("modal-flyto-btn");
  flyToBtn.onclick = () => {
    closeDetailModal();
    focusLocation(item.id, true);
  };

  // Setup Next / Previous Buttons
  const currentIndex = artLocations.findIndex(l => l.id === locationId);
  const prevItem = artLocations[(currentIndex - 1 + artLocations.length) % artLocations.length];
  const nextItem = artLocations[(currentIndex + 1) % artLocations.length];

  document.getElementById("modal-prev-btn").onclick = () => openDetailModal(prevItem.id);
  document.getElementById("modal-next-btn").onclick = () => openDetailModal(nextItem.id);

  // Show modal
  const backdrop = document.getElementById("modal-backdrop");
  backdrop.classList.remove("hidden");
  backdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

/**
 * Closes the information card modal
 */
function closeDetailModal() {
  const backdrop = document.getElementById("modal-backdrop");
  if (backdrop) {
    backdrop.classList.add("hidden");
    backdrop.setAttribute("aria-hidden", "true");
  }
  document.body.style.overflow = ""; // Restore scrolling
}

/**
 * Graceful SVG Fallback when external images fail or are blocked
 */
window.handleImageError = function(imgEl, id) {
  if (!imgEl || imgEl.dataset.fallbackApplied) return;
  imgEl.dataset.fallbackApplied = "true";
  
  const item = artLocations.find(l => l.id === id);
  const title = item ? item.artForm : "Indian Art Tradition";
  const cat = item ? item.category : "Cultural Heritage";
  const color = (item && categoryColors[item.category]) ? categoryColors[item.category] : "#1E3A63";
  
  const fallbackSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%">
      <defs>
        <linearGradient id="g_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0F1E36"/>
          <stop offset="100%" stop-color="${color}"/>
        </linearGradient>
        <pattern id="pat_${id}" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.5" fill="#C59B4B" opacity="0.3"/>
          <path d="M0 12 L12 0 L24 12 L12 24 Z" fill="none" stroke="#C59B4B" stroke-width="0.5" opacity="0.18"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#g_${id})"/>
      <rect width="100%" height="100%" fill="url(#pat_${id})"/>
      <circle cx="200" cy="92" r="44" fill="none" stroke="#C59B4B" stroke-width="1.5" opacity="0.6"/>
      <circle cx="200" cy="92" r="36" fill="${color}" opacity="0.35"/>
      <path d="M200 62 L208 82 L228 82 L212 95 L218 116 L200 102 L182 116 L188 95 L172 82 L192 82 Z" fill="#C59B4B" opacity="0.85"/>
      <text x="200" y="166" fill="#FAF8F5" font-family="serif" font-size="16" font-weight="600" text-anchor="middle">${title.split('&')[0]}</text>
      <text x="200" y="190" fill="#C59B4B" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="1.2" text-anchor="middle" text-transform="uppercase">${cat}</text>
    </svg>
  `;
  imgEl.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(fallbackSvg.trim());
};

// =============================================================================
// 6. EVENT LISTENERS & UI INTERACTION SETUP
// =============================================================================

function setupEventListeners() {
  // Reset View button
  const resetBtn = document.getElementById("reset-view-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetMapView);
  }

  // Search input with live filter
  const searchInput = document.getElementById("art-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle("hidden", !e.target.value);
      }
      renderSidebarList();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        AppState.searchQuery = "";
        clearSearchBtn.classList.add("hidden");
        renderSidebarList();
        searchInput.focus();
      }
    });
  }

  // Category filter pills
  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      AppState.activeFilter = pill.getAttribute("data-category");
      renderSidebarList();
    });
  });

  // Modal close button & backdrop click
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const detailModal = document.getElementById("detail-modal");

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeDetailModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      // Close only if click is outside modal card
      if (e.target === modalBackdrop) {
        closeDetailModal();
      }
    });
  }

  // Keyboard accessibility: Escape to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailModal();
    }
  });

  // Mobile sidebar drawer toggle
  const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", () => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        sidebar.classList.toggle("open");
        const isOpen = sidebar.classList.contains("open");
        document.getElementById("toggle-sidebar-text").textContent = isOpen ? "Close" : "Locations (8)";
      }
    });
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    const toggleText = document.getElementById("toggle-sidebar-text");
    if (toggleText) toggleText.textContent = "Locations (8)";
  }
}

// =============================================================================
// 7. INITIALIZATION ON DOM READY
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  renderSidebarList();
  setupEventListeners();
});
