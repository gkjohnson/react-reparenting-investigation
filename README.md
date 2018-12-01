# react-global-key

A helper component to afford moving and re-parenting components instead of re-rendering

## Use Cases

- Moving large, deep, complex components to other parent containers without having to incur the cost of rerendering.
- Move components that maintain a lot of manually-tracked internal state, as in the case of libraries.
- Move elements with webgl contexts that would otherwise get lost.

## TODO

- Create worst-case scenario with timing
- Develop base component
- Create use example
