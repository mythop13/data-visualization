(function (React, ReactDOM, d3$1) {
  "use strict";

  var React__default = "default" in React ? React["default"] : React;
  ReactDOM =
    ReactDOM && ReactDOM.hasOwnProperty("default")
      ? ReactDOM["default"]
      : ReactDOM;

  const message = (data) => {
    let message = "";
    message = message + Math.round(d3.csvFormat(data).length / 1024) + " kB\n";
    message = message + data.length + " rows\n";
    message = message + data.columns.length + " columns";
    return message;
  };

  const csvUrl =
    "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

  const App = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      d3$1.csv(csvUrl).then(setData);
    }, []);

    return React__default.createElement(
      "pre",
      null,
      data ? message(data) : "Loading..."
    );
  };
  const rootElement = document.getElementById("root");
  ReactDOM.render(React__default.createElement(App, null), rootElement);
})(React, ReactDOM, d3);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWVzc2FnZSA9IGRhdGEgPT4ge1xuICBsZXQgbWVzc2FnZSA9ICcnO1xuICBtZXNzYWdlID0gbWVzc2FnZSArIE1hdGgucm91bmQoZDMuY3N2Rm9ybWF0KGRhdGEpLmxlbmd0aCAvIDEwMjQpICsgJyBrQlxcbic7XG4gIG1lc3NhZ2UgPSBtZXNzYWdlICsgZGF0YS5sZW5ndGggKyAnIHJvd3NcXG4nO1xuICBtZXNzYWdlID0gbWVzc2FnZSArIGRhdGEuY29sdW1ucy5sZW5ndGggKyAnIGNvbHVtbnMnO1xuICByZXR1cm4gbWVzc2FnZTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNzdiB9IGZyb20gJ2QzJztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5jb25zdCBjc3ZVcmwgPVxuICAnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jdXJyYW4vYjIzNjk5MDA4MWEyNDc2MWY3MDAwNTY3MDk0OTE0ZTAvcmF3L2Nzc05hbWVkQ29sb3JzLmNzdic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjc3YoY3N2VXJsKS50aGVuKHNldERhdGEpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxwcmU+e2RhdGEgPyBtZXNzYWdlKGRhdGEpIDogJ0xvYWRpbmcuLi4nfTwvcHJlPjtcbn07XG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW1lbnQpO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3N2IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztFQUFPLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSTtJQUM3QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUMzRSxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzVDLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0lBQ3JELE9BQU8sT0FBTyxDQUFDO0dBQ2hCLENBQUM7O0VDREYsTUFBTSxNQUFNO0lBQ1YsbUdBQW1HLENBQUM7O0VBRXRHLE1BQU0sR0FBRyxHQUFHLE1BQU07SUFDaEIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBR0EsY0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUV2Q0MsZUFBUyxDQUFDLE1BQU07TUFDZEMsUUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzQixFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUVQLE9BQU9DLDJDQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBYSxFQUFNLENBQUM7R0FDekQsQ0FBQztFQUNGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQ0EsOEJBQUMsU0FBRyxFQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7Ozs7In0=
