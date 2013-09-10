//
//  BluetoothLE.h
//  BluetoothTest
//
//  Created by Seb on 6/09/13.
//
//

#import <Cordova/CDV.h>
#import "DEACentralManager.h"

@interface BluetoothLE : CDVPlugin
        
    -(void) startScanning:(CDVInvokedUrlCommand *)command;
    
    -(void) stopScanning:(CDVInvokedUrlCommand *)command;

    -(void) numberOfDiscoveredPeripherals:(CDVInvokedUrlCommand *)command;

    -(void) requestConnectedPeripherals:(CDVInvokedUrlCommand *)command;

    -(void) fetchPeripheral:(CDVInvokedUrlCommand *)command;

@end
