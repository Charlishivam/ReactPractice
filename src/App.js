import './App.css';
export default function App() {
  async function fetchData() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
  }
  fetchData();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
