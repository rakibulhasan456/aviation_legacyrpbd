// settings.js - Control visibility of form elements
document.addEventListener('DOMContentLoaded', function() {
    // Configuration object - change these values to control visibility
    const formSettings = {
        showOpenMessage: false,    // Set to true to show "Aviation Pilot Form is OPEN"
        showClosedMessage: true,   // Set to true to show "Aviation Pilot Form is CLOSED"
        showForm: false            // Set to true to show the form section
    };

    // Apply the settings
    function applyFormSettings() {
        // Control "Aviation Pilot Form is OPEN" message
        const openMessage = document.getElementById('form-open');
        if (openMessage) {
            openMessage.style.display = formSettings.showOpenMessage ? 'block' : 'none';
        }

        // Control "Aviation Pilot Form is CLOSED" message
        const closedMessage = document.getElementById('form-closed');
        if (closedMessage) {
            closedMessage.style.display = formSettings.showClosedMessage ? 'block' : 'none';
        }

        // Control the form section
        const formContainer = document.querySelector('.custom-form-container');
        if (formContainer) {
            formContainer.style.display = formSettings.showForm ? 'block' : 'none';
        }
    }

    // Apply settings when DOM is fully loaded
    applyFormSettings();
});
