(function (React, ReactDOM, d3) {
  "use strict";

  React =
    React && Object.prototype.hasOwnProperty.call(React, "default")
      ? React["default"]
      : React;
  ReactDOM =
    ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, "default")
      ? ReactDOM["default"]
      : ReactDOM;

  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 20;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 40;
  const mouthWidth = 20;
  const mouthRadius = 140;

  const mouthArc = d3
    .arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  const BackgroundCircle = ({ radius }) =>
    React.createElement("circle", {
      r: radius,
      fill: "yellow",
      stroke: "black",
      "stroke-width": strokeWidth,
    });

  const App = () =>
    React.createElement(
      "svg",
      { width: width, height: height },
      React.createElement(
        "g",
        { transform: `translate(${centerX},${centerY})` },
        React.createElement(BackgroundCircle, {
          radius: centerY - strokeWidth / 2,
        }),
        React.createElement("circle", {
          cx: -eyeOffsetX,
          cy: -eyeOffsetY,
          r: eyeRadius,
        }),
        React.createElement("circle", {
          cx: eyeOffsetX,
          cy: -eyeOffsetY,
          r: eyeRadius,
        }),
        React.createElement("path", { d: mouthArc() })
      )
    );

  const rootElement = document.getElementById("root");
  ReactDOM.render(React.createElement(App, null), rootElement);
})(React, ReactDOM, d3);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGFyYyB9IGZyb20gJ2QzJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5jb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuY29uc3QgY2VudGVyWSA9IGhlaWdodCAvIDI7XG5jb25zdCBzdHJva2VXaWR0aCA9IDIwO1xuY29uc3QgZXllT2Zmc2V0WCA9IDkwO1xuY29uc3QgZXllT2Zmc2V0WSA9IDEwMDtcbmNvbnN0IGV5ZVJhZGl1cyA9IDQwO1xuY29uc3QgbW91dGhXaWR0aCA9IDIwO1xuY29uc3QgbW91dGhSYWRpdXMgPSAxNDA7XG5cbmNvbnN0IG1vdXRoQXJjID0gYXJjKClcbiAgLmlubmVyUmFkaXVzKG1vdXRoUmFkaXVzKVxuICAub3V0ZXJSYWRpdXMobW91dGhSYWRpdXMgKyBtb3V0aFdpZHRoKVxuICAuc3RhcnRBbmdsZShNYXRoLlBJIC8gMilcbiAgLmVuZEFuZ2xlKChNYXRoLlBJICogMykgLyAyKTtcblxuY29uc3QgQmFja2dyb3VuZENpcmNsZSA9ICh7IHJhZGl1cyB9KSA9PiAoXG4gIDxjaXJjbGUgcj17cmFkaXVzfSBmaWxsPVwieWVsbG93XCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2Utd2lkdGg9e3N0cm9rZVdpZHRofSAvPlxuKTtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnRlclh9LCR7Y2VudGVyWX0pYH0+XG4gICAgICA8QmFja2dyb3VuZENpcmNsZSByYWRpdXM9e2NlbnRlclkgLSBzdHJva2VXaWR0aCAvIDJ9IC8+XG4gICAgICA8Y2lyY2xlIGN4PXstZXllT2Zmc2V0WH0gY3k9ey1leWVPZmZzZXRZfSByPXtleWVSYWRpdXN9IC8+XG4gICAgICA8Y2lyY2xlIGN4PXtleWVPZmZzZXRYfSBjeT17LWV5ZU9mZnNldFl9IHI9e2V5ZVJhZGl1c30gLz5cbiAgICAgIDxwYXRoIGQ9e21vdXRoQXJjKCl9IC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCByb290RWxlbWVudCk7XG4iXSwibmFtZXMiOlsiYXJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7RUFJQSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7RUFDbEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0VBQ25CLE1BQU0sT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7RUFDMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUMzQixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7RUFDdkIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0VBQ3RCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztFQUN2QixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7RUFDckIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0VBQ3RCLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUN4QjtFQUNBLE1BQU0sUUFBUSxHQUFHQSxNQUFHLEVBQUU7RUFDdEIsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO0VBQzNCLEdBQUcsV0FBVyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7RUFDeEMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDMUIsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMvQjtFQUNBLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRTtFQUNwQyxFQUFFLGlDQUFRLEdBQUcsTUFBTyxFQUFDLE1BQUssUUFBUSxFQUFDLFFBQU8sT0FBTyxFQUFDLGdCQUFjLGFBQVksQ0FBRztFQUMvRSxDQUFDLENBQUM7QUFDRjtFQUNBLE1BQU0sR0FBRyxHQUFHO0VBQ1osRUFBRSw4QkFBSyxPQUFPLEtBQU0sRUFBQyxRQUFRO0VBQzdCLElBQUksNEJBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBQ25ELE1BQU0scUJBQUMsb0JBQWlCLFFBQVEsT0FBTyxHQUFHLFdBQVcsR0FBRyxHQUFFO0VBQzFELE1BQU0saUNBQVEsSUFBSSxDQUFDLFVBQVcsRUFBQyxJQUFJLENBQUMsVUFBVyxFQUFDLEdBQUcsV0FBVTtFQUM3RCxNQUFNLGlDQUFRLElBQUksVUFBVyxFQUFDLElBQUksQ0FBQyxVQUFXLEVBQUMsR0FBRyxXQUFVO0VBQzVELE1BQU0sK0JBQU0sR0FBRyxRQUFRLElBQUcsQ0FBRztFQUM3QixLQUFRO0VBQ1IsR0FBUTtFQUNSLENBQUMsQ0FBQztBQUNGO0VBQ0EsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNwRCxRQUFRLENBQUMsTUFBTSxDQUFDLHFCQUFDLFNBQUcsRUFBRyxFQUFFLFdBQVcsQ0FBQzs7OzsifQ==
