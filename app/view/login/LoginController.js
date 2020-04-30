Ext.define('appointment.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLogin: function() {
        // var form = this.getView();
        // var form = this.up('form');
        // console.log(form); 

        Ext.Ajax.request({
            // NOT WORKING BECAUSE OF CORS POLICY
            
            // url: 'http://localhost:1841/app/php/login.php',
            url: 'http://localhost/extjs/appointment/app/php/classes/login.php',
            // params: form.getValues(),
            cors: true,
            useDefaultXhrHeader: false,
            withCredentials: true,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },

            // success: function(response) {
            //     alert(response)
            // }, 
            // failure: function(response) {
            //     alert(reponse)
            // }
        });

        // if (form.validate()) {
        //     Ext.Msg.alert('Login Success', 'You have been logged in!');
        // }
        // else {
        //     Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        // }
    }
});