    let doc = document;
    let root = doc.getElementById('root');
    drawPage(tanks);

    window.addEventListener('hashchange', function () {
        if (window.location.hash === '') {
            root.innerHTML = '';
            drawPage(tanks);
        } else {
            createDatails();
        }
    });

    function drawPage(element) {
        let header = doc.createElement('header');
        header.innerHTML = '<h1>Most popular tanks</h1>';
        root.appendChild(header);

        let mainContent = doc.createElement('main');
        mainContent.className = 'main_content';
        root.appendChild(mainContent);
        for (let i = 0; i < element.length; i++) {
            let tankCard = doc.createElement('article');
            tankCard.className = 'tank_card';
            tankCard.title = 'Click for preview';
            mainContent.appendChild(tankCard);
            tankCard.addEventListener('click', function () {
                window.location.hash = element[i].model;
            });

            let image = doc.createElement('img');
            image.className = 'tank_image';
            image.src = element[i].preview;
            image.alt = element[i].model;
            tankCard.appendChild(image);

            let brief = doc.createElement('div');
            brief.className = 'brief_info';
            tankCard.appendChild(brief);

            let flag = doc.createElement('img');
            flag.className = 'nation_flag';
            flag.src = element[i].country_image;
            flag.alt = element[i].country;
            flag.title = element[i].country;
            brief.appendChild(flag);

            let tankModel = doc.createElement('h3');
            tankModel.innerHTML = element[i].level + ' ' + element[i].model;
            tankModel.title = element[i].model;
            brief.appendChild(tankModel);
        }
    }

    function createDatails() {
        root.innerHTML = '';
        let tank = search(tanks);

        function search(element) {
            for (let i = 0; i < element.length; i++) {
                if ("#" + element[i].model === window.location.hash) {
                    return element[i];
                }
            }
        }
        let header = doc.createElement('header');
        header.className = ('header_tank_info')
        root.appendChild(header);

        let flag = doc.createElement('img');
        flag.className = 'nation_flag';
        flag.src = tank.country_image;
        flag.alt = tank.country;
        flag.title = tank.country;
        header.appendChild(flag);

        let h1 = doc.createElement('h1');
        h1.innerText = tank.model;
        header.appendChild(h1);

        let fuingSpan = doc.createElement('span');
        fuingSpan.innerHTML = ' (level ' + tank.level + ')';
        h1.appendChild(fuingSpan);

        let sectionDetails = doc.createElement('section');
        sectionDetails.className = ('tank_details');
        root.appendChild(sectionDetails);

        let preview = doc.createElement('section');
        preview.innerHTML = ('<h2> Preview </h2>');
        preview.className = ('tank_preview');
        sectionDetails.appendChild(preview);

        let image = doc.createElement('img');
        image.className = 'tank_image';
        image.src = tank.preview;
        image.alt = tank.model;
        preview.appendChild(image);

        let characteristics = doc.createElement('section');
        characteristics.className = "tank_char";
        characteristics.innerHTML = "<h2>Characteristic</h2>";
        sectionDetails.appendChild(characteristics);

        let back = doc.createElement('a');
        back.innerText = "Back to list view";
        back.className = ('button');
        back.title = ('back');
        back.addEventListener("click", function () {
            window.location.hash = ' ';
        });
        root.appendChild(back);

        let table = doc.createElement('table');
        for (let key in tank.details) {
            let tr = doc.createElement('tr');
            let tanksKey = doc.createElement('td');
            tanksKey.innerHTML = key;
            let tanksValue = doc.createElement('td');
            tanksValue.innerHTML = tank.details[key];
            tr.appendChild(tanksKey);
            tr.appendChild(tanksValue);
            table.appendChild(tr);
        }
        characteristics.appendChild(table);
    }