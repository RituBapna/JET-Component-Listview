require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojlistview',
    'ojs/ojcollectiontabledatasource', 'ojs/ojmodel', 'mockjax', 'mockpagingrest'],
function(oj, ko, $)
{     
    $(document).ready(
        function() 
        {
            $.getJSON("nodatajson.json",
                function (data) 
                {
                    // responseTime is only added so that the activity indicator is more noticeable
                    var server = new MockPagingRESTServer({"Tweets": data}, {collProp:"Tweets", id:"source", responseTime:1000});

                    var model = oj.Model.extend({
                        idAttribute: 'source'
                    });

                    var collection = new oj.Collection(null, {
                        url: server.getURL(),
                        fetchSize: 15,
                        model: model
                    });

                    ko.applyBindings({
                        dataSource: new oj.CollectionTableDataSource(collection)
                    }, document.getElementById('listview'));
                });      
        }
    );
});	