(function () {
    const moduleContainer =
        document.createElement("div");

    moduleContainer.classList.add("modul");

    moduleContainer.innerHTML = `<div class="content">
    <div role="tabpanel" id="panel-1" hidden>
        <h3>Panel 1</h3>
    </div>
    <div role="tabpanel" id="panel-2" hidden>
        <h3>Panel 2</h3>
    </div>
    <div role="tabpanel" id="panel-3" hidden>
        <h3>Panel 3</h3>
    </div>
</div>
<form action="" method="get">
    <ul role="tablist" class="tablist">
        <li role="tab" aria-controls="panel-1" class="tablist__item">
            <input type="radio" name="tablist.0" value="panel-1" id="p-1">
            <label for="p-1"></label>
        </li>
        <li role="tab" aria-controls="panel-2" class="tablist__item">
            <input type="radio" name="tablist.0" value="panel-2" id="p-2">
            <label for="p-2"></label>
        </li>
        <li role="tab" aria-controls="panel-3" class="tablist__item">
            <input type="radio" name="tablist.0" value="panel-3" id="p-3">
            <label for="p-3"></label>
        </li>
    </ul>
</form>`;

    console.log(moduleContainer);
}());
