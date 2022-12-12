function render() {
  const title = require("./title");
  app.innerHTML = title;
}
render()

if (module.hot) {
  module.hot.accept("./title", () => {
    console.log("接受到更新通知");
    render();
  });
}
