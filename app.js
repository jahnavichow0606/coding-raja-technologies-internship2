document.addEventListener('DOMContentLoaded', function() {
    const templateSelect = document.getElementById('template-select');
    const resumeForm = document.getElementById('resume-form');
    const resumePreview = document.getElementById('resume-preview');

    // Update preview when form inputs change
    resumeForm.addEventListener('input', updatePreview);

    function updatePreview() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;

        resumePreview.innerHTML = `
            <h2>${fullName}</h2>
            <p>${email}</p>
        `;
    }

    // Download as PDF
    document.getElementById('download-pdf').addEventListener('click', function() {
        // Code to download resume as PDF
    });

    // Download as Word
    document.getElementById('download-word').addEventListener('click', function() {
        // Code to download resume as Word
    });
});
