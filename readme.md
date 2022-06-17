Start Chrome using:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')
```

You will get a message like

```
DevTools listening on <address>
```

Copy this address and paste it in the script's `wsChromeEndpointUrl` variable.

Log into your user in the opened Chrome window.

Go to your search, and copy the address into the `savedSearch` variable in the script.

Navigate to the project folder and run the script using

```
node index.js
```
