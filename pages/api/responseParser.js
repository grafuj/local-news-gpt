const responseParser = (responseText) => {
// export const responseParser = (responseText) => {
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
        description: currentDescription,
      });
    }
  }
  // console.log("33parsedData:", parsedData)
  return parsedData;
};

// /* testing syntax
// Example usage with the complete response text

const completeResponseText = `
Four New Stories for Paris:
a. Paris Fashion Week Unveils Latest Trends: Get ready to be mesmerized by the world of fashion as Paris Fashion Week showcases the latest haute couture creations.
b. New Art Exhibition at the Louvre: Explore the artistic wonders of the Louvre Museum with a new and captivating exhibition that brings history to life.
c. Parisian Cuisine at Its Finest: Savor the exquisite flavors of Paris with the opening of a Michelin-starred restaurant that promises a gastronomic journey.
d. Celebrating Bastille Day in Style: Join the festive atmosphere as Parisians celebrate Bastille Day with fireworks, parades, and cultural events.

Three Main Stories to Appear on Tiles:
a. Seine River Cruises: A Romantic Escape: Experience the romance of Paris by embarking on a scenic cruise along the Seine River, taking in the city's enchanting skyline.
b. Parisian Arts and Culture: Immerse yourself in Paris's rich cultural scene, from world-class art galleries to captivating theatrical performances.
c. Exploring Montmartre: The Bohemian Heart of Paris: Take a stroll through Montmartre, the charming and artistic neighborhood known for its vibrant history and picturesque streets.
`;

const updateResponseText = `
Four New Stories for Madrid:
a. Madrid Flamenco Festival: Get ready to be swept away by the passion and rhythm of Flamenco at the annual Madrid Flamenco Festival, where talented dancers and musicians showcase this iconic Spanish art form.
b. Prado Museum's Latest Masterpieces: Explore the timeless beauty of art at the Prado Museum with a new exhibition featuring masterpieces that span centuries of artistic excellence.
c. Culinary Delights at Madrid's Mercado de San Miguel: Indulge your taste buds in Madrid's culinary scene at the renowned Mercado de San Miguel, where a variety of Spanish delicacies await to tantalize your palate.
d. Fiesta de San Isidro: Join the lively celebrations as Madrileños honor their patron saint, San Isidro, with a colorful festival featuring music, dancing, and traditional Spanish festivities.

Three Main Stories to Appear on Tiles:
a. Retiro Park: A Tranquil Oasis in the Heart of Madrid: Escape the bustling city and relax in the serene surroundings of Retiro Park, where you can row a boat on the lake or enjoy a leisurely stroll amid lush greenery.
b. Madrid's Cultural Extravaganza: Immerse yourself in Madrid's vibrant cultural scene, from world-class art museums like the Reina Sofia to captivating theater performances at Teatro Real.
c. Exploring La Latina: The Historic Heart of Madrid: Take a walk through La Latina, Madrid's historic neighborhood known for its charming streets, tapas bars, and cultural heritage.
`

const parsedData = responseParser(updateResponseText);

// 'parsedData' now contains an array of objects, each representing a title and its descriptions
console.log(parsedData);

// */