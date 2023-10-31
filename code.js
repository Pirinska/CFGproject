// document.getElementById("startChallengeBtn").addEventListener("click", function() {
//       window.location.href = "question.html";
//   }
//   );

  document.getElementById("continueToChallenge").addEventListener("click", function() {
      window.location.href = "challenge.html";
  }
  );

  

const uxChallengeEcommerce = ["Mobile Checkout Process: Redesign the mobile checkout process for an e-commerce app to reduce cart abandonment and make it more user-friendly", "Accessibility Improvements: Enhance the accessibility of a government website to ensure it's usable by people with disabilities, including screen readers and keyboard navigation.", "Onboarding for a Complex App: Create an intuitive onboarding experience for a complex software application, helping users quickly understand its core features and functionalities.", "Dashboard Customization: Develop a dashboard for a data analytics tool that allows users to customize and personalize their view, prioritizing the most relevant data for their needs.", "E-Commerce Product Filtering: Improve the product filtering and sorting options on an online store to make it easier for customers to find and purchase products."];

const uxChallengeHealth = [
      "Health Tracking Interface: Design an intuitive interface for a fitness app that allows users to track various health metrics like heart rate, steps taken, and calories burned.",
      "Virtual Workout Experience: Develop a virtual workout platform that integrates augmented reality to provide users with real-time feedback on their form and technique.",
      "Dietary Restriction Filter: Enhance a recipe app to include filters for users with dietary restrictions, making it easier to find suitable meals.",
      "Medication Reminder: Create a medication tracking app which reminds users to take their medications on time and logs any missed doses.",
      "Telehealth Experience: Improve the user interface for a telehealth app, ensuring easy navigation and seamless communication between doctors and patients."
  ];
  
  const uxChallengeMedia = [
      "Personalized Content Feed: Redesign the content feed for a social media app to better match user preferences and reduce information overload.",
      "Privacy Controls: Enhance privacy settings on a social platform, ensuring users understand and can easily control who sees their posts and personal data.",
      "Live Streaming Experience: Design an engaging interface for a live streaming platform that allows viewers to interact with the broadcaster in real-time.",
      "Content Discovery: Develop a feature for a social media app that helps users discover new content and creators based on their interests.",
      "Social Media Detox: Design a feature for a social media platform that encourages users to take breaks and manage their screen time more effectively."
  ];

  
  const uxChallengeFood = [
      "Recipe Discovery: Design an interface for a recipe app that suggests meals based on ingredients users have in their fridge.",
      "Dining Experience: Enhance the booking and menu selection process for a restaurant's mobile app, focusing on seamless user experience.",
      "Grocery Shopping Assistant: Develop an app feature that guides users through their grocery shopping, sorting their list by aisle and offering product suggestions.",
      "Nutrition Breakdown: Redesign the nutritional information section on a food delivery app, making it more intuitive and informative.",
      "Cooking Tutorial Interface: Create an interactive interface for a cooking app that provides step-by-step video tutorials, ingredient lists, and real-time feedback."
  ];
   

function pickChallenge() {
   const rnd = Math.floor(Math.random()* uxChallengeFood.length );
   return uxChallengeFood.splice(rnd, 1);
}
// while (uxChallengeFood.length > 0) {
//    // console.log(pickChallenge(), uxChallengeFood[1]);
// }


