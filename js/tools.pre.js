ToolsPre = {
    init:function(id){
        
        var _coreConfig = {

            // URL to movie, relative to the page. Default value will be "ZeroClipboard.swf" under the
            // same path as the ZeroClipboard JS file.
            swfPath: "js/zeroClipboard/ZeroClipboard.swf",

            // Page domains that the SWF should trust (single string or array of strings)
            trustedDomains: [window.location.host],

            // Include a "nocache" query parameter on requests for the SWF
            cacheBust: true,

            // Force the use of the enhanced (rich) clipboard on Linux OSes despite its problems
            forceEnhancedClipboard: false
        };
        this.copy(id, _coreConfig);
        
    },
    copy: function(id, _coreConfig) {
        var clientTarget = new ZeroClipboard( $(id),  _coreConfig  );

        clientTarget.on( 'ready', function(event) {
        //Call and load of file swf to copy text

            //Funciton to copy text in clipboard            
            clientTarget.on( 'copy', function(event, args) {
                var idOriginTextToCopy = $(event.target).data("clipboard-target");
                event.clipboardData.setData('text/plain', $(idOriginTextToCopy).html()); 
            } );

            clientTarget.on( 'aftercopy', function(event) {
            //Event after copy text in clipboad more common used, for show messages Text copied...!
             //console.log('Copied text to clipboard: ' + event.data['text/plain']);
                $(".message").alerts("success",{
                    delay:{show: 350, hidden: 5000},
                    title: "Texto copiado.",
                    message: "El json esta en el porta papeles, puede copiarlo en su editor de JSON preferido."
                });
            } );
        } );

        clientTarget.on( 'error', function(event) {
            console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
            ZeroClipboard.destroy();
        } );

        
    }
}