# JS-Instagram-notifications
The brand new notification library that tries to resemble the new Instagram native notifications.
The notifications aren't 1:1 but they are good enough.

# Documentation
## How to implement
Add the code below to your **head** in your html file.
```html
<script src="script.js"></script>
```

## Usage
```js
/*
  -> notify(<string> title, <string> content, <int> time)
  -> If you don't want to have an expiration time on your notifications then you can just ignore the third argument.
*/
notify("Github", This is a very nice website"); // Not passing a third argument makes it stay until the client clicks it.
```

# Preview

![Alt Text](markdown/video.gif)
