const movies_data = {
  movie_1: {
    id: 1,
    title: "The Grudge",
    description:
      "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
    url: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
  },
  movie_2: {
    id: 2,
    title: "Underwater",
    description:
      "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
    url: "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
  },
  movie_3: {
    id: 3,
    title: "Like a Boss",
    description:
      "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
    url: "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg",
  },
  movie_4: {
    id: 4,
    title: "Bad Boys for Life",
    description:
      "Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
    url: "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
  },
  movie_5: {
    id: 5,
    title: "The Turning",
    description:
      "The Gentlemen is a 2019 action comedy film written, directed and produced by Guy Ritchie, who developed the story along with Ivan Atkinson and Marn Davies. The film stars Matthew McConaughey, Charlie Hunnam, Henry Golding, Michelle Dockery, Jeremy Strong, Eddie Marsan, Colin Farrell, and Hugh Grant. It follows an American cannabis wholesaler in England who is looking to sell his business, setting off a chain of blackmail and schemes to undermine him.",
    url: "https://upload.wikimedia.org/wikipedia/en/9/9b/The_Assistant_poster.jpeg",
  },
  movie_6: {
    id: 6,
    title: "The Assistant",
    description:
      "A Fall from Grace is a 2020 American thriller film produced, written, and directed by Tyler Perry and his first to be released by Netflix. The film follows a woman who finds a dangerous new love and the novice attorney who defends her in a sensational court case. This was the final film of actor Cicely Tyson before her death in January 2021",
    url: "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
  },
  movie_7: {
    id: 7,
    title: "The Grudge",
    description:
      "The Grudge is a 2020 American psychological thriller supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
    url: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
  },
  movie_8: {
    id: 8,
    title: "Underwater",
    description:
      "Underwater is a 2020 American science fiction thriller action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
    url: "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
  },
  movie_9: {
    id: 9,
    title: "Like a Boss",
    description:
      "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
    url: "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg",
  },
};

load_movies(movies_data);

function load_movies(movie_data) {
  let root = document.getElementById("movies_root");
  root.innerHTML = "";
  for (const property in movie_data) {
    const movie = movie_data[property];
    root.innerHTML += generate_movie_template(
      movie.url,
      movie.title,
      movie.description
    );
  }
}

function generate_movie_template(url, title, description) {
  return `
      <div class="movie">
          <div class="movie_wrapper">
            <div class="movie_image">
              <img
                src=${url} />
            </div>
            <div class="movie_text">
              <h3>${title}</h3>
              <p>
                ${description}
              </p>
            </div>
          </div>
        </div>
`;
}

function add_movie() {
  let movie_title = document.getElementById("movie_name").value;
  let movie_url = document.getElementById("movie_url").value;
  let movie_description = document.getElementById("movie_description").value;
  let movie_id = Object.keys(movies_data).length + 1;
  let movie_obj = {
    id: movie_id,
    title: movie_title,
    description: movie_description,
    url: movie_url,
  };
  movies_data["movie_" + (Object.keys(movies_data).length + 1)] = movie_obj;
  load_movies(movies_data);
}

function search_movie() {
  let searched_obj = {};
  let keyword = document.getElementById("search_text").value;
  for (let property in movies_data) {
    if (
      movies_data[property].title
        .toLowerCase()
        .includes(keyword.toLowerCase()) ||
      movies_data[property].description
        .toLowerCase()
        .includes(keyword.toLowerCase())
    ) {
      searched_obj[property] = movies_data[property];
    }
  }
  load_movies(searched_obj);
}
