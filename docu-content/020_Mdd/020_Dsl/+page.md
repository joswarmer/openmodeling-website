# Domain Specific Languages

Model driven development is usually based on so-called Domain Specific Languages.
Such a language is specially developed to enable high expressive power in a chosen domain.

## Horizontal versus vertical DSL

A horizontal DSL is a DSL that has a technical domain.
As these are technical DSLs,  they are usually used by developers to make writing software easier.
An example of a collection of technical DSL;s is e.g. Mod4j,  an open source project that we are contributing to.
This contains a number of DSLs to model different layers in the technical architecture.

A vertical DSL, also called a business DSL is a DSL that is defined for a business domain.
Quite often users of such a DSL are business people, who can express what they want in their own business terms.
The PMW project that we have been doing  includes a DSL for specifying insurance products and is directly used by insurance people.

The potential gain of business or vertical DSLs is higher than of vertical DSLs, because the gap between requirements end development is closed.
The requirements as laid down in the models by the business people are directly translated to the resulting software.

## Internal versus external DSL

An internal DSL is a DSL that can be defined within an existing general purpose language.
That is,  the base language contains the possibility to extend itself with new constructs.
Using this you can create a domain concepts within the base languages.
Internal DSLs are almost always used for horizontal DSLs and thus by developers.
The DSL is embedded in a general purpose language, which makes it not suitable for business users.
Furthermore the syntax of an internal DSL is restricted by the base language,  and cannot be adapted to business users.

An external DSL is a standalone DSL.
There is no base language,  and the DSL contains nothing more and nothing less than exactly the domain concepts.
External DSLs can be used fro both horizontal and vertical DSLs.
The syntax can be chosen freely, whether you want a textual, a graphical, a mathematical, a tabular syntax,  this is all possible.
The freedom of syntax makes it possible to adapt the syntax for the specific user group in the business domain.

Given the restrictions imnternal DSL's,  at OpenModeling we focus on external DSLs.
 
