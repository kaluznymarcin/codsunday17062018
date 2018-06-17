(function () {
    let score = 0;
    let timeUID = null;

    const gameElement = document.createElement("div");
    const panelElement = document.createElement("div");
    const arenaElement = document.createElement("div");
    const moleElement = document.createElement("div");

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
    //panelElement.innerHTML = score;

    gameElement.classList.add("game");
    panelElement.classList.add("panel");
    arenaElement.classList.add("arena");
    moleElement.classList.add("mole");

    gameElement.appendChild(panelElement);
    gameElement.insertAdjacentElement(
        "beforeEnd",
        arenaElement
    );

    const resetButtonElement = document.createElement("a");
    resetButtonElement.innerHTML = "reset";
    resetButtonElement.setAttribute("role", "button");
    resetButtonElement.setAttribute("href", "http://codeme.pl");

    resetButtonElement.addEventListener("click", function (e) {
        e.stopPropagation();
        e.preventDefault();

        score = 0;
        showMole();
    }, false)


    panelElement.appendChild(resetButtonElement);
    arenaElement.appendChild(moleElement);

    showMole();

    document.body.appendChild(gameElement);

    function changePosition() {
        Object.assign(
            moleElement.style, {
                top: `${Math.floor(Math.random() * 10) * 50}px`,
                left: `${Math.floor(Math.random() * 10) * 50}px`
            }
        );
    }

    function showMole() {
        clearInterval(timeUID);
        changePosition()
        timeUID = setInterval(changePosition, 1 * 30 * 1000);
    }
}());
