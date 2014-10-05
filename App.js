Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch: function() {
	    console.log("My first Rally App is launching !!!");
        this._loadData();

    },
    // get data from Rally
    _loadData: function() {
	var myStore = Ext.create('Rally.data.wsapi.Store', {
	    model: 'User Story',
	    autoLoad: true,
	    listeners: {
		load: function(myStore, myData, success) {
		    console.log("Load = ", myStore, myData, success);
            this._loadGrid(myStore);
		},
        scope: this
	    },
	    fetch: ['FormattedID', 'Name', 'Owner', 'ScheduleState', 'Project']
	});

    },
    // create grid to hold data
    _loadGrid: function(storeForGrid) {
        var myGrid =Ext.create('Rally.ui.grid.Grid', {
                store: storeForGrid,
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
});
