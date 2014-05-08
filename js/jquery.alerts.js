/*
* Plugin Messages alerts
*
* @package    Message alerts
* @author     Roger Reyes
* @version    V1
* @date    04/05/2014
*
*
//example use 
$(".message").alerts("success",{
    animationspeed:{show: 350, hide: 150000},
    title: "Texto copiado.",
    message: "El json esta en el porta papeles, puede copiarlo en su editor de JSON preferido."
});
*/
(function($){
    //Type messages 
    //remember on ly use 'info' || 'warning' || 'error' ||'success', else you've build Css class to name assign
    $.fn.alerts = function(type, conf){

        //options default alerts plugin
        var defaults  = {
            type     :"success",
            animationspeed : {show: 350, hide: 3000},  //1s, time in mili secunds delay to hide message        
            title    : "Title in you alertMessages message", //Title Message alertMessages
            message  : "This is a message, is a option inyect data in message for dynamic valus in real time in your alertMessages", //Message alertMessages
            autoHide : true // auto Hide Alerts post show
        };

        //Extend dem' options and save data conf in plugin
        var options = $.extend({}, defaults , conf );

        //global variables;
        var alertMessages = $(this),
            alertElements = alertMessages.children(),
            // children elements in message div
            elements = { 
                        buttonClose: alertElements.first(), 
                        title: alertElements.first().next(), 
                        message: alertElements.last()
            },
            height = alertMessages.outerHeight(),
            topPositionWindows = $(window).scrollTop(),
            topPosition = alertMessages.css("top"),
            locked = false,
            typeAlert = type; //'info' || 'warning' || 'error' ||'success']



        elements.buttonClose.unbind('click.alertMessagesEvent');

        //Open Method
        alertMessages.bind('alerts:open', function () {
                if(!locked) {
                    lockAlerts();
                    elements.title.html(options.title);
                    elements.message.html(options.message);

                    //Add Type Alert
                    alertMessages.addClass(typeAlert);
                    alertMessages.animate({top: topPositionWindows}, options.animationspeed.show);
                    elements.buttonClose.animate({top: 10}, options.animationspeed.show);
                }
            alertMessages.unbind('alerts:open');
        });  

        //Closing Animation
        alertMessages.bind('alerts:close', function () {
          if(!locked) {
                lockAlerts();

                alertMessages.animate({top: - height * 3}, options.animationspeed.show);
                elements.buttonClose.animate({top: -100}, options.animationspeed.show);

                alertMessages.trigger('buttonClose');

                //removeOld Class
                setTimeout(function(){
                    alertMessages.removeClass(typeAlert)
                }, 150);
            
                unlockAlerts();
            }
            
            alertMessages.unbind('reveal:close');
        });

        //Close Modal Listeners
        var closeButton = elements.buttonClose.bind('click.alertMessagesEvent', function () {
          unlockAlerts();
          alertMessages.trigger('alerts:close');
          console.log("se cierra");
        });

        //Show Alerts Immediately
        alertMessages.trigger('alerts:open');

        

        //Set timer to hide messages 
        if(options.autoHide){
            setTimeout(function(){
                unlockAlerts();    
                alertMessages.trigger('alerts:close')
            }, options.animationspeed.hide);
        };
        

        //function lock unlock alerts
        function unlockAlerts() { 
            locked = false;
        }
        function lockAlerts() {
            locked = true;
        }      
        
    };

})(jQuery);
     