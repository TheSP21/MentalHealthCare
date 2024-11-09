import { useState } from "react";

const HomePage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  // State for managing user input and API response
  const [userInput, setUserInput] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  // Function to handle the API request using fetch
  const handleExplore = async () => {
    if (!userInput) {
      setApiResponse("Please enter your mental status");
      return;
    }

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCgNWxtPQl85kDGvrVyTiHjofvLH7eSM0M", // Replace YOUR_API_KEY with your actual API key
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `imagine you are a mentor or teacher or health issue specialist and generate a suggestive text to user and dont give unnecessary mathematical functions only text should address emotion in the input`,
                  },
                  { text: userInput },
                ],
              },
            ],
          }),
        }
      );

      // Parse the JSON response
      const data = await response.json();
      console.log(data);
      // Assuming the response contains the prediction in 'contents[0].parts[0].text'
      setApiResponse(
        data.candidates[0]?.content?.parts[0]?.text || "No response received"
      );
    } catch (error) {
      console.error("Error during API request:", error);
      setApiResponse("Error fetching data from the API");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-black border-b shadow-md py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="/Logo.png"
              alt="Mental Health Foundation"
              className="h-16"
            />
          </div>

          {/* Nav Links with Dropdown */}
          <nav className="flex space-x-4 text-white">
            {/* Dropdown 1 */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown(1)}
                className="hover:text-purple-600 flex items-center pr-10 focus:outline-none"
              >
                Our work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 1 && (
                <div className="absolute left-0 mt-2 w-40 bg-rose-200 text-black py-2">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Research
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Advocacy
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Resources
                  </a>
                </div>
              )}
            </div>

            {/* Dropdown 2 */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown(2)}
                className="hover:text-purple-600 flex items-center pr-10 focus:outline-none"
              >
                Get involved
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 2 && (
                <div className="absolute left-0 mt-2 w-40 bg-rose-200 text-black py-2">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Volunteer
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Donate
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Events
                  </a>
                </div>
              )}
            </div>

            {/* Dropdown 3 */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown(3)}
                className="hover:text-purple-600 flex items-center pr-10 focus:outline-none"
              >
                Explore mental health
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 3 && (
                <div className="absolute left-0 mt-2 w-40 bg-rose-200 text-black py-2">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Articles
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Videos
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Podcasts
                  </a>
                </div>
              )}
            </div>

            {/* Dropdown 4 */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown(4)}
                className="hover:text-purple-600 flex items-center pr-10 focus:outline-none"
              >
                About us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 4 && (
                <div className="absolute left-0 mt-2 w-40 bg-rose-200 text-black py-2">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Our Mission
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Team
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Careers
                  </a>
                </div>
              )}
            </div>
            {/* Nav Links */}
          </nav>

          {/* Help and Donate buttons */}
          <div className="flex space-x-4">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
              Get help
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              Donate
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="flex justify-between items-center">
            {/* Left Content */}
            <div className="max-w-lg">
              <h1 className="text-6xl font-bold">
                Everyone deserves good mental health
              </h1>
              <p className="mt-4 text-2xl font-bold pt-5">
                Share your thoughts with us:
              </p>
              {/* Input and Explore Button */}
              <div className="mt-6 inline-block">
                <input
                  type="text"
                  className="bg-white text-gray-900 py-2 px-4 focus:outline-none"
                  placeholder="Enter your mental status"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <button
                  className="bg-red-500 text-white py-2 px-6  hover:bg-red-600"
                  onClick={handleExplore}
                >
                  solve
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0">
              <img
                src="Peer.jpg" // Add the correct path to the image
                alt="Mental Health Hero"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* API Response Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold">
              {" "}
              Hey Buddy!! we are together in this
            </h2>
            <p className="mt-4 text-lg">{apiResponse}</p>
          </div>
        </div>
      </main>

      {/* Cards Section - Different background */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md hover:scale-110 transition duration-500">
              <img
                src="MentalHealth.avif"
                alt="Card Image 1"
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <h2 className="text-2xl font-bold mt-4">
                Mental Health Awareness
              </h2>
              <p className="mt-2">
                Learn about the importance of mental health awareness and how
                you can contribute.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md hover:scale-110 transition duration-500">
              <img
                src="Peer Groups.jpg"
                alt="Card Image 2"
                className="h-40 w-full object-cover"
              />
              <h2 className="text-2xl font-bold mt-4">Support Groups</h2>
              <p className="mt-2">
                Find support groups and communities to connect with others for
                mental health support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md hover:scale-110 transition duration-500">
              <img
                src="Therapy.png"
                alt="Card Image 3"
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <h2 className="text-2xl font-bold mt-4">Therapy Resources</h2>
              <p className="mt-2">
                Access resources and information about therapy and counseling
                services.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md hover:scale-110 transition duration-500">
              <img
                src="Mindfullness.jpg"
                alt="Card Image 4"
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <h2 className="text-2xl font-bold mt-4">
                Mindfulness Techniques
              </h2>
              <p className="mt-2">
                Explore mindfulness techniques that promote mental well-being
                and calm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purple Strip Section */}
      <section className="bg-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Join our community</h2>
            <p className="text-lg">
              Connect with others, learn more about mental health, and find out
              how you can support those in need. Together, we can make a
              difference and ensure everyone gets the help they deserve.
            </p>
            <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">
              Learn More
            </button>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="Community.jpg"
              alt="Community"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Word of Advice
          </h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md hover:scale-110 transition duration-500">
              <div className="flex-shrink-0 h-20">
                <img
                  src="Testi1.jpg" // Add the correct path to the image
                  alt="Testimonial 1"
                  className="h-20 w-20 pr-15 rounded-full object-cover mr-4"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  "Owning our story and loving ourselves through that process is
                  the bravest thing that we will ever do."
                </p>
                <p className="text-gray-600">
                  — Talakanti Sai Pranav, Support Group Member
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex items-center  bg-white p-6 rounded-lg shadow-md flex-row-reverse hover:scale-110 transition duration-500">
              <div className="flex-shrink-0 h-20">
                <img
                  src="Testi2.jpg" // Add the correct path to the image
                  alt="Testimonial 2"
                  className="h-20 w-20 rounded-full object-cover ml-4"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  "You are allowed to be both a masterpiece and a work in
                  progress, simultaneously. Embrace your journey, honor your
                  imperfections, and give yourself the grace to grow."
                </p>
                <p className="text-gray-600">— Sarat Chandra, Volunteer</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md hover:scale-110 transition duration-500">
              <div className="flex-shrink-0 h-20">
                <img
                  src="Testi3.jpg" // Add the correct path to the image
                  alt="Testimonial 3"
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  "The moment you accept yourself as you are, you begin to find
                  peace. The key to self-love is to understand that you are
                  worthy of love just for being you—no need for conditions or
                  comparisons"
                </p>
                <p className="text-gray-600">— Rishi Teja, Community Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and description */}
          <div>
            <img
              src="/Logo.png"
              alt="Mental Health Foundation"
              className="h-16 mb-4"
            />
            <p className="text-gray-400">
              Mental Health Foundation is committed to promoting mental
              well-being for everyone. Our mission is to provide support and
              raise awareness about mental health.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="hover:underline text-gray-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  className="hover:underline text-gray-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  className="hover:underline text-gray-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  className="hover:underline text-gray-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; 2024 Mental Health Foundation. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
