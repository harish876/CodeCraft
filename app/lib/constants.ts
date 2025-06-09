export const STACK_CODE_TEMPLATES = [
    {
        value: 'interface',
        label: 'Interface',
        code: {
            python: `
"""
Example: Simple Stack Data Structure - Interface:
"""

class Stack:
    """
    A simple implementation of a stack data structure using a Python list.
    Follows the Last-In-First-Out (LIFO) principle.
    """

    def __init__(self):
        """
        Initializes an empty stack. Think of stack in terms of a python list
        """
        pass

    def is_empty(self):
        """
        Checks if the stack is empty.

        Returns:
            bool: True if the stack has no elements, False otherwise.
        """
        pass

    def push(self, item):
        """
        Pushes an item onto the top of the stack.

        Args:
            item: The element to be added to the stack.
        """
        pass

    def pop(self):
        """
        Removes and returns the item at the top of the stack.
        Prints a warning if the stack is empty.

        Returns:
            The item at the top of the stack, or None if the stack is empty.
        """
        pass

    def peek(self):
        """
        Returns the item at the top of the stack without removing it.
        Prints a warning if the stack is empty.

        Returns:
            The item at the top of the stack, or None if the stack is empty.
        """
        pass

    def size(self):
        """
        Returns the number of items in the stack.

        Returns:
            int: The current size of the stack.
        """
        pass

    def display(self):
        """
        Prints the stack from top to bottom.
        """
        pass
    
# Stack usage runs directly
if __name__ == "__main__":
    stack = Stack()

    # Push items
    stack.push(10)
    stack.push(20)
    stack.push(30)
    stack.display()

    # Peek at top
    print("Top item:", stack.peek())

    # Pop item
    print("Popped item:", stack.pop())
    stack.display()

    # Check size
    print("Current size:", stack.size())

    # Pop all
    stack.pop()
    stack.pop()
    stack.pop()  # Attempting to pop from empty stack
`,
            cpp: `
// Example: Simple Stack Data Structure - Interface

#include <iostream>
#include <vector>
#include <stdexcept>

class Stack {
    /*
     * A simple implementation of a stack data structure using a C++ vector.
     * Follows the Last-In-First-Out (LIFO) principle.
     */
private:
    // Add your private members here

public:
    // Constructor
    Stack() {
        // Initialize an empty stack
    }

    // Check if the stack is empty
    bool isEmpty() {
        // Return true if the stack has no elements, false otherwise
    }

    // Push an item onto the top of the stack
    void push(int item) {
        // Add the element to the stack
    }

    // Remove and return the item at the top of the stack
    int pop() {
        // Return the top element and remove it
        // Throw an exception if the stack is empty
    }

    // Return the item at the top of the stack without removing it
    int peek() {
        // Return the top element without removing it
        // Throw an exception if the stack is empty
    }

    // Return the number of items in the stack
    int size() {
        // Return the current size of the stack
    }

    // Print the stack from top to bottom
    void display() {
        // Print all elements in the stack
    }
};
`,
            javascript: `
// Example: Simple Stack Data Structure - Interface

class Stack {
    /**
     * A simple implementation of a stack data structure using a JavaScript array.
     * Follows the Last-In-First-Out (LIFO) principle.
     */
    constructor() {
        // Initialize an empty stack
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack has no elements, false otherwise.
     */
    isEmpty() {
        // Return true if the stack has no elements, false otherwise
    }

    /**
     * Pushes an item onto the top of the stack.
     * @param {any} item - The element to be added to the stack.
     */
    push(item) {
        // Add the element to the stack
    }

    /**
     * Removes and returns the item at the top of the stack.
     * @returns {any} The item at the top of the stack, or undefined if the stack is empty.
     */
    pop() {
        // Return the top element and remove it
        // Return undefined if the stack is empty
    }

    /**
     * Returns the item at the top of the stack without removing it.
     * @returns {any} The item at the top of the stack, or undefined if the stack is empty.
     */
    peek() {
        // Return the top element without removing it
        // Return undefined if the stack is empty
    }

    /**
     * Returns the number of items in the stack.
     * @returns {number} The current size of the stack.
     */
    size() {
        // Return the current size of the stack
    }

    /**
     * Prints the stack from top to bottom.
     */
    display() {
        // Print all elements in the stack
    }
}
`,
            c: `
// Example: Simple Stack Data Structure - Interface

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int top;
} Stack;

// Initialize an empty stack
void initStack(Stack* stack) {
    // Initialize the stack
}

// Check if the stack is empty
bool isEmpty(Stack* stack) {
    // Return true if the stack has no elements, false otherwise
}

// Push an item onto the top of the stack
void push(Stack* stack, int item) {
    // Add the element to the stack
}

// Remove and return the item at the top of the stack
int pop(Stack* stack) {
    // Return the top element and remove it
    // Return -1 if the stack is empty
}

// Return the item at the top of the stack without removing it
int peek(Stack* stack) {
    // Return the top element without removing it
    // Return -1 if the stack is empty
}

// Return the number of items in the stack
int size(Stack* stack) {
    // Return the current size of the stack
}

// Print the stack from top to bottom
void display(Stack* stack) {
    // Print all elements in the stack
}
`
        }
    },
    {
        value: 'solution',
        label: 'Solution',
        code: {
            python: `
"""
Example: Simple Stack Data Structure - Solution
"""

class Stack:
    """
    A simple implementation of a stack data structure using a Python list.
    Follows the Last-In-First-Out (LIFO) principle.
    """

    def __init__(self):
        """
        Initializes an empty stack.
        """
        self.items = []

    def is_empty(self):
        """
        Checks if the stack is empty.

        Returns:
            bool: True if the stack has no elements, False otherwise.
        """
        return len(self.items) == 0

    def push(self, item):
        """
        Pushes an item onto the top of the stack.

        Args:
            item: The element to be added to the stack.
        """
        self.items.append(item)

    def pop(self):
        """
        Removes and returns the item at the top of the stack.
        Prints a warning if the stack is empty.

        Returns:
            The item at the top of the stack, or None if the stack is empty.
        """
        if self.is_empty():
            print("Warning: Attempt to pop from an empty stack.")
            return None
        return self.items.pop()

    def peek(self):
        """
        Returns the item at the top of the stack without removing it.
        Prints a warning if the stack is empty.

        Returns:
            The item at the top of the stack, or None if the stack is empty.
        """
        if self.is_empty():
            print("Warning: Attempt to peek into an empty stack.")
            return None
        return self.items[-1]

    def size(self):
        """
        Returns the number of items in the stack.

        Returns:
            int: The current size of the stack.
        """
        return len(self.items)

    def display(self):
        """
        Prints the stack from top to bottom.
        """
        if self.is_empty():
            print("Stack is empty.")
        else:
            print("Stack (top to bottom):")
            for item in reversed(self.items):
                print(item)

# Stack usage runs directly
if __name__ == "__main__":
    stack = Stack()

    # Push items
    stack.push(10)
    stack.push(20)
    stack.push(30)
    stack.display()

    # Peek at top
    print("Top item:", stack.peek())

    # Pop item
    print("Popped item:", stack.pop())
    stack.display()

    # Check size
    print("Current size:", stack.size())

    # Pop all
    stack.pop()
    stack.pop()
    stack.pop()  # Attempting to pop from empty stack
`,
            cpp: `
// Example: Simple Stack Data Structure - Solution

#include <iostream>
#include <vector>
#include <stdexcept>

class Stack {
private:
    std::vector<int> items;

public:
    Stack() {}

    bool isEmpty() {
        return items.empty();
    }

    void push(int item) {
        items.push_back(item);
    }

    int pop() {
        if (isEmpty()) {
            throw std::runtime_error("Attempt to pop from an empty stack");
        }
        int top = items.back();
        items.pop_back();
        return top;
    }

    int peek() {
        if (isEmpty()) {
            throw std::runtime_error("Attempt to peek into an empty stack");
        }
        return items.back();
    }

    int size() {
        return items.size();
    }

    void display() {
        if (isEmpty()) {
            std::cout << "Stack is empty." << std::endl;
            return;
        }
        std::cout << "Stack (top to bottom):" << std::endl;
        for (auto it = items.rbegin(); it != items.rend(); ++it) {
            std::cout << *it << std::endl;
        }
    }
};
`,
            javascript: `
// Example: Simple Stack Data Structure - Solution

class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            console.warn("Warning: Attempt to pop from an empty stack.");
            return undefined;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            console.warn("Warning: Attempt to peek into an empty stack.");
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return;
        }
        console.log("Stack (top to bottom):");
        for (let i = this.items.length - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }
}
`,
            c: `
// Example: Simple Stack Data Structure - Solution

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int top;
} Stack;

void initStack(Stack* stack) {
    stack->top = -1;
}

bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

bool isFull(Stack* stack) {
    return stack->top == MAX_SIZE - 1;
}

void push(Stack* stack, int item) {
    if (isFull(stack)) {
        printf("Warning: Stack overflow\n");
        return;
    }
    stack->items[++stack->top] = item;
}

int pop(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Warning: Attempt to pop from an empty stack\n");
        return -1;
    }
    return stack->items[stack->top--];
}

int peek(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Warning: Attempt to peek into an empty stack\n");
        return -1;
    }
    return stack->items[stack->top];
}

int size(Stack* stack) {
    return stack->top + 1;
}

void display(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty.\n");
        return;
    }
    
    printf("Stack (top to bottom):\n");
    for (int i = stack->top; i >= 0; i--) {
        printf("%d\n", stack->items[i]);
    }
}

int main() {
    Stack stack;
    initStack(&stack);

    // Push items
    push(&stack, 10);
    push(&stack, 20);
    push(&stack, 30);
    display(&stack);

    // Peek at top
    printf("Top item: %d\n", peek(&stack));

    // Pop item
    printf("Popped item: %d\n", pop(&stack));
    display(&stack);

    // Check size
    printf("Current size: %d\n", size(&stack));

    // Pop all
    pop(&stack);
    pop(&stack);
    pop(&stack);  // Attempting to pop from empty stack

    return 0;
}
`
        }
    }
];

