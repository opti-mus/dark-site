
function Tabs(outs,tabs) {
    tabs.forEach((el, inx, arr) => {
        el.onclick = function () {
            if (outs[inx]) {
                hideTabs(outs, arr);
                outs[inx].classList.add('show');
                el.classList.add('active');
            } else {
                el.classList.add('active');
                return;
            };

        }
    })
    function showDefaultOut() {
        tabs.forEach((el, inx) => {
            if (el.classList.contains('active')) {
                outs[inx].classList.add('show');
            }
        })
    }
    showDefaultOut()
    function hideTabs(out, tabs) {
        out.forEach((el) => {
            el.classList.remove('show');
        })
        tabs.forEach((el) => {
            el.classList.remove('active');
        })
    }
};
