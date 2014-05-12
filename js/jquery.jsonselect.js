/*
* Plugin Json to Select
*
* @package    Json Select
* @author     Roger Reyes
* @version    V1
* @date    23/05/2013
*
*
//example use 
$('#my_select').jsonselect(data, {
                atributes:{
                            codigo: "code",
                            "codigo_transaccional": "id_transactional",
                            //"code": "CODPA1BR",
                            "pais": "country_name",
                            "superficie_km_2": "size",
                            "poblacion": "population",
                            "IDH": "0,730",//Indice de desarrollo Humano
                            "FIELD5": "",
                            "mandatario": "Dilma Rousseff",
                            "FIELD7": "",
                            "bandera": "http://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/20px-Flag_of_Brazil.svg.png"
                },
                options: response
            });
*/
(function($){  
    
    // definición de la función  
    $.fn.jsonselect = function(options){  
        
        
        //glovalization of id select
        _this = $.fn.build_select.defaults;
        _this.id_select = this.selector;
        
        if(typeof options !== 'object' && options !== undefined){
            eval(options + '()');
        }else{    
            // Configuracion de objetos y nombres de variables
            var opts = $.extend({}, _this, options);
            
            // Invertir Claves por valores en los objetos y retornarlo como array
            array_options_object =  object_invert_key_value(opts.data_option);
            options_object =  array_options_object[0];
            n_options_object = array_options_object[1];
            
            //Reasignacion de los datos del response para ser utilizados mas adelante
            _this.options = opts.options;
            var data = _this.options;
            
            //Debug
           // debug(data);

            if(data !== null){
                var options_array = new Array();

                $.each(data, function(){
                    
                    var name_option = "";
                    
                    //Record data_option
                    var option_array_data = new Array();

                    for (var key in this) 
                    {
                        var option_data = new Array();
                        if(options_object[key] == "description"){
                            name_option = this[key];
                        }else{
                            //Asignbar nombres asignados en la configuracion del plugin para el html
                           if(options_object[key] != undefined){
                                option_data.push(options_object[key]);
                                option_data.push(this[key]);
                                option_array_data.push(option_data.join("="));
                            }
                        }
                    };
                    
                    //condicional para cuando solo viene un atributos colocarlo como descripcion y valor
                    if(n_options_object==1){
                        option_data.push("value");
                        if(parseInt(name_option) >= 0){ 
                            option_data.push(name_option);
                        }else{
                            option_data.push(name_option.replace(/ /g,"_"));
                        }
                        option_array_data.push(option_data.join("="));
                    }

                    options_array.push("<option "+ option_array_data.join(" ")+" > "+name_option+"</option>");
                });
                build_select_options(options_array);
            }else build_select_default();
        }
        
        function refresh() {
          /*$.fn.build_select()*/
        };
        
        function clear() {
            $($.fn.build_select.defaults.id_select).empty();
        };
        
        // private function for debugging the size of objects
        function debug($obj) {
            if (window.console && window.console.log)
                   window.console.log('Number of objects: ' + $obj.length);
        };
        
        // Build Select options for default options
        function build_select_default() {
            option_array = new Array();
            option_array.push("<option value='default_name'>Opcion por Defecto</option>");
            build_select_options(option_array);
        };
        
        //Introducir todos los datos de las opciones, dentro del ID destino
        function build_select_options(options_array) {
            $(_this.id_select).html(options_array.join(""));
        };
        
        //Invert key for value for names html of options
        function object_invert_key_value(object){
            var object_aux = new Array;
            var cont = 0;
                for (var key in object){
                // Funcion para reemplazar todo el contenido de la cadena con -
                object_aux[object[key]] = key.replace(/_/g,"-");
                cont++;
            }
            return [object_aux, cont];
        };
    }; 
 
    // definimos los parámetros junto con los valores por defecto de la función  
    $.fn.build_select.defaults = {  
      // Opciones de mi select por defecto
      data_option:{
            value: null
      },
      options: null
    }; 
})(jQuery);