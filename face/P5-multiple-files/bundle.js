(function (React, ReactDOM, d3) {
  "use strict";

  React = React && React.hasOwnProperty("default") ? React["default"] : React;
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

  const App = () =>
    React.createElement(
      "svg",
      { width: width, height: height },
      React.createElement(
        "g",
        { transform: `translate(${centerX},${centerY})` },
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
      )
    );

  const rootElement = document.getElementById("root");
  ReactDOM.render(React.createElement(App, null), rootElement);
})(React, ReactDOM, d3);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIkJhY2tncm91bmRDaXJjbGUuanMiLCJFeWVzLmpzIiwiTW91dGguanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZENpcmNsZSA9ICh7IHJhZGl1cywgc3Ryb2tlV2lkdGggfSkgPT4gKFxuICA8Y2lyY2xlXG4gICAgcj17cmFkaXVzfVxuICAgIGZpbGw9XCJ5ZWxsb3dcIlxuICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICBzdHJva2Utd2lkdGg9e3N0cm9rZVdpZHRofVxuICAvPlxuKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRXllcyA9ICh7ZXllT2Zmc2V0WCwgZXllT2Zmc2V0WSwgZXllUmFkaXVzfSkgPT4gKFxuICA8PlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PXstZXllT2Zmc2V0WH1cbiAgICAgIGN5PXstZXllT2Zmc2V0WX1cbiAgICAgIHI9e2V5ZVJhZGl1c31cbiAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PXtleWVPZmZzZXRYfVxuICAgICAgY3k9ey1leWVPZmZzZXRZfVxuICAgICAgcj17ZXllUmFkaXVzfVxuICAgIC8+XG4gIDwvPlxuKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXJjIH0gZnJvbSAnZDMnO1xuXG5leHBvcnQgY29uc3QgTW91dGggPSAoe21vdXRoUmFkaXVzLCBtb3V0aFdpZHRofSkgPT4ge1xuICBjb25zdCBtb3V0aEFyYyA9IGFyYygpXG4gICAgLmlubmVyUmFkaXVzKG1vdXRoUmFkaXVzKVxuICAgIC5vdXRlclJhZGl1cyhtb3V0aFJhZGl1cyArIG1vdXRoV2lkdGgpXG4gICAgLnN0YXJ0QW5nbGUoTWF0aC5QSSAvIDIpXG4gICAgLmVuZEFuZ2xlKE1hdGguUEkgKiAzIC8gMik7XG4gIFxuICByZXR1cm4gPHBhdGggZD17bW91dGhBcmMoKX0vPjtcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQmFja2dyb3VuZENpcmNsZSB9IGZyb20gJy4vQmFja2dyb3VuZENpcmNsZSc7XG5pbXBvcnQgeyBFeWVzIH0gZnJvbSAnLi9FeWVzJztcbmltcG9ydCB7IE1vdXRoIH0gZnJvbSAnLi9Nb3V0aCc7XG5cbmNvbnN0IHdpZHRoID0gOTYwO1xuY29uc3QgaGVpZ2h0ID0gNTAwO1xuY29uc3QgY2VudGVyWCA9IHdpZHRoIC8gMjtcbmNvbnN0IGNlbnRlclkgPSBoZWlnaHQgLyAyO1xuY29uc3Qgc3Ryb2tlV2lkdGggPSAyMDtcbmNvbnN0IGV5ZU9mZnNldFggPSA5MDtcbmNvbnN0IGV5ZU9mZnNldFkgPSAxMDA7XG5jb25zdCBleWVSYWRpdXMgPSA0MDtcbmNvbnN0IG1vdXRoV2lkdGggPSAyMDtcbmNvbnN0IG1vdXRoUmFkaXVzID0gMTQwO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudGVyWH0sJHtjZW50ZXJZfSlgfT5cbiAgICAgIDxCYWNrZ3JvdW5kQ2lyY2xlXG4gICAgICAgIHJhZGl1cz17Y2VudGVyWSAtIHN0cm9rZVdpZHRoIC8gMn1cbiAgICAgICAgc3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuICAgICAgLz5cbiAgICAgIDxFeWVzXG4gICAgICAgIGV5ZU9mZnNldFg9e2V5ZU9mZnNldFh9XG4gICAgICAgIGV5ZU9mZnNldFk9e2V5ZU9mZnNldFl9XG4gICAgICAgIGV5ZVJhZGl1cz17ZXllUmFkaXVzfVxuICAgICAgLz5cbiAgICAgIDxNb3V0aCBtb3V0aFJhZGl1cz17bW91dGhSYWRpdXN9IG1vdXRoV2lkdGg9e21vdXRoV2lkdGh9IC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCByb290RWxlbWVudCk7XG4iXSwibmFtZXMiOlsiYXJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7RUFFTyxNQUFNLGdCQUFnQixHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO0lBQ3REO01BQ0UsR0FBRyxNQUFPLEVBQ1YsTUFBSyxRQUFRLEVBQ2IsUUFBTyxPQUFPLEVBQ2QsZ0JBQWMsV0FBVyxFQUFDLENBQzFCO0dBQ0g7O0VDUE0sTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDO0lBQ3REO01BQ0U7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxVQUFXLEVBQ2hCLEdBQUcsU0FBUyxFQUFDO01BRWY7UUFDRSxJQUFJLFVBQVUsRUFDZCxJQUFJLENBQUMsVUFBVyxFQUNoQixHQUFHLFNBQVMsRUFBQyxDQUNiO0tBQ0Q7R0FDSjs7RUNaTSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxLQUFLO0lBQ2xELE1BQU0sUUFBUSxHQUFHQSxNQUFHLEVBQUU7T0FDbkIsV0FBVyxDQUFDLFdBQVcsQ0FBQztPQUN4QixXQUFXLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztPQUNyQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7T0FDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUU3QixPQUFPLCtCQUFNLEdBQUcsUUFBUSxFQUFFLEVBQUMsQ0FBRSxDQUFDO0dBQy9COztFQ0xELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztFQUNsQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7RUFDbkIsTUFBTSxPQUFPLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztFQUMxQixNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQzNCLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztFQUN2QixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7RUFDdEIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO0VBQ3ZCLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztFQUNyQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7RUFDdEIsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDOztFQUV4QixNQUFNLEdBQUcsR0FBRztJQUNWLDhCQUFLLE9BQU8sS0FBSyxFQUFFLFFBQVEsTUFBTTtNQUMvQiw0QkFBRyxXQUFXLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5QyxxQkFBQztVQUNDLFFBQVEsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDLEVBQ2pDLGFBQWEsV0FBVyxFQUFDO1FBRTNCLHFCQUFDO1VBQ0MsWUFBWSxVQUFVLEVBQ3RCLFlBQVksVUFBVSxFQUN0QixXQUFXLFNBQVMsRUFBQztRQUV2QixxQkFBQyxTQUFNLGFBQWEsV0FBVyxFQUFFLFlBQVksVUFBVSxFQUFDLENBQUc7T0FDekQ7S0FDQTtHQUNQLENBQUM7O0VBRUYsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNwRCxRQUFRLENBQUMsTUFBTSxDQUFDLHFCQUFDLFNBQUcsRUFBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7OyJ9
