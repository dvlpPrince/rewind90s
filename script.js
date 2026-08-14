const songs=[

"Pehla Nasha",

"Tujhe Dekha To",

"Dheere Dheere Se",

"Ek Ladki Ko Dekha",

"Do Dil Mil Rahe Hain",

"Tum Mile Dil Khile",

"Dil Hai Ke Manta Nahin",

"Saanson Ki Zarurat Hai",

"Mera Dil Bhi Kitna Pagal Hai",

"Jab Koi Baat Bigad Jaye"

];

const list=document.querySelector(".song-list");

songs.forEach((song,index)=>{

list.innerHTML+=`

<div class="song">

<div>

<h4>${index+1}. ${song}</h4>

</div>

<button>

<i class="fa-solid fa-play"></i>

</button>

</div>

`;

});
