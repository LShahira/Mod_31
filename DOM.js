document.getElementById('add-border').addEventListener('click', function(){
    //console.log("border clicked");
    const container= document.getElementById("friend-container");
    container.style.border= '3px solid black';

})
function addBackgroundColor(){
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends){
        friend.style.backgroundColor= "lightblue";
    }
}
