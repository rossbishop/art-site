const apiCall = 
[
  {
    id: 0,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name1',
    description: 'desc1',
    comments: [
      { id: 1, shortcomment: 'ONE!', username: 'Beff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'ONE!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'ONE!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  }, 
  {
    id: 1,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name2',
    description: 'desc2',
    comments: [
      { id: 1, shortcomment: 'TWO!', username: 'Jeff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'TWO!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'TWO!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  },
  {
    id: 2,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name3',
    description: 'desc3',
    comments: [
      { id: 1, shortcomment: 'THREE!', username: 'Jeff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'THREE!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'THREE!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  },
  {
    id: 3,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name4',
    description: 'desc4',
    comments: [
      { id: 1, shortcomment: 'Wow!', username: 'Jeff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'Wat!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'Rabbish!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  },
  {
    id: 4,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name5',
    description: 'desc5',
    comments: [
      { id: 1, shortcomment: 'Wow!', username: 'Jeff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'Wat!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'Rabbish!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  },
  {
    id: 5,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name6',
    description: 'desc6',
    comments: [
      { id: 1, shortcomment: 'Wow!', username: 'Jeff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'Wat!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'Rabbish!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  },
   {
    id: 6,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name7',
    description: 'desc7',
    comments: [
      { id: 1, shortcomment: 'Wow!', username: 'Jeff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'Wat!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'Rabbish!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  },
  {
    id: 7,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name8',
    description: 'desc8',
    comments: [
      { id: 1, shortcomment: 'Eight!', username: 'Jeff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'Eight!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'Eight!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  },
  {
    id: 8,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name9',
    description: 'desc9',
    comments: [
      { id: 1, shortcomment: 'Nine!', username: 'Jeff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'Nine!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'Nine!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  },
  {
    id: 9,
    imgSrc: 'https://s.abcnews.com/images/International/GTY_putin_shirtless_horse_sk_140402_4x3_992.jpg',
    name: 'name10',
    description: 'desc10',
    comments: [
      { id: 1, shortcomment: 'Ten!!', username: 'Jeff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Manamajeb...' },
      { id: 2, shortcomment: 'Ten!!?', username: 'Sneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'Wooptie doo Basil!' },
      { id: 3, shortcomment: 'Ten!!!!!', username: 'Pneff', time: '10:01', date: '01/05/2020', likes: 10, comment: 'UUUNF' },
    ]
  },
]

export default apiCall