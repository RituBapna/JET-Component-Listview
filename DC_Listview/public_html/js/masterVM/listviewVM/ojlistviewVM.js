define([ 'ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmodel', 'ojs/ojcore','ojs/ojknockout', 'promise', 
    'ojs/ojlistview', 'ojs/ojlistviewdnd', 'ojs/ojcollectiontabledatasource',    'ojs/ojselectcombobox', 'ojs/ojpagingcontrol',
    'ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset','ojs/ojfilmstrip', 'ojs/ojprogressbar', 
    'ojs/ojinputnumber', 'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojlistviewdnd','ojs/ojIndexer'],
        function(oj,ko, $) {

            function ListviewVM() {
                var self = this;
                
                var model = oj.Model.extend({
                    idAttribute: 'source'
                });

                var collection = new oj.Collection(null, {
                    url: '../json/tweets.json',
                    model: model
                });
                //var self = this;
                self.dataSource = new oj.CollectionTableDataSource(collection);

                self.buttonClick = function(data, event) {
                    alert("hi");
                    collection.reset();
                    //collection.fetch();
                    //reset(self.dataSource);

                };

                self.itemOnly = true;
                self.currentItemValue = ko.observable("amybartlet");
                self.drillModeValue = ko.observable("collapsible");
                self.selectionModeValue = ko.observable('single');
                self.groupHeaderPositionValue = ko.observable('static');
                self.currentItemOptions = ko.observableArray([
                    {id: 'amybartlet', value: 'amybartlet', label: 'amybartlet'},
                    {id: 'andyjones', value: 'andyjones', label: 'andyjones'},
                    {id: 'andrewbugsy', value: 'andrewbugsy', label: 'andrewbugsy'},
                    {id: 'annettbarnes', value: 'annettbarnes', label: 'annettbarnes'},
                    {id: 'bobjones', value: 'bobjones', label: 'bobjones'},
                    {id: 'bartbuckler', value: 'bartbuckler', label: 'bartbuckler'},
                    {id: 'bobbyfisher', value: 'bobbyfisher', label: 'bobbyfisher'},
                    {id: 'cathyjones', value: 'cathyjones', label: 'cathyjones'},
                    {id: 'carollsmith', value: 'carollsmith', label: 'carollsmith'}
                ]);
                self.drillModeOptions = ko.observableArray([
                    {id: 'none', value: 'none', label: 'none'},
                    {id: 'collapsible', value: 'collapsible', label: 'collapsible'}
                ]);
                self.selectionModeOptions = ko.observableArray([
                    {id: 'single', value: 'single', label: 'single'},
                    {id: 'multiple', value: 'multiple', label: 'multiple'},
                    {id: 'none', value: 'none', label: 'none'}
                ]);
                self.groupHeaderPositionOptions = ko.observableArray([
                    {id: 'sticky', value: 'sticky', label: 'sticky'},
                    {id: 'static', value: 'static', label: 'static'}
                ]);
                self.currentItemUpdate = function(event, data) {
                    if (data.value) {
                        if (data.value[0] === "amybartlet")
                        {
                            self.currentItemValue('amybartlet');
                        }
                        else if (data.value[0] === "andyjones")
                        {
                            self.currentItemValue('andyjones');
                        }
                        else if (data.value[0] === "andrewbugsy")
                        {
                            self.currentItemValue('andrewbugsy');
                        }
                        else if (data.value[0] === "annettbarnes")
                        {
                            self.currentItemValue('annettbarnes');
                        }
                        else if (data.value[0] === "bobjones")
                        {
                            self.currentItemValue('bobjones');
                        }
                        else if (data.value[0] === "bartbuckler")
                        {
                            self.currentItemValue('bartbuckler');
                        }
                        else if (data.value[0] === "bobbyfisher")
                        {
                            self.currentItemValue('bobbyfisher');
                        }
                        else if (data.value[0] === "cathyjones")
                        {
                            self.currentItemValue('cathyjones');
                        }
                        else if (data.value[0] === "carollsmith")
                        {
                            self.currentItemValue('carollsmith');
                        }
                        
                        //$("#outputText").html($("#listview").ojListView({"currentItem":self.currentItemValue}));
                        //$("#outputText").html($("#listview").ojListView("option", "currentItem"));
                        $("#currentitemOutputText").html("Currentitem Value::" + self.currentItemValue()).append('</br>');
                       // console.log($("#hierarchicalStaticContentListView").ojListView("option", "currentItem"));
                        return true;
                    }
                };


                self.drillModeUpdate = function(event, data) {
                    if (data.value) {
                        if (data.value[0] === "none")
                        {
                            self.drillModeValue('none');
                        }
                        else if (data.value[0] === "collapsible")
                        {
                            self.drillModeValue('collapsible');
                        }
                        $("#drillmodeOutputText").html("Drill Mode Value::" + self.drillModeValue()).append('</br>');
                    }
                };
                self.selectionModeUpdate = function(event, data) {
                    //console.log(data.value[0]==='single');
                    if (data.value) {
                        if (data.value[0] === "single")
                        {
                            self.selectionModeValue('single');
                        }
                        else if (data.value[0] === "multiple")
                        {
                            self.selectionModeValue('multiple');
                        }
                        else if (data.value[0] === "none")
                        {
                            self.selectionModeValue('none');
                        }
                        //console.log(self.selectionModeValue());
                        $("#selectionmodeOutputText").html("Selection mode Value::" + self.selectionModeValue()).append('</br>');
                        return true;
                    }


                };
                self.groupHeaderPositionUpdate = function(event, data) {
                    if (data.value) {
                        if (data.value[0] === "sticky")
                        {
                            self.groupHeaderPositionValue('sticky');
                        }
                        else if (data.value[0] === "static")
                        {
                            self.groupHeaderPositionValue('static');
                        }
                        $("#groupheaderpositionOutputText").html("Group Header Position  mode Value::" + self.groupHeaderPositionValue()).append('</br>');
                    }
                };
                self.currentItems = ko.observableArray([
                    {id: 'amybartlet', value: 'amybartlet', label: 'amybartlet'},
                    {id: 'andyjones', value: 'andyjones', label: 'andyjones'},
                    {id: 'andrewbugsy', value: 'andrewbugsy', label: 'andrewbugsy'},
                    {id: 'annettbarnes', value: 'annettbarnes', label: 'annettbarnes'},
                    {id: 'bobjones', value: 'bobjones', label: 'bobjones'},
                    {id: 'bartbuckler', value: 'bartbuckler', label: 'bartbuckler'},
                    {id: 'bobbyfisher', value: 'bobbyfisher', label: 'bobbyfisher'},
                    {id: 'amybartlet-1', value: 'amybartlet-1', label: 'amybartlet-1'},
                    {id: 'andyjones-2', value: 'andyjones-2', label: 'andyjones-2'},
                    {id: 'andrewbugsy-3', value: 'andrewbugsy-3', label: 'andrewbugsy-3'},
                    {id: 'annettbarnes-4', value: 'annettbarnes-4', label: 'annettbarnes-4'},
                    {id: 'bobjones-5', value: 'bobjones-5', label: 'bobjones-5'},
                    {id: 'bartbuckler-6', value: 'bartbuckler-6', label: 'bartbuckler-6'},
                    {id: 'bobbyfisher-7', value: 'bobbyfisher-7', label: 'bobbyfisher-7'},
                    {id: 'cathyjones', value: 'cathyjones', label: 'cathyjones'},
                    {id: 'carollsmith', value: 'carollsmith', label: 'carollsmith'}
                ]);
                self.getExpanded=function(index){
                   var expandedNode= $( "#listview" ).ojListView( "getExpanded");
                   console.log(expandedNode);
                };
                               
               self.collapseNode = function(id) {
                  
                    $( "#listview" ).ojListView( "collapse", id, true );
                    self.getExpandedItemKeys();
                    $("#methodOutputText").append('<br/>').append("Collapse node is::" +id);
                    /*                   
                     * $( "#listview" ).ojListView( "collapse", 
                        {
                          "key" : id,
                          "vetoable" :true
                         } );
                    */
                };
                self.expandNode = function(id) {
                    $( "#listview" ).ojListView( "expand", id, true );
                    self.getExpandedItemKeys();
                    $("#methodOutputText").append('<br/>').append("Expanded node is::" +id);
                };
                
               self.getExpandedItemKeys=function(){
                   $("#methodOutputText").html("Currently expanded items:: " +$( "#listview" ).ojListView( "getExpanded" ));
               };
               self.getIndexerModel=function(){
                  return ($( "#listview" ).ojListView( "getIndexerModel" )); 
               };
               self.whenReady=function(){
                  //console.log($( "#listview" ).ojListView( "whenReady")); 
               };
               self.optionMethod=function(){
                   var currentItem = $( "#listview" ).ojListView( "option", "currentItem" );
                   var drillMode = $( "#listview" ).ojListView( "option", "drillMode" );
                   var expanded = $( "#listview" ).ojListView( "option", "expanded" );
                   var scrollPolicy = $( "#listview" ).ojListView( "option", "scrollPolicy" );// Foo is Button, Menu, etc.
                   $("#methodOutputText").append('</br>').append("Currently selected options are:: " +currentItem +", "+drillMode +", "+ expanded + "and "+scrollPolicy);
               };
               
                $("#destroyLV").click(function(){
                    $("#listview").remove();
                }) ;
                    
                    $("#listview").click(function(event){
//                        console.log(event.currentTarget);
//                        console.log(event.target);
//                        console.log($('#listview').ojListView('getContextByNode'));
                        var listItemContext = $('#listview').ojListView('getContextByNode', event.target);
                        $("#getContextByNodeOutputText").html('</br>'+"Current context node details::\n\
                                 subId is:--  "+listItemContext['subId']+
                                ", Index is:--  " +listItemContext['index'] + 
                                ",and Key is:--  " + listItemContext['key']);
                        //var context= $( "#listview" ).ojListView( "getContextByNode", "oj-listview-item");
                        //console.log("I'm clicked" + context) ;
                    });
               


                $("#listview").on("ojbeforeexpand", function(event, ui) {
                    
                    $("#beforeExpandOutputText").html("before expand is fired!!").append('<br/>');
                    
                });
//                $( "#listview" ).ojListView({
//                    "beforeExpand": function( event, ui ) {
//                        $("#beforeCollapseOutputText").html("before expand eventfired!!").append('<br/>');
//                    }
//                });
                $("#listview").on("ojbeforecollapse", function(event, ui) {
                    $("#beforeCollapseOutputText").html("before collapse is fired!!").append('<br/>');
                    //$("span#eventOutputText:first").replaceWith("Hello world!").append('<br/>');
                });
                $("#listview").on( "ojbeforecurrentitem", function( event, ui ) {
                    
                    $("#beforeCurrentItemOutputText").html("beforeCurrentItem is fired!!").append('<br/>');
                } );
                $("#listview").on("ojcollapse", function(event, ui) {
                    $("#eventOutputText").html("collapse event is fired!!").append('<br/>');
                    //$("span#eventOutputText:first").replaceWith("Hello world!").html('<br/>');
                });
                $("#listview").on("ojexpand", function(event, ui) {
                    $("#eventOutputText").html("expand event is fired!!").append('<br/>');
                    //$("span#eventOutputText:first").replaceWith("Hello world!").append('<br/>');
                });
                $("#listview").on("ojdestroy", function(event, ui) {
                    $("#eventOutputText").html("destroy event is fired!!").append('<br/>');
                    //$("span#eventOutputText:first").replaceWith("Hello world!").append('<br/>');
                });
                $("#listview").on({'ojoptionchange': function (event, data) {
                        $("#eventOutputText").html("option that changed is ::"+ data['option']).append('<br/>');
                          //window.console.log("option that changed is: " + data['option']);
                    }
                });
                $( "#listview" ).on( "ojready", function( event, ui ) {
                    $("#eventOutputText").html("Ready event fired!!").append('<br/>');
                } );
            }
            //------------------------ListviewVM ends here-----------------------------------//
            
            //-----------------------TableViewModel starts here-------------------------------//
            function TableViewModel(dataArray)
            {
                var self = this;
                self.selection = [];
                self.arr = ko.observableArray(dataArray);
                self.datasource = new oj.ArrayTableDataSource(self.arr, {idAttribute: 'id'});

                self.handleDrop = function (event, ui)
                {
                    var data, i;

                    event.preventDefault();

                    data = event.originalEvent.dataTransfer.getData("application/ojlistviewitems+json");
                    if (data != null)
                    {
                        data = JSON.parse(data);
                        for (i = data.length - 1; i >= 0; i--)
                        {
                            dataArray.splice(ui.rowIndex, 0, data[i]);
                        }
                        self.arr.valueHasMutated();
                    }
                };

                self.handleDragEnd = function (event, ui)
                {
                    if (event.originalEvent.dataTransfer.dropEffect === "move")
                    {
                        for (i = 0; i < self.selection.length; i++)
                        {
                            var start = self.selection[i].startIndex.row;
                            var end = self.selection[i].endIndex.row;
                            dataArray.splice(start, end - start + 1);
                        }

                        self.arr.valueHasMutated();
                    }
                };
            }
            //-----------------------TableViewModel ends here---------------------------------//
            //-----------------------ListViewModel starts here---------------------------------//
            function ListViewModel(dataArray)
            {
                var self = this;
                self.selection = [];
                self.arr = ko.observableArray(dataArray);
                self.datasource = new oj.ArrayTableDataSource(self.arr, {idAttribute: 'id'});

                self.handleDrop = function (event, ui)
                {
                    var data, context, index, i;

                    data = event.originalEvent.dataTransfer.getData("application/ojtablerows+json");
                    data = JSON.parse(data);

                    context = $('#listview').ojListView('getContextByNode', ui.item);
                    index = context.index;
                    if (ui.position === "after")
                    {
                        index = index + 1;
                    }

                    for (i = data.length - 1; i >= 0; i--)
                    {
                        dataArray.splice(index, 0, data[i].data);
                    }
                    self.arr.valueHasMutated();

                    return false;
                };

                self.handleDragEnd = function (event, ui)
                {
                    var i, j;

                    if (event.originalEvent.dataTransfer.dropEffect === "move")
                    {
                        for (i = 0; i < self.selection.length; i++)
                        {
                            for (j = 0; j < dataArray.length; j++)
                            {
                                // remove the selected items from array
                                if (dataArray[j].id == self.selection[i])
                                {
                                    dataArray.splice(j, 1);
                                    break;
                                }
                            }
                        }

                        self.arr.valueHasMutated();
                    }
                };
            }          
            //-----------------------ListViewModel ends here---------------------------------//
            
             var tableDataArray = [{id: 10, name: 'Dan Raphael', department: 'Research', salary: 150000, job: 'Director', url: 'images/nBox/16.png'},
                    {id: 11, name: 'David Young', department: 'Marketing', salary: 120000, job: 'Marketing Manager', url: 'images/nBox/18.png'},
                    {id: 12, name: 'Julia Chen', department: 'Marketing', salary: 120000, job: 'Marketing Manager', url: 'images/nBox/7.png'},
                    {id: 13, name: 'Jon Wu', department: 'Research', salary: 120000, job: 'Product Manager', url: 'images/nBox/15.png'},
                    {id: 14, name: 'Kelly Sullivan', department: 'Marketing', salary: 150000, job: 'Director', url: 'images/nBox/3.png'},
                    {id: 15, name: 'Laura Bissot', department: 'Accounts', salary: 80000, job: 'Accountant', url: 'images/nBox/4.png'},
                    {id: 16, name: 'Simon Austin', department: 'Research', salary: 100000, job: 'Developer', url: 'images/nBox/17.png'}];


                var listviewDataArray = [{id: 0, name: 'Amy Bartlet', department: 'Accounts', salary: 200000, job: 'Vice President', url: 'images/nBox/1.png'},
                    {id: 1, name: 'Andy Jones', department: 'Accounts', salary: 150000, job: 'Director', url: 'images/nBox/10.png'},
                    {id: 2, name: 'Andrew Bugsy', department: 'Research', salary: 100000, job: 'Individual Contributor', url: 'images/nBox/11.png'},
                    {id: 3, name: 'Annett Barnes', department: 'Research', salary: 100000, job: 'Individual Contributor', url: 'images/nBox/2.png'},
                    {id: 4, name: 'Bob Jones', department: 'Sales', salary: 75000, job: 'Salesman', url: 'images/nBox/12.png'},
                    {id: 5, name: 'Bart Buckler', department: 'Accounts', salary: 75000, job: 'Purchasing', url: 'images/nBox/13.png'},
                    {id: 6, name: 'Bobby Fisher', department: 'Research', salary: 100000, job: 'Individual Contributor', url: 'images/nBox/14.png'}];
            function MasterVM(){
                
                var master={};
                master.lvVM=new ListviewVM();
                master.tableModel=new TableViewModel(tableDataArray);
                master.listViewModel=new ListViewModel(listviewDataArray);
                //return [master.lvVM, master.tableModel, master.listViewModel];
                return master;
            }
            return MasterVM;
           // return ListviewVM;
        });


