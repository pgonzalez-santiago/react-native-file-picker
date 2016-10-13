# react-native-file-picker

A React Native module that allows you to use native UI to select a file from the device library.

> This is a fork of `Lichwa/react-native-file-picker` that adds support for latest React Native, implements promises and more.

## Install package

You can install package with `react-native install` which will automatically link all the native files for you.

```bash
$ react-native install react-native-file-picker --save
```

**Note**: If you are installing this package with `yarn add` or `npm install`, run the following after:

```bash
$ react-native link react-native-file-picker
```

## Configure native projects

### Android

In order to allow your users select files from within your application, you will have to include relevant android permissions inside your `AndroidManifest.xml` file.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.myApp">
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  <uses-feature android:name="android.hardware.camera" android:required="true"/>
  <uses-feature android:name="android.hardware.camera.autofocus" />
</manifest>
```

## Usage

For detailed usage, please check `examples` folder.

### Picking a file

In order to pick any file using native UI, you'll have to import FilePicker module and call `pickFile` method on it.

1. In your React Native javascript code, bring in the native module:

```js
import FilePicker from 'react-native-file-picker';

FilePicker.pickFile({ title: 'Pick something', type: '*/*' })
   .then(res => {
     if (!res.cancelled) {
       console.log('We have a file');
     } 
   })
   .catch(err => {});
```

Returned promise will be resolved after user either selects a file or dismisses the picker. Otherwise, it will be rejected with an error indicating the failure.

**Note**: `response` the promise resolves with has a `cancelled` boolean you can use to indicate whether file was picked or not.
