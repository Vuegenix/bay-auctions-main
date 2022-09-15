import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Swakopmund', 'Walvisbay'];
  res.send(categories);
});

export default handler;
