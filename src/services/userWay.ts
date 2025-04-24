declare const REACT_APP_USERWAY: string;

// Declare global variable for UserWay

declare global {
  interface Window {
    userway_settings: any;
    REACT_APP_USERWAY: string;
  }
}

// Function to configure and load UserWay widget
function configUserWay() {
  const USERWAY_ID = window.REACT_APP_USERWAY || REACT_APP_USERWAY;

  if (USERWAY_ID) {
    try {
      // Assign the account ID to the global settings
      window.userway_settings = { account: USERWAY_ID };

      // Create a new script element for the UserWay widget
      const userwayScript = document.createElement('script');
      userwayScript.type = 'text/javascript';
      userwayScript.async = true;
      userwayScript.src = `https://cdn.userway.org/widget.js`;
      userwayScript.setAttribute('data-position', '3');
      // Append the script element to the document head or body
      const s = document.getElementsByTagName('script')[0];
      if (s.parentNode) {
        s.parentNode.insertBefore(userwayScript, s);
      }
    } catch (er) {
      console.error('UserWay error', er);
    }
  }
}

// Call the function to initialize UserWay widget
export default configUserWay();
