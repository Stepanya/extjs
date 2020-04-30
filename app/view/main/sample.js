var button = Ext.create('Ext.Button', {
    text: 'Sample Button',
    listeners: {
      afterrender: function() {
        Ext.Msg.alert('Success!', 'We have been rendered');
    }
  }
});

var childPanel1 = Ext.create('Ext.panel.Panel', {
  title: 'Child Panel 1',
  html: 'A Panel'
});

var childPanel2 = Ext.create('Ext.panel.Panel', {
  title: 'Child Panel 2',
  html: 'A Draggable Panel',

  floating: true,
  draggable: true
});

Ext.define('appointment.view.main.sample', {
  extend: 'Ext.panel.Panel',
  xtype: 'sample',
  
  height: '100%',

  listeners: {
    afterrender: 'panelClicked'
  },

  listeners: {
    onClick: function() {
      Ext.Msg.alert('Clicked!')
    }
  },

  items: [childPanel1, childPanel2, button]
});


