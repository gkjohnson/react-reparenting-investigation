# react-global-key

An investigation into the performance of reparenting dom elements, the impact of repainting and layout, and how to mitigate the problems in React.

## Use Cases

- Moving large, deep, complex DOM trees to other parent containers without having to incur the cost of rerendering.
- Moving components that maintain a lot of manually-tracked internal state, as in the case of libraries, causes them to get initialized.
- Moving elements with webgl contexts that would get lost and reinitialized if rerendered.
- Moving iframes that will get reinitialized if the element is removed from the tree.

## How To Run

- Pull repo
- Run `npm install` in the root
- Run `npm start` in the root
- Navigate to `localhost:9080/example/build`

## TODO

- Create worst-case scenario with timing
- Test in `production` scenario
- Try using CSS grid to update the postition of an element
