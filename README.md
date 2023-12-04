# jQuery Toast Plugin

A lightweight and customizable Toast plugin for jQuery, adding user-friendly notifications to your web applications.

## Live Demo

Check out the live demo on JSFiddle: [JSFiddle Demo](https://jsfiddle.net/s4cdtvk9/)


## Installation

1. Include jQuery in your project.
2. Download and include the `toast-plugin.js` script in your HTML.
3. Call `$.toast()` with your desired options.


## Features

- **Responsive Design**: Ensures a seamless experience on all devices.
- **Customizable Icons**: Choose from a variety of icons to suit your message type.
- **Auto-Close Functionality**: Set the duration for notifications to automatically disappear.
- **Easy to Use**: Simply include the script, and you're ready to toast!


## HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toast Plugin Demo</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <!-- Include your Toast Plugin script -->
    <script src="toast-plugin.js"></script>
</head>
<body>

<!-- Example Button Triggers -->
<button onclick="showSuccessToast()">Show Success Toast</button>
<button onclick="showErrorToast()">Show Error Toast</button>
<button onclick="showInfoToast()">Show Info Toast</button>
<button onclick="showWarningToast()">Show Warning Toast</button>

<script>
    // Example Functions to Trigger Toasts
    function showSuccessToast() {
        $.toast({
            title: "Success!",
            message: "Your action was completed successfully.",
            type: "success",
            duration: 5000
        });
    }

    function showErrorToast() {
        $.toast({
            title: "Error!",
            message: "An error occurred while processing your request.",
            type: "error",
            duration: 5000
        });
    }

    function showInfoToast() {
        $.toast({
            title: "Info",
            message: "This is an informational message.",
            type: "info",
            duration: 5000
        });
    }

    function showWarningToast() {
        $.toast({
            title: "Warning!",
            message: "Please be cautious. This is a warning message.",
            type: "warning",
            duration: 5000
        });
    }
</script>

</body>
</html>
```



## Usage Examples

### Success Toast Example

```javascript
$.toast({
    title: "Success!",
    message: "Your action was completed successfully.",
    type: "success",
    duration: 5000
});
```

### Error Toast Example

```javascript
$.toast({
    title: "Error!",
    message: "An error occurred while processing your request.",
    type: "error",
    duration: 5000
});
```

### Info Toast Example

```javascript
$.toast({
    title: "Info",
    message: "This is an informational message.",
    type: "info",
    duration: 5000
});
```

### Warning Toast Example


```javascript
$.toast({
    title: "Warning!",
    message: "Please be cautious. This is a warning message.",
    type: "warning",
    duration: 5000
});
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


