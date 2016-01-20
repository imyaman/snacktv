var VoiceItem = function(title, desc, location, id) {
	this.title = title || "";
	this.desc = desc || "";
	this.location = location || "";
	this.id = id || "Voice_" + (new Date()).getTime();
};

VoiceItem.prototype.toString = function () {
	return "Title = " + this.title + ", " +
		   "Description = " + this.desc + ", " +
		   "Location = " + this.location + ", " +
		   "ID = " + this.id;
};