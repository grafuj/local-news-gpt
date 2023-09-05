function responseParser(responseText) {
  // Split the response into an array of lines
  const lines = responseText.split('\n');

  // Initialize an array to store the parsed data
  const parsedData = [];



  // Initialize variables to track the current title and descriptions
  let currentTitle = '';
  let currentDescriptions = [];

  // Loop through each line
  for (const line of lines) {
    const lineAsArray = line.split(':');
    const lineTitle = lineAsArray[0];
    const lineDescription = lineAsArray[1];
    let currentTitle = "";
    let currentDescription = "";

    if (lineTitle.trim().startsWith('a. ') || lineTitle.trim().startsWith('b. ') || lineTitle.trim().startsWith('c. ')) {
      // If a line starts with a bullet point, add it as a description
      currentTitle = lineTitle.trim().substring(3); // Remove the bullet point (e.g., "a. ")
    }

    if (lineDescription !== undefined && lineDescription.length > 0 && lineDescription.trim().startsWith(' ')) {
      currentDescription = lineDescription.trim().substring(1);
    }

    parsedData.push({
      title: currentTitle,
      descriptions: currentDescription,
    });
    // // Check if the line is empty or a new title is starting
    // if (line.trim() === '' || (currentTitle !== '')) {
    //   // If it's an empty line or a new title, add the parsed data to the array
    //   parsedData.push({
    //     title: currentTitle,
    //     descriptions: currentDescriptions,
    //   });
  }
  return parsedData;
}

// Example usage with the complete response text
const completeResponseText = `
Three New Stories for Paris:
a. Paris Lights Up for the Holidays: Enjoy the festive sights and sounds of the holiday season in Paris as the city is illuminated with lights and decorations.
b. Paris Fashion Week: See the Best of French Style: Get a glimpse of the latest trends and designs as Paris Fashion Week brings the world's top designers to the city.
c. Tour the Catacombs of Paris: Des
`;

const parsedData = responseParser(completeResponseText);

// 'parsedData' now contains an array of objects, each representing a title and its descriptions
console.log(parsedData);
