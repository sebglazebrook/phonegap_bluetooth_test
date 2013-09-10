window.bluetoothLE = {
    
    startScanning: function(success, fail, resultType){
        return Cordova.exec( success, fail,
                        "BluetoothLE",
                        "startScanning",
                        [resultType]);
    },
    
    stopScanning: function(success, fail, resultType){
        return Cordova.exec(success, fail,
                            "BluetoothLE",
                            "stopScanning",
                            [resultType]);
    },
    
    numberOfDiscoveredPeripherals: function(success, fail, resultType){
        return Cordova.exec(success, fail,
                            "BluetoothLE",
                            "numberOfDiscoveredPeripherals",
                            [resultType]);
    },
    
    requestConnectedPeripherals: function(success, fail, resultType){
        return Cordova.exec(success, fail,
                        "BluetoothLE",
                        "requestConnectedPeripherals",
                        [resultType]);
    },

    fetchPeripheral: function(success, fail, resultType){
        return Cordova.exec(success, fail,
                        "BluetoothLE",
                        "fetchPeripheral",
                        [resultType]);
    }
    
}

window.bluetoothEvents = {
    
    foundPeripheral: function(){
        console.log('found a peripheral');
    },
    
    foundConnectedPeripherals: function() {
        console.log('found connected peripherals');
    }

}