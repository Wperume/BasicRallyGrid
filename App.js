Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch: function() {
	console.log("My first Rally App!!!");
	var myStore = Ext.create('Rally.data.wsapi.Store', {
	    model: 'User Story',
	    autoLoad: true,
	    listeners: {
		load: function(myStore, myData, success) {
		    console.log("Load = ", myStore, myData, success);
            var myGrid =Ext.create('Rally.ui.grid.Grid', {
                    store: myStore,
                     columnCfgs: [
                         'FormattedID',
                         'Name',
                         'Owner',
                        'ScheduleState',
                        'Project'
                        ],
             });
            this.add(myGrid);
            console.log("after adding grid");
		},
        scope: this
	    },
	    fetch: ['FormattedID', 'Name', 'Owner', 'ScheduleState', 'Project']
	});
    }
});
