console.log("1")
console.log("2")

function getData(){

    setTimeout(() => {
        console.log("3");
    }, 3000);
}
function main(){
    console.log("Inside main");

}

getData();
main();
console.log("4");