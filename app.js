/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'appointment.Application',

    name: 'appointment',

    requires: [
        // This will automatically load all classes in the appointment namespace
        // so that application classes do not need to require each other.
        'appointment.*'
    ],

    // The name of the initial view to create.
    mainView: 'appointment.view.main.Main'
    // mainView: 'appointment.view.login.Login'
});
