$(document).ready(function(){

    [...document.querySelectorAll('.first-column')].map(column => {
    column.style.setProperty('--animation', 'slide');
    column.style.setProperty('height', '200%');
    column.innerHTML = column.innerHTML + column.innerHTML;
    });
    
    });