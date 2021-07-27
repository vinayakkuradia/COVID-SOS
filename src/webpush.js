import firebase from "./config";
const messaging = firebase.messaging();

class Test {
  constructor() {
    this.vapidKey =
      "BCk-uzvyWjkORh044bPYAYRPA1BIpnhE-sZaSa-GG5d24nQYoec2GrmbvAdrXTSANuVNbBkMvv7ptcmYtaRYHvA";
  }
  receiveMessage = (callback) => {
    messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      callback(payload);
      // ...
    });
  };
  getToken = () => {
    return messaging.getToken({ vapidKey: this.vapidKey });
    // [END messaging_get_token]
  };
  requestPermission = () => {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      return 0;
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      return 1;
    }

    // Otherwise, we need to ask the user for permission
    else {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          return 2;
        } else return 0;
      });
    }
  };
  deleteToken = () => {
    // [START messaging_delete_token]
    return messaging.deleteToken();
  };
  render() {
    return <>Loaded</>;
  }
}

export default Test;
