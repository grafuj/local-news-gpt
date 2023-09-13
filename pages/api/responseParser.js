// const responseParser = (responseText) => { // can't export when testing, swap this line with line 2 to test locally
export const responseParser = (responseText) => {
  // Split the response into an array of lines
  const lines = responseText.split('\n');
  console.log("lines:", lines)
  // Initialize an array to store the parsed data
  const parsedData = [];

  // Loop through each line
  for (const line of lines) {
    const lineAsArray = line.split(':');
    const lineTitle = lineAsArray[0];
    const lineDescription = lineAsArray.slice(1).join(':').trim(); // Join remaining parts as description, allowing description to contain additional colons

    let currentTitle = "";
    let currentDescription = "";

    if (lineTitle.trim().startsWith('a. ') ||
        lineTitle.trim().startsWith('b. ') ||
        lineTitle.trim().startsWith('c. ') ||
        lineTitle.trim().startsWith('d. ') ||
        lineTitle.trim().startsWith('e. ') ||
        lineTitle.trim().startsWith('f. ') ||
        lineTitle.trim().startsWith('g. ')) {
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
  console.log("33parsedData:", parsedData)
  return parsedData;
};

/* testing syntax
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

const completeResponseText2 = `
  a. Paris Fashion Week Unveils Latest Trends: Get ready to be mesmerized by the world of fashion as Paris Fashion Week showcases the latest haute couture creations.
  b. New Art Exhibition at the Louvre: Explore the artistic wonders of the Louvre Museum with a new and captivating exhibition that brings history to life.
  c. Parisian Cuisine at Its Finest: Savor the exquisite flavors of Paris with the opening of a Michelin-starred restaurant that promises a gastronomic journey.
  d. Celebrating Bastille Day in Style: Join the festive atmosphere as Parisians celebrate Bastille Day with fireworks, parades, and cultural events.
  e. Seine River Cruises: A Romantic Escape: Experience the romance of Paris by embarking on a scenic cruise along the Seine River, taking in the city's enchanting skyline.
  f. Parisian Arts and Culture: Immerse yourself in Paris's rich cultural scene, from world-class art galleries to captivating theatrical performances.
  g. Exploring Montmartre: The Bohemian Heart of Paris: Take a stroll through Montmartre, the charming and artistic neighborhood known for its vibrant history and picturesque streets.
`
const parsedData = responseParser(completeResponseText2);

// 'parsedData' now contains an array of objects, each representing a title and its descriptions
console.log(parsedData);

*/