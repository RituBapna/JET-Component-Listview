require(['knockout', 'jquery', 'ojs/ojcore', 
    '../js/masterVM/listviewVM/ojlistviewVM', '../js/masterVM/inputVM/ojinputcomponentsVM',
    '../js/masterVM/listviewDnDVM/listviewDnDModel', '../js/masterVM/tableDnDVM/tableDnDModel',
    'ojs/ojknockout', 'promise', 'ojs/ojlistview', 'ojs/ojcollectiontabledatasource',
    'ojs/ojselectcombobox', 'ojs/ojmodel', 'ojs/ojpagingcontrol'],
        function (ko, $, oj, listviewVM, inputVM) {
            $(document).ready(function () {
                
                MasterVM= new listviewVM();
                lvModel=MasterVM.lvVM;
                //lvModel = new listviewVM();
                inputModel = new inputVM();
                
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
                
                
                
               // lvDnDModel = new lvDnD(listviewDataArray);
              //  tableDnDModel = new tableDnD(tableDataArray);
               // lvVM = MasterListViewVM[0];
                
               // tableViewModel=MasterListViewVM[1];
               // listViewModel=MasterListViewVM[2];
                
               ko.applyBindings(lvModel, document.getElementById('outputText'));
                ko.applyBindings(lvModel, document.getElementById('listview'));
                ko.applyBindings(lvModel, document.getElementById('selectionDiv'));
                ko.applyBindings(inputModel, document.getElementById('nestedLV')); 
                
              
               // ko.applyBindings(lvDnDModel, document.getElementById('listview2'));
              //  ko.applyBindings(tableDnDModel, document.getElementById('table2'));


                // =----------------------------Code for ListviewDnD----------------------   

                

               

            });
        });



