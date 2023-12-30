console.log("started");
document.getElementById('btn').onclick = function(){
    const a = Math.floor(Math.random()*100);

    document.getElementById('res').innerHTML="Random Number: " + a ;
}