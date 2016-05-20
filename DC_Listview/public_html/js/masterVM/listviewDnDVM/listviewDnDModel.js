define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojlistviewdnd', 'ojs/ojtable', 'ojs/ojarraytabledatasource'],
        function (oj, ko, $) {

            function ListViewDnDModel(dataArray)
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

            return ListViewDnDModel;
        });


