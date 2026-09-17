// Every word and number on the site lives here. Facts come from the hotel's Instagram
// (@hotelsrikrishnavilas) and public listings; nothing is invented. Edit here, not in components.

export const nav = [
  { label: 'Dishes', href: '#signature' },
  { label: 'Menu', href: '#menu' },
  { label: 'Sweets', href: '#sweets' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
]

export const site = {
  name: 'Hotel Sri Krishna Vilas',
  nameTa: 'ஹோட்டல் ஸ்ரீ கிருஷ்ணா விலாஸ்',
  kind: 'Pure Veg Restaurant',
  kindTa: 'சைவ உணவகம்',
  city: 'Chidambaram',
  tagline: 'A table full of tradition, a heart full of happiness.',
  address: {
    line1: '95/129, East Car Street',
    line2: 'Chidambaram, Tamil Nadu 608001',
    ta: '95/129, கீழ ரத வீதி, சிதம்பரம் – 608001',
    landmark: '100 metres from the east gopuram of Sri Thillai Nataraja Temple',
  },
  phones: [
    { label: '04144 220207', tel: 'tel:+914144220207' },
    { label: '73390 80207', tel: 'tel:+917339080207' },
  ],
  whatsapp: 'https://wa.me/917339080207',
  hours: { days: 'Every day', time: '7:00 AM – 10:00 PM' },
  instagram: 'https://www.instagram.com/hotelsrikrishnavilas/',
  instagramHandle: '@hotelsrikrishnavilas',
  maps: {
    directions: 'https://maps.app.goo.gl/RhMDdyzqjpb5SMf27',
    embed:
      'https://www.google.com/maps?q=Sri%20Krishna%20Vilas%2C%2095%2F129%2C%20E%20Car%20St%2C%20Chidambaram%2C%20Tamil%20Nadu%20608001&z=17&output=embed',
  },
  order: [
    { name: 'Swiggy', url: 'https://www.swiggy.com/city/chidambaram/hotel-sri-krishna-vilas-east-car-street-chidambaram-locality-rest481568' },
    { name: 'Zomato', url: 'https://www.zomato.com/chidambaram/hotel-sri-krishna-vilas-chidambaram-locality/order' },
  ],
}

export const hero = {
  image: '/gallery/dosa-kathirikai-kosthu.jpg',
  imageAlt: 'Poster of a tall, crisp ghee roast dosa with sambar, coconut chutney and kathirikai kosthu',
  image2: '/gallery/idli-varieties.jpg',
  stamp: 'Pure veg · since the ’90s',
  title: ['Tiffin before darshan,', 'meals on a banana leaf,', 'filter coffee after.'],
  lede: 'Pure vegetarian restaurant and Sri Amirthas sweets counter on East Car Street, a hundred metres from the temple. Serving Chidambaram for more than thirty years.',
}

export const stats = [
  { value: '4.3 ★', label: 'Google rating, 4,400+ reviews' },
  { value: '7 – 10', label: 'Open 7 AM to 10 PM, every day' },
  { value: '30+ yrs', label: 'On East Car Street' },
  { value: '100%', label: 'Vegetarian — restaurant, sweets, savouries' },
]

// Dishes people mention most, in captions and reviews. Photos where we have them.
export const signature = [
  {
    name: 'Ghee roast dosa', ta: 'நெய் ரோஸ்ட்',
    text: 'Paper-thin and crisp, with sambar, coconut chutney and our kathirikai kosthu.',
    image: '/gallery/dosa-kathirikai-kosthu.jpg', alt: 'Ghee roast dosa with sambar, chutney and kathirikai kosthu',
  },
  {
    name: 'Idli, three ways', ta: 'இட்லி வகைகள்',
    text: 'Soft idli plain, tossed in podi, or as sambar idli and chilli idli.',
    image: '/gallery/idli-varieties.jpg', alt: 'Podi idli, sambar idli and chilli idli on banana leaves',
  },
  {
    name: 'Banana-leaf meals', ta: 'இலை சாப்பாடு',
    text: 'Sambar, rasam, kootu, poriyal, appalam and pickle, served the traditional way at noon.',
    image: '/gallery/banana-leaf-meals.jpg', alt: 'Meals being served on a banana leaf with several curries', pos: '50% 12%',
  },
  { name: 'Ven pongal', ta: 'வெண் பொங்கல்', text: 'Peppery, ghee-rich pongal with a medu vada on the side. A temple-town breakfast.', glyph: '✦' },
  { name: 'Filter coffee', ta: 'பில்டர் காபி', text: 'Strong decoction, hot milk, poured tall. The end of every visit.', glyph: '☕', tone: 'blue' },
  { name: 'Rose milk', ta: 'ரோஸ் மில்க்', text: 'Chilled and pink, the drink reviewers keep coming back for on a hot Chidambaram afternoon.', glyph: '❀', tone: 'leaf' },
]

export const about = {
  eyebrow: 'Our story',
  title: 'A short walk from the temple, a long way from ordinary.',
  image: '/gallery/banana-leaf-meals.jpg',
  imageAlt: 'Idlis, side dishes and a dosa being served on a banana leaf',
  imageTag: 'On the leaf, the traditional way',
  paragraphs: [
    'Hotel Sri Krishna Vilas sits on East Car Street, a few steps from the eastern gopuram of the Thillai Nataraja Temple. For more than three decades, pilgrims, families and regulars have stopped here for a hot tiffin before darshan, a full banana-leaf meal at noon, and a tumbler of filter coffee or rose milk in the evening.',
    'Everything on the menu is pure vegetarian. The kitchen leans South Indian, with North Indian and Indo-Chinese dishes for those who want a change. Prices stay pocket-friendly, and the staff are known for looking after you.',
  ],
  features: [
    { title: 'Pure vegetarian', text: 'Every dish, every day. Sattvic cooking for a temple town.' },
    { title: 'Loved by regulars', text: 'Thousands of reviews across Google, Zomato and Justdial, and a 4.3 that has held for years.' },
    { title: 'Open all day', text: '7 AM to 10 PM, every day of the week, festival days included.' },
  ],
}

export const menu = [
  {
    title: 'Tiffin',
    note: 'Morning and evening',
    items: [
      'Idli — plain, podi, sambar or chilli',
      'Ghee roast dosa',
      'Masala dosa',
      'Ven pongal with medu vada',
      'Poori masala',
      'Onion uthappam',
      'Parota on banana leaf',
      'Kathirikai kosthu on the side',
    ],
  },
  {
    title: 'Meals',
    note: 'Lunch on a banana leaf',
    items: [
      'Full meals — sambar, rasam, kootu, poriyal',
      'Mini meals',
      'Curd rice',
      'Appalam and pickle',
    ],
  },
  {
    title: 'North Indian & Chinese',
    note: 'For a change of taste',
    items: [
      'Paneer butter masala and other paneer dishes',
      'Chapati and naan with gravies',
      'Veg biryani',
      'Veg fried rice and noodles',
    ],
  },
  {
    title: 'Drinks & sweets',
    note: 'To finish',
    items: [
      'Filter coffee',
      'Rose milk',
      'Tea',
      'Halwa',
      'Sweets and savouries from Sri Amirthas',
    ],
  },
]

export const sweets = {
  name: 'Sri Amirthas',
  sub: 'Sweets & Savouries',
  nameTa: 'ஸ்ரீ அமிர்தாஸ் இனிப்பு & கார வகைகள்',
  eyebrow: 'From the house of Hotel Sri Krishna Vilas',
  title: 'Sweets made in our own kitchen, boxed for every occasion.',
  paragraphs: [
    'Sri Amirthas is the hotel’s own sweets and savouries counter. Traditional sweets and crisp savouries are made fresh, and festival specials arrive on the day: kozhukattai and sundal for Vinayagar Chaturthi, sweet boxes for Krishna Jayanthi.',
    'Gift boxes are available for festivals, weddings and family occasions. Call ahead for large orders.',
  ],
  images: [
    { src: '/gallery/amirthas-laddu.jpg', alt: 'A plate of laddus from Sri Amirthas on a banana leaf', pos: '50% 68%' },
    { src: '/gallery/vinayagar-chaturthi-special.jpg', alt: 'Vinayagar Chaturthi special: kozhukattai and sundal on a banana leaf', pos: '50% 80%' },
    { src: '/gallery/gokulashtami-gift-box.jpg', alt: 'Sri Amirthas gift box with laddu and mysore pak', pos: '50% 62%' },
  ],
}

// Food only. Promo graphics and screenshots from Instagram stay out of the gallery.
// Square tiles: the restaurant's square posters show whole. Photos used as reel posters are not
// repeated as tiles, so nothing appears twice in the grid.
export const gallery = [
  { src: '/gallery/idli-varieties.jpg', alt: 'Podi idli, sambar idli and chilli idli on banana leaves' },
  { src: '/gallery/vinayagar-chaturthi-special.jpg', alt: 'Vinayagar Chaturthi special plate with kozhukattai and sundal' },
  { src: '/gallery/amirthas-laddu.jpg', alt: 'Laddus from Sri Amirthas on a banana leaf' },
]

export const reels = [
  { code: 'DdDpoY0j-Ri', title: 'Dosa, idli and kathirikai kosthu', poster: '/gallery/dosa-kathirikai-kosthu.jpg' },
  { code: 'DdQSEMoEYLf', title: 'One more curry, zero regrets', poster: '/gallery/banana-leaf-meals.jpg' },
  { code: 'DdA7W8rCILx', title: 'Starts with freshness, ends with sweetness', poster: '/gallery/gokulashtami-gift-box.jpg' },
  { code: 'DdQetQGjvLO', title: 'Vinayagar Chaturthi at Sri Krishna Vilas', poster: '/gallery/ganesha-kozhukattai.jpg' },
]

export const ratings = [
  { platform: 'Google', score: '4.3', count: '4,400+ reviews' },
  { platform: 'Justdial', score: '4.2', count: '4,299 ratings' },
  { platform: 'Zomato', score: '4.3', count: '215 ratings' },
]

// Dishes that come up again and again in public reviews (Google, Tripadvisor, Restaurant Guru)
export const mentions = ['Ghee roast dosa', 'Pongal & vada', 'Rose milk', 'Sambar & rasam', 'Halwa', 'Banana-leaf parota', 'Mini meals', 'Filter coffee']

export const reviews = [
  { name: 'Murali Kumar', source: 'Google', text: 'A lovely spot to enjoy delicious South Indian flavours in a simple and welcoming setting. A good place to stop by for a filling meal and experience some authentic local food vibes.' },
  { name: 'Harish Iyer', source: 'Google', text: 'Great place to dine at Chidambaram. Great service and staff. Awesome food and pocket friendly prices. Highly recommend a visit for all 3 meals.' },
  { name: 'Arun Kumar', source: 'Google', text: 'Our family’s all time favourite restaurant. The quality and taste is the best in the town.' },
  { name: 'Anil Pathi', source: 'Google', text: 'The food was excellent. Sri Krishna Vilas offered better value for the quality of food.' },
  { name: 'Sriram', source: 'Google', text: 'Excellent mouth watering food and dishes, both South Indian and North Indian / Chinese. Try the traditional sweets and savouries. Worth the money.' },
]
