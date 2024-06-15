/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define(['N/record'], function (record) {

    /**
     * Opens a popup by dynamically loading Bootstrap and jQuery, then displaying the HTML content.
     */
    function openPopup() {
        loadBootstrapAndJQuery(function() {
            var htmlContent;

            // Load the HTML content using jQuery AJAX
            jQuery.ajax({
                url: '/core/media/media.nl?id=5860&c=9651971_SB1&h=9RcL02VnxLc1c5wfQC2MJGBaifFaXUdeBygA-dRdMufGOPJ_&_xt=.html', // Update with your file's URL
                method: 'GET',
                async: false, // To ensure content is loaded before proceeding
                success: function (data) {
                    htmlContent = data;
                },
                error: function (xhr, status, error) {
                    console.error('Error loading popup form HTML:', status, error);
                }
            });

            var dialog = document.createElement('div');
            dialog.innerHTML = htmlContent;
            document.body.appendChild(dialog);

            // Initialize the Bootstrap modal
            jQuery(dialog).find('.modal').modal('show');
        });
    }


    /**
     * Loads Bootstrap and jQuery dynamically, then executes a callback function.
     * @param {Function} callback - The callback function to execute after loading Bootstrap and jQuery.
     */
    function loadBootstrapAndJQuery(callback) {
        // Load jQuery
        var jQueryScript = document.createElement('script');
        jQueryScript.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
        jQueryScript.onload = function () {
            // Load Bootstrap JS
            var bootstrapScript = document.createElement('script');
            bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js';
            bootstrapScript.onload = callback;
            document.head.appendChild(bootstrapScript);

            // Load Bootstrap CSS
            var bootstrapCSS = document.createElement('link');
            bootstrapCSS.rel = 'stylesheet';
            bootstrapCSS.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
            document.head.appendChild(bootstrapCSS);
        };
        document.head.appendChild(jQueryScript);
    }


    /**
     * Retrieves values from the form fields and returns them as an object.
     * @returns {Object} An object containing the form values.
     */
    function getFormValues() {
        var textFieldValue = document.getElementById('textfield') ? document.getElementById('textfield').value : '';
        var listFieldValue = document.getElementById('listfield') ? document.getElementById('listfield').value : '';
        var checkboxFieldValue_1 = document.getElementById('checkboxfield_1') ? document.getElementById('checkboxfield_1').checked : false;
        var checkboxFieldValue_2 = document.getElementById('checkboxfield_2') ? document.getElementById('checkboxfield_2').checked : false;
        var dateFieldValue = document.getElementById('datefield') ? document.getElementById('datefield').value : '';
        var radioFieldValue = document.querySelector('input[name="radiofield"]:checked') ? document.querySelector('input[name="radiofield"]:checked').value : '';

        return {
            textField: textFieldValue,
            listField: listFieldValue,
            checkboxField_1: checkboxFieldValue_1,
            checkboxField_2: checkboxFieldValue_2,
            dateField: dateFieldValue,
            radioField: radioFieldValue
        };
    }


    /**
     *
     * Handles the form submission, logs form values, and reloads the page.
     */
    function submitPopup() {
        var formValues = getFormValues();

        console.log('Form Values:', formValues);

        // Show loading spinner and disable the OK button
        var submitBtn = document.getElementById('submitBtn');
        var loadingSpinner = document.getElementById('loadingSpinner');
        submitBtn.disabled = true;
        loadingSpinner.style.display = 'inline-block';

        // Simulate an async process with a timeout
        setTimeout(function () {
            // Perform any necessary actions with the form values

            // Hide loading spinner and enable the OK button
            loadingSpinner.style.display = 'none';
            submitBtn.disabled = false;

            location.reload(); // Refresh the page to reflect changes
        }, 2000); // Replace with the actual process duration
    }

    window.submitPopup = submitPopup;

    return {
        openPopup: openPopup,
        submitPopup: submitPopup
    };
});
