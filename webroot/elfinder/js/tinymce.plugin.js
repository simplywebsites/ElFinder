tinymce.PluginManager.add("elfinder", function (editor, url) {
  editor.settings.file_browser_callback = function (id, value, type, win) {
    $('<div />').dialogelfinder({
       url: '/admin/el_finder/el_finder/connector',
       commandsOptions: {
          getfile: {
             oncomplete: 'destroy'
          }
       },
       getFileCallback: function (url) {
          var fieldElm = win.document.getElementById(id);
          fieldElm.value = editor.convertURL(url, null, true);
          if ("fireEvent"in fieldElm) {
             fieldElm.fireEvent("onchange")
          } else {
             var evt = document.createEvent("HTMLEvents");
             evt.initEvent("change", false, true);
             fieldElm.dispatchEvent(evt)
          }
       }
    });   
  }; 
}, ["../../../ElFinder/elfinder/js"]);
