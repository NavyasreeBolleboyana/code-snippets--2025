 
 	
#BusinessRule

(function executeRule(current, previous /*null when async*/) {

        // Add your code here

        var grp=current.assignment_group.manager.name;
        g_scratchpad.grName=grp;

})(current, previous);


#ClientScript

function onLoad() {
   //Type appropriate comment here, and begin script below

   if(!(g_form.isNewRecord()) && g_form.getValue('assignment_group') != ''){
alert(g_scratchpad.grName);
   }
 
}
