export const isDev = window.location.href.indexOf('localhost:3000') >= 0;

export const demoImage = 'https://img.etimg.com/thumb/msid-68721417,width-643,imgsize-1016106,resizemode-4/nature1_gettyimages.jpg'

export const getImageSrc = id => isDev ? demoImage : `/image?id=${id}`;