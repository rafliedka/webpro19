function rubahwarna(){
    let suffle = Math.round(Math.random()*3)
    let colors = ["cyan", "green", "yellow", "grey"]
    console.log("suffle numbers" +suffle)
    console.log("get color" +colors[suffle])

    document.getElementById("id1").style="background-color:"+colors[suffle]
}