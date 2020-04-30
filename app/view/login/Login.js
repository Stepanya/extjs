var container = Ext.define('appointment.view.login.Login',{
    extend: 'Ext.Panel',
    xtype: 'panel',

    layout: 'center',
    bodyStyle:{"background-color":"#F5F5F5"}, 

    items: [{
        extend: 'Ext.form.Panel',
        xtype: 'formpanel',
        controller: 'login',
        title: 'Login',
    
        bodyPadding: 20,
        width: '400',
    
        items: [{
            
            xtype: 'textfield',
            allowblank: 'false',
            required: 'true',
            label: 'User ID',
            name: 'userid'  
        }, {
            xtype: 'passwordfield',
            allowBlank: false,
            required: true,
            label: 'Password',
            name: 'pass',
            placeholder: 'password'
        }],
    
        buttons: [{
            text: 'Login',
            handler: 'onLogin'
        }]
    }]
}); 