function responseParser(responseText) {
  // Split the response into an array of lines
  const lines = responseText.split('\n');

  // Initialize an array to store the parsed data
  const parsedData = [];

  // Loop through each line
  for (const line of lines) {
    const lineAsArray = line.split(':');
    const lineTitle = lineAsArray[0];
    const lineDescription = lineAsArray.slice(1).join(':').trim(); // Join remaining parts as description, allowing description to contain additional colons

    let currentTitle = "";
    let currentDescription = "";

    if (lineTitle.trim().startsWith('a. ') || lineTitle.trim().startsWith('b. ') || lineTitle.trim().startsWith('c. ') || lineTitle.trim().startsWith('d. ')) {
      currentTitle = lineTitle.trim().substring(3); // Remove the bullet point (e.g., "a. ")
    }

    if (lineDescription !== undefined && lineDescription.length > 0) {
      currentDescription = lineDescription.trim();
    }

    // console.log("currents:", currentTitle, currentDescription)
    if (currentTitle.length > 0 && currentDescription.length > 0) {
      parsedData.push({
        title: currentTitle,
        descriptions: currentDescription,
      });
    }
  }
  return parsedData;
}

// Example usage with the complete response text
const completeResponseText = `
1. Four New Stories for Madrid:
a. Madrid's Annual Flamenco Festival: Experience the passion and rhythm of Spain's iconic dance form at Madrid's annual Flamenco Festival.
b. New Park Opens in the Heart of the City: Madrid welcomes a new urban park, providing a green oasis for residents and visitors to relax and enjoy nature.
c. Tech Innovation Drives Madrid's Economy: Learn how Madrid is becoming a hub for tech innovation, attracting startups and fostering entrepreneurship.
d. Royal Palace of Madrid: A Palace Fit for Royalty: Dive into the rich history and grandeur of the Royal Palace of Madrid, which has witnessed centuries of Spanish royalty.

3. Three Main Stories to Appear on Tiles:
a. Culinary Delights of Madrid: Indulge in the diverse culinary scene of Madrid, from traditional tapas to innovative fusion cuisine.
b. Prado Museum: A Treasure Trove of Art: Explore the world-renowned Prado Museum, home to an impressive collection of European art masterpieces.
c. Retiro Park: Urban Retreat in Madrid: Discover the beauty of Retiro Park, a tranquil urban retreat in the heart of Madrid, perfect for picnics and relaxation.
`;

const parsedData = responseParser(completeResponseText);

// 'parsedData' now contains an array of objects, each representing a title and its descriptions
console.log(parsedData);
