//دا يخص حركه انيمشين علوم البيانات
const lottiePlayerds = document.getElementById('lottie-animation-ds');
const hoverTriggerds = document.getElementById('hover-trigger-ds');

if (lottiePlayerds && hoverTriggerds) {
    lottiePlayerds.pause();
    
    hoverTriggerds.addEventListener('mouseover', () => {
        lottiePlayerds.play();
    });

    hoverTriggerds.addEventListener('mouseout', () => {
        lottiePlayerds.pause();
    });
}
//دا يخص حركه الانيميشن الملتي ميديا
const lottiePlayermm = document.getElementById('lottie-animation-mm');
const hoverTriggermm = document.getElementById('hover-trigger-mm');

if (lottiePlayermm && hoverTriggermm) {
    lottiePlayermm.pause();

    hoverTriggermm.addEventListener('mouseover', () => {
        lottiePlayermm.play();
    });

    hoverTriggermm.addEventListener('mouseout', () => {
        lottiePlayermm.pause();
    });
}
//دا يخص انيميشن الروبوتيكس
const lottiePlayerro = document.getElementById('lottie-animation-ro');
const hoverTriggerro = document.getElementById('hover-trigger-ro');
if (lottiePlayerro && hoverTriggerro) {
    lottiePlayerro.pause();

    hoverTriggerro.addEventListener('mouseover', () => {
        lottiePlayerro.play();
    });

    hoverTriggerro.addEventListener('mouseout', () => {
        lottiePlayerro.pause();
    });
}
//دا يخص فتح وقفل و اخفاء صفحه المعلومات/*

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}
document.querySelectorAll('.clickable-box').forEach(box => {
    box.addEventListener('click', () => {
        const modalId = `custom-modal-${box.id.split('-').pop()}`;
        openModal(modalId);
    });
});
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        closeModal(modalId);
    });
});
window.addEventListener('click', (event) => {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});


