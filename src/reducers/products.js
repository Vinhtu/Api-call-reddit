var news = [
  {
    title: 'bai viet 1',
    id: 19101,
    status: true,
  },
  {
    title: 'bai viet 2',
    id: 44501,
    status: true,
  },
  {
    title: 'bai viet 3',
    id: 17701,
    status: true,
  },
];

const products = (state = news, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
