export const STACK_CODE_TEMPLATES = [
    {
      value: 'default',
      label: 'Code your own stack',
      code: `
        """
          Example: Simple Stack Data Structure - Interface
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
      value: 'stack',
      label: 'Stack Data Structure',
      code: `"""
  Example: Simple Stack Data Structure -  Solution
  """
  class Stack:
      def __init__(self):
          self.items = []
  
      def is_empty(self):
          return len(self.items) == 0
  
      def push(self, item):
          self.items.append(item)
          print(f"Pushed: {item}")
  
      def pop(self):
          if self.is_empty():
              print("Stack is empty! Cannot pop.")
              return None
          return self.items.pop()
  
      def peek(self):
          if self.is_empty():
              print("Stack is empty! Cannot peek.")
              return None
          return self.items[-1]
  
      def size(self):
          return len(self.items)
  
      def display(self):
          print("Stack (top to bottom):", list(reversed(self.items)))
  
  # Stack usage runs directly
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