export const QUEUE_CODE_TEMPLATES = [
    {
        value: 'interface',
        label: 'Interface',
        code: {
            python: `
"""
Example: Simple Queue Data Structure - Interface:
"""

class Queue:
    """
    A simple implementation of a queue data structure using a Python list.
    Follows the First-In-First-Out (FIFO) principle.
    """

    def __init__(self):
        """
        Initializes an empty queue.
        """
        pass

    def is_empty(self):
        """
        Checks if the queue is empty.

        Returns:
            bool: True if the queue has no elements, False otherwise.
        """
        pass

    def is_full(self):
        """
        Checks if the queue is full (for fixed-size implementation).

        Returns:
            bool: True if the queue is full, False otherwise.
        """
        pass

    def enqueue(self, item):
        """
        Adds an item to the rear of the queue.

        Args:
            item: The element to be added to the queue.
        """
        pass

    def dequeue(self):
        """
        Removes and returns the item at the front of the queue.
        Prints a warning if the queue is empty.

        Returns:
            The item at the front of the queue, or None if the queue is empty.
        """
        pass

    def front(self):
        """
        Returns the item at the front of the queue without removing it.
        Prints a warning if the queue is empty.

        Returns:
            The item at the front of the queue, or None if the queue is empty.
        """
        pass

    def size(self):
        """
        Returns the number of items in the queue.

        Returns:
            int: The current size of the queue.
        """
        pass

    def display(self):
        """
        Prints the queue from front to rear.
        """
        pass
        
# Queue usage example
if __name__ == "__main__":
    queue = Queue()

    # Enqueue items
    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30)
    queue.display()

    # Peek at front
    print("Front item:", queue.front())

    # Dequeue item
    print("Dequeued item:", queue.dequeue())
    queue.display()

    # Check size
    print("Current size:", queue.size())

    # Dequeue all
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()  # Attempting to dequeue from empty queue
`,
            cpp: `
// Example: Simple Queue Data Structure - Interface

#include <iostream>
#include <vector>
#include <stdexcept>

class Queue {
    /*
     * A simple implementation of a queue data structure using a C++ vector.
     * Follows the First-In-First-Out (FIFO) principle.
     */
private:
    // Add your private members here

public:
    // Constructor
    Queue() {
        // Initialize an empty queue
    }

    // Check if the queue is empty
    bool isEmpty() {
        // Return true if the queue has no elements, false otherwise
    }

    // Check if the queue is full
    bool isFull() {
        // Return true if the queue is full, false otherwise
    }

    // Add an item to the rear of the queue
    void enqueue(int item) {
        // Add the element to the queue
    }

    // Remove and return the item at the front of the queue
    int dequeue() {
        // Return the front element and remove it
        // Throw an exception if the queue is empty
    }

    // Return the item at the front of the queue without removing it
    int front() {
        // Return the front element without removing it
        // Throw an exception if the queue is empty
    }

    // Return the number of items in the queue
    int size() {
        // Return the current size of the queue
    }

    // Print the queue from front to rear
    void display() {
        // Print all elements in the queue
    }
};
`,
            javascript: `
// Example: Simple Queue Data Structure - Interface

class Queue {
    /**
     * A simple implementation of a queue data structure using a JavaScript array.
     * Follows the First-In-First-Out (FIFO) principle.
     */
    constructor() {
        // Initialize an empty queue
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue has no elements, false otherwise.
     */
    isEmpty() {
        // Return true if the queue has no elements, false otherwise
    }

    /**
     * Checks if the queue is full.
     * @returns {boolean} True if the queue is full, false otherwise.
     */
    isFull() {
        // Return true if the queue is full, false otherwise
    }

    /**
     * Adds an item to the rear of the queue.
     * @param {any} item - The element to be added to the queue.
     */
    enqueue(item) {
        // Add the element to the queue
    }

    /**
     * Removes and returns the item at the front of the queue.
     * @returns {any} The item at the front of the queue, or undefined if the queue is empty.
     */
    dequeue() {
        // Return the front element and remove it
        // Return undefined if the queue is empty
    }

    /**
     * Returns the item at the front of the queue without removing it.
     * @returns {any} The item at the front of the queue, or undefined if the queue is empty.
     */
    front() {
        // Return the front element without removing it
        // Return undefined if the queue is empty
    }

    /**
     * Returns the number of items in the queue.
     * @returns {number} The current size of the queue.
     */
    size() {
        // Return the current size of the queue
    }

    /**
     * Prints the queue from front to rear.
     */
    display() {
        // Print all elements in the queue
    }
}
`,
            c: `
// Example: Simple Queue Data Structure - Interface

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
    int size;
} Queue;

// Initialize an empty queue
void initQueue(Queue* queue) {
    // Initialize the queue
}

// Check if the queue is empty
bool isEmpty(Queue* queue) {
    // Return true if the queue has no elements, false otherwise
}

// Check if the queue is full
bool isFull(Queue* queue) {
    // Return true if the queue is full, false otherwise
}

// Add an item to the rear of the queue
void enqueue(Queue* queue, int item) {
    // Add the element to the queue
}

// Remove and return the item at the front of the queue
int dequeue(Queue* queue) {
    // Return the front element and remove it
    // Return -1 if the queue is empty
}

// Return the item at the front of the queue without removing it
int front(Queue* queue) {
    // Return the front element without removing it
    // Return -1 if the queue is empty
}

// Return the number of items in the queue
int size(Queue* queue) {
    // Return the current size of the queue
}

// Print the queue from front to rear
void display(Queue* queue) {
    // Print all elements in the queue
}
`
        }
    },
    {
        value: 'solution',
        label: 'Solution',
        code: {
            python: `
"""
Example: Simple Queue Data Structure - Solution
"""

class Queue:
    """
    A simple implementation of a queue data structure using a Python list.
    Follows the First-In-First-Out (FIFO) principle.
    """

    def __init__(self):
        """
        Initializes an empty queue.
        """
        self.items = []

    def is_empty(self):
        """
        Checks if the queue is empty.

        Returns:
            bool: True if the queue has no elements, False otherwise.
        """
        return len(self.items) == 0

    def is_full(self):
        """
        Checks if the queue is full (for fixed-size implementation).

        Returns:
            bool: True if the queue is full, False otherwise.
        """
        return False  # For dynamic list implementation, queue is never full

    def enqueue(self, item):
        """
        Adds an item to the rear of the queue.

        Args:
            item: The element to be added to the queue.
        """
        self.items.append(item)

    def dequeue(self):
        """
        Removes and returns the item at the front of the queue.
        Prints a warning if the queue is empty.

        Returns:
            The item at the front of the queue, or None if the queue is empty.
        """
        if self.is_empty():
            print("Warning: Attempt to dequeue from an empty queue.")
            return None
        return self.items.pop(0)

    def front(self):
        """
        Returns the item at the front of the queue without removing it.
        Prints a warning if the queue is empty.

        Returns:
            The item at the front of the queue, or None if the queue is empty.
        """
        if self.is_empty():
            print("Warning: Attempt to peek into an empty queue.")
            return None
        return self.items[0]

    def size(self):
        """
        Returns the number of items in the queue.

        Returns:
            int: The current size of the queue.
        """
        return len(self.items)

    def display(self):
        """
        Prints the queue from front to rear.
        """
        if self.is_empty():
            print("Queue is empty.")
        else:
            print("Queue (front to rear):")
            for item in self.items:
                print(item)

# Queue usage example
if __name__ == "__main__":
    queue = Queue()

    # Enqueue items
    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30)
    queue.display()

    # Peek at front
    print("Front item:", queue.front())

    # Dequeue item
    print("Dequeued item:", queue.dequeue())
    queue.display()

    # Check size
    print("Current size:", queue.size())

    # Dequeue all
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()  # Attempting to dequeue from empty queue
`,
            cpp: `
// Example: Simple Queue Data Structure - Solution

#include <iostream>
#include <vector>
#include <stdexcept>

class Queue {
private:
    std::vector<int> items;

public:
    Queue() {}

    bool isEmpty() {
        return items.empty();
    }

    bool isFull() {
        return false;  // For dynamic vector implementation, queue is never full
    }

    void enqueue(int item) {
        items.push_back(item);
    }

    int dequeue() {
        if (isEmpty()) {
            throw std::runtime_error("Attempt to dequeue from an empty queue");
        }
        int front = items.front();
        items.erase(items.begin());
        return front;
    }

    int front() {
        if (isEmpty()) {
            throw std::runtime_error("Attempt to peek into an empty queue");
        }
        return items.front();
    }

    int size() {
        return items.size();
    }

    void display() {
        if (isEmpty()) {
            std::cout << "Queue is empty." << std::endl;
            return;
        }
        std::cout << "Queue (front to rear):" << std::endl;
        for (const auto& item : items) {
            std::cout << item << std::endl;
        }
    }
};

int main() {
    Queue queue;

    // Enqueue items
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.display();

    // Peek at front
    std::cout << "Front item: " << queue.front() << std::endl;

    // Dequeue item
    std::cout << "Dequeued item: " << queue.dequeue() << std::endl;
    queue.display();

    // Check size
    std::cout << "Current size: " << queue.size() << std::endl;

    // Dequeue all
    queue.dequeue();
    queue.dequeue();
    try {
        queue.dequeue();  // Attempting to dequeue from empty queue
    } catch (const std::runtime_error& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }

    return 0;
}
`,
            javascript: `
// Example: Simple Queue Data Structure - Solution

class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    isFull() {
        return false;  // For dynamic array implementation, queue is never full
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.warn("Warning: Attempt to dequeue from an empty queue.");
            return undefined;
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            console.warn("Warning: Attempt to peek into an empty queue.");
            return undefined;
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        console.log("Queue (front to rear):");
        for (const item of this.items) {
            console.log(item);
        }
    }
}

// Queue usage example
const queue = new Queue();

// Enqueue items
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();

// Peek at front
console.log("Front item:", queue.front());

// Dequeue item
console.log("Dequeued item:", queue.dequeue());
queue.display();

// Check size
console.log("Current size:", queue.size());

// Dequeue all
queue.dequeue();
queue.dequeue();
queue.dequeue();  // Attempting to dequeue from empty queue
`,
            c: `
// Example: Simple Queue Data Structure - Solution

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
    int size;
} Queue;

void initQueue(Queue* queue) {
    queue->front = 0;
    queue->rear = -1;
    queue->size = 0;
}

bool isEmpty(Queue* queue) {
    return queue->size == 0;
}

bool isFull(Queue* queue) {
    return queue->size == MAX_SIZE;
}

void enqueue(Queue* queue, int item) {
    if (isFull(queue)) {
        printf("Warning: Queue overflow\n");
        return;
    }
    queue->rear = (queue->rear + 1) % MAX_SIZE;
    queue->items[queue->rear] = item;
    queue->size++;
}

int dequeue(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Warning: Attempt to dequeue from an empty queue\n");
        return -1;
    }
    int item = queue->items[queue->front];
    queue->front = (queue->front + 1) % MAX_SIZE;
    queue->size--;
    return item;
}

int front(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Warning: Attempt to peek into an empty queue\n");
        return -1;
    }
    return queue->items[queue->front];
}

int size(Queue* queue) {
    return queue->size;
}

void display(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty.\n");
        return;
    }
    
    printf("Queue (front to rear):\n");
    int count = 0;
    int index = queue->front;
    
    while (count < queue->size) {
        printf("%d\n", queue->items[index]);
        index = (index + 1) % MAX_SIZE;
        count++;
    }
}

int main() {
    Queue queue;
    initQueue(&queue);

    // Enqueue items
    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);
    display(&queue);

    // Peek at front
    printf("Front item: %d\n", front(&queue));

    // Dequeue item
    printf("Dequeued item: %d\n", dequeue(&queue));
    display(&queue);

    // Check size
    printf("Current size: %d\n", size(&queue));

    // Dequeue all
    dequeue(&queue);
    dequeue(&queue);
    dequeue(&queue);  // Attempting to dequeue from empty queue

    return 0;
}
`
        }
    }
];

