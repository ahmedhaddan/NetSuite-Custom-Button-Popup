
## Deployment Instructions

### Step 1: Upload Scripts

1. **Upload `popupForm.html`:**
    - Go to **Documents** > **File Cabinet** in your NetSuite account.
    - Create a folder named `SuiteScripts/PopupButton`.
    - Upload `popupForm.html` to this folder.

2. **Upload `UE_AddButtonToRecordForm.js` and `CS_PopupButtonHandler.js`:**
    - In the same `SuiteScripts/PopupButton` folder, upload the `UE_AddButtonToRecordForm.js` and `CS_PopupButtonHandler.js` scripts.

### Step 2: Create Script Records

1. **Create a User Event Script:**
    - Go to **Customization** > **Scripting** > **Scripts** > **New** > **User Event Script**.
    - In the **Script File** field, select the `UE_AddButtonToRecordForm.js` file.
    - Name the script appropriately (e.g., `Popup Button User Event`).
    - Deploy the script to the desired record type(s).

## Usage

### Adding a Button to a Form

The `UE_AddButtonToRecordForm.js` script adds a button labeled "Open Popup" to the form. This button will trigger the popup when clicked.

### Popup Form Functionality

The `CS_PopupButtonHandler.js` script handles the popup functionality. When the button is clicked, the `openPopup` function is called, which loads Bootstrap and jQuery dynamically, fetches the `popupForm.html` content, and displays it in a modal dialog.

### Form Submission

The form includes an "OK" button, which triggers the `submitPopup` function. This function:
- Retrieves the form values.
- Displays a loading spinner and disables the "OK" button.
- Simulates an asynchronous process (which you can replace with your actual process).
- Hides the loading spinner and re-enables the "OK" button after the process is complete.
- Reloads the page to reflect changes.

## Customization

### Modifying the Popup Form

- To modify the popup form, edit the `popupForm.html` file as needed. You can add or remove form fields, change labels, etc.

### Updating the URL in `CS_PopupButtonHandler.js`

- Update the URL (HTML File URL) in the `jQuery.ajax` call in the `openPopup` function to match the file ID and URL of your `popupForm.html` in the File Cabinet.

```javascript
jQuery.ajax({
    url: '/core/media/media.nl?id=YOUR_FILE_ID&c=YOUR_ACCOUNT_ID&h=YOUR_HASH&_xt=.html',
    method: 'GET',
    async: false,
    success: function (data) {
        htmlContent = data;
    },
    error: function (xhr, status, error) {
        console.error('Error loading popup form HTML:', status, error);
    }
});
