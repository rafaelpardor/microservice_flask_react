# Microservices with Flask, React and Docker

Microservices architectures provides a means of breaking apart large applications unto 
smaller services that interact and communicate with each another. This communication
between the services usually happens over a network connection through HTTP calls. 
Web, sockets, messages queues and RPC(Remote Procedure Calls) can also be used to connect 
standalone components (pub/sub). Each individual service focuses on an a single taks, 
generally separeted by business unit, and is governed by its Restful contact.

## Pros of microservices

### Separation of Concerns

With a clear separarion between services, developers are free to focus on their own 
areas of expertise, like languages, frameworks, dependencies, tools, and build pipelines.
Clearing separation means that erros are mostly localized to the service that the developer 
is working on. So, you can assign a junior dev to a less critical service so that way if 
the developer brings down that service, the remainder of the application is not affected.

### Smaller Code Bases

Smaller code bases tend to be easier to understand since you do not have to grasp the entire 
system. This, along with the necessity for solid API design, means that applications 
in a microservice stack are generraly faster to develop and easier to test, refactor and scale.

### Accelerated FeedBack Loops

With microservices, developers often own the entire lifecycle of the app, from inception to 
delivery. Because of this, they have much more visibility into how the applications is beign 
used in the real world.

## Cons

### Design Complexity

Deciding to split off a piece of your application into a microservice is no easy task. It's 
often much easier to refactor it into a separate modula within the overall monolith rather 
than splitting it out. Once the service is splited, there is no going back.

### Network Complexity

With a monolith, generally everything happens in a single process so you dont't have to make 
very many calls to other services. As you break out pieces of your application into 
microservices, you'll find that you'll now have to make a netowrk call when before you could just 
call a function.
This can cause problems especially of multiple services need to communicate with one another.
resulting in ping-pong like affect in terms of network request.

### Data Persistance

Most applications have some sort of stateful layer, like databases or task queues. Microservices
stacks also need to keep track of where services are deployed and the total number of deployed 
instances, so that when a new instance of a particular service is stood up, traffic can be 
re-routed appropriately. This is often referred to as _service discovery_.

### Integration Test

Often, when developing applications with microservice architecture, you cannot fully test out 
all services until you deploy to a staging or production server. This takes much too long to 
get feedback. Fortunately, Docker helps to speed up this process by making it easier to link 
together small, independebt services locally.

## [Flask Blueprints](https://flask.palletsprojects.com/en/2.0.x/blueprints/)
They are self-contained components, used for encapsulating code, templates and static files

