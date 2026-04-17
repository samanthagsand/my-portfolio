import ramenImg from "../assets/ramen.jpg";
import sunsetImg from "../assets/sunset.jpg";
import zebraImg from "../assets/zebra.jpg";

function Blog() {
  return (
    <main className="section">
      <h2>My Blog</h2>
      <p>
        Welcome to my blog! This is where I’ll document my spring break adventures.
      </p>

      <article className="blog-post">
        <h3>Spring Break 2026</h3>
        <p>During spring break, my favorite thing to do was try new foods! Although I tried a lot of amazing new foods, my favorite was this ramen! Since I am vegetarian, it was especially exciting to find such an amazing ramen that did not need the protein for flavor. Ramen from Tajima in Kearny Mesa is my new favorite food!</p>
        <img
            src={ramenImg}
            alt="favorite food i ate during spring break"
            className="blog-image"
        />

        <p>One of my favorite moments during spring break was watching the sunset! Sunsets in La Jolla are the absolute best. After many finals, projects, and presentations, sunsets were the perfect way to decompress during break. Watching sunsets allowed me to reflect on the semester and look forward what life has to offer after graduation.</p>
        <img
            src={sunsetImg}
            alt="sunset view during spring break"
            className="blog-image"
        />

        <p>Another memorable experience was visiting the zoo! Seeing all the animals up close was a lot of fun. It was great to spend time in nature and learn more about different species. Any experience that involves animals is always my absolute FAVORITE! One of the coolest animals I saw was the zebra!</p>
        <img
            src={zebraImg}
            alt="zoo day during spring break"
            className="blog-image"
        />
      </article>
      
    </main>
  );
}

export default Blog;