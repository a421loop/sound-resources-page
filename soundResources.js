// Data for different sections
const toolsData = [
  {
    title: "MiniTAP",
    description: "A fun sequencer for The Web that runs as a browser extension.",
    link: "https://minitap.io/",
    category: "sequencers"
  },
  {
    title: "LALAL.AI",
    description: "Split vocal and instrumental tracks quickly and accurately.",
    link: "https://www.lalal.ai/",
    category: "audio separation"
  },
  {
    title: "Splitter AI",
    description: "Split music into separated parts with AI-powered algorithms.",
    link: "https://vocalremover.org/splitter-ai",
    category: "audio separation"
  },
  {
    title: "Sloom",
    description: "An extreme timestretcher that turns any sound into a lush soundscape.",
    link: "https://anemond.net/sloom/",
    category: "audio processing"
  },
  {
    title: "OBLITERATE",
    description: "A new distortion filter plug-in from Newfangled Audio.",
    link: "https://www.newfangledaudio.com/obliterate",
    category: "audio processing"
  },
  {
    title: "Suno",
    description: "AI that lets you make a song out of anything.",
    link: "https://suno.com/home",
    category: "ai music generation"
  },
  {
    title: "Squash",
    description: "Dynamic compressor plugin for mixing and mastering.",
    link: "https://www.minimal.audio/products/squash",
    category: "audio processing"
  },
  {
    title: "Sonic Visualiser",
    description: "Sonic Visualiser is a free, open-source application for Windows, Linux, and Mac, designed to be the first program you reach for when want to study a music recording closely. It's designed for musicologists, archivists, signal-processing researchers, and anyone else looking for a friendly way to look at what lies inside the audio file.",
    link: "https://sonicvisualiser.org/",
    category: "visualization"
  },
  {
    title: "Sonic Pi",
    description: "Listen to the sound of your code",
    link: "https://sonic-pi.net/",
    category: "live coding"
  }
];

const interestingWorkData = [
  {
    title: "Women's Audio Archive",
    description: "The Women's Audio Archive began as a series of recordings, taped by Lewandowska after leaving her home country in 1984, grown out of an interest in language as a site of cultural displacement.",
    link: "https://www.marysialewandowska.com/waa/index.html",
    category: "archives"
  },
  {
    title: "Radio Gardens",
    description: "Explore live radio by rotating the globe.",
    link: "https://radio.garden/visit/walla-walla-wa/-23R69nG",
    category: "radio"
  },
  {
    title: "Cashmere Radio",
    description: "Cashmere Radio is a non-profit, experimental community radio station, originally based in Lichtenberg, now broadcasting from Wedding, Berlin. It explores the creative possibilities of radio and sound.",
    link: "https://cashmereradio.com/about/",
    category: "radio"
  },
  {
    title: "100 Soundscapes of Japan",
    description: "The 100 Soundscapes of Japan (日本の音風景100選) are a number of noises selected by the Ministry of the Environment as particularly representative of the country. They were chosen in 1996, as part of government efforts to combat noise pollution and to protect and promote protection of the environment.",
    link: "https://en.wikipedia.org/wiki/100_Soundscapes_of_Japan",
    category: "soundscapes"
  },
  {
    title: "Cities and Memories",
    description: "Cities and Memory is one of the world's largest sound projects, with more than 2,000 artists forming a global community with the aim of remixing the world, one sound at a time.",
    link: "https://citiesandmemory.com/radio/",
    category: "soundscapes"
  },
  {
    title: "Nature Soundmap",
    description: "The Nature Soundmap is an interactive map that allows listeners to explore immersive natural soundscapes.",
    link: "https://earth.fm/nature-soundmap/",
    category: "soundscapes"
  },
  {
    title: "Listening Studies",
    description: "The project intends to develop a conceptualization and comprehensive knowledge base about the humanistic faculty of listening departing from the current body of sound studies canon",
    link: "https://budhaditya.org/projects/listening-studies/",
    category: "listening"
  },
  {
    title: "Sonic Thinking: On sonic constituents of knowledge production",
    description: "Sonic Thinking (KlangDenken) as a research project wants to uncover sonic dimensions within cultural history and history of knowledge, take into account sonic epistemic practices from outside our cultural horizon, and actively experiment with sonic epistemic settings to develop new approaches to thinking through sound.",
    link: "http://www.soundstudieslab.org/homepage/sonic-thinking/",
    category: "culture"
  }
];

const papersData = [
  {
    title: "A space for silence: exhibiting and materialising silence through technology",
    description: "An exploration of how silence can be exhibited and materialized through technological means, examining the intersection of absence and presence in sonic experiences.",
    link: "https://www.jstor.org/stable/26168728?seq=1",
    category: "silence"
  },
  {
    title: "Auditory (Con)texts: Writing on Sound",
    description: "By Budhaditya Chattopadhyay - An examination of the relationship between writing and sound, exploring how auditory experiences can be contextualized through text.",
    link: "https://earwaveevent.org/article/auditory-contexts-writing-on-sound/",
    category: "sound"
  },
  {
    title: "Sonic Cyberfeminisms",
    description: "An exploration of the intersection between sonic practices and cyberfeminist theories, examining how sound technologies relate to feminist discourse in digital spaces.",
    link: "https://journals.sagepub.com/doi/full/10.1177/0141778920967624",
    category: "sonic cyberfeminism"
  }
];

const conferencesData = [
  // Add conference data here when available
];

const journalsData = [
  // Add journal data here when available
];

// Function to create cards - updated to match original structure
function createCards(data, containerId) {
  const container = document.querySelector(`#${containerId} .cards`);
  if (!container) return;
  
  // Group data by category
  const groupedData = data.reduce((acc, item) => {
    const category = item.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Create cards organized by category
  let htmlContent = '';
  Object.keys(groupedData).forEach(category => {
    // Create category header
    htmlContent += `<div class="category-header"><h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4></div>`;
    
    // Create cards for this category
    htmlContent += '<div class="category-cards">';
    groupedData[category].forEach(item => {
      htmlContent += `
        <div class="card">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <a href="${item.link}" target="_blank">Visit Site →</a>
        </div>
      `;
    });
    htmlContent += '</div>';
  });
  
  container.innerHTML = htmlContent;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  createCards(toolsData, 'tools');
  createCards(interestingWorkData, 'work');
  createCards(papersData, 'papers');
  createCards(conferencesData, 'conferences');
  createCards(journalsData, 'journals');
});