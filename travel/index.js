'use strict';
document.querySelector('.preview__search').classList.toggle('ind');

document.querySelector('.burger').addEventListener('click', () => {
    function openMenu(){
        document.querySelector('.preview__search').classList.remove('ind');
        document.querySelector('.navigation__list').classList.toggle('navigation--burger');
        document.querySelector('.navigation--burger').classList.remove('navigation__list');
    }
    openMenu();
    
});   

document.querySelector('.burger-close').addEventListener('click', () => {
    function closeMenu(){
        document.querySelector('.preview__search').classList.toggle('ind');
        document.querySelector('.navigation--burger').classList.toggle('navigation__list');
        document.querySelector('.navigation__list').classList.remove('navigation--burger');
    }
    closeMenu();
});




function closeNav(){
    document.querySelectorAll('.navigation__item').forEach( el => {
        el.addEventListener('click', () => {
            setTimeout(() => {
                document.querySelector('.preview__search').classList.toggle('ind');
                document.querySelector('.navigation--burger').classList.toggle('navigation__list');
                document.querySelector('.navigation__list').classList.remove('navigation--burger');
            }, 200);
        });
    });
}
closeNav();

function test() {
    window.addEventListener('click', e => { 
    if (document.querySelector('.navigation--burger')) {
        const target = e.target;
        if (!target.closest('.navigation--burger') && !target.closest('.burger')) {
            document.querySelector('.preview__search').classList.toggle('ind');
            document.querySelector('.navigation--burger').classList.toggle('navigation__list');
            document.querySelector('.navigation__list').classList.remove('navigation--burger');
        }
    }});
}
test();


document.querySelector('.descriptions__button').addEventListener('click', () => {
    function levSlide() {
    let element = document.querySelectorAll('.slider__item');
    element.forEach(e => {
        e.style.transition =  '2s';
        e.style.transform =  'translateX(calc(-100% - 3.8em))';
    });
    }
    levSlide();
});


(function(){
    let d= document;
    let index = 1;


    let Slider = function() {
        this.items = d.querySelectorAll('.item');
        this.box = d.querySelector('.box');
        this.slider = d.querySelector('.slider');
        this.prev = d.getElementById('prev');
        this.next = d.getElementById('next');
        this.size = this.slider.clientWidth;
        this.gap = 60;
        this.position();
        this.nextClick();
        this.prevClick();

    };


    Slider.prototype.position = function(){
        this.slider.style.transform = `translateX(${(-index * this.size * 2 ) + (-this.gap * 2)}px)`;
        index++;
    };

    Slider.prototype.nextClick = function(){
        this.next.addEventListener('click', () => {
            this.goRight();
        });
    };

    Slider.prototype.prevClick = function(){
        this.prev.addEventListener('click', () => {
            this.goLeft();
        });
    };
    
    Slider.prototype.jump = function(){
        this.slider.addEventListener('transitionend', () => {
            this.items[index].id === 'firstSlide' ? index = 1 : index;
            this.items[index].id === 'lastSlide' ? index = (this.items.length - 3) : index;
            this.slider.style.transition = 'none';
            this.slider.style.transform = `translateX(${(-index * this.size) + (-index * this.gap)}px)`;
        });
    };



    Slider.prototype.goLeft = function(){
        this.slider.style.transition = 'transform .5s ease-in-out';
        index <= 0 ? false: index--;
        this.slider.style.transform = `translateX(${(-index * this.size) + (-index * this.gap)}px)`;
        this.slider.addEventListener('transitionend', () => {
            this.items[index].id === 'lastSlide' ? index = (this.items.length - 3) : index;
            this.items[index].id === 'off' ? index = (this.items.length - 4) : index;
            this.slider.style.transition = 'none';
            this.slider.style.transform = `translateX(${(-index * this.size) + (-index * this.gap)}px)`;
        });
 
    };

    Slider.prototype.goRight = function(){
        this.slider.style.transition = 'transform .5s ease-in-out';
        index >= this.items.length - 2 ? false : index++;
        this.slider.style.transform = `translateX(${(-index * this.size) + (-index * this.gap)}px)`;
        this.slider.addEventListener('transitionend', () => {
            this.items[index].id === 'firstSlide' ? index = 2 : index;
            this.items[index].id === 'on' ? index = 3 : index;
            this.slider.style.transition = 'none';
            this.slider.style.transform = `translateX(${(-index * this.size) + (-index * this.gap)}px)`;
        });

    };

    new Slider();
})();


