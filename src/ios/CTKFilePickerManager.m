//
//  CTKInterstitialAdManager.h
//  rn-file-picker
//
//  Created by Michał Grabowski on 13/10/2016.
//  Copyright © 2016 callstack. All rights reserved.
//

#import "CTKFilePickerManager.h"
#import "RCTConvert.h"
#import "RCTBridgeModule.h"

@interface CTKFilePickerManager ()

@end

@implementation CTKFilePickerManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(pickFile:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  
}

@end
