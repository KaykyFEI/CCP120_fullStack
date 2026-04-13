function repete(){
    let num = parseInt(document.getElementById("numero").value)

    for (let index = 1; index <= num; index++){
        alert(num + index)
    }
}