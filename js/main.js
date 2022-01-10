const workItems = document.querySelectorAll('.work .item');
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector('#close-button');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu-mobile-items');

openCloseButton.addEventListener('click', event =>{
    menuMobileItems.classList.toggle('menu-mobile-closed');
});


workItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        currentIndex = parseInt(item.getAttribute('data-id'));
        const contentArr = document.querySelectorAll('#details-container .item');

        document.querySelectorAll('#details-container .item').forEach(item =>{ item.classList.add('item-hide');})
        document.querySelectorAll('#details-container .item')[currentIndex].classList.toggle('item-hide');
        document.querySelector('#screen').style['animation-name'] = 'fade-in';
        document.querySelector('body').style['overflow'] = 'hidden';


        setTimeout(() => {
            document.querySelector('#details-container').style.display= 'block';

        }, 1000);

        setTimeout(() => {
            document.querySelector('#screen').style = '';

        }, 2000);
    })
});

closeButton.addEventListener('click', event =>{
    event.preventDefault();

    document.querySelector('#screen').style['animation-name'] = 'fade-in';
    document.querySelector('body').style['overflow'] = 'auto';


        setTimeout(() => {
            document.querySelector('#details-container').style.display= 'none';

        }, 1000);

        setTimeout(() => {
            document.querySelector('#screen').style = '';

        }, 2000);
});

prevButton.addEventListener('click', event =>{
    if(currentIndex - 1 < 0){
        return;
    }
    currentIndex--;
    loadGalleryItem(currentIndex);
});

nextButton.addEventListener('click', event =>{
    if(currentIndex + 1 == workItemsCount){
        return;
    }
    currentIndex++;
    loadGalleryItem(currentIndex);
});

function loadGalleryItem(index){
    const items = document.querySelectorAll('#details-container .item');
    items.forEach(item => { item.classList.add('item-hide')});
    items[index].classList.toggle('item-hide');
}
$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop:'0px'
        }, 300);
    }); 

    $(window).scroll(function(){
        if ($(this).scrollTop() > 0){
            $('.ir-arriba').slideDown(500);
        }else{
            $('.ir-arriba').slideUp(300);

        }
    });

});