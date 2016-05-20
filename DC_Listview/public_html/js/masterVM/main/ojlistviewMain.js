requirejs.config({
  paths: {
    'knockout': '../js/libs/knockout/knockout-3.4.0',
    'jquery': '../js/libs/jquery/jquery-2.1.3.min',
    'jqueryui-amd': '../js/libs/jquery/jqueryui-amd-1.11.4.min',
    'ojs': '../js/libs/oj/v2.1.0/min',
    'ojL10n': '../js/libs/oj/v2.1.0/ojL10n',
    'ojtranslations': '../js/libs/oj/v2.1.0/resources',
    'signals': '../js/ibs/js-signals/signals.min',
    'text': '../js/libs/require/text',
    'promise': '../js/libs/es6-promise/promise-1.0.0.min',
    'hammerjs': '../js/libs/hammer/hammer-2.0.4.min',
    'ojdnd': '../js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
    'lvvm' : '../js/masterVM/bindingApp/ojlistviewApp'
//    'dndVM' : '../js/masterVM/bindingApp/DnDApp'
  },
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    },
    'jqueryui': {
      deps: ['jquery']
    }
  },
    config: {
        ojL10n: {
            merge: {
            }
        }
    }
});
require(['ojs/ojcore', 'knockout', 'lvvm', 'ojs/ojcomponents', 'ojs/ojknockout', 
    'ojs/ojtable', 'ojs/ojtable-model', 'ojs/ojselectcombobox'], // add additional JET component libraries as needed
  function(oj, ko,vm) // this callback gets executed when all required modules are loaded
  {
      //console.log(vm);// add any startup code that you want here
  }
);







