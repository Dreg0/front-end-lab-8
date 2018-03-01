var doc = document;
var root = doc.getElementById('root');


createBodyPage(tanks);

function createBodyPage(element) {
    var header = doc.createElement('header');
    header.innerHTML = '<h1>Most popular tanks</h1>';
    root.appendChild(header);

    var main = doc.createElement('main');
    main.className = "main_content";
    root.appendChild(main);
    for (var i = 0; i < element.length; i++) {
        var tankInfo = doc.createElement('article');
        tankInfo.className = 'tank_info_card';
        tankInfo.addEventListener('click', function () {
            console.log("tank_box_info click");
        });
        main.appendChild(tankInfo);
    }
}


