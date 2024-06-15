/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/ui/serverWidget'], function (serverWidget) {

    /**
     * Function definition to be triggered before record is loaded.
     *
     *
     * @param {Object} context - The context object
     * @param {string} context.type - The type of operation, can be CREATE, EDIT, VIEW, COPY, or DELETE
     * @param {Form} context.form - The current form
     * @param {Record} context.newRecord - The new record being processed in the script
     */

    function beforeLoad(context) {
        if (context.type == context.UserEventType.CREATE && context.type == context.UserEventType.EDIT) {
            return;
        }

        var form = context.form;


        form.addButton({
            id: 'custpage_popup_button',
            label: 'Open Popup',
            functionName: 'openPopup'
        });

        form.clientScriptModulePath = 'SuiteScripts/PopupButton/CS_PopupButtonHandler.js';
    }

    return {
        beforeLoad: beforeLoad
    };
});
