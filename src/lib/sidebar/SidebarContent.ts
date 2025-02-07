import { type CategoryInfoType, type TocContentsType } from '$lib/sidebar/TocContentsType';
		
export const freonToc: TocContentsType = 
   { name: 'Freon', markdown: `PATH: /Freon`, path: '/Freon',
     content: [
      { name: 'Overview', markdown: `undefined`, path: '/Freon/Overview',
        content: [
         { name: 'Overview', markdown: `# Freon

The Lamnguage Workbench for the Web.

`, path: '/Freon/Overview'},
       ]},
    ]};
export const booksToc: TocContentsType = 
   { name: 'Books', markdown: `PATH: /Books`, path: '/Books',
     content: [
      { name: 'Overview', markdown: `undefined`, path: '/Books/Overview',
        content: [
         { name: 'Overview', markdown: `# Books


I have written a number of books varous modeling subjects.
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

`, path: '/News/Overview'},
       ]},
      { name: 'About the Authors', markdown: `undefined`, path: '/News/About_the_Authors',
        content: [
         { name: 'About the Authors', markdown: `# About the Authors

Freon is a brainchild of **Jos Warmer** and **Anneke Kleppe**.
Both authors have many years of experience in working with software languages and DSLs in particular.

Jos and Anneke met at the University of Amsterdam in the 1980s, where they both received a 
thorough education in software development. Anneke graduated in Theoretical Computer Science, 
whereas Jos took a more practical approach with Software Engineering. From then on they have 
been working in the industry (KPN Research, IBM, Mendix, De Nederlandsche Bank, ...), 
but always with an interest in research. That is the reason 
that over the years they have published many scientific papers, and during some periods were employed by
universities. Currently, they are working independently, with their main focus on building DSLs.

In 1995 Jos, when working for IBM, became involved in the standardization of the Unified Modeling Language.
His unique contribution to the standard is the Object Constraint Language (OCL), a language in which 
extra rules, called constraints, about UML classes etc. can be expressed.

Both together and separately, Jos and Anneke wrote a number of books, some of them are listed below.

- **Software Language Engineering - Creating Domain-Specific Languages Using Metamodels**

  This book systematically introduces and explains every ingredient of an effective
  language specification, including its description of concepts, how those concepts are
  denoted, and what those concepts mean in relation to the problem domain.

- **The Object Constraint Language - Getting Your Models Ready for MDA**

  The Object Constraint Language - Getting Your Models Ready for MDA, is **the** book on OCL.
  OCL is the standard constraint language for UML and especially popular at the meta modeling level.

- **MDA Explained**
 
  MDA Explained gives a complete overview of the Model Driven Architecture.

- **Praktisch UML, 5de editie**
  (_Praktisch UML is a Dutch book, therefore this text is in Dutch._)

  Praktisch UML is het Nederlandstalige standaardwerk over UML. 
  Praktisch UML is een handleiding voor het toepassen van de Unified Modeling Language (UML), 
  de standaard voor objectgeoriënteerde analyse en ontwerp, die sinds 1997 wereldwijd gebruikt wordt.
`, path: '/News/About_the_Authors'},
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
with an integrated code generator.
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
         { name: 'Overview', markdown: `# LionWeb Integration

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

It took a few years to create Freon, but more importantly it took a lot of experience: experience with building software 
in general, experience with creating languages like UML and OCL, experience with creating a large number of DSLs,
experience with the tools available for building DSLs. In short, Freon is the result of a lifetime of experience,
and with that, the lessons learned.

A few of these lessons are explained below to give you an insight in the motives and guiding principles behind Freon.

`, path: '/Background/Overview'},
       ]},
      { name: 'About the Authors', markdown: `undefined`, path: '/Background/About_the_Authors',
        content: [
         { name: 'About the Authors', markdown: `# About the Authors

Freon is a brainchild of **Jos Warmer** and **Anneke Kleppe**.
Both authors have many years of experience in working with software languages and DSLs in particular.

Jos and Anneke met at the University of Amsterdam in the 1980s, where they both received a 
thorough education in software development. Anneke graduated in Theoretical Computer Science, 
whereas Jos took a more practical approach with Software Engineering. From then on they have 
been working in the industry (KPN Research, IBM, Mendix, De Nederlandsche Bank, ...), 
but always with an interest in research. That is the reason 
that over the years they have published so many scientific papers, and during some periods were employed by
universities. Currently, they are working independently, with their main focus on building DSLs.

In 1995 Jos, when working for IBM, became involved in the standardization of the Unified Modeling Language.
His unique contribution to the standard is the Object Constraint Language (OCL), a language in which 
extra rules, called constraints, about UML classes etc. can be expressed.

Both together and separately, Jos and Anneke wrote a number of books, some of them are listed below.

- **Software Language Engineering - Creating Domain-Specific Languages Using Metamodels**

  This book systematically introduces and explains every ingredient of an effective
  language specification, including its description of concepts, how those concepts are
  denoted, and what those concepts mean in relation to the problem domain.

- **The Object Constraint Language - Getting Your Models Ready for MDA**

  The Object Constraint Language - Getting Your Models Ready for MDA, is **the** book on OCL.
  OCL is the standard constraint language for UML and especially popular at the meta modeling level.

- **MDA Explained**
 
  MDA Explained gives a complete overview of the Model Driven Architecture.

- **Praktisch UML, 5de editie**
  (_Praktisch UML is a Dutch book, therefore this text is in Dutch._)

  Praktisch UML is het Nederlandstalige standaardwerk over UML. 
  Praktisch UML is een handleiding voor het toepassen van de Unified Modeling Language (UML), 
  de standaard voor objectgeoriënteerde analyse en ontwerp, die sinds 1997 wereldwijd gebruikt wordt.
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
