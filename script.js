document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector("#contact");
    const groupBtn = document.querySelector("#group");
    const contactCard = document.querySelector('#contacts');
    const groupCard = document.querySelector('.group__container');

    contactBtn.addEventListener('click', () => {
        contactCard.style.display = 'block';
        groupCard.style.display = 'none';
    });

    groupBtn.addEventListener('click', () => {
        contactCard.style.display = 'none';
        groupCard.style.display = 'block';
    });
});
