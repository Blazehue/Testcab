# GrabClone 🚖

[![React Native](https://img.shields.io/badge/React%20Native-0.69.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![Pusher](https://img.shields.io/badge/Pusher-Realtime-blue?style=for-the-badge&logo=pusher&logoColor=white)](https://pusher.com/)
[![Node.js](https://img.shields.io/badge/Node.js-16.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

A ride-booking app created with React Native and Pusher, inspired by popular ride-sharing platforms. This project demonstrates real-time location tracking and booking functionality.

## 📋 Overview

GrabClone is a ride-booking application that replicates core functionality found in popular ride-sharing services. Built with React Native and Pusher, it provides real-time location tracking, driver-passenger communication, and booking management.

## ✨ Features

- **Real-time Location Tracking**: Live GPS tracking of drivers and passengers
- **Booking System**: Request and manage ride bookings
- **Driver-Passenger Communication**: Real-time messaging between users
- **Location Spoofing**: Easy testing with GPS emulation
- **Cross-platform**: Works on both iOS and Android

## 🛠️ Technology Stack

### Frontend
- **[React Native](http://facebook.github.io/react-native/)**: Cross-platform mobile app development
- **Pusher**: Realtime APIs for location tracking and messaging

### Backend
- **Node.js**: Server-side runtime environment
- **Pusher**: Realtime communication infrastructure

### Development Tools
- **now.sh**: Deployment platform

## 📋 Prerequisites

### Core Requirements
- **[Node.js](https://nodejs.org/en/)**: For installing React Native CLI
- **[React Native Development Environment](http://facebook.github.io/react-native/docs/getting-started.html)**: Install either Android Studio or Xcode depending on your target platform
- **[Genymotion](https://www.genymotion.com/)**: For running the app during development. You can also run it on your device, but Genymotion provides GPS emulation via a Google Map interface for easy location spoofing
- **[now.sh](https://zeit.co/now)**: For deploying the server

## 🚀 Getting Started

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Blazehue/Testcab.git
   cd Testcab
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up development environment**:
   - Install Android Studio or Xcode
   - Set up Genymotion for testing
   - Configure Pusher credentials

### Running the Application

```bash
# Start the React Native development server
npx react-native start

# Run on Android
npx react-native run-android

# Run on iOS
npx react-native run-ios
```

## 📁 Project Structure

```
Testcab/
├── auth_server/          # Authentication server
├── driver_app/           # Driver application code
├── passenger_app/        # Passenger application code
├── src/                  # Shared source code
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 🌐 Tutorial

For a detailed walkthrough of building this application, check out the tutorial:
[Creating a Ride Booking App with React Native and Pusher](https://blog.pusher.com/creating-ride-booking-app-react-native-pusher/)

## 📦 Built With

- **[React Native](http://facebook.github.io/react-native/)**: For building cross-platform apps with JavaScript and React
- **[Pusher](https://pusher.com/)**: APIs to enable developers building realtime features

## 🙏 Acknowledgments

- Thanks to [b-h-](https://stackoverflow.com/users/329130/b-h) for their [Stack Overflow answer](https://stackoverflow.com/questions/639695/how-to-convert-latitude-or-longitude-to-meters#11172685) on how to get the difference in meters based on two coordinates

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with descriptive commit messages
4. Push your changes to your fork
5. Submit a pull request to the main branch of the original repository

## 📄 License

This project is proprietary and all rights are reserved by the author.

## 📞 Support

For questions or support, please contact the repository owner through GitHub.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Blazehue">Blazehue</a>
</p>