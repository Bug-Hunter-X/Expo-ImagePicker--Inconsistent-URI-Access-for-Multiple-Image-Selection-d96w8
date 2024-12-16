# Expo ImagePicker: Inconsistent URI Access for Multiple Image Selection

This repository demonstrates an uncommon bug encountered when using the Expo ImagePicker library to select multiple images. The problem lies in the inconsistency of accessing the selected image URIs after the application restarts.  Sometimes the URIs work correctly, allowing images to load; other times they point to inaccessible files, breaking the image display.

The bug's intermittent nature makes debugging challenging and leads to unpredictable behavior in production environments.  The provided code samples highlight the issue and offer a potential solution.

## Bug Reproduction

1. Clone the repository.
2. Run `npm install`.
3. Start the Expo app using `expo start`.
4. Select multiple images using the ImagePicker.
5. Close and restart the application.
6. Observe the inconsistent behavior of the image display.

## Potential Solution

The provided solution demonstrates a method to save selected images to permanent storage before closing the app, ensuring image availability after restarting. This approach addresses the inconsistency of URI access, ensuring stable image display across app sessions.