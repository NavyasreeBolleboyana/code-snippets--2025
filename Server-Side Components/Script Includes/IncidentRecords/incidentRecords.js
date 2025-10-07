#ScriptInclude
var glideAjax2 = Class.create();
glideAjax2.prototype = Object.extendsObject(AbstractAjaxProcessor, {

        getCount : function(){

                var sd=this.getParameter('sysparm_sd');
                var gr=new GlideRecord('incident');
                gr.addQuery('short_description',sd);
                gr.query();
                return gr.getRowCount();

        },

    type: 'glideAjax2'
});
#ClientScript
  function onSubmit() {
 
   //Type appropriate comment here, and begin script below
      var ga= new GlideAjax('glideAjax2');
   ga.addParam('sysparm_name','getCount');
   ga.addParam('sysparm_sd',g_form.getValue('short_description'));
   ga.getXML(callbackFun);
   function callbackFun(response){
        var answer=response.responseXML.documentElement.getAttribute('answer');
alert(answer);
   }
   
}
