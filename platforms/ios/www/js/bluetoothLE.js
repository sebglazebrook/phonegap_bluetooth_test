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
    
    numberOfPeripherals: function(success, fail, resultType){
        return Cordova.exec(success, fail,
                            "BluetoothLE",
                            "numberOfPeripherals",
                            [resultType]);
    }
    
}

window.bluetoothEvents = {
    
    foundPeripheral: function(){
        console.log('found peripheral');
    }
    
}