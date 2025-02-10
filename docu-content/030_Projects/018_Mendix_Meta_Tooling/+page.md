# Mendix Meta Tooling

For several yars I have worked at the Mendix R&D department.
I was responsible for setting up their metamodel toolchain.

####

This consisted of definging and implementing a DSL for

- Specifying the Mendix metamodel.
- Retrieving the metamodel from the existing source code into the new language.
- Creating generators for both the desktop modeler in C# and the
  Mendix SDK in Typescript which is used by their Web Modlerr, and
  aslo by customers to get easy acces to their models.

An interesting aspect of the metamodeling DSL is the support for different versions of the metamodel
within the same specification.
This allowed us to generate one TypeScript Mendix SDK, which supported all versions of the metamodel.
