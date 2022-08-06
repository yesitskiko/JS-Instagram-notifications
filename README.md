# This requires JQUERY or else it won't work.
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# JS-Instagram-notifications
The brand new notification library that tries to resemble the new Instagram native notifications.
The notifications aren't 1:1 but they are good enough.

# Documentation
## How to implement
Download the script.js and put it inside your website folder and add a script header to your html code to run it.
Then add this to your body:
```html
<div id="notificationHolder" style="position: absolute; top: 0px; width: 100%; opacity: .9; margin: -8px; background-color: transparent;"></div>
```
Then add this to your style.css file:
```css
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.slide-in-blurred-top{-webkit-animation:slide-in-blurred-top .6s cubic-bezier(.23,1.000,.32,1.000) both;animation:slide-in-blurred-top .6s cubic-bezier(.23,1.000,.32,1.000) both}
@-webkit-keyframes slide-in-blurred-top{0%{-webkit-transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform:translateY(-1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-top{0%{-webkit-transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform:translateY(-1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}

.slide-out-blurred-bottom{-webkit-animation:slide-out-blurred-bottom .45s cubic-bezier(.755,.05,.855,.06) both;animation:slide-out-blurred-bottom .45s cubic-bezier(.755,.05,.855,.06) both}
@-webkit-keyframes slide-out-blurred-bottom{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(1000px) scaleY(2) scaleX(.2);transform:translateY(1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-bottom{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(1000px) scaleY(2) scaleX(.2);transform:translateY(1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}
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
