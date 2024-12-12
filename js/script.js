const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');
const logo = document.querySelector('.logo');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');

        all_content.forEach(content => { content.classList.remove('active') });
        all_content[index].classList.add('active');
    });
});

logo.addEventListener('click', () => {
    tabs.forEach(tab => { tab.classList.remove('active') });
    tabs[0].classList.add('active');


    all_content.forEach(content => { content.classList.remove('active') });
    all_content[0].classList.add('active');
})
