(function (React$1, ReactDOM, d3) {
  "use strict";

  React$1 =
    React$1 && React$1.hasOwnProperty("default") ? React$1["default"] : React$1;
  ReactDOM =
    ReactDOM && ReactDOM.hasOwnProperty("default")
      ? ReactDOM["default"]
      : ReactDOM;

  const BackgroundCircle = ({ radius, strokeWidth }) =>
    React.createElement("circle", {
      r: radius,
      fill: "yellow",
      stroke: "black",
      "stroke-width": strokeWidth,
    });

  const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) =>
    React.createElement(
      React.Fragment,
      null,
      React.createElement("circle", {
        cx: -eyeOffsetX,
        cy: -eyeOffsetY,
        r: eyeRadius,
      }),
      React.createElement("circle", {
        cx: eyeOffsetX,
        cy: -eyeOffsetY,
        r: eyeRadius,
      })
    );

  const Mouth = ({ mouthRadius, mouthWidth }) => {
    const mouthArc = d3
      .arc()
      .innerRadius(mouthRadius)
      .outerRadius(mouthRadius + mouthWidth)
      .startAngle(Math.PI / 2)
      .endAngle((Math.PI * 3) / 2);

    return React.createElement("path", { d: mouthArc() });
  };

  const FaceContainer = ({ children, width, height, centerX, centerY }) =>
    React.createElement(
      "svg",
      { width: width, height: height },
      React.createElement(
        "g",
        { transform: `translate(${centerX},${centerY})` },
        children
      )
    );

  const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthRadius,
    mouthWidth,
  }) =>
    React.createElement(
      FaceContainer,
      {
        width: width,
        height: height,
        centerX: centerX,
        centerY: centerY,
      },
      React.createElement(BackgroundCircle, {
        radius: centerY - strokeWidth / 2,
        strokeWidth: strokeWidth,
      }),
      React.createElement(Eyes, {
        eyeOffsetX: eyeOffsetX,
        eyeOffsetY: eyeOffsetY,
        eyeRadius: eyeRadius,
      }),
      React.createElement(Mouth, {
        mouthRadius: mouthRadius,
        mouthWidth: mouthWidth,
      })
    );

  const width = 160;
  const height = 160;

  const array = d3.range(6 * 3);

  const App = () =>
    array.map(() =>
      React$1.createElement(Face, {
        width: width,
        height: height,
        centerX: width / 2,
        centerY: height / 2,
        strokeWidth: 6 + Math.random() * 3,
        eyeOffsetX: 20 + Math.random() * 9,
        eyeOffsetY: 20 + Math.random() * 15,
        eyeRadius: 5 + Math.random() * 10,
        mouthWidth: 7 + Math.random() * 9,
        mouthRadius: 30 + Math.random() * 10,
      })
    );

  const rootElement = document.getElementById("root");
  ReactDOM.render(React$1.createElement(App, null), rootElement);
})(React, ReactDOM, d3);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIkJhY2tncm91bmRDaXJjbGUuanMiLCJFeWVzLmpzIiwiTW91dGguanMiLCJGYWNlQ29udGFpbmVyLmpzIiwiRmFjZS5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCYWNrZ3JvdW5kQ2lyY2xlID0gKHsgcmFkaXVzLCBzdHJva2VXaWR0aCB9KSA9PiAoXG4gIDxjaXJjbGVcbiAgICByPXtyYWRpdXN9XG4gICAgZmlsbD1cInllbGxvd1wiXG4gICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgIHN0cm9rZS13aWR0aD17c3Ryb2tlV2lkdGh9XG4gIC8+XG4pOyIsImV4cG9ydCBjb25zdCBFeWVzID0gKHtleWVPZmZzZXRYLCBleWVPZmZzZXRZLCBleWVSYWRpdXN9KSA9PiAoXG4gIDw+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9ey1leWVPZmZzZXRYfVxuICAgICAgY3k9ey1leWVPZmZzZXRZfVxuICAgICAgcj17ZXllUmFkaXVzfVxuICAgIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9e2V5ZU9mZnNldFh9XG4gICAgICBjeT17LWV5ZU9mZnNldFl9XG4gICAgICByPXtleWVSYWRpdXN9XG4gICAgLz5cbiAgPC8+XG4pOyIsImltcG9ydCB7IGFyYyB9IGZyb20gJ2QzJztcblxuZXhwb3J0IGNvbnN0IE1vdXRoID0gKHttb3V0aFJhZGl1cywgbW91dGhXaWR0aH0pID0+IHtcbiAgY29uc3QgbW91dGhBcmMgPSBhcmMoKVxuICAgIC5pbm5lclJhZGl1cyhtb3V0aFJhZGl1cylcbiAgICAub3V0ZXJSYWRpdXMobW91dGhSYWRpdXMgKyBtb3V0aFdpZHRoKVxuICAgIC5zdGFydEFuZ2xlKE1hdGguUEkgLyAyKVxuICAgIC5lbmRBbmdsZShNYXRoLlBJICogMyAvIDIpO1xuICBcbiAgcmV0dXJuIDxwYXRoIGQ9e21vdXRoQXJjKCl9Lz47XG59OyIsImV4cG9ydCBjb25zdCBGYWNlQ29udGFpbmVyID0gKHtjaGlsZHJlbiwgd2lkdGgsIGhlaWdodCwgY2VudGVyWCwgY2VudGVyWX0pID0+IChcbiAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjZW50ZXJYfSwke2NlbnRlcll9KWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZz5cbiAgPC9zdmc+XG4pOyIsImltcG9ydCB7IEJhY2tncm91bmRDaXJjbGUgfSBmcm9tICcuL0JhY2tncm91bmRDaXJjbGUnO1xuaW1wb3J0IHsgRXllcyB9IGZyb20gJy4vRXllcyc7XG5pbXBvcnQgeyBNb3V0aCB9IGZyb20gJy4vTW91dGgnO1xuaW1wb3J0IHsgRmFjZUNvbnRhaW5lciB9IGZyb20gJy4vRmFjZUNvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCBGYWNlID0gKHtcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgY2VudGVyWCxcbiAgY2VudGVyWSxcbiAgc3Ryb2tlV2lkdGgsXG4gIGV5ZU9mZnNldFgsXG4gIGV5ZU9mZnNldFksXG4gIGV5ZVJhZGl1cyxcbiAgbW91dGhSYWRpdXMsXG4gIG1vdXRoV2lkdGhcbn0pID0+IChcbiAgPEZhY2VDb250YWluZXJcbiAgICB3aWR0aD17d2lkdGh9XG4gICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgY2VudGVyWD17Y2VudGVyWH1cbiAgICBjZW50ZXJZPXtjZW50ZXJZfVxuICA+XG4gICAgPEJhY2tncm91bmRDaXJjbGVcbiAgICAgIHJhZGl1cz17Y2VudGVyWSAtIHN0cm9rZVdpZHRoIC8gMn1cbiAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAvPlxuICAgIDxFeWVzXG4gICAgICBleWVPZmZzZXRYPXtleWVPZmZzZXRYfVxuICAgICAgZXllT2Zmc2V0WT17ZXllT2Zmc2V0WX1cbiAgICAgIGV5ZVJhZGl1cz17ZXllUmFkaXVzfVxuICAgIC8+XG4gICAgPE1vdXRoIG1vdXRoUmFkaXVzPXttb3V0aFJhZGl1c30gbW91dGhXaWR0aD17bW91dGhXaWR0aH0gLz5cbiAgPC9GYWNlQ29udGFpbmVyPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnZDMnO1xuaW1wb3J0IHsgRmFjZSB9IGZyb20gJy4vRmFjZSc7XG5cbmNvbnN0IHdpZHRoID0gMTYwO1xuY29uc3QgaGVpZ2h0ID0gMTYwO1xuXG5jb25zdCBhcnJheSA9IHJhbmdlKDYgKiAzKTtcblxuY29uc3QgQXBwID0gKCkgPT5cbiAgYXJyYXkubWFwKCgpID0+IChcbiAgICA8RmFjZVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBjZW50ZXJYPXt3aWR0aCAvIDJ9XG4gICAgICBjZW50ZXJZPXtoZWlnaHQgLyAyfVxuICAgICAgc3Ryb2tlV2lkdGg9ezYgKyBNYXRoLnJhbmRvbSgpICogM31cbiAgICAgIGV5ZU9mZnNldFg9ezIwICsgTWF0aC5yYW5kb20oKSAqIDl9XG4gICAgICBleWVPZmZzZXRZPXsyMCArIE1hdGgucmFuZG9tKCkgKiAxNX1cbiAgICAgIGV5ZVJhZGl1cz17NSArIE1hdGgucmFuZG9tKCkgKiAxMH1cbiAgICAgIG1vdXRoV2lkdGg9ezcgKyBNYXRoLnJhbmRvbSgpICogOX1cbiAgICAgIG1vdXRoUmFkaXVzPXszMCArIE1hdGgucmFuZG9tKCkgKiAxMH1cbiAgICAvPlxuICApKTtcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTtcbiJdLCJuYW1lcyI6WyJhcmMiLCJyYW5nZSIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7RUFBTyxNQUFNLGdCQUFnQixHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO0lBQ3REO01BQ0UsR0FBRyxNQUFPLEVBQ1YsTUFBSyxRQUFRLEVBQ2IsUUFBTyxPQUFPLEVBQ2QsZ0JBQWMsV0FBVyxFQUFDLENBQzFCO0dBQ0g7O0VDUE0sTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDO0lBQ3REO01BQ0U7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxVQUFXLEVBQ2hCLEdBQUcsU0FBUyxFQUFDO01BRWY7UUFDRSxJQUFJLFVBQVUsRUFDZCxJQUFJLENBQUMsVUFBVyxFQUNoQixHQUFHLFNBQVMsRUFBQyxDQUNiO0tBQ0Q7R0FDSjs7RUNYTSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxLQUFLO0lBQ2xELE1BQU0sUUFBUSxHQUFHQSxNQUFHLEVBQUU7T0FDbkIsV0FBVyxDQUFDLFdBQVcsQ0FBQztPQUN4QixXQUFXLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztPQUNyQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7T0FDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUU3QixPQUFPLCtCQUFNLEdBQUcsUUFBUSxFQUFFLEVBQUMsQ0FBRSxDQUFDO0dBQy9COztFQ1ZNLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3ZFLDhCQUFLLE9BQU8sS0FBSyxFQUFFLFFBQVEsTUFBTTtNQUMvQiw0QkFBRyxXQUFXLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxRQUFRO09BQ1A7S0FDQTtHQUNQOztFQ0RNLE1BQU0sSUFBSSxHQUFHLENBQUM7SUFDbkIsS0FBSztJQUNMLE1BQU07SUFDTixPQUFPO0lBQ1AsT0FBTztJQUNQLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtHQUNYO0lBQ0MscUJBQUM7TUFDQyxPQUFPLEtBQU0sRUFDYixRQUFRLE1BQU8sRUFDZixTQUFTLE9BQVEsRUFDakIsU0FBUyxPQUFPO01BRWhCLHFCQUFDO1FBQ0MsUUFBUSxPQUFPLEdBQUcsV0FBVyxHQUFHLENBQUMsRUFDakMsYUFBYSxXQUFXLEVBQUM7TUFFM0IscUJBQUM7UUFDQyxZQUFZLFVBQVUsRUFDdEIsWUFBWSxVQUFVLEVBQ3RCLFdBQVcsU0FBUyxFQUFDO01BRXZCLHFCQUFDLFNBQU0sYUFBYSxXQUFXLEVBQUUsWUFBWSxVQUFVLEVBQUMsQ0FBRztLQUM3QztHQUNqQixDQUFDOztFQzdCRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7RUFDbEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDOztFQUVuQixNQUFNLEtBQUssR0FBR0MsUUFBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7RUFFM0IsTUFBTSxHQUFHLEdBQUc7SUFDVixLQUFLLENBQUMsR0FBRyxDQUFDO01BQ1JDLHVCQUFDO1FBQ0MsT0FBTyxLQUFLLEVBQ1osUUFBUSxNQUFPLEVBQ2YsU0FBUyxLQUFLLEdBQUcsQ0FBQyxFQUNsQixTQUFTLE1BQU0sR0FBRyxDQUFDLEVBQ25CLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQ2xDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQ2xDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQ25DLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQ2pDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQ2pDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FDckM7S0FDSCxDQUFDLENBQUM7O0VBRUwsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNwRCxRQUFRLENBQUMsTUFBTSxDQUFDQSx1QkFBQyxTQUFHLEVBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQzs7OzsifQ==
