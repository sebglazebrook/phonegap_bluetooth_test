bluetoothLE.startScanning(
  function(){
    console.log('success');
  },
  function(){
    console.log('failure');
  },
  ''
)

bluetoothLE.discoveredPeripherals(
  function(){
    console.log('success');
  },
  function(){
    console.log('failure');
  },
  ''
)