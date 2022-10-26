// Uroki RT @ 2020/10/25

document.querySelectorAll("button").forEach((E) => {
    E.onmousemove = (e) => {
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
});