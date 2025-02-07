# Product Modeling Workbench

The Product Modeling Workbench (PMW)  is based on a DSL for specifying insurance products called the Product Specification Diagram (PSD) notation.

## Work Done

This DSL was originally defined by IBM as part of its Insurance Application Architecture (IAA)
and donated to the Accord organization standards organization where it continues to evolve.

PMW allows insurance experts to model insurance products in a graphical editor.
Insurance products are made up of reusable components and special functionality in PMW is available to manage multiple variations of insurance products.
PMW allows users to work together in close collaboration on the same models. PMW was developed for Systemize IT.

PMW is based on Eclipse using a number of Eclipse modeling component.  Most notably we have used:

*  Ecore / EMF for defining the metamodel of the PSD.
*  CDO as the multi-user database for storing insurance models
*  Graphiti for development of the graphical editors
*  Spray for generating large portions of the Graphiti code
*  Xtext Xpand and Xtend for implementation of Spray
*  Tycho for continuous integration

For more information on PMW itself you can contact Systemize IT.
