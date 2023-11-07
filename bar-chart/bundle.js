(function (React, ReactDOM, d3) {
  "use strict";

  var React__default = "default" in React ? React["default"] : React;
  ReactDOM =
    ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, "default")
      ? ReactDOM["default"]
      : ReactDOM;

  const csvUrl =
    "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

  const width = 960;
  const height = 500;

  const App = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      const row = (d) => {
        d.Population = +d["2020"];
        return d;
      };
      d3.csv(csvUrl, row).then((data) => {
        setData(data.slice(0, 10));
      });
    }, []);

    if (!data) {
      return React__default.createElement("pre", null, "Loading...");
    }

    console.log(data[0]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.Country))
      .range([0, height]);

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.Population)])
      .range([0, width]);

    return React__default.createElement(
      "svg",
      { width: width, height: height },
      data.map((d) =>
        React__default.createElement("rect", {
          key: d.Country,
          y: yScale(d.Country),
          width: xScale(d.Population),
          height: yScale.bandwidth(),
        })
      )
    );
  };
  const rootElement = document.getElementById("root");
  ReactDOM.render(React__default.createElement(App, null), rootElement);
})(React, ReactDOM, d3);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjc3YsIHNjYWxlQmFuZCwgc2NhbGVMaW5lYXIsIG1heCB9IGZyb20gJ2QzJztcblxuY29uc3QgY3N2VXJsID1cbiAgJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vY3VycmFuLzBhYzQwNzdjN2ZjNjM5MGY1ZGQzM2JmNWMwNmNiNWZmL3Jhdy82MDVjNTQwODBjN2E5M2E0MTdhM2NlYTkzZmQ1MmU3NTUwZTc2NTAwL1VOX1BvcHVsYXRpb25fMjAxOS5jc3YnO1xuXG5jb25zdCB3aWR0aCA9IDk2MDtcbmNvbnN0IGhlaWdodCA9IDUwMDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IChkKSA9PiB7XG4gICAgICBkLlBvcHVsYXRpb24gPSArZFsnMjAyMCddO1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfTtcbiAgICBjc3YoY3N2VXJsLCByb3cpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldERhdGEoZGF0YS5zbGljZSgwLCAxMCkpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxwcmU+TG9hZGluZy4uLjwvcHJlPjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGRhdGFbMF0pO1xuXG4gIGNvbnN0IHlTY2FsZSA9IHNjYWxlQmFuZCgpXG4gICAgLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5Db3VudHJ5KSlcbiAgICAucmFuZ2UoWzAsIGhlaWdodF0pO1xuXG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKFswLCBtYXgoZGF0YSwgKGQpID0+IGQuUG9wdWxhdGlvbildKVxuICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICB7ZGF0YS5tYXAoKGQpID0+IChcbiAgICAgICAgPHJlY3RcbiAgICAgICAgICBrZXk9e2QuQ291bnRyeX1cbiAgICAgICAgICB5PXt5U2NhbGUoZC5Db3VudHJ5KX1cbiAgICAgICAgICB3aWR0aD17eFNjYWxlKGQuUG9wdWxhdGlvbil9XG4gICAgICAgICAgaGVpZ2h0PXt5U2NhbGUuYmFuZHdpZHRoKCl9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW1lbnQpO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3N2IiwiUmVhY3QiLCJzY2FsZUJhbmQiLCJzY2FsZUxpbmVhciIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBUUEsTUFBTSxNQUFNO0VBQ1osRUFBRSxnSkFBZ0osQ0FBQztBQUNuSjtFQUNBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztFQUNsQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDbkI7RUFDQSxNQUFNLEdBQUcsR0FBRyxNQUFNO0VBQ2xCLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBR0EsY0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDO0VBQ0EsRUFBRUMsZUFBUyxDQUFDLE1BQU07RUFDbEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSztFQUN2QixNQUFNLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDaEMsTUFBTSxPQUFPLENBQUMsQ0FBQztFQUNmLEtBQUssQ0FBQztFQUNOLElBQUlDLE1BQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLO0VBQ3BDLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDakMsS0FBSyxDQUFDLENBQUM7RUFDUCxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVDtFQUNBLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtFQUNiLElBQUksT0FBT0MsMkNBQUssWUFBVSxFQUFNLENBQUM7RUFDakMsR0FBRztBQUNIO0VBQ0EsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCO0VBQ0EsRUFBRSxNQUFNLE1BQU0sR0FBR0MsWUFBUyxFQUFFO0VBQzVCLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ3ZDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDeEI7RUFDQSxFQUFFLE1BQU0sTUFBTSxHQUFHQyxjQUFXLEVBQUU7RUFDOUIsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVDLE1BQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7RUFDaEQsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN2QjtFQUNBLEVBQUU7RUFDRixJQUFJSCx1Q0FBSyxPQUFPLEtBQU0sRUFBQyxRQUFRO0VBQy9CLE1BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDbEIsUUFBUUE7RUFDUixVQUFVLEtBQUssQ0FBQyxDQUFDLE9BQVEsRUFDZixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFFLEVBQ3JCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUUsRUFDNUIsUUFBUSxNQUFNLENBQUMsU0FBUyxJQUFHLENBQzNCO0VBQ1YsT0FBTyxDQUFFO0VBQ1QsS0FBVTtFQUNWLElBQUk7RUFDSixDQUFDLENBQUM7RUFDRixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3BELFFBQVEsQ0FBQyxNQUFNLENBQUNBLDhCQUFDLFNBQUcsRUFBRyxFQUFFLFdBQVcsQ0FBQzs7OzsifQ==
