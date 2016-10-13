/**
 * index.js
 * react-native-file-picker
 *
 * Copyright © 2016 Callstack.io. All rights reserved.
 *
 * @flow
 */

import { NativeModules } from 'react-native';

const { FilePickerManager } = NativeModules;

type PickerOptions = {
  title?: string;
  type?: string;
}

type PickerResponse =
  | { cancelled: true; }
  | { uri: string; path?: string; }

export default {
  pickFile(options?: PickerOptions = {}): Promise<PickerResponse> {
    return FilePickerManager.pickFile(options);
  },
};
