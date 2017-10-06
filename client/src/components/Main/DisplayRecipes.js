import React, {Component} from "react";
import {Grid, Row, Col, Thumbnail, Button, Panel} from "react-bootstrap";
import DisplayRecipeInfo from "../Profile/RecipeInfo";
import StarButton from "./StarButton";

var recipes = [
  {
    "title": "Choco Peanut Butter Banana Soft Serve",
    "spoonacularID": 511370,
    "servings": 1,
    "image": "https://spoonacular.com/recipeImages/511370-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/choco-peanut-butter-banana-soft-serve-511370",
    "instructions": [
      {
        "number": 1,
        "step": "Place everything in a mini food processor or blender, and blend until smooth. You may have to scrape down the sides of the processor a couple of times."
      }
    ],
    "ingredients": [
      {
        "name": "peanut butter",
        "qty": 1,
        "unit": "Tbsp"
      },
      {
        "name": "unsweetened cocoa powder",
        "qty": 1,
        "unit": "tsp"
      }
    ]
  },
  {
    "title": "Zucchini- Fresh Oregano Soup",
    "spoonacularID": 516978,
    "servings": 6,
    "image": "https://spoonacular.com/recipeImages/516978-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/zucchini-fresh-oregano-soup-516978",
    "instructions": [
      {
        "number": 1,
        "step": "In a 3-quart saucepan, heat butter and oil."
      },
      {
        "number": 2,
        "step": "Add onion and sauté over low heat, stirring occasionally, until translucent."
      },
      {
        "number": 3,
        "step": "Add zucchini and continue sautéing for 2 minutes. 2."
      },
      {
        "number": 4,
        "step": "Add stock and 2 Tablespoons oregano and bring to simmer. Cover and cook for 30 minutes, or until tender. 3.   For a coarse texture, pulse soup in a food processor fitted with the steel blade. For a fine texture, puree in a blender. 4.   Return to saucepan to heat up again."
      },
      {
        "number": 5,
        "step": "Add salt and pepper."
      },
      {
        "number": 6,
        "step": "Add half and half. Taste for seasoning."
      },
      {
        "number": 7,
        "step": "Garnish with remaining oregano and serve."
      }
    ],
    "ingredients": [
      {
        "name": "half & half cream",
        "qty": 0.5,
        "unit": "cup"
      },
      {
        "name": "olive oil",
        "qty": 1,
        "unit": "Tbsp"
      },
      {
        "name": "oregano",
        "qty": 1,
        "unit": "Tbsp"
      },
      {
        "name": "pepper",
        "qty": 0.25,
        "unit": "tsp"
      },
      {
        "name": "salt",
        "qty": 0.5,
        "unit": "tsp"
      },
      {
        "name": "unsalted butter",
        "qty": 2,
        "unit": "Tbsp"
      },
      {
        "name": "vegetable broth",
        "qty": 3.5,
        "unit": "cup"
      },
      {
        "name": "yellow onion",
        "qty": 1,
        "unit": ""
      },
      {
        "name": "zucchini",
        "qty": 1.75,
        "unit": "lb"
      }
    ]
  },
  {
    "title": "Greek Salad Cucumber Bites",
    "spoonacularID": 516853,
    "servings": 18,
    "image": "https://spoonacular.com/recipeImages/516853-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/greek-salad-cucumber-bites-516853",
    "instructions": [
      {
        "number": 1,
        "step": "In a medium mixing bowl, cream together cream cheese, lemon juice, Italian seasoning, and garlic with a rubber spatula until smooth and well-combined.2.  Assemble the appetizers:  Scoop a heaping teaspoonful of the cream cheese mixture onto a slice of cucumber and spread to the edges.  Spoon a heaping teaspoonful of hummus on top of the cream cheese.  Sprinkle with tomato, olives, feta and green onion.  Repeat with remaining cucumber slices and toppings."
      },
      {
        "number": 2,
        "step": "Serve immediately, or cover with plastic wrap and serve within a few hours."
      }
    ],
    "ingredients": [
      {
        "name": "cream cheese",
        "qty": 4,
        "unit": "oz"
      },
      {
        "name": "cucumber",
        "qty": 1,
        "unit": ""
      },
      {
        "name": "feta cheese",
        "qty": 0.25,
        "unit": "cup"
      },
      {
        "name": "garlic",
        "qty": 1,
        "unit": "clove"
      },
      {
        "name": "green onions",
        "qty": 2,
        "unit": "Tbsp"
      },
      {
        "name": "hummus",
        "qty": 0.5,
        "unit": "cup"
      },
      {
        "name": "italian seasoning",
        "qty": 0.5,
        "unit": "tsp"
      },
      {
        "name": "kalamata olives",
        "qty": 0.25,
        "unit": "cup"
      },
      {
        "name": "lemon juice",
        "qty": 0.5,
        "unit": "Tbsp"
      },
      {
        "name": "tomato",
        "qty": 0.3333333333333333,
        "unit": "cup"
      }
    ]
  },
  {
    "title": "Sausage, Mushroom & Spinach Lasagna",
    "spoonacularID": 695462,
    "servings": 10,
    "image": "https://spoonacular.com/recipeImages/695462-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/sausage-mushroom-spinach-lasagna-695462",
    "instructions": [
      {
        "number": 1,
        "step": "Preheat oven to 350F. Coat a 9-by-13-inch baking dish with cooking spray.Bring a large pot of water to a boil."
      },
      {
        "number": 2,
        "step": "Add noodles and cook until not quite tender, about 2 minutes less than the package directions."
      },
      {
        "number": 3,
        "step": "Drain; return the noodles to the pot, cover with cool water and set aside.Coat a large nonstick skillet with cooking spray and heat over medium-high heat."
      },
      {
        "number": 4,
        "step": "Add sausage; cook, crumbling with a wooden spoon, until browned, about 4 minutes."
      },
      {
        "number": 5,
        "step": "Add mushrooms and water; cook, stirring occasionally and crumbling the sausage more, until it is cooked through, the water has evaporated and the mushrooms are tender, 8 to 10 minutes. Squeeze spinach to remove excess water, then stir into the pan; remove from heat."
      }
    ],
    "ingredients": [
      {
        "name": "canned tomatoes",
        "qty": 28,
        "unit": "oz"
      },
      {
        "name": "fresh basil",
        "qty": 0.25,
        "unit": "cup"
      },
      {
        "name": "frozen spinach",
        "qty": 1,
        "unit": "lb"
      },
      {
        "name": "mushrooms",
        "qty": 10,
        "unit": "oz"
      },
      {
        "name": "part-skim mozzarella cheese",
        "qty": 2,
        "unit": "cup"
      },
      {
        "name": "part-skim ricotta cheese",
        "qty": 2,
        "unit": "cup"
      },
      {
        "name": "pepper",
        "qty": 10,
        "unit": "servings"
      },
      {
        "name": "salt",
        "qty": 0.25,
        "unit": "tsp"
      },
      {
        "name": "turkey sausage",
        "qty": 1,
        "unit": "lb"
      },
      {
        "name": "water",
        "qty": 0.25,
        "unit": "cup"
      },
      {
        "name": "whole-wheat lasagna noodles",
        "qty": 8,
        "unit": "oz"
      }
    ]
  },
  {
    "title": "Oven Roasted Cauliflower with Crunchy Topping",
    "spoonacularID": 594956,
    "servings": 4,
    "image": "https://spoonacular.com/recipeImages/594956-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/oven-roasted-cauliflower-with-crunchy-topping-594956",
    "instructions": [
      {
        "number": 1,
        "step": "Preheat the oven to 400°F. Using clean hands smear the butter over the bottom of a sheet pan. Set aside."
      },
      {
        "number": 2,
        "step": "Cut the cauliflower in half. Lay the cut side down on the cutting board and cut ½” thick slices."
      },
      {
        "number": 3,
        "step": "Transfer to a large bowl and gently toss with olive oil, salt, thyme and pepper."
      },
      {
        "number": 4,
        "step": "Transfer all to the prepared pan and lay the pieces flat on to the surface.Roast 12 to 15 minutes or until one side is golden brown. Using a spatula, turn the pieces over and roast an additional 5 to 8 minutes or until the other side is golden brown."
      },
      {
        "number": 5,
        "step": "Transfer cauliflower to a serving tray, spoon Marzetti® Chunky Blue Cheese Salad Dressing over all and top with Marzetti® Sea Salt and Pepper Croutons and parsley and serve."
      }
    ],
    "ingredients": [
      {
        "name": "blue cheese dressing",
        "qty": 0.5,
        "unit": "cup"
      },
      {
        "name": "cauliflower",
        "qty": 1,
        "unit": "head"
      },
      {
        "name": "fresh parsley",
        "qty": 2,
        "unit": "Tbsp"
      },
      {
        "name": "fresh thyme",
        "qty": 0.5,
        "unit": "tsp"
      },
      {
        "name": "ground pepper",
        "qty": 0.25,
        "unit": "tsp"
      },
      {
        "name": "olive oil",
        "qty": 2,
        "unit": "Tbsp"
      },
      {
        "name": "salt",
        "qty": 0.5,
        "unit": "tsp"
      },
      {
        "name": "sea-salt",
        "qty": 1,
        "unit": "cup"
      },
      {
        "name": "unsalted butter",
        "qty": 1,
        "unit": "Tbsp"
      }
    ]
  },
  {
    "title": "Boozy Bourbon Cranberry Sauce",
    "spoonacularID": 620963,
    "servings": 3,
    "image": "https://spoonacular.com/recipeImages/620963-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/boozy-bourbon-cranberry-sauce-620963",
    "instructions": [
      {
        "number": 1,
        "step": "Add the cranberries to a large saucepan over medium-high heat. Gently simmer the cranberries until they start popping, then add the sugars, cinnamon, and salt. Continue cooking until most of the cranberries have popped and the mixture starts to reduce, about 15 minutes (stirring occasionally)."
      },
      {
        "number": 2,
        "step": "Add the bourbon and continue cooking for a minute."
      },
      {
        "number": 3,
        "step": "Remove from heat and let stand for 10 minutes."
      },
      {
        "number": 4,
        "step": "Serve hot or transfer to a bowl to refrigerate for up to a week.Preheat the oven to 350 degrees Fahrenheit."
      },
      {
        "number": 5,
        "step": "Add the cranberries, sugars, salt, and cinnamon to a baking dish. Cover tightly with foil."
      },
      {
        "number": 6,
        "step": "Bake in the preheated oven for 1 hour, stirring twice. Once most of the cranberries have popped, remove the dish from the oven and stir in the bourbon."
      },
      {
        "number": 7,
        "step": "Transfer to a bowl and serve."
      }
    ],
    "ingredients": [
      {
        "name": "bourbon",
        "qty": 0.25,
        "unit": "cup"
      },
      {
        "name": "cinnamon",
        "qty": 0.5,
        "unit": "tsp"
      },
      {
        "name": "cranberries",
        "qty": 24,
        "unit": "oz"
      },
      {
        "name": "light brown sugar",
        "qty": 1,
        "unit": "cup"
      },
      {
        "name": "white sugar",
        "qty": 1,
        "unit": "cup"
      }
    ]
  },
  {
    "title": "Thick & Chunky Tomato Sauce from Scratch",
    "spoonacularID": 261785,
    "servings": 1,
    "image": "https://spoonacular.com/recipeImages/261785-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/thick-chunky-tomato-sauce-from-scratch-261785",
    "instructions": [
      {
        "number": 1,
        "step": "Add the oil, onion, and garlic into a medium pot and stir to combine. Season with salt and pepper."
      },
      {
        "number": 2,
        "step": "Saute over medium heat for about 5 minutes, until the onion is translucent.Stir in the diced tomatoes and increase heat to high-medium to bring to a low boil. When the mixture boils, reduce the heat to medium and simmer for about 15 minutes, uncovered, until most of the water cooks off. Watch closely, reducing heat if necessary and stirring often."
      },
      {
        "number": 3,
        "step": "Add sun-dried tomatoes into a food processor along with a ladle of the tomato sauce. Process until mostly smooth. Stir this mixture back into the tomato sauce in the pot.Stir in the minced basil, oregano, salt, and pepper, and optional red pepper flakes to taste. Continue cooking until thickened to your liking and then remove from heat."
      },
      {
        "number": 4,
        "step": "Serve sauce over a bed of pasta noodles, zucchini noodles, or spaghetti squash noodles."
      }
    ],
    "ingredients": [
      {
        "name": "black pepper",
        "qty": 1,
        "unit": "serving"
      },
      {
        "name": "fine grain sea salt",
        "qty": 0.25,
        "unit": "tsp"
      },
      {
        "name": "fresh basil leaves",
        "qty": 0.25,
        "unit": "cup"
      },
      {
        "name": "garlic cloves",
        "qty": 2,
        "unit": ""
      },
      {
        "name": "oil packed sun dried tomatoes",
        "qty": 0.25,
        "unit": "cup"
      },
      {
        "name": "olive oil",
        "qty": 1,
        "unit": "Tbsp"
      },
      {
        "name": "onion",
        "qty": 1,
        "unit": "cup"
      },
      {
        "name": "oregano",
        "qty": 0.5,
        "unit": "tsp"
      },
      {
        "name": "pasta",
        "qty": 1,
        "unit": ""
      },
      {
        "name": "tomatoes",
        "qty": 3,
        "unit": "cup"
      }
    ]
  },
  {
    "title": "Cream Cheese Penguins",
    "spoonacularID": 314648,
    "servings": 18,
    "image": "https://spoonacular.com/recipeImages/314648-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/cream-cheese-penguins-314648",
    "instructions": [
      {
        "number": 1,
        "step": "Cut a slit from top to bottom, lengthwise, into the side of each jumbo olive.  Carefully insert about 1 teaspoon of cream cheese into each olive. Slice the carrot into eighteen 1/4 inch thick rounds; cut a small notch out of each carrot slice to form feet. Save the cut out piece and press into center of small olive to form the beak. If necessary cut a small slit into each olive before inserting the beak."
      },
      {
        "number": 2,
        "step": "Set a big olive, large hole side down, onto a carrot slice. Then, set a small olive onto the large olive, adjusting so that the beak, cream cheese chest and notch in the carrot slice line up. Secure with a toothpick."
      }
    ],
    "ingredients": [
      {
        "name": "black olives",
        "qty": 18,
        "unit": ""
      },
      {
        "name": "carrot",
        "qty": 1,
        "unit": ""
      },
      {
        "name": "cream cheese",
        "qty": 8,
        "unit": "oz"
      },
      {
        "name": "olives",
        "qty": 18,
        "unit": ""
      }
    ]
  },
  {
    "title": "Fennel-Crusted Salmon on White Beans",
    "spoonacularID": 695158,
    "servings": 6,
    "image": "https://spoonacular.com/recipeImages/695158-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/fennel-crusted-salmon-on-white-beans-695158",
    "instructions": [
      {
        "number": 1,
        "step": "Heat 2 teaspoons oil in a large nonstick skillet over medium heat."
      },
      {
        "number": 2,
        "step": "Add sliced fennel; cook, stirring occasionally, until lightly browned, about 6 minutes. Stir in beans, tomatoes and wine. Cook, stirring occasionally, until the tomatoes begin to break down, about 3 minutes."
      },
      {
        "number": 3,
        "step": "Transfer to a bowl; stir in chopped fennel fronds, mustard and 1/4 teaspoon pepper. Cover to keep warm.Meanwhile, combine fennel seeds and the remaining 1/4 teaspoon pepper in a small bowl; sprinkle evenly on both sides of salmon.Wipe out the pan."
      },
      {
        "number": 4,
        "step": "Add the remaining 3 teaspoons oil to the pan and heat over high heat until shimmering but not smoking."
      },
      {
        "number": 5,
        "step": "Add the salmon, skinned-side up, and cook until golden brown, 3 to 5 minutes. Turn the salmon over, cover and remove from the heat."
      },
      {
        "number": 6,
        "step": "Let stand until the salmon finishes cooking off the heat, 3 to 5 minutes more."
      },
      {
        "number": 7,
        "step": "Transfer the salmon to a cutting board and flake with a fork."
      },
      {
        "number": 8,
        "step": "Serve salmon on top of the warm bean mixture."
      }
    ],
    "ingredients": [
      {
        "name": "canned white beans",
        "qty": 30,
        "unit": "oz"
      },
      {
        "name": "dijon mustard",
        "qty": 1,
        "unit": "Tbsp"
      },
      {
        "name": "fennel bulb",
        "qty": 1,
        "unit": ""
      },
      {
        "name": "fennel seeds",
        "qty": 1,
        "unit": "Tbsp"
      },
      {
        "name": "olive oil",
        "qty": 5,
        "unit": "tsp"
      },
      {
        "name": "pepper",
        "qty": 0.5,
        "unit": "tsp"
      },
      {
        "name": "salmon fillet",
        "qty": 1,
        "unit": "lb"
      },
      {
        "name": "tomatoes",
        "qty": 2,
        "unit": ""
      },
      {
        "name": "white wine",
        "qty": 0.3333333333333333,
        "unit": "cup"
      }
    ]
  },
  {
    "title": "Sun-dried tomato chickpea cake",
    "spoonacularID": 556500,
    "servings": 2,
    "image": "https://spoonacular.com/recipeImages/556500-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/sun-dried-tomato-chickpea-cake-556500",
    "instructions": [
      {
        "number": 1,
        "step": "Pour the water little by little into the chickpea flour, stirring constantly with a whisk to prevent lumps. When the water has been completely incorporated add the olive oil and salt."
      },
      {
        "number": 2,
        "step": "Let the batter rest for at least half an hour.Put a non-stick pan or a 24 cm cast iron skillet into the oven and heat the oven to 250°C. When it is hot carefully remove the skillet from the oven, drizzle with olive oil and pour in the chickpea batter."
      },
      {
        "number": 3,
        "step": "Bake the chickpea cake for about 5 minutes then add the sun-dried tomatoes cut into thin strips and bake for 10-12 more minutes, until crisp and golden on the surface and yet soft inside."
      },
      {
        "number": 4,
        "step": "Serve hot with plenty of freshly ground black pepper and fresh oregano or marjoram."
      }
    ],
    "ingredients": [
      {
        "name": "black pepper",
        "qty": 2,
        "unit": "servings"
      },
      {
        "name": "chickpea flour",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "extra virgin olive oil",
        "qty": 1,
        "unit": "Tbsp"
      },
      {
        "name": "oil packed sun dried tomatoes",
        "qty": 12,
        "unit": ""
      },
      {
        "name": "oregano",
        "qty": 2,
        "unit": "servings"
      },
      {
        "name": "sea salt",
        "qty": 1,
        "unit": "tsp"
      },
      {
        "name": "water",
        "qty": 300,
        "unit": "ml"
      }
    ]
  },
  {
    "title": "Blueberry Crumb Muffins",
    "spoonacularID": 52173,
    "servings": 12,
    "image": "https://spoonacular.com/recipeImages/52173-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/blueberry-crumb-muffins-52173",
    "instructions": [
      {
        "number": 1,
        "step": "Using a fork, mix all crumb ingredients together until well-combined.  Set aside.Preheat oven to 400.  For crisper edges, grease a standard muffin pan.  For softer edges, use liners in each cup instead."
      },
      {
        "number": 2,
        "step": "Whisk together flour, baking powder, baking soda, and salt in a medium-sized bowl.  Set aside.In a large bowl, lightly beat eggs.  Stir in buttermilk."
      },
      {
        "number": 3,
        "step": "Add both sugars and mix until combined.  Stir in vanilla and lemon zest.  Stir in melted butter."
      },
      {
        "number": 4,
        "step": "Add flour mixture in 2-3 portions."
      },
      {
        "number": 5,
        "step": "Mix until there are still streaks of flour remaining.  Stir in blueberries, mixing just until combined.Scoop about 1/4 cup of batter into each cup of prepared pan.  This should fill each cup almost to the top.  Sprinkle tops of each muffin with crumb mixture."
      },
      {
        "number": 6,
        "step": "Bake for 14-16 minutes, or until a pick inserted into the center comes out with moist crumbs.  Cool in pan on wire rack."
      }
    ],
    "ingredients": [
      {
        "name": "baking powder",
        "qty": 2,
        "unit": "tsp"
      },
      {
        "name": "baking soda",
        "qty": 1,
        "unit": "tsp"
      },
      {
        "name": "blueberries",
        "qty": 0.75,
        "unit": "cup"
      },
      {
        "name": "brown sugar",
        "qty": 0.5,
        "unit": "cup"
      },
      {
        "name": "buttermilk",
        "qty": 0.5,
        "unit": "cup"
      },
      {
        "name": "eggs",
        "qty": 2,
        "unit": ""
      },
      {
        "name": "flour",
        "qty": 0.75,
        "unit": "cup"
      },
      {
        "name": "flour",
        "qty": 2.25,
        "unit": "cup"
      },
      {
        "name": "granulated sugar",
        "qty": 0.5,
        "unit": "cup"
      },
      {
        "name": "granulated sugar",
        "qty": 2,
        "unit": "Tbsp"
      },
      {
        "name": "lemon zest",
        "qty": 0.5,
        "unit": "tsp"
      },
      {
        "name": "light brown sugar",
        "qty": 2,
        "unit": "Tbsp"
      },
      {
        "name": "salt",
        "qty": 1,
        "unit": "pinch"
      },
      {
        "name": "unsalted butter",
        "qty": 0.5,
        "unit": "cup"
      },
      {
        "name": "unsalted butter",
        "qty": 4,
        "unit": "Tbsp"
      },
      {
        "name": "vanilla extract",
        "qty": 0.25,
        "unit": "tsp"
      },
      {
        "name": "vanilla extract",
        "qty": 1,
        "unit": "tsp"
      }
    ]
  },
  {
    "title": "garlic chicken (Indian style)",
    "spoonacularID": 666029,
    "servings": 4,
    "image": "https://spoonacular.com/recipeImages/666029-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/garlic-chicken-indian-style-666029",
    "instructions": [
      {
        "number": 1,
        "step": "Mix yogurt, salt and pepper with  to  cup water. Beat well and set aside"
      },
      {
        "number": 2,
        "step": "Wash chicken and soak it in the above prepared butter milk for overnight in the refrigerator"
      },
      {
        "number": 3,
        "step": "Blend and Make a paste of the ingredients mentioned for chili garlic sauce"
      },
      {
        "number": 4,
        "step": "Drain up the buttermilk and add the prepared sauce."
      },
      {
        "number": 5,
        "step": "Mix well and leave it for 5 minutes. If you want to prepare it at a later time, you can put it back in the refrigerator."
      },
      {
        "number": 6,
        "step": "Heat a pan with oil, add cumin and curry leaves, saut till the cumin begins to splutter."
      },
      {
        "number": 7,
        "step": "Add the onions and fry till golden."
      },
      {
        "number": 8,
        "step": "Add the chicken and fry on a high heat for 2 to 3mins. When you see the chicken turning white, cover it with a lid and lower the heat and cook till the chicken turns tender. This barely takes 5 mins if you are using strips"
      },
      {
        "number": 9,
        "step": "Remove the lid and fry till the moisture evaporates and the sauce begins to cling to the chicken. The longer it is roasted, the sauce becomes more aromatic and tastier but the chicken tends to lose its tenderness. So take off from the heat when it is of your liking. Take care not to burn, garlic burns faster."
      }
    ],
    "ingredients": [
      {
        "name": "chicken strips",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "cumin",
        "qty": 0.25,
        "unit": "tsp"
      },
      {
        "name": "curry leaves",
        "qty": 1,
        "unit": "sprig"
      },
      {
        "name": "dried coriander leaves",
        "qty": 1,
        "unit": "leaves"
      },
      {
        "name": "garlic cloves",
        "qty": 5,
        "unit": ""
      },
      {
        "name": "lemon",
        "qty": 4,
        "unit": "servings"
      },
      {
        "name": "oil",
        "qty": 2,
        "unit": "Tbsp"
      },
      {
        "name": "onion",
        "qty": 4,
        "unit": "servings"
      },
      {
        "name": "onions",
        "qty": 1,
        "unit": ""
      },
      {
        "name": "pepper",
        "qty": 1,
        "unit": "pinch"
      },
      {
        "name": "red chilies",
        "qty": 5,
        "unit": ""
      },
      {
        "name": "salt",
        "qty": 4,
        "unit": "servings"
      },
      {
        "name": "salt",
        "qty": 4,
        "unit": "servings"
      },
      {
        "name": "vinegar",
        "qty": 0.75,
        "unit": "Tbsp"
      },
      {
        "name": "water",
        "qty": 15,
        "unit": "ml"
      },
      {
        "name": "yogurt",
        "qty": 4,
        "unit": "Tbsp"
      }
    ]
  }
]



class DisplayRecipes extends Component {
state = {
  recipes
}

 componentDidMount(){
      
    }
  render() {
    return (
  
  <Panel collapsible defaultExpanded header="Generated Recipes">  
    <Grid>
    <Row>
    {this.state.recipes.map(recipe => (
    <Col xs={4}>
      <Thumbnail src={recipe.image} alt="100x100">
        <p>{recipe.title}</p>
        <p>
          <DisplayRecipeInfo
          title={recipe.title}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          image={recipe.image}
          />
        </p>
      </Thumbnail>
    </Col>
    ))}
    </Row> 
   </Grid>
  </Panel>
  )
  }

 } 
 


export default DisplayRecipes;