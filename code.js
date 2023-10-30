document.getElementById("startChallengeBtn").addEventListener("click", function() {
    // Question 1
    let industryChoice = prompt("Please pick the industry you're interested in:\n" +
        "1. E-commerce\n" +
        "2. Health & Fitness\n" +
        "3. Social Media\n" +
        "4. Food\n\nPlease write 1, 2, 3, or 4 based on your preference.");
    
    // Handle the choice 
    switch (industryChoice) {
        case "1":
            industryChoice = "E-commerce";
            break;
        case "2":
            industryChoice = "Health & Fitness";
            break;
        case "3":
            industryChoice = "Social Media";
            break;
        case "4":
            industryChoice = "Food";
            break;
        default:
            alert("Invalid choice. Please choose between 1 and 4.");
            return;
    }

    // Question 2
    let timeChoice = prompt("How much time do you have for this challenge?\n" +
        "1. 1 day\n" +
        "2. 1 week\n" +
        "3. 1 month\n\nPlease write 1, 2, or 3 based on your preference.");
    
    // Handle the choice 
    switch (timeChoice) {
        case "1":
            timeChoice = "1 day";
            break;
        case "2":
            timeChoice = "1 week";
            break;
        case "3":
            timeChoice = "1 month";
            break;
        default:
            alert("Invalid choice. Please choose between 1 and 3.");
            return;
    }

    // Question 3
    let projectDifficulty = prompt("What kind of project do you want to do?\n" +
        "1. Easy\n" +
        "2. Medium\n" +
        "3. Hard\n\nPlease write 1, 2, or 3 based on your preference.");

    // Handle the choice
    switch (projectDifficulty) {
        case "1":
            projectDifficulty = "Easy";
            break;
        case "2":
            projectDifficulty = "Medium";
            break;
        case "3":
            projectDifficulty = "Hard";
            break;
        default:
            alert("Invalid choice. Please choose between 1 and 3.");
            return;
    }


});


      //Create an array of UX challenges for e-commerce
      const uxChallengeEcommerce = ["Design a login screen for online shop", "Design a product page for mobile app", "Design a chekout screen for online store"];


      
      //Create an array of UX challenges for Health & Fitness
      const uxChallengeHealth =["Design a login screen for your local gym mobile application", "Design a dashboard for cycling mobile application, include time spend on the activity, kilometers, aclories burned etc", "Design a user flow for meditation application, include timer, type of meditation"];

      //Create an array of UX challenges for Social Media
      const uxChallengeMedia =["Design a sign-up page for social media app", "Design a landing page promoting social media", "Design a user profile for fictional social media account", "Dersign settings page for fictional social media account"];

      //Create an array of UX challenges for Food
      const uxChallengeFood =["Design a landing page for local restaurant", "Design a app with image slider featuring food dishes", "Design a Q&A page for restaurant"];