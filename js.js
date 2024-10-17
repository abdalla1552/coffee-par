
// احصل على عنصر الهيدر
const header = document.querySelector('header');
let lastScrollTop = 0; // لتتبع موضع التمرير الأخير

// أضف حدث التمرير
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // إذا كان التمرير لأسفل، اختبئ الهيدر
        header.style.top = '-80px'; // تعديل القيمة بناءً على ارتفاع الهيدر الخاص بك
    } else {
        // إذا كان التمرير لأعلى، اظهر الهيدر
        header.style.top = '0';
    }
    lastScrollTop = scrollTop; // تحديث موضع التمرير الأخير
});
