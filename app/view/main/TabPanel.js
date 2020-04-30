Ext.define('appintment.view.main.TabPanel', {
  extend: 'Ext.tab.Panel',
  xtype: 'sample-tabs',
  layout: 'fit',

  defaults: {
      scrollable: true,
      userSelectable: {
          bodyElement: true
      }
  },

  items: [{
    title: 'Tab 1',
    html: 'This is the first tab',
    layout: 'center',
    cls: 'card'    
  }, {
    title: 'Tab 2',
    cls: 'card',
    listeners: {
      afterrender: function() {
        Ext.Msg.alert('This tab has been renderred!');
      }
    },
  }]
});