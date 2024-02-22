export const dataURItoBlob = async dataURI => {
  const res = await fetch(dataURI);
  return await res.blob();
};

export const getRandomFromArray = array => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getTwitterLink = (text, url) => {
  return `https://twitter.com/intent/tweet/?text=${`${text} - Vote now at`}&url=${url}`;
};

export const getFacebookLink = url => {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
};

export const getWhatsappLink = (text, url) => {
  return `https://api.whatsapp.com/send?text=${`${text} - Vote now at ${url}`}`;
};

export const getPollLink = id => {
  return `${window.location.origin}/poll/${id}`;
};

export const getPollResultsLink = id => {
  return `${window.location.origin}/poll/results/${id}`;
};
