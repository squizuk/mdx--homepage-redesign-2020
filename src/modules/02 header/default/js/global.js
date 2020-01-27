import './slinky.min.js';

const navigation = () => {
    const options = {
        label: 'Back',
        speed: 200,
        resize: true,
        dragdrop: true,
        title: true,
        linkTitle: true
    };
    let menu = undefined;

    $(window).on('load resize', function () {
        if ($(window).width() < 1180) {
            if (!menu) {
                removeAllActiveStates();
                menu = $('#menu').slinky(options);
            }
        } else if (menu) {
            removeAllActiveStates();
            menu.destroy();
            menu = undefined;
        }
    });

    const menuButton = document.querySelector('.top-bar__hamburger');
    const menuList = document.querySelector('.top-bar__left-part');
    const menuButtonIcon = document.querySelector('.fa.fa-bars.hamburger-icon');
    const body = document.querySelector('body');
    const menuItemsSeconds = document.querySelectorAll('.header-menu__sub');
    const menuItemsThirds = document.querySelectorAll('.header-menu__third');
    const menuLinks = document.querySelectorAll('.header-menu__sub > .header-menu__item');
    const menuItems = document.querySelectorAll('.header-menu__item.hugemenu');

    const removeAllActiveStates = () => {
        menuLinks.forEach((link) => {
            link.classList.remove('active');
        })
    }

    const removeFocusedStates = () => {
        menuItems.forEach((item) => {
            item.classList.remove('focusin');
        })
    }

    menuItems.forEach((item) => {
        // item.addEventListener('focusin', () => {
        //     if ($(window).width() > 1180) {
        //         removeFocusedStates();
        //         item.classList.add('focusin');
        //     }
        // })
        item.addEventListener('keydown', (e, key) => {

            if ($(window).width() > 1180 && e.keyCode === 32) {
                e.preventDefault();
                const isActive = item.classList.contains('focusin');
                removeFocusedStates(item);
                isActive ? item.classList.remove('focusin') : item.classList.add('focusin');
            }

        })
        item.addEventListener('mouseleave', (e) => {

            if ($(window).width() > 1180) {
                removeFocusedStates(item);
                menuLinks.forEach((link) => {
                    removeFocusedStates(link);
                })
            }
        })
        // item.addEventListener('blur', () => {
        //     if ($(window).width() > 1180) {
        //         removeFocusedStates();
        //     }
        // })
    })

    menuLinks.forEach((link) => {
        link.addEventListener('focusin', () => {
            if ($(window).width() > 1180) {
                menuLinks.forEach((link) => {
                    link.classList.remove('focusin');
                });
                link.classList.add('focusin');
            }
        })
    })

    menuItemsSeconds.forEach((link) => {
        if (link.getElementsByTagName('li').length >= 8) {
            link.classList.add('list-long');
        }
    })
    menuItemsThirds.forEach((link) => {
        if (link.getElementsByTagName('li').length >= 8) {
            link.classList.add('list-long');
        }
    })
    menuLinks.forEach((link) => {
        if ($(window).width() > 1180) {
            const hasSubmenu = $(link).find('.header-menu__third').length > 0;

            if (hasSubmenu) {
                link.firstElementChild.insertAdjacentHTML('beforeend', '<i class="fa fa-chevron-right"></i>');
            }
        }

        // let test = setTimeout(() => {
        //     this.classList.add('active');
        //     menuItems.forEach((item) => {
        //         item.classList.remove('right-empty');
        //     });
        //     console.log('test 3')
        // }, 300);

        // let timer;

        link.addEventListener('mouseover', (yo) => {
            if ($(window).width() > 1180) {
                const hasSubmenu = $(link).find('.header-menu__third').length > 0;
                removeAllActiveStates();
                if (hasSubmenu) {
                    // timer = setTimeout(() => {
                    link.classList.add('active');
                    menuItems.forEach((item) => {
                        item.classList.remove('right-empty');
                    });
                    console.log('test 1');
                    // }, 300);

                } else {
                    menuItems.forEach((item) => {
                        item.classList.add('right-empty');
                    })
                }
            }
        });

        link.addEventListener('mouseleave', () => {
            link.classList.remove('focusin');
            $(link).find('a').blur();
            // if ($(window).width() > 1180) {
            //     // menuItems.forEach((item) => {
            //     // setTimeout(() => {
            // removeAllActiveStates();
            //     item.classList.add('right-empty');
            //     // }, 600);
            //     // })
            // }
            // clearTimeout(timer);
        })
    })

    menuButton.addEventListener('click', function (e) {
        e.preventDefault();
        menuList.classList.toggle('active');
        body.classList.toggle('menu-active');
        menuButtonIcon.classList.toggle('fa-bars');
        menuButtonIcon.classList.toggle('fa-times');
    }, false);
};

const searchBar = () => {
    const searchButton = document.querySelector('.top-bar__search');
    const bannerInput = document.querySelector('.hero-banner input');
    const searchScreen = document.querySelector('.search-screen');
    const closeButton = document.querySelector('.search-screen__top-close');
    const body = document.querySelector('body');

    const showSearch = () => {
        searchScreen.classList.add('active');
        body.classList.add('blurred');
        $(searchScreen).find('.tt-input').focus();
    }

    searchButton && searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        showSearch();
    });

    bannerInput && bannerInput.addEventListener('click', function (e) {
        e.preventDefault();
        // showSearch();
    });

    closeButton && closeButton.addEventListener('click', function (e) {
        e.preventDefault();
        searchScreen.classList.remove('active');
        body.classList.remove('blurred');
        $(searchScreen).find('.tt-input').val('');
    })
}

navigation();
searchBar();
