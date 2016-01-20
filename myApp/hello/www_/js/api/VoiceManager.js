//Singleton Object
var VoiceManager = (function () {     
  var instance;
 
  function createObject() {
      var cacheManager = CacheManager.getInstance();
      var VOICES_KEY = "voices";
      var voiceMap;
      var audioMedia;
      
      return {
          getVoices: function () {
              voiceMap = cacheManager.get(VOICES_KEY) || {};
              
              return voiceMap;
          }, 
          getVoiceDetails: function (voiceID) {
              voiceMap = cacheManager.get(VOICES_KEY) || {};
              
              return voiceMap[voiceID];
          },
          saveVoice: function (voiceItem) {  
              voiceMap = cacheManager.get(VOICES_KEY) || {};
              
              voiceMap[voiceItem.id] = voiceItem;
              
              cacheManager.put(VOICES_KEY, voiceMap);
          }, 
          removeAllVoices: function() {
              cacheManager.remove(VOICES_KEY);
          },
          recordVoice: function (recordingCallback) {
              navigator.device.capture.captureAudio(recordingCallback.captureSuccess, 
                                                    recordingCallback.captureError, 
                                                    {limit: 1});
          }, 
          playVoice: function (filePath, playCallback) {
              if (filePath) {
            	  
            	  //You have to make this in order to make this working on Android ...
                  filePath = filePath.replace("file:/","file://");
                  
	              this.cleanUpResources();
	                 
	              audioMedia = new Media(filePath, playCallback.playSuccess, playCallback.playError);
	            
	              // Play audio
	              audioMedia.play();
              }            
          }, 
          cleanUpResources: function() {
              if (audioMedia) {
            	  audioMedia.stop();
                  audioMedia.release();
                  audioMedia = null;
              } 
          }
    };
  };
 
  return {
    getInstance: function () {
      if (!instance) {
          instance = createObject();
      }
 
      return instance;
    }
  }; 
})();