const contactBtn = document.querySelector('.hero-content .btn');
const modal = document.getElementById('messageModal');
const closeBtn = document.querySelector('.close-btn');

// Button ሲጫን Modal እንዲከፈት ማድረግ
contactBtn.addEventListener('click', function(e) {
    e.preventDefault(); // ገጹ ወደ ታች እንዳይዘል ያደርጋል
    modal.style.display = 'flex';
});

// X ምልክቱ ሲጫን Modal እንዲዘጋ ማድረግ
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// ከModal ሳጥኑ ውጭ ሲጫኑ እንዲዘጋ ማድረግ
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});