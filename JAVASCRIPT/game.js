let favorite_movie="Avatar"
let guess=prompt("guess my favorite movie name")
while((guess != favorite_movie) && (guess!= 'quit')){
    console.log("wrong guess");
    guess=prompt("next guess right movie name")
}
if(guess==favorite_movie){
    console.log("congrats!");
}
else{
    console.log("guit");
}