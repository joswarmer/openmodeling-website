import { type CategoryInfoType, type TocContentsType } from '$lib/sidebar/TocContentsType';
		
export const freonToc: TocContentsType = 
   { name: 'Freon', markdown: `PATH: /Freon`, path: '/Freon',
     content: [
      { name: 'All', markdown: `undefined`, path: '/Freon/All',
        content: [
         { name: 'All', markdown: `#  Freon - The Language Workbench for the Web.

Freon is a web native language workbench, developed by Jos Warmer and Anneke Kleppe.
Freon is used to define Domain Specific Languages and the tooling needed to work with these languages.

The goal of Freon is to stimulate the use of DSL's on the web.
For this reason Freon is open source under the MIT license, so everyone can use it.

`, path: '/Freon/All'},
       ]},
    ]};
export const booksToc: TocContentsType = 
   { name: 'Books', markdown: `PATH: /Books`, path: '/Books',
     content: [
      { name: 'Overview', markdown: `undefined`, path: '/Books/Overview',
        content: [
         { name: 'Overview', markdown: `# Books


Jos Warmer has written a number of books on various modeling subjects.
A description of these books is shown below.


`, path: '/Books/Overview'},
       ]},
      { name: 'MDA Explained', markdown: `undefined`, path: '/Books/MDA_Explained',
        content: [
         { name: 'MDA Explained', markdown: `# MDA Explained

The book, MDA Explained, the Model Driven Architecture: Practise and Promise, thoroughly introduces, documents, and explains this important new framework. 

`, path: '/Books/MDA_Explained'},
       ]},
      { name: 'Praktisch UML', markdown: `undefined`, path: '/Books/Praktisch_UML',
        content: [
         { name: 'Praktisch UML', markdown: `# Practisch UML

Praktisch UML is a Dutch book,  therefore this page is only available in Dutch.

Praktisch UML is het Nederlandstalige standaardwerk over UML.  Geschreven door Jos Warmer en Anneke Kleppe, mede-auteurs van de UML standaard.

`, path: '/Books/Praktisch_UML'},
       ]},
      { name: 'Object Constraint Language', markdown: `undefined`, path: '/Books/Object_Constraint_Language',
        content: [
         { name: 'Object Constraint Language', markdown: `# The Object Constraint Language

The Object Constraint Language - Getting Your Models Ready for MDA, is the book on OCL.  OCL is the standard constraint language for UML and especially popular at the meta modeling level.  The author, Jos Warmer,  is the chief architect of OCL.

`, path: '/Books/Object_Constraint_Language'},
       ]},
    ]};
export const newsToc: TocContentsType = 
   { name: 'News', markdown: `PATH: /News`, path: '/News',
     content: [
      { name: 'Overview', markdown: `undefined`, path: '/News/Overview',
        content: [
         { name: 'Overview', markdown: `# News

Todo
`, path: '/News/Overview'},
       ]},
      { name: 'Freon Release', markdown: `undefined`, path: '/News/Freon_Release',
        content: [
         { name: 'Freon Release', markdown: `# Freon 1.0.0 Release

February 2024. 

In February 2024 the new version of Freon, named 1.0.0. has been released.
This version has a number of new features, notably:

- Possibility to plugin your own Svelte components allowing the editor te be fully customized to the specific users.
- Interpreter framework making it easy to write an interpreter for your language.
- [LionWeb](/LionWeb) integration, ensuring that there is no tool lock-in when using Freon.
  All the languages and models are readable and processable by any LionWeb enabled tool.
`, path: '/News/Freon_Release'},
       ]},
      { name: 'LionWeb Release 2024', markdown: `undefined`, path: '/News/LionWeb-Release-2024',
        content: [
         { name: 'LionWeb Release 2024', markdown: `# LionWeb 2024.1 Release

LionWeb 2024.1 extends the LionWeb specification with the Bulk Protocol for LioWeb repositories.
This protocol describes the API with a LionWeb repository, allowing models to be stored
and retrieved from a repository in a standard way.
`, path: '/News/LionWeb-Release-2024'},
       ]},
    ]};
