//
//  BluetoothLE.m
//  BluetoothTest
//
//  Created by Seb on 6/09/13.
//
//

#import "BluetoothLE.h"
#import "YMSCBPeripheral.h"

@interface BluetoothLE()

@end

@implementation BluetoothLE {
    
    DEACentralManager *bluetoothManager;
    
}
    
    - (void)pluginInitialize {
        
        NSLog(@"Connecting to bluetooth..");
        bluetoothManager = [DEACentralManager initSharedServiceWithDelegate:self];
        NSLog(@"Connected to bluetooth");
    }

    -(void) startScanning:(CDVInvokedUrlCommand *)command {
        
        sleep(1);
        NSLog(@"Scanning for devices..");
        [bluetoothManager startScan];
        CDVPluginResult *pluginResult = [ CDVPluginResult
                                         resultWithStatus    : CDVCommandStatus_OK
                                         ];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
    
    -(void) stopScanning:(CDVInvokedUrlCommand *)command {
        
        [bluetoothManager stopScan];
        CDVPluginResult *pluginResult = [ CDVPluginResult
                                         resultWithStatus    : CDVCommandStatus_OK
                                         ];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
       
    }

    -(void) numberOfPeripherals:(CDVInvokedUrlCommand *)command {
    
        NSUInteger numberOfPeripherals = [bluetoothManager count];
        CDVPluginResult *pluginResult = [ CDVPluginResult
                                     resultWithStatus    : CDVCommandStatus_OK
                                     messageAsInt        :  (int)numberOfPeripherals
                                     ];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    
    }

    - (void)centralManager:(CBCentralManager *)central
            didDiscoverPeripheral:(CBPeripheral *)peripheral
            advertisementData:(NSDictionary *)advertisementData
            RSSI:(NSNumber *)RSSI {
    
        [self.webView stringByEvaluatingJavaScriptFromString:@"window.bluetoothEvents.foundPeripheral()"];
    }

@end
