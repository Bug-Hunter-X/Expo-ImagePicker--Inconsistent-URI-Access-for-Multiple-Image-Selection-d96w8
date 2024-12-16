The solution involves saving the selected images to permanent storage using the Expo FileSystem API. Before closing the application, the temporary URIs are used to copy images to a persistent directory. On app restart, images are loaded from this directory, avoiding the issue of inaccessible temporary files.

```javascript
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

// ... other code ...

async function pickMultipleImages() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    allowsMultipleSelection: true,
  });

  if (!result.canceled) {
    const savedImages = await Promise.all(
      result.assets.map(async (asset) => {
        const uri = asset.uri;
        const newUri = FileSystem.documentDirectory + 'images/' + asset.fileName;
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'images/', {
          intermediates: true
        });
        await FileSystem.copyAsync({
          from: uri,
          to: newUri,
        });
        return newUri;
      })
    );
    // Use the 'savedImages' array containing permanent URIs.
  }
}

// ... other code ...
```