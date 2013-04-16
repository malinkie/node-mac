# node-mac

Small node.js module to grab ur mac address.

## Install

    npm install git://github.com/malinkie/node-mac.git

## Use

    //Get it!
    var mac = require('node-mac');
	
	//Use it
	
	//MAC attempts to find hosts MAC address based on commands in config.js set for the returned value of process.platform
	//stdout from this command is searched though for corrosponding reg ex pattern and the first match is returned.
	mac.MAC(function(err, res){
	    console.log(res); // response will be string representation of mac address.
	});
	
	//isMAC returns true if given string is a valid representatio of a MAC Address
	//false otherwise
	var isThisStringAMacAddress = mac.isMAC("12:34:56:78:90:AB")

### TODO

* Add test cases
* Function to return a random MAC Address
* ...
* profit?!
