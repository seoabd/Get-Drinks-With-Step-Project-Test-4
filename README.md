To make the drinks competition more interesting, the wedding host decided to change the rules. He asked the newlyweds for a step number (a positive integer), and used it to limit the number of toasts. Now, the toasts are made by:

The first guest.
The guest who arrives at the given interval (step).
Each guest participates in the drinking, e.g.:

If step = 1, the rule remains the same: every guest gives a toast.
If step = 2, only guests 1, 3, 5, and so on, give toasts.
If step = 3, only guests 1, 4, 7, 10, etc., give toasts.
Create the getDrinksWithStep function that:

Takes numberOfGuests and step.
Returns the required number of drinks.
