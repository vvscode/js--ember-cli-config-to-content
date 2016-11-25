# Config-to-html

The main purpose of this addon - allow to past `APP` part of your ember-cli application into `index.html`.
Our goal on creation such addon - add variables into `index.html` which allow us create pre-flight scripts/requests to improve performance during loading our application.

You can imaging that it do almost the same as [ember-cli-content-for-config](https://github.com/bmac/ember-cli-content-for-config). The only difference - `content-for-config` allow export only certain fields from config. While this addon export **all** app-configuration into `index.html`


## Installation

* `npm install vvscode/js--ember-cli-config-to-content --save-dev`

## Usage

Inside you `index.html` add something like

```javascript
(function() {
	var appConfig = {{content-for "config"}};
	// put here the rest of your code
})();
```
