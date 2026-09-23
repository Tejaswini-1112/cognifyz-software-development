import random

def play_game():

    secret_number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7

    print("\n================================")
    print("      NUMBER GUESSING GAME")
    print("================================")
    print("I have selected a number between 1 and 100.")
    print("You have 7 attempts to guess it!")

    while attempts < max_attempts:

        try:
            guess = int(input("\nEnter your guess: "))

            if guess < 1 or guess > 100:
                print("Please enter a number between 1 and 100.")
                continue

            attempts += 1

            if guess < secret_number:
                print("Too low! Try a higher number.")

            elif guess > secret_number:
                print("Too high! Try a lower number.")

            else:
                print("\n🎉 YOU WIN!")
                print("Congratulations! You guessed the number.")
                print("Number of attempts:", attempts)
                return

        except ValueError:
            print("Invalid input! Please enter a number.")

    print("\n❌ GAME OVER!")
    print("You used all 7 attempts.")
    print("The correct number was:", secret_number)


while True:

    play_game()

    again = input("\nDo you want to play again? (yes/no): ").lower()

    if again != "yes":
        print("\nThank you for playing! 👋")
        break