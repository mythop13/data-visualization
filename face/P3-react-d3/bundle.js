(function (React, ReactDOM, d3) {
  "use strict";

  React = React && React.hasOwnProperty("default") ? React["default"] : React;
  ReactDOM =
    ReactDOM && ReactDOM.hasOwnProperty("default")
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

  const App = () =>
    React.createElement(
      "svg",
      { width: width, height: height },
      React.createElement(
        "g",
        { transform: `translate(${centerX},${centerY})` },
        React.createElement("circle", {
          r: centerY - strokeWidth / 2,
          fill: "yellow",
          stroke: "black",
          "stroke-width": strokeWidth,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGFyYyB9IGZyb20gJ2QzJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5jb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuY29uc3QgY2VudGVyWSA9IGhlaWdodCAvIDI7XG5jb25zdCBzdHJva2VXaWR0aCA9IDIwO1xuY29uc3QgZXllT2Zmc2V0WCA9IDkwO1xuY29uc3QgZXllT2Zmc2V0WSA9IDEwMDtcbmNvbnN0IGV5ZVJhZGl1cyA9IDQwO1xuY29uc3QgbW91dGhXaWR0aCA9IDIwO1xuY29uc3QgbW91dGhSYWRpdXMgPSAxNDA7XG5cbmNvbnN0IG1vdXRoQXJjID0gYXJjKClcbiAgLmlubmVyUmFkaXVzKG1vdXRoUmFkaXVzKVxuICAub3V0ZXJSYWRpdXMobW91dGhSYWRpdXMgKyBtb3V0aFdpZHRoKVxuICAuc3RhcnRBbmdsZShNYXRoLlBJIC8gMilcbiAgLmVuZEFuZ2xlKE1hdGguUEkgKiAzIC8gMik7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjZW50ZXJYfSwke2NlbnRlcll9KWB9PlxuICAgICAgPGNpcmNsZVxuICAgICAgICByPXtjZW50ZXJZIC0gc3Ryb2tlV2lkdGggLyAyfVxuICAgICAgICBmaWxsPVwieWVsbG93XCJcbiAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICBzdHJva2Utd2lkdGg9e3N0cm9rZVdpZHRofVxuICAgICAgLz5cbiAgICAgIDxjaXJjbGVcbiAgICAgICAgY3g9ey1leWVPZmZzZXRYfVxuICAgICAgICBjeT17LWV5ZU9mZnNldFl9XG4gICAgICAgIHI9e2V5ZVJhZGl1c31cbiAgICAgIC8+XG4gICAgICA8Y2lyY2xlXG4gICAgICAgIGN4PXtleWVPZmZzZXRYfVxuICAgICAgICBjeT17LWV5ZU9mZnNldFl9XG4gICAgICAgIHI9e2V5ZVJhZGl1c31cbiAgICAgIC8+XG4gICAgICA8cGF0aCBkPXttb3V0aEFyYygpfS8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCByb290RWxlbWVudCk7Il0sIm5hbWVzIjpbImFyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBSUEsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ2xCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztFQUNuQixNQUFNLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQzFCLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDM0IsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0VBQ3ZCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztFQUN0QixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7RUFDdkIsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0VBQ3JCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztFQUN0QixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7O0VBRXhCLE1BQU0sUUFBUSxHQUFHQSxNQUFHLEVBQUU7S0FDbkIsV0FBVyxDQUFDLFdBQVcsQ0FBQztLQUN4QixXQUFXLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztLQUNyQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztFQUU3QixNQUFNLEdBQUcsR0FBRztJQUNWLDhCQUFLLE9BQU8sS0FBSyxFQUFFLFFBQVEsTUFBTTtNQUMvQiw0QkFBRyxXQUFXLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5QztVQUNFLEdBQUcsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDLEVBQzVCLE1BQUssUUFBUSxFQUNiLFFBQU8sT0FBTyxFQUNkLGdCQUFjLFdBQVcsRUFBQztRQUU1QjtVQUNFLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFVBQVcsRUFDaEIsR0FBRyxTQUFTLEVBQUM7UUFFZjtVQUNFLElBQUksVUFBVSxFQUNkLElBQUksQ0FBQyxVQUFXLEVBQ2hCLEdBQUcsU0FBUyxFQUFDO1FBRWYsK0JBQU0sR0FBRyxRQUFRLEVBQUUsRUFBQyxDQUFFO09BQ3BCO0tBQ0E7R0FDUCxDQUFDOztFQUVGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxxQkFBQyxTQUFHLEVBQUcsRUFBRSxXQUFXLENBQUM7Ozs7In0=
