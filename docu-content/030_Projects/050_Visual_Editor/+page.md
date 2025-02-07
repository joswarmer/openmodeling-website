# Visual Editor Prototype for Pattern Expressions

For FMTC, we built a fully working prototype of a visual expression editor.

## The Work Done
The editor is part of a tool called LogAn, that allows companies to search for interesting patterns in log files.
The patterns are defined by a pattern language, and the editor is a visual tool for creating and maintaining such pattern expressions.

Logan then generates code from the patterns to do the actual search.
There already was an editor based on  GMF tooling, and the main reason to rebuild the editor in Graphiti was the problem in maintaining the GMF based editor.

The editor is based on Eclipse and has the following characteristics:

*  Ecore / EMF for defining the meta model of the pattern language
*  Graphiti for building the editor
*  Layout of editor fully derived from the pattern model, so no storage of diagrams needed.

The prototype was built from scratch and fully functional after a total of 20 working days.
According to FMTC maintainability is now orders of magnitude better.
