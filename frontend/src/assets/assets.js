import basket from './basket.png';
import logo from './logo.png';
import drink_1 from './drink_1.jpg';
import drink_2 from './drink_2.jpg';
import drink_3 from './drink_3.jpg';
import drink_4 from './drink_4.jpg';
import drink_5 from './drink_5.jpg';
import drink_6 from './drink_6.jpg';
import drink_7 from './drink_7.jpg';
import drink_8 from './drink_8.jpg';
import negroni from './negroni.jpg';
import mojito from './mojito.jpg';
import margarita from './margarita.jpg';
import bloody from './bloody.jpg';
import whiskeySour from './whiskeySour.jpg';
import rhinewine from './RhineWine.jpg';
import airmail from './AirMail.jpg';
import beerontherocks from './beerontherocks.jpg';
import footerLogo from './cocktail-footer.jpg';
import single from './single.jpg';
import single1 from './single1.jpg';
import adminPhoto from './adminPhoto.jpg';
import upload from './upload.jpg';
import profile from './profile_icon.png';
import bag from './bag_icon.png';
import logout from './logout_icon.png';

export const assets = {
  logo,
  basket,
  footerLogo,
  single,
  single1,
  adminPhoto,
  upload,
  profile,
  bag,
  logout,
};

export const menu_list = [
  {
    drink_name: 'Jean',
    drink_image: drink_1,
  },
  {
    drink_name: 'Vodka',
    drink_image: drink_2,
  },
  {
    drink_name: 'Rum',
    drink_image: drink_3,
  },
  {
    drink_name: 'Tequila',
    drink_image: drink_4,
  },
  {
    drink_name: 'Whiskey',
    drink_image: drink_5,
  },
  {
    drink_name: 'Wine',
    drink_image: drink_6,
  },
  {
    drink_name: 'Champagne',
    drink_image: drink_7,
  },
  {
    drink_name: 'Beer',
    drink_image: drink_8,
  },
];

