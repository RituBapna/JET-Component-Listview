define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojlistviewdnd', 'ojs/ojtable', 'ojs/ojarraytabledatasource'],
        function (oj, ko, $) {

            function TableViewDnDModel(dataArray)
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

            return TableViewDnDModel;
        });


