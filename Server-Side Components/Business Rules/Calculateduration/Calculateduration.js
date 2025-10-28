(function executeRule(current, previous /*null when async*/) {

	var gr = new GlideRecord('sn_openframe_phone_log');
gr.addQuery('duration','');
gr.query();
var count = 0;
while(gr.next()) {
    if (gr.start_time != '' && gr.end_time != '') {
        var start = gr.start_time.getDisplayValue();
        var end = gr.end_time.getDisplayValue();
        gr.duration =  gs.dateDiff(start, end);
 
        gr.update();
       
        count++;
    }
}
 

})(current, previous);
