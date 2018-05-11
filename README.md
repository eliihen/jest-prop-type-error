# jest-prop-type-error

> Improves prop-types support in Jest by failing tests on prop-type errors
> instead of ignoring them

[prop-types][pt] is a library from Facebook that makes it easy to verify that
the props passed to a [React][react] component is of the correct type. However,
it only allows us runtime type checking, which means some failures can slip by
into production.

This is possible to solve with [Jest][jest] by making prop-type errors throw
instead of only logging a warning. In this case your tests would run and
whenever a wrong prop is passed to a component, the prop-type validation would
pick this up and fail the test. Then we would be able to verify that the props
that are passed to our components are good compile-time, provided the tests
run when we build our production bundle.

That is what this library does!

[Read this blog][blog] for a more in-depth explanation.

# Install

    yarn add -D jest-prop-type-error

# Usage

In order to enable us to detect prop-type errors and fail the test, you need to
add the following to your `package.json`'s jest section.

      "setupFiles": [
        "jest-prop-type-error"
      ]

If there is no jest section in your `package.json`, add one and use that.

Now simply run your tests like usual, and prop-type errors will throw instead
of logging a warning!

# Acknowledgments

Thanks to [Stian Didriksen][stian] for the idea in his talk about Jest at the
ReactJS Oslo Meetup 9th May 2018.

[pt]: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
[blog]: https://medium.com/shark-bytes/type-checking-with-prop-types-in-jest-e0cd0dc92d5
[react]: https://reactjs.org/
[jest]: https://facebook.github.io/jest/
[stian]: https://twitter.com/stipsan
