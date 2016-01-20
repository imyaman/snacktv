var AppUtil = {};

AppUtil.showMessage = function (message) {
	navigator.notification.alert(message, null, 'VoiceMemo', 'Ok');
};