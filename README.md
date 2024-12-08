
**Solution Overview:**

You can directly run the solution from the `main.ts` file to see the results.

### Q1: Apple TV - "3 for 2" Offer
We have implemented a dynamic pricing rule where, for every 3 Apple TVs purchased, the customer pays the price of only 2.  
- This rule is flexible and allows runtime allocation of product types and counts without requiring changes to the main class.  
- The logic is encapsulated in a separate class to make it reusable and maintainable.

### Q2: Super iPad - Bulk Discount
For the Super iPad, a bulk discount is applied. If a customer buys more than 4 units, the price drops to $499.99 per unit.  
- A dedicated class was created to handle this specific sales logic in a clean and modular way.

### Modular Design
- **Product Storage**: A separate file manages product details and their storage to keep the logic organized and scalable.
- **Pricing Rules**: Each pricing rule is implemented in its own file to allow flexibility and make it easier to add or modify rules in the future.
-  **Testing**: A separate file `main.ts` which test details and their expected output.


This approach ensures the system is flexible, dynamic, and easy to extend for future pricing rules or product additions.
