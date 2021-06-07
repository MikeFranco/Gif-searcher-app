export const getGifs = async (category) => {
  const apiKey = 'dy1O6jW1aHRdpkSnFo9jXc6iqicizloS';
  const getUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
  const resp = await fetch(getUrl);
  const { data } = await resp.json();

  const newGifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }));

  return newGifs;
};