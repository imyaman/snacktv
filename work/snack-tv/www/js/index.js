/**
 * Common app functionality will be attached to the `app` namespace.
 */
var app = {
  /**
   * Application constructor.
   */
  initialize: function() {
    this.bindEvents();
  },

  /**
   * Bind event listeners.
   */
  bindEvents: function() {
    // Bind any events that are required on startup. Common events are: `load`,
    // `deviceready`, `offline`, and `online`.
    document.addEventListener('deviceready', app.onDeviceReady, false);
  },

  /**
   * The deviceready event handler.
   */
  onDeviceReady: function() {
    // Initialize push.
    push.initialize();

    // Initialize Kinvey. Paste your app key and secret below.
    var promise = Kinvey.init({
      appKey    : 'kid_PTYQPzOHPC',
      appSecret : 'e77cda0be8344cd2b807a4df93a31509'
    });
    promise.then(function(activeUser) {
      // The `Kinvey.init` function returns a promise which resolves to the
      // active user data. If there is no active user, create one.
      if(null === activeUser) {
        return Kinvey.User.signup();
      }
      return activeUser;
    }).then(function(activeUser) {
      // Your app is now connected to Kinvey and has an active user.
    });
  },
};
