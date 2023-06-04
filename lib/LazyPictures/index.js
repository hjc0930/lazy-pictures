"use strict";
var react = require("react");
var jsxRuntime = require("react/jsx-runtime");
const LazyPictures = (props) => {
  const childRef = react.useRef(null);
  react.useEffect(() => {
    var _a;
    (_a = childRef.current) == null ? void 0 : _a.setAttribute("data-src", props.src);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          const dataSrc = image.getAttribute("data-src");
          image.setAttribute("src", dataSrc);
          observer.unobserve(image);
        }
      });
    });
    observer.observe(childRef.current);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx("img", {
    ...props,
    src: void 0,
    ref: childRef
  });
};
LazyPictures.displayName = "LazyPictures";
module.exports = LazyPictures;