export const mddToc: TocContentsType = 
   { name: 'Mdd', markdown: `PATH: /Mdd`, path: '/Mdd',
     content: [
      { name: 'Overview', markdown: `undefined`, path: '/Mdd/Overview',
        content: [
         { name: 'Overview', markdown: `# MDD

TODO
`, path: '/Mdd/Overview'},
       ]},
      { name: 'Dsl', markdown: `undefined`, path: '/Mdd/Dsl',
        content: [
         { name: 'Dsl', markdown: `# Domain Specific Languages

Model driven development is usually based on so-called Domain Specific Languages.
Such a language is specially developed to enable high expressive power in a chosen domain.

`, path: '/Mdd/Dsl'},
       ]},
      { name: 'ModelDriven', markdown: `undefined`, path: '/Mdd/ModelDriven',
        content: [
         { name: 'ModelDriven', markdown: `# Model Driven Development

Model Driven Development is defined as automation of software development by use of models.

There often is confusion about the meaning of Model Driven Development.
We make a clear distinction between Model Based Development and Model Driven Development.

`, path: '/Mdd/ModelDriven'},
       ]},
      { name: 'Advantages', markdown: `undefined`, path: '/Mdd/Advantages',
        content: [
         { name: 'Advantages', markdown: `# MDD Advantages

The most successful way of doing model driven development is through the use of domain specific languages (DSL),
with an integrated code generator and or interpreter.
A DSL is a language specifically designed for a domain, using the terminology of the domain experts as concepts
in the language.
Advantages of use a DSL can be found at multiple levels.

`, path: '/Mdd/Advantages'},
       ]},
    ]};
export const projectsToc: TocContentsType = 
   { name: 'Projects', markdown: `PATH: /Projects`, path: '/Projects',
     content: [
      { name: 'Overview', markdown: `undefined`, path: '/Projects/Overview',
        content: [
         { name: 'Overview', markdown: `# Projects

In this section of the website we have gathered a number of examples that each focus on one more advanced topic. 
During the upcoming year we plan to add more examples to this list. For now, the following examples are available.
You can find the sources for each of the example on GitHub. See [Getting Started](/Documentation/Overview/Getting_Started)
for information on how to install the examples on your computer.

`, path: '/Projects/Overview'},
       ]},
      { name: 'Mobile app ide', markdown: `undefined`, path: '/Projects/Mobile_app_ide',
        content: [
         { name: 'Mobile app ide', markdown: `# Mobile App Ide

Service2Media is a award winning company that offers an App Lifecycle Platform for developing mobile applications.
Using this platform you can write an application once, and it will then run on multiple mobile platforms like Apple, Android, Microsoft, Blackberry and Nokia.

`, path: '/Projects/Mobile_app_ide'},
       ]},
      { name: 'Product Modeling Workbench', markdown: `undefined`, path: '/Projects/Product_Modeling_Workbench',
        content: [
         { name: 'Product Modeling Workbench', markdown: `# Product Modeling Workbench

The Product Modeling Workbench (PMW)  is based on a DSL for specifying insurance products called the Product Specification Diagram (PSD) notation.

`, path: '/Projects/Product_Modeling_Workbench'},
       ]},
      { name: 'Spray', markdown: `undefined`, path: '/Projects/Spray',
        content: [
         { name: 'Spray', markdown: `# Spray - A Quick Way to Generate Graphiti

The Spray project is a collection of DSLs that allow quick and easy development of visual editors.
The first code to be donated to Spray was written by Jos Warmer and has been used in the PMW project to develop the visual editors.

`, path: '/Projects/Spray'},
       ]},
      { name: 'Visual Editor', markdown: `undefined`, path: '/Projects/Visual_Editor',
        content: [
         { name: 'Visual Editor', markdown: `# Visual Editor Prototype for Pattern Expressions

For FMTC, we built a fully working prototype of a visual expression editor.

`, path: '/Projects/Visual_Editor'},
       ]},
      { name: 'Tax Office ALEF', markdown: `undefined`, path: '/Projects/Tax_Office_ALEF',
        content: [
         { name: 'Tax Office ALEF', markdown: `# ALEF

ALEF is the DSl workbench used by the Dutch Tax Office.

`, path: '/Projects/Tax_Office_ALEF'},
       ]},
      { name: 'Mendix Meta Tooling', markdown: `undefined`, path: '/Projects/Mendix_Meta_Tooling',
        content: [
         { name: 'Mendix Meta Tooling', markdown: `# Mendix Meta Tooling


`, path: '/Projects/Mendix_Meta_Tooling'},
       ]},
      { name: 'Medical Trials Dsl', markdown: `undefined`, path: '/Projects/Medical_Trials_Dsl',
        content: [
         { name: 'Medical Trials Dsl', markdown: `# Medical Trials DSL

Clario

`, path: '/Projects/Medical_Trials_Dsl'},
       ]},
      { name: 'Insurance Product', markdown: `undefined`, path: '/Projects/Insurance_Product',
        content: [
         { name: 'Insurance Product', markdown: `# Insurance Product

Cleva (formerly I2S) is a Portuguese company that 
develops a product for Insurance companies.

`, path: '/Projects/Insurance_Product'},
       ]},
    ]};
