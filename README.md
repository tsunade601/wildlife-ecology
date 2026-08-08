# Wildlife Ecology | NPTEL Mock Exam

A comprehensive, interactive web-based quiz application for the **NPTEL Wildlife Ecology** course. Built with vanilla HTML, CSS, and JavaScript — no frameworks required.

![Wildlife Ecology Quiz](https://img.shields.io/badge/Questions-100+-green.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

## ✨ Features

### 📖 Read Mode
- Browse all 100+ questions with answers
- Clean card-based layout for easy studying
- Perfect for revision and learning

### ⚡ Quiz Mode
- **Configurable Timer**: Choose from no timer to 5 minutes per question
- **Question Navigation**: Visual grid to jump between questions
- **Shuffling Options**: Randomize question order and/or answer options
- **Custom Question Count**: Select 10, 20, 30, 50, or all 100 questions
- **Instant Feedback**: See correct/incorrect answers immediately
- **Streak Tracking**: Monitor your best consecutive correct answers
- **Progress Stats**: Live counter showing correct, wrong, and best streak
- **Score Summary**: Final results with percentage, time taken, and performance emoji

### ⏱️ Test Mode
- **20-Minute Timed Test**: Full exam simulation with countdown timer
- **Question Navigator**: Grid view to navigate between questions
- **Answer Tracking**: See which questions you've answered
- **Previous/Next Navigation**: Move freely between questions
- **Auto-Submit**: Test automatically submits when time runs out
- **Detailed Results**: Score breakdown with time, percentage, and grade

### 🎨 User Experience
- **Dark/Light Theme Toggle**: Switch between themes with one click
- **Keyboard Shortcuts**: Full keyboard navigation support
- **Animations**: Smooth transitions and visual feedback
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Settings Persistence**: Your preferences are saved in localStorage

## 🎯 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `1-4` or `A-D` | Select answer option |
| `Enter` | Confirm selection / Continue |
| `R` | Restart quiz |
| `N` | Next question (Test mode) |
| `P` | Previous question (Test mode) |
| `T` | Toggle theme |
| `?` or `/` | Show keyboard shortcuts help |

## 🚀 Quick Start

### Local Usage
No build process required! Simply open `index.html` in your browser:

```bash
# Clone or download the files
# Open index.html in any modern web browser
```

Or use a simple HTTP server:

```bash
# Python 3
python3 -m http.server 8080

# Then open http://localhost:8080
```

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚙️ Configuration

Click the **gear icon** (⚙️) in the header to access quiz settings:

1. **Timer**: Set time limit per question in Quiz mode
2. **Number of Questions**: Choose how many questions to include
3. **Question Order**: Shuffle or keep sequential
4. **Option Order**: Shuffle answer choices or keep fixed

Settings are automatically saved to your browser's localStorage.

## 📁 Project Structure

```
wildlife-ecology/
├── index.html      # Main HTML file with all UI components
├── quiz.js         # JavaScript application logic
├── style.css       # Additional CSS styles
└── README.md       # This file
```

## 📝 About NPTEL Wildlife Ecology

This mock quiz covers key topics from the NPTEL (National Programme on Technology Enhanced Learning) Wildlife Ecology course, including:

- Ecological principles and terminology
- Biodiversity concepts and measurements
- Population ecology and dynamics
- Behavioral ecology
- Conservation biology
- Habitat management
- Climate change impacts
- Ecological restoration

## 🤝 Contributing

Feel free to submit issues or pull requests to improve the quiz. Potential enhancements:

- Add more questions
- Implement spaced repetition
- Add categories/topics filter
- Export results as PDF
- Online leaderboard (requires backend)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Good luck with your NPTEL Wildlife Ecology exam! 🌿🦁**
