let obj=[{
            
    Image:"https://pic-bstarstatic.akamaized.net/ugc/02f4112b12a97c5e66842a64c7eda8da.jpg@1200w_630h_1e_1c_1f.webp",
},
{
    Image:"https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/02/17/Nithiin-and-Rashmika-Mandanna-s-Bheeshma-Movie-HD-posters--scaled.jpg?quality=80&zoom=1&ssl=1",
},
{
    Image:"https://wallpaperaccess.com/full/1076854.jpg",
},
{
    Image:"https://images.indianexpress.com/2021/01/10-Laal-Singh-Chaddha.jpg",
},
{
    Image:"https://wallpapercave.com/wp/wp5435701.jpg",
},
];
localStorage.setItem("images",JSON.stringify(obj))
let slideshow = document.querySelector("#slideshow")
function disp(dat){
    slideshow.innerHTML=null;
    dat.forEach(function(ele){
      let image = document.createElement("img")
      //image.setAttribute("id","box")
      image.src = ele.Image;

      //console.log(image)
      slideshow.append(image)
      image.append()  
    }) 
}
disp(obj)


let slideIn=0
slide()
function slide(){
let i;
let x = document.getElementsByTagName("img")
for(i=0;i < 5;i++){
    x[i].style.display = "none";
}
slideIn++;
if(slideIn > 5) {slideIn=1}
x[slideIn-1].style.display = "block"
setTimeout(slide,2000);
}




let movies = [

 {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNI4BgWhdM7RK7h0OqM2L_ZUWq-rheOJMyQ&usqp=CAU",
 catagory:"Tollywood Movie",
},
{img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/04/2142437-jawan-1.jpg",
 catagory:"Trending Movie",
},
 {
    img: "https://static.toiimg.com/photo/msid-87764206/87764206.jpg",
    catagoryT:"Trending Movie",
    catagory:"Bollywood Movie",
 },
 {
    img: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SY345_CR13,0,233,345_AL_.jpg",
    catagoryT:"Trending Movie",
    catagory:"Tollywood Movie",
 },
 {
    img: "https://timesofindia.indiatimes.com/thumb.cms?msid=88290625&width=137&height=195",
    catagory:"Hollywood Movie",
 },
 {
    img: "https://igimages.gumlet.io/telugu/home/konerusathya07022022_2c.jpg?w=376&dpr=2.6",
    catagory:"Tollywood Movie",
 },
 {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjcB-0AZV-2DxiHjby2e-tKPApd9w4j1lKziQO-soDP6H3yRd0GfQE1Ef0vdv96DFyhg&usqp=CAU",
    catagory:"Tollywood Movie",
 },
 {
    img: "https://media-cache.cinematerial.com/p/500x/dsvy6efk/rang-rasiya-indian-movie-poster.jpg?v=1456356486",
    catagory:"Bollywood Movie",
 },
 {
    img: "https://qph.cf2.quoracdn.net/main-qimg-0a970c83ce12b94a8c0a9effb8d9536f-lq",
    catagory:"Bollywood Movie",
 },
 {
    img: "https://qph.cf2.quoracdn.net/main-qimg-0a970c83ce12b94a8c0a9effb8d9536f-lq",
    catagory:"Hollywood Movie",
 },
 {
    img:"https://www.tollywood.net/wp-content/uploads/2022/06/Vikram-movies-tentative-OTT-release-date.jpg",
    catagory: "Tollywood",
    catagoryT:"Trending Movie",
 },
 {
    img: "https://wallpapercave.com/wp/wp5435701.jpg",
    catagory: "Hollywood",
    catagoryT:"Trending Movie",
 }
]

localStorage.setItem("Movie",JSON.stringify(movies))

let mov = document.querySelector("#movies")

function display(data){
mov.innerHTML = null;

data.forEach(function(element) {
    //console.log(element)
    var card = document.createElement("div")
    var img = document.createElement("img")
    img.src = element.img;
    mov.append(card)
    card.append(img)
});

}
display(movies)


function change(){
let select = document.querySelector("#sort").value;
if(select == 'none'){
movies.sort(function(a,b){
    return movies
})
display(movies)
}
if(select == 'Trending Movie'){
movies.sort(function(a,b){
    return movies.catagoryT
})
display(movies)
}
}