export const coctail_list = [
  {
    _id: '1',
    name: 'Negroni Cocktail',
    price: 10,
    image: negroni,
    description:
      'Easy to make and refreshingly bitter, the Negroni is said to have been invented in Florence by the dauntless Italian Count Camillo Negroni in the early 20th century',
    category: 'Jean',
    ingredients: [
      '1. 30 ml dry gin  ',
      ' 2.  30 ml κόκκινο γλυκό βερμούτ (π.χ Cocchi di Torino/Carpano antica formula/Cinzano 1757)',
      ' 3. 30 ml Campari bitter',
    ],

    servedAt: 'Old Fashioned ποτηρι',
    howToMake:
      'Για να φτιάξουμε το negroni, αναδεύουμε τα 3 συστατικά σε ένα μεγάλο γυάλινο δοχείο ανάδευσης (mixing glass) για περίπου 20 δευτερόλεπτα.',
  },
  {
    _id: '2',
    name: 'Mojito Cocktail',
    price: 9,
    image: mojito,
    description:
      'Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water. Play with the quantities to suit your taste.',
    category: 'Rum',
    ingredients:
      '30 ml dry gin,30 ml κόκκινο γλυκό βερμούτ (π.χ Cocchi di Torino/Carpano antica formula/Cinzano 1757),30 ml Campari bitter',
    servedAt: 'Old Fashioned ποτηρι',
    howToMake:
      'Για να φτιάξουμε το negroni, αναδεύουμε τα 3 συστατικά σε ένα μεγάλο γυάλινο δοχείο ανάδευσης (mixing glass) για περίπου 20 δευτερόλεπτα.',
  },
  {
    _id: '3',
    name: 'Margarita',
    price: 11,
    image: margarita,
    description: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a cocktail glas',
    category: 'Tequila',
    ingredients:
      '30 ml dry gin,30 ml κόκκινο γλυκό βερμούτ (π.χ Cocchi di Torino/Carpano antica formula/Cinzano 1757),30 ml Campari bitter',
    servedAt: 'Old Fashioned ποτηρι',
    howToMake:
      'Για να φτιάξουμε το negroni, αναδεύουμε τα 3 συστατικά σε ένα μεγάλο γυάλινο δοχείο ανάδευσης (mixing glass) για περίπου 20 δευτερόλεπτα.',
  },
  {
    _id: '4',
    name: 'Bloody Mary',
    price: 14,
    image: bloody,
    description: 'The classic brunch cocktail.',
    category: 'Vodka',
    ingredients:
      '30 ml dry gin,30 ml κόκκινο γλυκό βερμούτ (π.χ Cocchi di Torino/Carpano antica formula/Cinzano 1757),30 ml Campari bitter',
    servedAt: 'Old Fashioned ποτηρι',
    howToMake:
      'Για να φτιάξουμε το negroni, αναδεύουμε τα 3 συστατικά σε ένα μεγάλο γυάλινο δοχείο ανάδευσης (mixing glass) για περίπου 20 δευτερόλεπτα.',
  },
  {
    _id: '5',
    name: 'Whiskey Sour',
    price: 12,
    image: whiskeySour,
    description:
      'The whiskey sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white.',
    category: 'Whiskey',
    ingredients:
      '30 ml dry gin,30 ml κόκκινο γλυκό βερμούτ (π.χ Cocchi di Torino/Carpano antica formula/Cinzano 1757),30 ml Campari bitter',
    servedAt: 'Old Fashioned ποτηρι',
    howToMake:
      'Για να φτιάξουμε το negroni, αναδεύουμε τα 3 συστατικά σε ένα μεγάλο γυάλινο δοχείο ανάδευσης (mixing glass) για περίπου 20 δευτερόλεπτα.',
  },

  {
    _id: '6',
    name: 'Rhine Wine Cobbler',
    price: 12,
    image: rhinewine,
    description:
      'One-half wine glass of water, dissolved well with a spoon; 1½ wine glass of Rhine wine; fill the glass up with shaved ice; stir up well with a spoon; ornament with grapes, orange, pineapple, strawberries, in season; serve with a straw.',
    category: 'Wine',
    ingredients:
      '30 ml dry gin,30 ml κόκκινο γλυκό βερμούτ (π.χ Cocchi di Torino/Carpano antica formula/Cinzano 1757),30 ml Campari bitter',
    servedAt: 'Old Fashioned ποτηρι',
    howToMake:
      'Για να φτιάξουμε το negroni, αναδεύουμε τα 3 συστατικά σε ένα μεγάλο γυάλινο δοχείο ανάδευσης (mixing glass) για περίπου 20 δευτερόλεπτα.',
  },
  {
    _id: '7',
    name: 'Air Mail',
    price: 16,
    image: airmail,
    description: 'A supercharged Daiquiri made with honey and Champagne.',
    category: 'Champagne',
    ingredients:
      '30 ml dry gin,30 ml κόκκινο γλυκό βερμούτ (π.χ Cocchi di Torino/Carpano antica formula/Cinzano 1757),30 ml Campari bitter',
    servedAt: 'Old Fashioned ποτηρι',
    howToMake:
      'Για να φτιάξουμε το negroni, αναδεύουμε τα 3 συστατικά σε ένα μεγάλο γυάλινο δοχείο ανάδευσης (mixing glass) για περίπου 20 δευτερόλεπτα.',
  },
  {
    _id: '8',
    name: 'Beer on the Rocks',
    price: 8,
    image: beerontherocks,

    description:
      "Beer on the rocks is exactly what it sounds like – beer served over ice cubes. It's a simple but refreshing cocktail that you can customize to your liking.",
    category: 'Beer',
    ingredients:
      '30 ml dry gin,30 ml κόκκινο γλυκό βερμούτ (π.χ Cocchi di Torino/Carpano antica formula/Cinzano 1757),30 ml Campari bitter',
    servedAt: 'Old Fashioned ποτηρι',
    howToMake:
      'Για να φτιάξουμε το negroni, αναδεύουμε τα 3 συστατικά σε ένα μεγάλο γυάλινο δοχείο ανάδευσης (mixing glass) για περίπου 20 δευτερόλεπτα.',
  },
];
