(function() {
	
	var voiceManager = VoiceManager.getInstance();
	
    $(document).on("pageinit", "#voiceList", function(e) {
    	
    	$("#removeAllVoices").on("tap", function() {
    		e.preventDefault();
    		
    		voiceManager.removeAllVoices();
    		
    		updateVoiceList();
    	});      
    });
    
    $(document).on("pageshow", "#voiceList", function(e) {
        e.preventDefault();
        
        updateVoiceList();
    });
    
    function updateVoiceList() {
        var voices = voiceManager.getVoices();

        $("#voiceListView").empty();
                
        if (jQuery.isEmptyObject(voices)) {
            $("<li>No Memos Available</li>").appendTo("#voiceListView");
        } else {
            for (var voice in voices) {
            	$("<li><a href='#voiceRecording?voiceID=" + voices[voice].id + "'>" + 
            			voices[voice].title + "</a></li>").appendTo("#voiceListView");
            }
        }
        
        $("#voiceListView").listview('refresh');    	
    }
})();