export const lionWebToc: TocContentsType = 
   { name: 'LionWeb', markdown: `PATH: /LionWeb`, path: '/LionWeb',
     content: [
      { name: 'Overview', markdown: `undefined`, path: '/LionWeb/Overview',
        content: [
         { name: 'Overview', markdown: `# LionWeb

The LionWeb initiative (see <a target="_blank" href="https://github.com/LionWeb-io">LionWeb @ Github</a>) aims to make 
language engineering  tools interoperable on the web.
LionWeb does this by specifying
- how language definitions and models can be interchanged in a well-defined JSON format.
- a server protocol for storing and retrieving models in a repository.

`, path: '/LionWeb/Overview'},
       ]},
    ]};
export const servicesToc: TocContentsType = 
   { name: 'Services', markdown: `PATH: /Services`, path: '/Services',
     content: [
      { name: 'Overview', markdown: `undefined`, path: '/Services/Overview',
        content: [
         { name: 'Overview', markdown: `# Services

`, path: '/Services/Overview'},
       ]},
      { name: 'DSL Development', markdown: `undefined`, path: '/Services/DSL_Development',
        content: [
         { name: 'DSL Development', markdown: `# Development of Domain Specific Languages

We can help you to develop your own Domain Specific Language for your own technical or business domain.

`, path: '/Services/DSL_Development'},
       ]},
      { name: 'Mentoring', markdown: `undefined`, path: '/Services/Mentoring',
        content: [
         { name: 'Mentoring', markdown: `# Mentoring

To ensure that any model driven solutions that we deliver can be fully maintained by our customers,  we also deliver mentoring & training as part of our services.

`, path: '/Services/Mentoring'},
       ]},
      { name: 'Project Execution', markdown: `undefined`, path: '/Services/Project_Execution',
        content: [
         { name: 'Project Execution', markdown: `# Projects

We can execute complete projects,  either in a mixed team with you own developers,  or with a dedicated team fron my network.

`, path: '/Services/Project_Execution'},
       ]},
      { name: 'Research', markdown: `undefined`, path: '/Services/Research',
        content: [
         { name: 'Research', markdown: `# Industrial Research

I am doing my own industrial research, supported by a WBSO grant from the Dutch government.

I can also perform research projects for your company.
Usually a proof of concept / prototype is developed as part of the research,
because I find that this makes an otherwise potential theoretic concepts more concrete.
In the end you want to know whether new ideas will work in practice, not just whether they are conceptually good ideas.

If you are interested, you can contact Jos Warmer and we can discuss the possibilities.
`, path: '/Services/Research'},
       ]},
    ]};
export const backgroundToc: TocContentsType = 
   { name: 'Background', markdown: `PATH: /Background`, path: '/Background',
     content: [
      { name: 'Overview', markdown: `undefined`, path: '/Background/Overview',
        content: [
         { name: 'Overview', markdown: `# A Bit of Background

`, path: '/Background/Overview'},
       ]},
      { name: 'About the Authors', markdown: `undefined`, path: '/Background/About_the_Authors',
        content: [
         { name: 'About the Authors', markdown: `# About the Authors

TODO
`, path: '/Background/About_the_Authors'},
       ]},
    ]};
		
export const allCategories: CategoryInfoType[] = [
	{name: 'Freon', path: '/Freon', toc: freonToc},
		{name: 'Books', path: '/Books', toc: booksToc},
		{name: 'News', path: '/News', toc: newsToc},
		{name: 'Mdd', path: '/Mdd', toc: mddToc},
		{name: 'Projects', path: '/Projects', toc: projectsToc},
		{name: 'LionWeb', path: '/LionWeb', toc: lionWebToc},
		{name: 'Services', path: '/Services', toc: servicesToc},
		{name: 'Background', path: '/Background', toc: backgroundToc}
];
