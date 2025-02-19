```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic. This effect runs only once after the component mounts
    console.log('Component mounted');
  }, []);

  //Increment state outside the useEffect function to avoid infinite loop
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```