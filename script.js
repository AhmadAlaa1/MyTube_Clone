let server = new XMLHttpRequest();

server.open("GET","videos.json",true);

server.send();

server.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let videos = JSON.parse(this.responseText);
        let output = "";

        for(let item of videos){

            output +=`

            <div class="video">
                    <a  class="video-thumbnail" href="${item.link}">
                        <img class="img-1" src="${item.thumbnail}" alt="">
                        <span>${item.duration}</span>
                    </a>
                    <div class="video-container">
                        <a class="video-icon" href="${item.link}">
                        <img class="img-2" src="${item.channel_icon}" alt=""></a>
                        <a class="video-header" href="${item.link}">
                            <span>${item.title}</span>
                            <span>${item.channel_name} <img src="./icons/verified.png" alt=""></span>
                            <span>${item.views_since}</span>
                        </a>
                    </div>    
                </div>   
            
            `
        }
        document.querySelector(".container").innerHTML = output;
    }
}