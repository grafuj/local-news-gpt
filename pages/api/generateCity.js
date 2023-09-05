import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const city = req.body.city || '';
  if (city.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid city",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(city),
      temperature: 0.6,
      // max_tokens: 1024,
      max_tokens: 100,
    });

    res.status(200).json({ result: completion.data.choices[0].text });
    console.log("completion:", completion);
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(city) {
  const capitalizedCity =
    city[0].toUpperCase() + city.slice(1).toLowerCase();
  return `I'm looking to make a new homepage for a city. I've got a number of categories that I'm hoping to fill for content for the webpage.
  please generate the following content for the city of: ${capitalizedCity}

  Since this is going to be placed into a webpage, I'm hoping you can place the result in a numbered list that is plain text (not code) and uses the form a, b, c  and a, b, c

  - four new stories
  - three main stories to appear on tiles

  Here is an example for Madrid:

    a. Madrid's Annual Flamenco Festival: Experience the passion and rhythm of Spain's iconic dance form at Madrid's annual Flamenco Festival.
    b. New Park Opens in the Heart of the City: Madrid welcomes a new urban park, providing a green oasis for residents and visitors to relax and enjoy nature.
    c. Tech Innovation Drives Madrid's Economy: Learn how Madrid is becoming a hub for tech innovation, attracting startups and fostering entrepreneurship.
    d. Royal Palace of Madrid: A Palace Fit for Royalty: Dive into the rich history and grandeur of the Royal Palace of Madrid, which has witnessed centuries of Spanish royalty.

    a. Culinary Delights of Madrid: Indulge in the diverse culinary scene of Madrid, from traditional tapas to innovative fusion cuisine.
    b. Prado Museum: A Treasure Trove of Art: Explore the world-renowned Prado Museum, home to an impressive collection of European art masterpieces.
    c. Retiro Park: Urban Retreat in Madrid: Discover the beauty of Retiro Park, a tranquil urban retreat in the heart of Madrid, perfect for picnics and relaxation.
  `;

  //   return `Suggest three names for an animal that is a superhero.

  // Animal: Cat
  // Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  // Animal: Dog
  // Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  // Animal: ${capitalizedAnimal}
  // Names:`;

}
