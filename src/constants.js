// src/constants/constants.js

export const NOTIFICATION_TEXT = {
    welcomeMessage: "Welcome to our website!",
    updateMessage: "We have updated our terms and conditions.",
    promotionMessage: "UV blocking, blue light blocking, anti fog and 360 degree medical grade protection for your eyes.",
  };
  
  // menu constants

export const menuItems = [
    {
      id: 1,
      name: 'Home',
      link: '/'
    },
    {
      id: 2,
      name: 'About',
      link: '/About'
    },
    {
      id: 3,
      name: 'Products',
      link: '/Products'
    },
    {
      id: 4,
      name: 'News',
      link: '/News'
    },
    {
      id: 5,
      name: 'Contact',
      link: '/Contact'
    }
  ];  
  
  export const BUTTON_TEXTS = {
    submit: "Submit",
    cancel: "Cancel",
    learnMore: "Learn More",
    shopNow: 'Shop Now'
  };

  export const productsData = [
    {
        id: 1,
        productLink: '/product/1',
        defaultImage: '../src/assets/bd_boggles_blue.png',
        hoverImage: '../src/assets/bd_boggles_blue_hover.png',
        title: 'BD Boggle Blue',
        price: 'from £1000.00',
        badgeColor: '#4D92AD',
    },
    {
        id: 2,
        productLink: '/product/2',
        defaultImage: '../src/assets/bd_boggles_clear.png',
        hoverImage: '../src/assets/bd_boggles_clear_hover.png',
        title: 'BD Boggle Clear',
        price: 'from £1000.00',
        badgeColor: '#ccc',
    },
    {
        id: 3,
        productLink: '/product/3',
        defaultImage: '../src/assets/bd_boggles_purple.png',
        hoverImage: '../src/assets/bd_boggles_purple_hover.png',
        title: 'BD Boggle Purple',
        price: 'from £1000.00',
        badgeColor: '#9B8FAB',
    },
    {
        id: 4,
        productLink: '/product/4',
        defaultImage: '../src/assets/bd_boggles_pink.png',
        hoverImage: '../src/assets/bd_boggles_pink_hover.png',
        title: 'BD Boggle Pink',
        price: 'from £1000.00',
        badgeColor: '#E8C6CB',
    },
    {
        id: 5,
        productLink: '/product/5',
        defaultImage: '../src/assets/bd_boggles_black.png',
        hoverImage: '../src/assets/bd_boggles_black_hover.png',
        title: 'BD Boggle Black',
        price: 'from £1000.00',
        badgeColor: '#414442',
    },
    {
        id: 6,
        productLink: '/product/6',
        defaultImage: '../src/assets/bd_boggles_aqua.png',
        hoverImage: '../src/assets/bd_boggles_aqua_hover.png',
        title: 'BD Boggle Aqua Blue',
        price: 'from £1000.00',
        badgeColor: '#78AF9E',
    },
    {
        id: 7,
        productLink: '/product/7',
        defaultImage: '../src/assets/bd_boggles_grey.png',
        hoverImage: '../src/assets/bd_boggles_grey_hover.png',
        title: 'BD Boggle Grey',
        price: 'from £1000.00',
        badgeColor: '#868686',
    },
    // Add more products as needed...
  ];
  
  export const caseColors = [
    { color: '#E8C6CB', image: '../src/assets/bd_case_pink.png' },
    { color: '#111111', image: '../src/assets/bd_case_black.png' },
    { color: '#4D92AD', image: '../src/assets/bd_case_blue.png' },
    { color: '#868686', image: '../src/assets/bd_case_black.png' },
    { color: '#78AF9E', image: '../src/assets/bd_case_aqua.png' },
    { color: '#cccccc', image: '../src/assets/bd_case_clear.png' },
    { color: '#9B8FAB', image: '../src/assets/bd_case_purple.png' },
  ];