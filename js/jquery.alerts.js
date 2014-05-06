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
        this.delay    = {show: 350, hidden: 1000};  //1s, time in mili secunds delay to hidden message        
        this.title    = "Title in you alert message"; //Title Message alert
        this.message  = "This is a message, is a option inyect data in message for dynamic valus in real time in your alert"; //Message alert
   }

    alerts.prototype.show = function(objDom, type, conf){        
        var _this = this;
        if(conf){
            this.delay    = conf.delay    || _this.delay ;            
            this.title    = conf.title    || _this.title ;            
            this.message  = conf.message  || _this.message ;            
        }
            this.type     = type          || _this.type ;
        
        //Set values
        
        $(objDom).children().first().next().html(this.title);
        $(objDom).children().last().html(this.message);

        

        //Add Type Alert
        $(objDom).addClass(this.type);
        $(objDom).animate({top: $(window).scrollTop()}, this.delay.show);
        $(objDom).children().first().animate({top: 10}, this.delay.show);
        
        //set trigger click botton close
        _this.trigger(objDom);

        //Set timer to hide messages 
        setTimeout(function(){
            
            _this.hide(objDom);
        }, _this.delay.hidden);
    };

    alerts.prototype.hide = function(objDom){  
        $(objDom).animate({top: - $(objDom).outerHeight() * 3}, this.delay.show);
        $(objDom).children().first().animate({top: -100}, this.delay.show);

        //removeOld Class
        $(objDom).removeClass(this.type);

    };

    alerts.prototype.close = function(objDom){  
        $(objDom).animate({top: - $(objDom).outerHeight() * 3}, this.delay.show);

    };

    alerts.prototype.trigger = function(objDom){  
        var _this = this;
        $(objDom).children().first().on({
            'click':function(){
                _this.close(objDom);
            }
        });

    };



//Type messages ['info','warning','error','success']
$.fn.alerts = function(type, conf){
    //instanced alerts message
    
    var alert;
    alert = new alerts();
    alert.show(this, type, conf);
};

})(jQuery);
    