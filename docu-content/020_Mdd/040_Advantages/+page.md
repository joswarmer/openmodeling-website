# MDD Advantages

The most successful way of doing model driven development is through the use of domain specific languages (DSL),
with an integrated code generator.
A DSL is a language specifically designed for a domain, using the terminology of the domain experts as concepts
in the language.
Advantages of use a DSL can be found at multiple levels.

### Domain Experts can be More Precise and Productive.

Tailoring the modeling language to the goal means that you get the best language that is suitable to the task at hand.
You do not have to specify a system in a "foreign" language, but domain experts can specify everything directly using
the concepts that you know from the domain. If an application domain becomes too large,  
it is common to partition the domain in sub domains and define a DSL for each sub domain.  
This way the DSLs remain focused on their domain.

### Bridging the Gap Between Business and IT.

Domain users can directly use a DSL for their domain and specify what they want exactly and unambiguously.
Because code is generated directly from  the DSL, there is no chance of misunderstanding between business and IT.
Instead of depending on what IT can deliver, the business is now in charge of a development project.

### Domain Users Work With the Concepts they Understand.

Users only get what they need, no more, no less.  
This makes life less complex for users,  no need to cope with all the possibilities from general purpose language that
you will never need. At the same time this makes it easier for language designers to define the DSLs and
develop the tool needed to support the DSL users.

### Higher Quality

Code generators can incorporate the best practices and patterns and ensure that the generated code is as clean and concise as possible.
Usually some of the best developers / architects are in charge of developing the code generator and through the generated code their
experience and knowledge is suddenly visible in all projects. This significantly increases the quality of the delivered application.  
Even when using partial code generation (in case not everything is covered by the DSL and you need additional handwritten code)
the handwritten code needs to follow the structure generated from the DSL.  
Hand coding is then a matter of filling in the holes and the architectural integrity of the application is guaranteed to remain in tact.

Higher quality is also produced by average developers.  
When using DSLs details of the often complex underlying technology is hidden.  
Developers only need to understand the higher level and easier to understand concepts of the DSLs.
The code generators then generate high quality code. The developer only needs to fill in the "holes" and cannot break the architecture.

### Less Bugs

Bugs in software are found during the testing phase, but also after the software has gone into production.
Experience has learned that the number of bugs in software developed through DSLs is consistently lower than in software developed purely by hand.
This is direct consequence of the higher quality and adherence to the architecture described above.

### Faster time-to-market

From a business point of view time-to-market can be critical. You want to be there before the competition.
Because of the higher productivity and higher quality working with DSLs allows you to have a very short time-to-market.

### Higher productivity

Within the domain a DSL is much more powerful than general purpose language because it is defined at a higher level of abstraction.
Add to that the fact that code can be generated directly from the DSL,  this means that much less code needs to be written.
A direct consequence of higher productivity is a faster to to market.  
Additionally,  the communication between business and IT is seamless because the business specifies what they need exactly in a DSL which saves a lot of communication overhead.
Although this is a long term advantage, it should not be underestimated.
