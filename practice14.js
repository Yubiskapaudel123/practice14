function Toggle() {
    // alert("abc")
    const sidebar = document.getElementById("sidebar");
    console.log(sidebar.style.display)

    // if (sidebar.style.display === "flex") {
    //     sidebar.style.display = 'none'
    // } else {
    //     sidebar.style.display = "flex"
    // }
    if (sidebar.style.transform === "translateX(0%)") {
        sidebar.style.transform = 'translateX(150%)'
    } else {
        sidebar.style.transform = "translateX(0%)"
    }


}

let i = 0,
    text;
text = "do what you want"

function typing() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;

    }
}
setInterval(typing, 200);