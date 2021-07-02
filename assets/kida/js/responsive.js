var mql = window.matchMedia('(max-width: 678px)');

function screenTest(e) {
    if (e.matches) {
//        document.body.style.backgroundColor = 'red';
        logoHeightExpand = 10;
    } else {
//        document.body.style.backgroundColor = 'blue';
        logoHeightExpand = 60;
    }
}

screenTest(mql);
mql.addListener(screenTest);
