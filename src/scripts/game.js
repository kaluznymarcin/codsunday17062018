(function () {
    let score = 0;
    const gameElement = document.createElement("div");
    const panelElement = document.createElement("div");
    const arenaElement = document.createElement("div");

    const moleElement = document.createElement("div");

    let timeUID = null;

    arenaElement.addEventListener(
        "click",
        function (e) {
            const element = e.target;
            e.stopPropagation();

            if (moleElement === element) {
                score += 1;
                panelElement.innerHTML = score;
                showMole();
            }
        },
        false
    );

    showMole();
    panelElement.innerHTML = score;

    gameElement.classList.add("game");
    panelElement.classList.add("panel");
    arenaElement.classList.add("arena");
    moleElement.classList.add("mole");

    gameElement.appendChild(panelElement);
    gameElement.insertAdjacentElement(
        "beforeEnd",
        arenaElement
    );

    const list = Math.floor(Math.random() * 10);

    arenaElement.appendChild(moleElement);

    document.body.appendChild(gameElement);

    function changePosition() {
        moleElement.style.top = `${Math.floor(Math.random() * 10) * 50}px`;
        moleElement.style.left = (Math.floor(Math.random() * 10) * 50 + "px");
    }

    function showMole() {
        clearInterval(timeUID);
        changePosition()
        timeUID = setInterval(changePosition, 1 * 30 * 1000);
    }
}());
