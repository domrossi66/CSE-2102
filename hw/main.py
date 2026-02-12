def calculator(x, y, operation):
    """Performs calculation on 2 numbers"""
    # Perform operation
    if(operation == 1): return x + y
    elif(operation == 2): return x - y
    elif(operation == 3): return x * y
    elif(operation == 4): return x / y
    else: return "Invalid choice"

if __name__ == "__main__":
    x = float(input("Enter first number:    "))
    y = float(input("Enter second number:   "))
    
    #Give user options
    print("Select an operation:\n")
    print("1: Add")
    print("2: Subtract")
    print("3: Multiply")
    print("4: Divide\n")
    operation = int(input())
    answer = calculator(x,y, operation)
    print(answer)
