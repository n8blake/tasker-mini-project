function storage(array) {
    localStorage.setItem("storage",JSON.stringify(array));
}

function getstorage() {
    var st = localStorage.getItem("storage");
    return JSON.parse(st);
}