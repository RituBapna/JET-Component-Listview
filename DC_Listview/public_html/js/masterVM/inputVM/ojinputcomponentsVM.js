define([ 'ojs/ojcore', 'knockout', 'jquery', 'ojs/ojcore','ojs/ojknockout','ojs/ojselectcombobox', 'ojs/ojradioset',
    'ojs/ojprogressbar', 'ojs/ojinputnumber', 'ojs/ojdatetimepicker'],
        function(oj,ko, $) {

            function InputComponentsVM() {
            var self = this;
            self.currentRadioSelection = ko.observable('crust21');
            self.currentRadioSelection1 = ko.observable('crust1');
            self.selectval = ko.observableArray(['SF']);
            self.val = ko.observableArray(["CA"]);
            self.dateval = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.decimal = ko.observable();
                // date
            self.dateval = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            //text area
            self.textareaval = ko.observable("some initial value for the component");
            //password
            self.pwdval = ko.observable("Hello there!");
            self.sayHeyo = function()
            {
                oj.Logger.info("Say Heyyo!");
            };
            self.triLevelGroupData = ko.observableArray([
                {label: "Alaskan/Hawaiian Time Zone",
                    children: [
                        {value: "AK", label: "Alaska",
                            children: [
                                {value: "AN", label: "Anchorage"}
                            ]},
                        {value: "HI", label: "Hawaii",
                            children: [
                                {value: "HO", label: "Honolulu"},
                                {value: "HL", label: "Hilo"}
                            ]}
                    ]},
                {label: "Pacific Time Zone",
                    children: [
                        {value: "CA",
                            label: "California",
                            children: [
                                {value: "SF", label: "San Francisco"},
                                {value: "LA", label: "Los Angeles"}
                            ]},
                        {value: "NV", label: "Nevada",
                            children: [
                                {value: "LV", label: "Las Vegas"}
                            ]},
                        {value: "OR", label: "Oregon",
                            children: [
                                {value: "PL", label: "Portland"},
                                {value: "BD", label: "Bend"}
                            ]},
                        {value: "WA", label: "Washington",
                            children: [
                                {value: "ST", label: "Seattle"},
                                {value: "SK", label: "Spokane"}
                            ]}
                    ]}
            ]);
        self.val = ko.observableArray(["CA"]);
        self.groupData = ko.observableArray([
            {label: "Alaskan/Hawaiian Time Zone",
                children: [
                    {value: "AK", label: "Alaska"},
                    {value: "HI", label: "Hawaii"}
                ]},
            {label: "Pacific Time Zone",
                children: [
                    {value: "CA", label: "California"},
                    {value: "NV", label: "Nevada"},
                    {value: "OR", label: "Oregon"},
                    {value: "WA", label: "Washington"}
                ]}
        ]);
            }
            return InputComponentsVM;
        });


