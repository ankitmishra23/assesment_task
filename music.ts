class playlist{
    playlist_name:string;
    constructor(name:string)
    {
        this.playlist_name=name;
    }
    getplaylistname()
    {
        return this.playlist_name;
    }
}

const addplaylist=document.querySelector("#playlist") as HTMLDivElement;
addplaylist.addEventListener('click',function()
{
    const input=document.createElement('input');
    const button=document.createElement('button');

    
});


function myFunctionP1() {
    const prev=document.getElementById('audio_button') as HTMLAudioElement;
    
    prev.src = "DJ_JOKER_REMIX(256k).mp3";
  }
  
  function myFunctionP2() {
      const next=document.getElementById('audio_button') as HTMLAudioElement;
      next.src = "01 - How You Like That.mp3";
  }

  function myFunctionP3() {
    const play=document.getElementById('audio_button') as HTMLAudioElement;
    play.src = "BTS - Fake Love.mp3";
  }


  function myplaylist()
  {
      const val=(document.getElementById("input") as HTMLInputElement).value;
      const h4=document.createElement('h4');
      h4.innerText=val;
      const li=document.querySelector("#playlisttag") as HTMLUListElement
      li.append(h4);

  }
  
  function ratingcalculate()
  {
      const rate=(document.getElementById("styleselect") as HTMLSelectElement).value;
      const comment=(document.getElementById("inputcomment") as HTMLInputElement).value;
      const h4=document.createElement('h4');
      h4.innerText="rating:"+rate+"/5";
      const anotherh4=(document.createElement('h4'));
      anotherh4.innerText='"'+comment+'".';
      const li=document.querySelector("#commentlist") as HTMLUListElement;
      li.append(h4);
      li.append(anotherh4);
  }