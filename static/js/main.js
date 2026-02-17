// Main JavaScript file for Medical Mart
document.addEventListener('DOMContentLoaded', function () {
    console.log('Medical Mart scripts initialized.');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Preloader
    window.addEventListener('load', function () {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });



    // Enquiry Modal Handling
    const enquiryBtn = document.getElementById('enquiryBtn');
    if (enquiryBtn) {
        const modal = new bootstrap.Modal(document.getElementById('enquiryModal'));
        enquiryBtn.addEventListener('click', () => {
            modal.show();
        });
    }

    const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
    if (bookAppointmentBtn) {
        const modal = new bootstrap.Modal(document.getElementById('enquiryModal'));
        bookAppointmentBtn.addEventListener('click', () => {
            modal.show();
        });
    }

    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const mobile = this.querySelector('input[type="tel"]').value;
            const subject = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;

            // Construct WhatsApp message
            const waText = `*New Enquiry from Website*%0A%0A*Subject:* ${subject}%0A*Name:* ${name}%0A*Mobile:* ${mobile}%0A*Message:* ${message}`;
            const waUrl = `https://wa.me/919923346656?text=${waText}`;

            // Open WhatsApp
            window.open(waUrl, '_blank');

            const successMsg = document.getElementById('enquiryModal').dataset.successMsg || 'Thank you! Opening WhatsApp to send your enquiry...';
            alert(successMsg);

            const modalElement = document.getElementById('enquiryModal');
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();
            enquiryForm.reset();
        });
    }
});