export const QUEUE_LINKED_LIST_TEMPLATES = [
    {
        value: 'interface',
        label: 'Interface',
        code: {
            python: `
"""
Example: Queue Data Structure using Linked List - Interface:
"""

class Node:
    """
    Node class for linked list implementation of queue.
    Each node contains data and a reference to the next node.
    """
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    """
    A queue implementation using a singly linked list.
    Follows the First-In-First-Out (FIFO) principle.
    """

    def __init__(self):
        """
        Initializes an empty queue with front and rear pointers.
        """
        pass

    def is_empty(self):
        """
        Checks if the queue is empty.

        Returns:
            bool: True if the queue has no elements, False otherwise.
        """
        pass

    def enqueue(self, item):
        """
        Adds an item to the rear of the queue.

        Args:
            item: The element to be added to the queue.
        """
        pass

    def dequeue(self):
        """
        Removes and returns the item at the front of the queue.
        Prints a warning if the queue is empty.

        Returns:
            The item at the front of the queue, or None if the queue is empty.
        """
        pass

    def front(self):
        """
        Returns the item at the front of the queue without removing it.
        Prints a warning if the queue is empty.

        Returns:
            The item at the front of the queue, or None if the queue is empty.
        """
        pass

    def size(self):
        """
        Returns the number of items in the queue.

        Returns:
            int: The current size of the queue.
        """
        pass

    def display(self):
        """
        Prints the queue from front to rear.
        """
        pass

# Queue usage example
if __name__ == "__main__":
    queue = Queue()

    # Enqueue items
    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30)
    queue.display()

    # Peek at front
    print("Front item:", queue.front())

    # Dequeue item
    print("Dequeued item:", queue.dequeue())
    queue.display()

    # Check size
    print("Current size:", queue.size())

    # Dequeue all
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()  # Attempting to dequeue from empty queue
`,
            cpp: `
// Example: Queue Data Structure using Linked List - Interface

#include <iostream>
#include <stdexcept>

class Node {
    /*
     * Node class for linked list implementation of queue.
     * Each node contains data and a pointer to the next node.
     */
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

class Queue {
private:
    Node* front;  // Pointer to front node
    Node* rear;   // Pointer to rear node
    int count;    // Number of elements in queue

public:
    // Constructor
    Queue() {
        // Initialize an empty queue
    }

    // Check if the queue is empty
    bool isEmpty() {
        // Return true if the queue has no elements, false otherwise
    }

    // Add an item to the rear of the queue
    void enqueue(int item) {
        // Add the element to the queue
    }

    // Remove and return the item at the front of the queue
    int dequeue() {
        // Return the front element and remove it
        // Throw an exception if the queue is empty
    }

    // Return the item at the front of the queue without removing it
    int front() {
        // Return the front element without removing it
        // Throw an exception if the queue is empty
    }

    // Return the number of items in the queue
    int size() {
        // Return the current size of the queue
    }

    // Print the queue from front to rear
    void display() {
        // Print all elements in the queue
    }
};
`,
            javascript: `
// Example: Queue Data Structure using Linked List - Interface

class Node {
    /**
     * Node class for linked list implementation of queue.
     * Each node contains data and a reference to the next node.
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    /**
     * A queue implementation using a singly linked list.
     * Follows the First-In-First-Out (FIFO) principle.
     */
    constructor() {
        // Initialize an empty queue
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue has no elements, false otherwise.
     */
    isEmpty() {
        // Return true if the queue has no elements, false otherwise
    }

    /**
     * Adds an item to the rear of the queue.
     * @param {any} item - The element to be added to the queue.
     */
    enqueue(item) {
        // Add the element to the queue
    }

    /**
     * Removes and returns the item at the front of the queue.
     * @returns {any} The item at the front of the queue, or undefined if the queue is empty.
     */
    dequeue() {
        // Return the front element and remove it
        // Return undefined if the queue is empty
    }

    /**
     * Returns the item at the front of the queue without removing it.
     * @returns {any} The item at the front of the queue, or undefined if the queue is empty.
     */
    front() {
        // Return the front element without removing it
        // Return undefined if the queue is empty
    }

    /**
     * Returns the number of items in the queue.
     * @returns {number} The current size of the queue.
     */
    size() {
        // Return the current size of the queue
    }

    /**
     * Prints the queue from front to rear.
     */
    display() {
        // Print all elements in the queue
    }
}
`,
            c: `
// Example: Queue Data Structure using Linked List - Interface

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct {
    Node* front;
    Node* rear;
    int size;
} Queue;

// Initialize an empty queue
void initQueue(Queue* queue) {
    // Initialize the queue
}

// Check if the queue is empty
bool isEmpty(Queue* queue) {
    // Return true if the queue has no elements, false otherwise
}

// Add an item to the rear of the queue
void enqueue(Queue* queue, int item) {
    // Add the element to the queue
}

// Remove and return the item at the front of the queue
int dequeue(Queue* queue) {
    // Return the front element and remove it
    // Return -1 if the queue is empty
}

// Return the item at the front of the queue without removing it
int front(Queue* queue) {
    // Return the front element without removing it
    // Return -1 if the queue is empty
}

// Return the number of items in the queue
int size(Queue* queue) {
    // Return the current size of the queue
}

// Print the queue from front to rear
void display(Queue* queue) {
    // Print all elements in the queue
}
`
        }
    },
    {
        value: 'solution',
        label: 'Solution',
        code: {
            python: `
"""
Example: Queue Data Structure using Linked List - Solution
"""

class Node:
    """
    Node class for linked list implementation of queue.
    Each node contains data and a reference to the next node.
    """
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    """
    A queue implementation using a singly linked list.
    Follows the First-In-First-Out (FIFO) principle.
    """

    def __init__(self):
        """
        Initializes an empty queue with front and rear pointers.
        """
        self._front = None
        self.rear = None
        self.count = 0

    def is_empty(self):
        """
        Checks if the queue is empty.

        Returns:
            bool: True if the queue has no elements, False otherwise.
        """
        return self._front is None

    def enqueue(self, item):
        """
        Adds an item to the rear of the queue.

        Args:
            item: The element to be added to the queue.
        """
        new_node = Node(item)
        if self.is_empty():
            self._front = new_node
        else:
            self.rear.next = new_node
        self.rear = new_node
        self.count += 1

    def dequeue(self):
        """
        Removes and returns the item at the front of the queue.
        Prints a warning if the queue is empty.

        Returns:
            The item at the front of the queue, or None if the queue is empty.
        """
        if self.is_empty():
            print("Warning: Attempt to dequeue from an empty queue.")
            return None
        
        item = self._front.data
        self._front = self._front.next
        self.count -= 1
        
        if self._front is None:
            self.rear = None
            
        return item

    def front(self):
        """
        Returns the item at the front of the queue without removing it.
        Prints a warning if the queue is empty.

        Returns:
            The item at the front of the queue, or None if the queue is empty.
        """
        if self.is_empty():
            print("Warning: Attempt to peek into an empty queue.")
            return None
        return self._front.data

    def size(self):
        """
        Returns the number of items in the queue.

        Returns:
            int: The current size of the queue.
        """
        return self.count

    def display(self):
        """
        Prints the queue from front to rear.
        """
        if self.is_empty():
            print("Queue is empty.")
            return
        
        print("Queue (front to rear):")
        current = self._front
        while current:
            print(current.data)
            current = current.next

# Queue usage example
if __name__ == "__main__":
    queue = Queue()

    # Enqueue items
    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30)
    queue.display()

    # Peek at front
    print("Front item:", queue.front())

    # Dequeue item
    print("Dequeued item:", queue.dequeue())
    queue.display()

    # Check size
    print("Current size:", queue.size())

    # Dequeue all
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()  # Attempting to dequeue from empty queue
`,
            cpp: `
// Example: Queue Data Structure using Linked List - Solution

#include <iostream>
#include <stdexcept>

class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

class Queue {
private:
    Node* _front;  // Pointer to front node
    Node* rear;   // Pointer to rear node
    int count;    // Number of elements in queue

public:
    Queue() {
        _front = nullptr;
        rear = nullptr;
        count = 0;
    }

    bool isEmpty() {
        return _front == nullptr;
    }

    void enqueue(int item) {
        Node* new_node = new Node(item);
        
        if (isEmpty()) {
            _front = new_node;
        } else {
            rear->next = new_node;
        }
        rear = new_node;
        count++;
    }

    int dequeue() {
        if (isEmpty()) {
            throw std::runtime_error("Attempt to dequeue from an empty queue");
        }
        
        int item = _front->data;
        Node* temp = _front;
        _front = _front->next;
        delete temp;
        count--;
        
        if (_front == nullptr) {
            rear = nullptr;
        }
        
        return item;
    }

    int front() {
        if (isEmpty()) {
            throw std::runtime_error("Attempt to peek into an empty queue");
        }
        return _front->data;
    }

    int size() {
        return count;
    }

    void display() {
        if (isEmpty()) {
            std::cout << "Queue is empty." << std::endl;
            return;
        }
        
        std::cout << "Queue (front to rear):" << std::endl;
        Node* current = _front;
        while (current != nullptr) {
            std::cout << current->data << std::endl;
            current = current->next;
        }
    }
};

int main() {
    Queue queue;

    // Enqueue items
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.display();

    // Peek at front
    std::cout << "Front item: " << queue.front() << std::endl;

    // Dequeue item
    std::cout << "Dequeued item: " << queue.dequeue() << std::endl;
    queue.display();

    // Check size
    std::cout << "Current size: " << queue.size() << std::endl;

    // Dequeue all
    queue.dequeue();
    queue.dequeue();
    try {
        queue.dequeue();  // Attempting to dequeue from empty queue
    } catch (const std::runtime_error& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }

    return 0;
}
`,
            javascript: `
// Example: Queue Data Structure using Linked List - Solution

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this._front = null;
        this.rear = null;
        this.count = 0;
    }

    isEmpty() {
        return this._front === null;
    }

    enqueue(item) {
        const new_node = new Node(item);
        
        if (this.isEmpty()) {
            this._front = new_node;
        } else {
            this.rear.next = new_node;
        }
        this.rear = new_node;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.warn("Warning: Attempt to dequeue from an empty queue.");
            return undefined;
        }
        
        const item = this._front.data;
        this._front = this._front.next;
        this.count--;
        
        if (this._front === null) {
            this.rear = null;
        }
        
        return item;
    }

    front() {
        if (this.isEmpty()) {
            console.warn("Warning: Attempt to peek into an empty queue.");
            return undefined;
        }
        return this._front.data;
    }

    size() {
        return this.count;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        
        console.log("Queue (front to rear):");
        let current = this._front;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Queue usage example
const queue = new Queue();

// Enqueue items
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();

// Peek at front
console.log("Front item:", queue.front());

// Dequeue item
console.log("Dequeued item:", queue.dequeue());
queue.display();

// Check size
console.log("Current size:", queue.size());

// Dequeue all
queue.dequeue();
queue.dequeue();
queue.dequeue();  // Attempting to dequeue from empty queue
`,
            c: `
// Example: Queue Data Structure using Linked List - Solution

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct {
    Node* front;
    Node* rear;
    int size;
} Queue;

void initQueue(Queue* queue) {
    queue->front = NULL;
    queue->rear = NULL;
    queue->size = 0;
}

bool isEmpty(Queue* queue) {
    return queue->front == NULL;
}

void enqueue(Queue* queue, int item) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    if (new_node == NULL) {
        printf("Memory allocation failed\n");
        return;
    }
    
    new_node->data = item;
    new_node->next = NULL;
    
    if (isEmpty(queue)) {
        queue->front = new_node;
    } else {
        queue->rear->next = new_node;
    }
    queue->rear = new_node;
    queue->size++;
}

int dequeue(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Warning: Attempt to dequeue from an empty queue\n");
        return -1;
    }
    
    Node* temp = queue->front;
    int item = temp->data;
    
    queue->front = queue->front->next;
    queue->size--;
    
    if (queue->front == NULL) {
        queue->rear = NULL;
    }
    
    free(temp);
    return item;
}

int front(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Warning: Attempt to peek into an empty queue\n");
        return -1;
    }
    return queue->front->data;
}

int size(Queue* queue) {
    return queue->size;
}

void display(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty.\n");
        return;
    }
    
    printf("Queue (front to rear):\n");
    Node* current = queue->front;
    while (current != NULL) {
        printf("%d\n", current->data);
        current = current->next;
    }
}

int main() {
    Queue queue;
    initQueue(&queue);

    // Enqueue items
    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);
    display(&queue);

    // Peek at front
    printf("Front item: %d\n", front(&queue));

    // Dequeue item
    printf("Dequeued item: %d\n", dequeue(&queue));
    display(&queue);

    // Check size
    printf("Current size: %d\n", size(&queue));

    // Dequeue all
    dequeue(&queue);
    dequeue(&queue);
    dequeue(&queue);  // Attempting to dequeue from empty queue

    return 0;
}
`
        }
    }
];