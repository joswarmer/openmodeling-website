#  Freon - The Language Workbench for the Web.

Freon is a web native language workbench, developed by Jos Warmer and Anneke Kleppe.
Freon is used to define Domain Specific Languages and the tooling needed to work with these languages.

The goal of Freon is to stimulate the use of DSL's on the web. 
For this reason Freon is open source under the MIT license, so everyone can use it.

## Design Filosophy

Guidelines that we used while developing Freon have been ease of use, and flexibility.
Freon may not (yet OOPS) do everything you need, but what it does, should be very easy to get into.
Furthermore, Freon is designed to be extendable, and easy to integrate with other tooling. In practise this means that:

- Every part of the work environment that is generated, can be exchanged for one that suits the language engineer better, provided the right interface is implemented.
- Every part of the work environment is made by its own generator, so you can adjust which parts you want to generate and which parts you omit.
- The different parts of the work environment can be run on either the server or the client. Thus creating multiple deployment options.
- With these principles in mind, we have started of small and simple. 
  Every definition language, from the language structure to the validation rules, is kept minimal.
  Over time, in an agile fashion, these will be extended whenever the need arises.

For more information see <a href="https://www.freon4dsl.dev" target="_blank">
the Freon Documentation</a> and 
the <a href="https://github.com/freon4dsl/Freon4dsl" target="_blank">Freon github repository</a>. 

