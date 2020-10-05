const tabsOut = document.querySelectorAll('.tab-out');
const tabs = document.querySelectorAll('.tab');

Tabs(tabsOut, tabs);

document.addEventListener('click', (e) => {
    const menu = document.querySelector('.header-menu')
    const bars = document.querySelector('.header-bars');
    const signIn = document.querySelector('.sign-in');
    const signUp = document.querySelector('.sign-up');
    const signWrapper = document.querySelector('.sign-wrapper');

    if (e.target.dataset.menu) {

        bars.classList.toggle('open');
        menu.classList.toggle('open');
        menu.querySelectorAll('.sign').forEach(el => {
            el.onclick = function (e) {
                switch (this.dataset.sign) {
                    case 'in':
                        e.preventDefault();
                        menu.classList.remove('open');
                        bars.classList.remove('open');
                        signWrapper.classList.add('in');
                        signWrapper.classList.remove('up');
                        break;
                    case 'up':
                        e.preventDefault();
                        menu.classList.remove('open');
                        bars.classList.remove('open');
                        signWrapper.classList.add('up');
                        signWrapper.classList.remove('in');
                        break;
                }
            }

        })

    } else if (e.target.classList.contains('sign-wrapper')) {
        e.target.classList.remove('up')
        e.target.classList.remove('in')
    }
})

function closeMenu(e, menu, signWrap, sign) {
    e.preventDefault();
    menu.classList.remove('open');
    signWrap.style.display = 'block';
    sign.style.display = 'block';
}