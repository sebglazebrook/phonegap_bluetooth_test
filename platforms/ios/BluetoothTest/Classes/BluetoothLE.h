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

@end
