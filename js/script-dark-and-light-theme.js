const css = `
  @media (max-width: 700px) {
    .darkmode-widget {
      position: fixed !important;
      bottom: 0px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
    }
  }
`;

const style = document.createElement("style");
style.appendChild(document.createTextNode(css));

document.head.appendChild(style);

const options = {
  bottom: "75px", // default: '32px'
  right: "32px", // default: '32px'
  left: "unset", // default: 'unset'
  time: "0.4s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

document.querySelector(".darkmode-toggle").classList.add("darkmode-widget");
