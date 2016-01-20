(function() {
    
    var voiceManager = VoiceManager.getInstance();
    
    $(document).on("pageinit", "#voiceRecording", function(e) {
        e.preventDefault();
        
        $("#saveVoice").on("tap", function() {
            e.preventDefault();

            var voiceItem = new VoiceItem($("#title").val() || "Untitled", 
                                          $("#desc").val() || "", 
                                          $("#location").val() || "",
                                          $("#vid").val() || null);
            
            voiceManager.saveVoice(voiceItem);
            
            $.mobile.changePage("#voiceList");
        });        
        
        $("#recordVoice").on("tap", function() {
            e.preventDefault();
        
            var recordingCallback = {};
            
            recordingCallback.captureSuccess = handleCaptureSuccess;
            recordingCallback.captureError = handleCaptureError;
            
            voiceManager.recordVoice(recordingCallback);
         }); 
        
        $("#playVoice").on("tap", function() {
            e.preventDefault();
        
            var playCallback = {};
            
            playCallback.playSuccess = handlePlaySuccess;
            playCallback.playError = handlePlayError;
            
            voiceManager.playVoice($("#location").val(), playCallback);
        });           
        
    });
    
    $(document).on("pageshow", "#voiceRecording", function(e) {
        e.preventDefault();
        
        var voiceID = ($.mobile.pageData && $.mobile.pageData.voiceID) ? $.mobile.pageData.voiceID : null;
        var voiceItem = new VoiceItem("", "", "");
        
        if (voiceID) {
            
            //Update an existing voice
            voiceItem = voiceManager.getVoiceDetails(voiceID);
        } 
        
        populateRecordingFields(voiceItem);
        
        if (voiceItem.location.length > 0) {
            $("#playVoice").closest('.ui-btn').show();
        } else {
            $("#playVoice").closest('.ui-btn').hide();    
        }        
    });
    
    $(document).on("pagebeforehide", "#voiceRecording", function(e) {
        voiceManager.cleanUpResources();
    });
    
    function populateRecordingFields(voiceItem) {
        $("#vid").val(voiceItem.id);
        $("#title").val(voiceItem.title);
        $("#desc").val(voiceItem.desc);
        $("#location").val(voiceItem.location);
    }
    
    function handleCaptureSuccess(mediaFiles) {
        if (mediaFiles && mediaFiles[0]) {        
            currentFilePath = mediaFiles[0].fullPath;
            
            $("#location").val(currentFilePath);
            
            $("#playVoice").closest('.ui-btn').show();  
        }
    }
    
    function handleCaptureError(error) {
    	displayMediaError(error);
    }  
    
    function handlePlaySuccess() {
        console.log("Voice file is played successfully ...");
    }
    
    function handlePlayError(error) {
    	displayMediaError(error);
    }        
    
    function displayMediaError(error) {
        if (error.code == MediaError.MEDIA_ERR_ABORTED) {
            AppUtil.showMessage("Media aborted error");
        } else if (error.code == MediaError.MEDIA_ERR_NETWORK) {
            AppUtil.showMessage("Network error");
        } else if (error.code == MediaError.MEDIA_ERR_DECODE) {
            AppUtil.showMessage("Decode error");
        } else if (error.code ==  MediaError.MEDIA_ERR_NONE_SUPPORTED) {
            AppUtil.showMessage("Media is not supported error");
        } else {
        	console.log("General Error: code = " + error.code);
        }        
    }
})();
