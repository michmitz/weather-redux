export const getGif = (imgCode) => {
  const thunder = [200, 201, 202, 232, 233];
  const lightThunder = [230, 231];
  const drizzle = [300, 301, 302, 500, 520];
  const heavyRain = [501, 502, 522, 900];
  const sleet = [511, 610, 611, 612];
  const sunShower = [521];
  const sunSnow = [600, 621];
  const snow = [601];
  const snowStorm = [602, 622];
  const flurries = [623, 751];
  const fog = [700, 741];
  const dust = [711, 731];
  const haze = [721];
  const clearSky = [800];
  const partlyCloudy = [801, 802];
  const mostlyCloudy = [803];
  const overcast = [804];

  if(thunder.includes(imgCode)) {
    return 'thunderstorm.gif';
  } else if(lightThunder.includes(imgCode)) {
    return 'thunder-lightning.gif';
  } else if(drizzle.includes(imgCode)) {
    return 'drizzle.gif';
  } else if(heavyRain.includes(imgCode)) {
    return 'rainshower.gif';
  } else if(sleet.includes(imgCode)) {
    return 'sleet.gif';
  } else if(sunShower.includes(imgCode)) {
    return 'sunshower.gif';
  } else if(sunSnow.includes(imgCode)) {
    return 'sun-snow.gif';
  } else if(snow.includes(imgCode)) {
    return 'snow.gif';
  } else if(snowStorm.includes(imgCode)) {
    return 'snowstorm.gif';
  } else if(flurries.includes(imgCode)) {
    return 'blizzard.gif';
  } else if(fog.includes(imgCode)) {
    return 'fog.gif';
  } else if(dust.includes(imgCode)) {
    return 'dust.gif';
  } else if(haze.includes(imgCode)) {
    return 'haze.gif';
  } else if(clearSky.includes(imgCode)) {
    return 'sunny.gif';
  } else if(partlyCloudy.includes(imgCode)) {
    return 'partly-cloudy.gif';
  } else if(mostlyCloudy.includes(imgCode)) {
    return 'mostly-cloudy.gif';
  } else if(overcast.includes(imgCode)) {
    return 'overcast.gif';
  } else return 'rainbow.gif';
                      
};
