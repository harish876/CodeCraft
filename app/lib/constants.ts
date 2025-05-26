export const STACK_CODE_TEMPLATES = [
    {
        value: 'interface',
        label: 'Interface',
        code: `
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
`
    },
    {
        value: 'solution',
        label: 'Solution',
        code: `
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
    },
];