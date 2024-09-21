# design-patterns
Design patterns

# 1. Singleton Pattern
Definition: The Singleton Pattern ensures that a class has only one instance throughout the application and provides a global point of access to it.
# Explanation:
Imagine a system where you need only one instance of a resource like a database connection or a logging service. You wouldn't want multiple connections or loggers as it could lead to conflicts or redundancy.
In the Logger example, the Logger class ensures that only one instance of Logger exists. The constructor checks if an instance already exists (Logger.instance). If it doesn’t, it creates one; if it does, it returns the existing instance. This prevents multiple instances of the logger and ensures that logs are centralized in one place.
# Use cases:
Logging services, configuration settings, and database connections.


# 2. Factory Pattern
Definition: The Factory Pattern provides a way to create objects without specifying the exact class of object that will be created.
# Explanation:
The idea behind the factory pattern is to separate the creation logic from the user. Instead of directly creating objects with new in the client code, you use a factory method to create the object.
In the Vehicle Factory example, we don’t know exactly what kind of vehicle (Car, Bike) will be created. The VehicleFactory handles the creation process. Depending on the argument passed ('car' or 'bike'), it returns the appropriate object.
# Use cases:
When you need to create objects dynamically, and you don’t want the client code to be tightly coupled to the class that will be instantiated.


# 3. Observer Pattern
Definition: The Observer Pattern defines a one-to-many relationship between objects, where one object (subject) changes state and all its dependents (observers) are notified automatically.
# Explanation:
Think of this pattern as a subscription mechanism. If you subscribe to a service (like stock prices), you will receive notifications when something changes.
In the Stock Price Tracker example, there’s a Stock class (the subject) and StockObserver classes (the observers). The observers are added to the stock object, and whenever the stock price changes, the notifyObservers() method calls the update() method on each observer to notify them.
# Use cases:
Implementing event handling systems (e.g., user interface listeners), stock price monitors, or messaging systems.


4. Decorator Pattern
Definition: The Decorator Pattern allows for adding new functionality to an object dynamically without altering its structure or the behavior of other objects from the same class.
# Explanation:
The decorator pattern wraps an object to provide extra functionality without modifying the original object.
In the Coffee Shop example, a basic Coffee costs 5. To add milk and sugar, you wrap the Coffee object with Milk and Sugar decorators. This way, you can dynamically add features (milk and sugar) to the coffee without modifying the original coffee class.
# Use cases:
Adding features to objects like streams, beverages, or user interfaces in a flexible and extensible manner.


# 5. Command Pattern
Definition: The Command Pattern encapsulates a request as an object, allowing for parameterization of methods with different requests, queuing of requests, and logging the history of requests.
# Explanation:
Imagine a remote control that sends different commands to a TV (like turning it on, off, changing the channel). Each action (command) can be encapsulated in its own class, separating the logic of sending the command from the logic of executing the command.
In the Remote Control (TV) example, the OnCommand and OffCommand classes encapsulate the requests to turn the TV on and off. The RemoteControl class doesn’t need to know how the TV works internally, it just sends the command. This also allows you to add an undo feature, since each command can reverse its action.
# Use cases:
Implementing undo/redo functionality, macro recording, transaction systems.


# 6. Module Pattern
Definition: The Module Pattern is used to create self-contained blocks of code (modules) that encapsulate data and behavior, providing public and private access methods to that data.
# Explanation:
The idea behind this pattern is to use closures to create private data inside a module and expose only what’s necessary through public methods.
In the Counter Module example, the counter variable is private within the module (it’s not directly accessible from outside). However, we expose methods like increment, decrement, and getCount to interact with the counter. This ensures that the internal workings (like how counter is managed) are hidden, and only the necessary parts are exposed.
# Use cases:
When you want to organize code into logical units with encapsulated, private data (like counters, configuration settings, or reusable utilities).

# Recap of Each Pattern's Purpose:
# Singleton: Ensures a class has only one instance.
# Factory: Creates objects without specifying their exact class.
# Observer: Allows multiple objects to listen for changes in another object.
# Decorator: Adds behavior to objects dynamically, without altering their structure.
# Command: Encapsulates requests as objects to allow flexible, reusable actions.
# Module: Encapsulates data and exposes only what’s necessary, keeping the rest private.

Each of these design patterns helps you manage and organize code in a structured, reusable, and maintainable way. They are particularly useful in larger, more complex applications where design clarity and maintainability are key concerns.