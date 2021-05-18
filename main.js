var names = ["Anithaa", "Lakshmana Dass", "Harish Sai"]; 
var imgs = ["mommmmm.jpg", "super man daddy.jpg", "me.jpg"];

    i = 0;

function nexslide() {
document.getElementById("album").innerHTML = names[i];
document.getElementById("img").src = imgs[i]; 
i++;
if (i==3){
i = 0;

}
}





