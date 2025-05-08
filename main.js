let holder = document.querySelector('.holder');


creatBoxes(data);


function creatBoxes(dataz) {
  
  holder.innerHTML = ``;

dataz.forEach(info => {
  
  let artistsf = info.artist;
  if (!info.subArtist == ``) {
    artistsf = info.artist + ' & ' + info.subArtist;
  }
  
  holder.innerHTML += `
        <div class="box">
          <img class="box-bg" src="${info.art}" alt="${info.name} Cover" />
    
          <div class="content">
            <h1 class="title">${info.name}</h1>
            <p class="more"><span class="artist">${info.artist}</span><span class="pbdate">${info.publishDate}</span></p>
          </div>
          
          <div class="details">
            <h1 class="title">${info.name}</h1>
            <h2 class="artists">${artistsf}</h2>
            <h3 class="genre">Genre - ${info.genre}</h3>
            <h3 class="moode">Feel - ${info.mood}</h3>
            <h3 class="publish-date">${info.publishDate}</h3>
            <p class="links">
            <a href="${info.artwork}" class="artwork">Artwork</a>
            <a href="${info.art}" class="art">Art</a>
            <a href="${info.arLnk}" class="sors">Source</a>
            <a href="${info.pbLnk}" class="con-link">Link</a>
            </p>
            <p class="channel">Loved by - ${info.channel}</p>
          </div>
          
        </div>
    `
});
}


  
