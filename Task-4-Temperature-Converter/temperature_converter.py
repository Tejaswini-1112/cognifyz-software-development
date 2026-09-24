print("================================")
print("     TEMPERATURE CONVERTER")
print("================================")

print("1. Celsius to Fahrenheit")
print("2. Fahrenheit to Celsius")

choice = input("Enter your choice (1 or 2): ")

try:
    temperature = float(input("Enter temperature: "))

    if choice == "1":
        fahrenheit = (temperature * 9 / 5) + 32

        print("\nConverted Temperature:")
        print(f"{temperature}°C = {fahrenheit:.2f}°F")

    elif choice == "2":
        celsius = (temperature - 32) * 5 / 9

        print("\nConverted Temperature:")
        print(f"{temperature}°F = {celsius:.2f}°C")

    else:
        print("\nInvalid choice! Please select 1 or 2.")

except ValueError:
    print("\nInvalid temperature!")
    print("Please enter a valid number.")