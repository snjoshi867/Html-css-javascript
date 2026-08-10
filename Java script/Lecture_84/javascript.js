console.log("Hey ")

async function getsong() {
    let a = await fetch("http://127.0.0.1:5501/songs/")
    let response = await a.text()
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    console.log(as)
    let songs = [ ]
    for(let i=0; i< as.length;i++){
        const element = as[i]
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

async function main(){
        let songs = await getsong()
        console.log(songs)

        let songul = document.querySelector(".song-list").getElementsByTagName("ul")[0]
        for (const song of songs) {
            songul.innerHTML += `                        <li>
                            <img src="img/music.svg" alt="" class="invert">
                            <div class="info">
                                <div>${song
                  .replaceAll("%20", " ")
                  .replace(".mp3", "")}</div>
                                <div>Song Artist</div>
                            </div>
                            <div class="playnow">
                                <span></span>
                                <img src="img/play.svg" alt="" class="invert">
                            </div>
                      
            
            </li>`;
}

        var audio = new Audio("songs/" + songs[0])
        audio.addEventListener("loadedmetadata", () => {
        console.log(formatTime(audio.duration));
        });
        audio.play()
}

main()