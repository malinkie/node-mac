var ChildProcess = require('child_process');
var config = require('./config');
var MacUtils = {
  MAC: function MAC(callback){
    callback = callback || function(){};
    ChildProcess.exec(config.commands[process.platform], function(err, stdout, stderr){
      if (err){
        callback(err);
        return;
      }
      var matches = stdout.match(config.pattern);
      if (matches){
        callback(null, matches[0]);
      } else {
        callback(new Error(MacUtils.ERRORS.MAC_NOT_FOUND));
      }
    });
  }
};

MacUtils.ERRORS = {
  MAC_NOT_FOUND: "Mac address could not be found."
};

module.exports = MacUtils;
