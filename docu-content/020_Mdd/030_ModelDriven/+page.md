# Model Driven Development

Model Driven Development is defined as automation of software development by use of models.

There often is confusion about the meaning of Model Driven Development.
We make a clear distinction between Model Based Development and Model Driven Development.

# Model Driven Development (MDD)

MDD is software development where software is automatically derived from one or more models.
The automation here is crucial,  the models literally drive the software development.
There are several techniques to achieve this.

* One way is to use a code generator,  which generated source code from a model. The result is source code as otherwise would be written by hand.
* The second way to do this is to have a runtime component that can read a model and interprets it.

Both techniques have their pros and cons, and the best choice depends very much on the context.

# Model Based Development (MBD)

MBD is software development where models are used, but not to automatically derive software.
Models are used for e.g documentation,  explanation and communication. Developers then take the
models as input and manually write all the code.

What to choose ?

It isn't a matter of choosing between Model Based or Model Driven Development,  both are useful in their own right.

At OpenModeling we focus on Model Driven Development.  
We believe that the advantages of automated software construction can be huge. And the good news is that nowadays
the tools you need to setup an automated model driven development environment are all readily available.  A very good example is Eclipse,  which has all the necessary tools as open source.
