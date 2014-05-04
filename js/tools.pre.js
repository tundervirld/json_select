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
        
        console.log(_coreConfig);
        this.copy(id, _coreConfig);
        
    },
    copy: function(id, _coreConfig) {
        var clientTarget = new ZeroClipboard( $(id),  _coreConfig  );

//        clientTarget.on( "load", function(clientTarget){
//            clientTarget.on( "complete", function(clientTarget, args) {
//                console.log("texto copiado");
//                clientTarget.setText( args.text );
//            } );
//        } );
        console.log(clientTarget);
        
        

        clientTarget.on( 'ready', function(event) {
            //console.log( 'movie is loaded' );

            clientTarget.on( 'copy', function(event, args) {
//                event.clipboardData.setData('text/plain', event.target.innerHTML);
                var idTextToCopy = $(event.target).data("clipboard-target");
                event.clipboardData.setData('text/plain', $(idTextToCopy).html()); 
            } );

            clientTarget.on( 'aftercopy', function(event) {
//                console.log('Copied text to clipboard: ' + event.data['text/plain']);
                console.log('Copied text to clipboard: ' + event.data['text/plain']);
            } );
        } );

        clientTarget.on( 'error', function(event) {
            console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
            ZeroClipboard.destroy();
        } );

        
    }
}