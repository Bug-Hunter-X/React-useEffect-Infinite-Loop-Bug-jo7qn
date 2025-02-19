# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly updating state within the dependency array.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides the corrected version.

The issue arises because the `count` state is updated inside the `useEffect` function, which causes the effect to run again, leading to an infinite loop.  The solution involves restructuring the dependency array to avoid this circular dependency.  This example highlights the importance of carefully considering the dependencies passed to `useEffect` to prevent unexpected behavior.