# Music Player

A simple web-based music player built with HTML, CSS, and JavaScript.

## Project Specifications

+ Custom UI
+ Song cover and other details are displayed
+ Play and Pause
+ Adjust volume and track progress.
+ Switch between songs

## Getting Started

1. Clone the repository:

    git clone https://github.com/your-username/music-player.git

2. Open the project directory:

    cd music-player

3. Open `index.html` in your preferred web browser.

## Usage

- Click the play button to start playing the default track.
- Use the pause button to pause the playback.
- Stop button stops the music and resets the track position.
- Adjust the volume and track progress using the sliders.
- To add your music, update the `tracks` array in the `script.js` file with the desired information.

```javascript
const tracks = [
    {
        title: 'Song Title 1',
        artist: 'Artist 1',
        album: 'Album 1',
        src: 'path/to/song1.mp3',
        cover: 'path/to/cover1.jpg',
    },
    // Add more tracks as needed
];


