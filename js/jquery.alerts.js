/*
* Plugin Messages alerts
*
* @package    Message alerts
* @author     Roger Reyes
* @version    V1
* @date    04/05/2014
*/
(function($){

    //function pager(container, totalPages, callback, object){ 
    function alerts(object){
        this.type     = "success";
        this.position = {"top": 75} //Ubication of alerts
        this.delay    = {show: 500, hidden: 1000};  //1s, time in mili secunds delay to hidden message        
        this.prefix   = "."; //Type prefix class = '.', id = '#'
        this.title    = "Title in you message"; //Title Message alert
        this.message  = "This is a message, is a option inyect data in message for dynamic valus in real time in your alert"; //Message alert
   }

    alerts.prototype.show = function(objDom, type, conf){        
        var _this = this;
        if(conf){
            this.position = conf.position || _this.position ;
            this.delay    = conf.delay    || _this.delay ;            
        }
        this.type     = type          || _this.type ;
        
        //Set values
        
        $(objDom).children().first().next().html(this.title);
        $(objDom).children().last().html(this.message);

        //Add Type Alert
        $(objDom).addClass(this.type);
        $(objDom).animate({top: 0}, this.delay.show);
        $(objDom).children().first().animate({top: 10}, this.delay.show);
        
        //Set timer to hide messages 
        setTimeout(function(){
            _this.hide(objDom);
        }, _this.delay.hidden);
    };

    alerts.prototype.hide = function(objDom){  
        $(objDom).animate({top: - $(objDom).outerHeight() * 3}, this.delay.show);
        $(objDom).children().first().animate({top: -100}, this.delay.show);

    };

//Type messages ['info','warning','error','success']
$.fn.alerts = function(type, conf){
    //instanced alerts message
    
    var alert;
    alert = new alerts();
    alert.show(this, type, conf);
};

})(jQuery);
    