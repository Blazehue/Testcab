# 🚖 GrabClone - Ride Booking Application

<div align="center">

![GrabClone Banner](https://img.shields.io/badge/GrabClone-Ride%20Sharing-00B14F?style=for-the-badge&logo=uber&logoColor=white)

A full-featured ride-booking application built with React Native and Pusher, replicating the core functionality of popular ride-sharing platforms like Grab, Uber, and Lyft.

[![React Native](https://img.shields.io/badge/React%20Native-0.69.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![Pusher](https://img.shields.io/badge/Pusher-Realtime-blue?style=for-the-badge&logo=pusher&logoColor=white)](https://pusher.com/)
[![Node.js](https://img.shields.io/badge/Node.js-16.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

[Features](#-features) · [Quick Start](#-quick-start) · [Tutorial](#-tutorial) · [Documentation](#-project-structure)

</div>

---

## 📸 Preview

```
[Add screenshots here showcasing:]
- Passenger booking interface
- Driver acceptance screen
- Real-time location tracking map
- In-ride navigation
- Chat interface
```

## 🎯 About The Project

**GrabClone** is a comprehensive ride-booking application that demonstrates modern mobile development practices with real-time features. This project serves as an excellent learning resource for developers interested in building location-based services and real-time applications.

### Why GrabClone?

- 📱 **Production-Ready Architecture** - Organized codebase following React Native best practices
- 🔴 **Real-time Everything** - Live location updates, instant booking notifications, and chat
- 🗺️ **Advanced Mapping** - GPS tracking, route visualization, and distance calculations
- 👥 **Dual Interfaces** - Separate apps for passengers and drivers
- 🧪 **Developer-Friendly** - GPS emulation for easy testing without physical devices
- 📚 **Educational** - Perfect for learning React Native and real-time APIs

## ✨ Features

### 🚗 For Passengers

- **📍 Real-time Location Tracking**
  - Live GPS tracking of available drivers nearby
  - Track driver location from pickup to destination
  - ETA calculations and route visualization

- **🎫 Smart Booking System**
  - Request rides with pickup and drop-off locations
  - View available drivers in real-time
  - Get fare estimates before booking
  - Booking history and receipts

- **💬 Communication**
  - Real-time chat with assigned driver
  - Push notifications for booking updates
  - Call driver directly (if implemented)

- **⭐ Rating & Review**
  - Rate your driver after each ride
  - View driver ratings before booking
  - Leave feedback for service improvement

### 🚕 For Drivers

- **🗺️ Route Navigation**
  - Turn-by-turn navigation to passenger location
  - Optimized route suggestions
  - Real-time traffic updates integration-ready

- **📊 Earnings Dashboard**
  - Track daily and weekly earnings
  - View completed trip history
  - Performance metrics

- **🔔 Booking Management**
  - Receive instant ride requests
  - Accept or decline bookings
  - Manage availability status (online/offline)

- **💬 Passenger Communication**
  - Chat with passengers
  - Receive pickup instructions
  - Share live location

### 🛠️ Technical Features

- **📡 Real-time Synchronization** - Powered by Pusher for instant updates
- **🌐 Cross-platform** - Single codebase for iOS and Android
- **🎮 GPS Emulation** - Test location features without moving
- **🔐 Authentication** - Secure user authentication system
- **📱 Responsive UI** - Optimized for various screen sizes
- **🔄 Offline Handling** - Graceful degradation when connection is lost
- **🎨 Modern UI/UX** - Clean, intuitive interface design

## 🛠️ Technology Stack

<table>
<tr>
<td>

### Mobile Frontend
- **[React Native 0.69](http://facebook.github.io/react-native/)** - Cross-platform mobile framework
- **React Navigation** - Navigation library
- **React Native Maps** - Map components and markers
- **Geolocation API** - GPS location services
- **AsyncStorage** - Local data persistence

</td>
<td>

### Backend & Real-time
- **[Node.js 16+](https://nodejs.org/)** - Server runtime
- **[Pusher](https://pusher.com/)** - Real-time WebSocket APIs
- **Express.js** - Web framework
- **JWT** - Authentication tokens
- **MongoDB** (optional) - Database

</td>
</tr>
<tr>
<td>

### Development Tools
- **[Genymotion](https://www.genymotion.com/)** - Android emulator with GPS
- **[now.sh/Vercel](https://vercel.com/)** - Server deployment
- **React Native Debugger** - Debugging tool
- **ESLint** - Code quality

</td>
<td>

### APIs & Services
- **Google Maps API** - Mapping and geocoding
- **Pusher Channels** - Real-time messaging
- **Pusher Beams** - Push notifications
- **Distance Matrix API** - Route calculations

</td>
</tr>
</table>

## 📋 Prerequisites

### Required Software

| Tool | Version | Purpose |
|------|---------|---------|
| [Node.js](https://nodejs.org/) | 16.0+ | JavaScript runtime for React Native |
| [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) | Latest | Package manager |
| [React Native CLI](https://reactnative.dev/docs/environment-setup) | Latest | Build and run React Native apps |
| [Android Studio](https://developer.android.com/studio) | Latest | Android development (for Android) |
| [Xcode](https://developer.apple.com/xcode/) | Latest | iOS development (for iOS, macOS only) |
| [Genymotion](https://www.genymotion.com/) | Latest | Android emulator with GPS emulation |

### API Keys & Accounts

You'll need accounts and API keys from:

1. **[Pusher](https://pusher.com/)** - For real-time features
   - Create a Channels app
   - Note down your App ID, Key, Secret, and Cluster

2. **[Google Cloud Platform](https://console.cloud.google.com/)**
   - Enable Google Maps SDK for Android/iOS
   - Enable Directions API
   - Enable Distance Matrix API
   - Create and copy your API key

3. **[now.sh/Vercel](https://vercel.com/)** (Optional) - For server deployment

### System Requirements

**For Android Development:**
- Windows 10+, macOS 10.13+, or Linux
- 8GB RAM minimum (16GB recommended)
- 20GB free disk space

**For iOS Development:**
- macOS 10.15.4 or later
- Xcode 12.0 or later
- CocoaPods installed

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Blazehue/Testcab.git
cd Testcab
```

### 2️⃣ Install Dependencies

```bash
# Install root dependencies
npm install

# Install iOS dependencies (macOS only)
cd ios && pod install && cd ..

# Or use yarn
yarn install
```

### 3️⃣ Configure Environment

Create a `.env` file in the root directory:

```env
# Pusher Configuration
PUSHER_APP_ID=your_app_id
PUSHER_KEY=your_key
PUSHER_SECRET=your_secret
PUSHER_CLUSTER=your_cluster

# Google Maps API
GOOGLE_MAPS_API_KEY=your_google_maps_key

# Server Configuration
API_URL=http://localhost:3000
AUTH_SERVER_URL=http://localhost:4000

# App Configuration
APP_NAME=GrabClone
```

### 4️⃣ Set Up the Authentication Server

```bash
cd auth_server
npm install

# Create .env file with Pusher credentials
cp .env.example .env
# Edit .env with your Pusher credentials

# Start the auth server
npm start
```

The auth server should be running on `http://localhost:4000`

### 5️⃣ Deploy Server (Optional)

Deploy the auth server to Vercel:

```bash
cd auth_server
vercel
```

Update the `AUTH_SERVER_URL` in your `.env` with the deployed URL.

### 6️⃣ Configure Maps API Keys

**For Android:**
Open `android/app/src/main/AndroidManifest.xml` and add:
```xml
<meta-data
  android:name="com.google.android.geo.API_KEY"
  android:value="YOUR_GOOGLE_MAPS_KEY"/>
```

**For iOS:**
Open `ios/Testcab/AppDelegate.mm` and add:
```objc
#import <GoogleMaps/GoogleMaps.h>

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [GMSServices provideAPIKey:@"YOUR_GOOGLE_MAPS_KEY"];
  // ... rest of the code
}
```

### 7️⃣ Run the Application

**Start Metro Bundler:**
```bash
npx react-native start
```

**Run on Android:**
```bash
# In a new terminal
npx react-native run-android
```

**Run on iOS (macOS only):**
```bash
npx react-native run-ios
```

### 8️⃣ Set Up Genymotion (Recommended)

1. Download and install [Genymotion](https://www.genymotion.com/)
2. Create a virtual device (e.g., Google Pixel 5)
3. Start the virtual device
4. Enable GPS emulation from the sidebar
5. Use the map to set your test location
6. Run the app on the emulator

## 📁 Project Structure

```
Testcab/
│
├── auth_server/                    # Authentication & Pusher server
│   ├── server.js                  # Main server file
│   ├── routes/                    # API routes
│   │   ├── auth.js               # Authentication endpoints
│   │   └── pusher.js             # Pusher authentication
│   ├── .env.example              # Environment variables template
│   └── package.json              # Server dependencies
│
├── driver_app/                     # Driver application
│   ├── src/
│   │   ├── screens/              # Screen components
│   │   │   ├── HomeScreen.js    # Driver home/map view
│   │   │   ├── TripScreen.js    # Active trip interface
│   │   │   └── EarningsScreen.js # Earnings dashboard
│   │   ├── components/           # Reusable components
│   │   │   ├── RideRequest.js   # Incoming ride request card
│   │   │   ├── TripInfo.js      # Current trip details
│   │   │   └── Navigation.js    # Route navigation
│   │   ├── services/             # Business logic
│   │   │   ├── pusher.js        # Pusher integration
│   │   │   ├── location.js      # GPS tracking
│   │   │   └── navigation.js    # Route calculation
│   │   ├── utils/                # Utility functions
│   │   │   ├── helpers.js       # General helpers
│   │   │   └── constants.js     # App constants
│   │   └── App.js                # Driver app entry point
│   └── package.json              # Driver app dependencies
│
├── passenger_app/                  # Passenger application
│   ├── src/
│   │   ├── screens/              # Screen components
│   │   │   ├── HomeScreen.js    # Booking interface
│   │   │   ├── SearchScreen.js  # Location search
│   │   │   ├── TripScreen.js    # Active trip tracking
│   │   │   └── HistoryScreen.js # Booking history
│   │   ├── components/           # Reusable components
│   │   │   ├── LocationPicker.js # Map location selector
│   │   │   ├── DriverCard.js    # Driver information card
│   │   │   ├── FareEstimate.js  # Fare calculation display
│   │   │   └── Chat.js          # Chat interface
│   │   ├── services/             # Business logic
│   │   │   ├── pusher.js        # Real-time updates
│   │   │   ├── booking.js       # Booking management
│   │   │   └── maps.js          # Maps integration
│   │   ├── utils/                # Utility functions
│   │   └── App.js                # Passenger app entry point
│   └── package.json              # Passenger app dependencies
│
├── src/                           # Shared code between apps
│   ├── components/               # Common components
│   │   ├── Map.js               # Map component wrapper
│   │   ├── Button.js            # Custom button
│   │   └── Input.js             # Custom input
│   ├── config/                   # Shared configuration
│   │   ├── pusher.js            # Pusher config
│   │   └── maps.js              # Maps config
│   └── utils/                    # Shared utilities
│       ├── distance.js          # Distance calculations
│       ├── geocoding.js         # Address <-> Coordinates
│       └── validation.js        # Input validation
│
├── android/                       # Android-specific files
│   ├── app/                      # Android app configuration
│   └── build.gradle              # Android build config
│
├── ios/                          # iOS-specific files
│   ├── Testcab/                 # iOS app configuration
│   └── Podfile                   # iOS dependencies
│
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── index.html                    # Web entry (if applicable)
├── metro.config.js               # Metro bundler config
├── babel.config.js               # Babel configuration
├── package.json                  # Root dependencies
└── README.md                     # This file
```

## 🎓 Tutorial

### Complete Guide

For a comprehensive, step-by-step walkthrough of building this application from scratch, check out the official tutorial:

📚 **[Creating a Ride Booking App with React Native and Pusher](https://blog.pusher.com/creating-ride-booking-app-react-native-pusher/)**

This tutorial covers:
- Setting up React Native development environment
- Integrating Google Maps
- Implementing real-time features with Pusher
- Building passenger and driver interfaces
- GPS location tracking and spoofing
- Deploying the backend server

### Key Concepts Explained

#### Real-time Location Updates
```javascript
// Example: Broadcasting driver location
pusher.trigger('ride-channel', 'driver-location', {
  latitude: driverLat,
  longitude: driverLng,
  timestamp: Date.now()
});
```

#### Distance Calculation
The app uses the Haversine formula to calculate distance between two coordinates:
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  // ... calculation logic
  return distance;
}
```

#### GPS Emulation with Genymotion
Genymotion provides a visual interface to:
1. Set mock GPS locations on a map
2. Simulate movement along routes
3. Test geofencing features
4. Change locations without rebuilding the app

## 🎮 Usage Guide

### For Passengers

1. **Request a Ride**
   - Open the passenger app
   - Set your pickup location (or use current location)
   - Set your destination
   - Review fare estimate
   - Confirm booking

2. **Track Your Driver**
   - View driver's real-time location on the map
   - See estimated time of arrival
   - Contact driver via chat

3. **During the Ride**
   - Follow your route in real-time
   - See trip progress and ETA
   - Rate driver after completion

### For Drivers

1. **Go Online**
   - Open the driver app
   - Toggle availability to "Online"
   - Wait for ride requests

2. **Accept Rides**
   - Receive incoming ride requests
   - View passenger location and destination
   - Accept or decline within time limit

3. **Complete Trip**
   - Navigate to passenger pickup
   - Start the trip
   - Follow navigation to destination
   - End trip and collect payment

### Testing with Genymotion

1. **Set Up Two Emulators**
   - One for passenger app
   - One for driver app

2. **Simulate Locations**
   - Set different GPS locations for each
   - Test booking and matching
   - Simulate movement along routes

3. **Test Scenarios**
   - Driver arriving at pickup
   - In-ride navigation
   - Trip completion
   - Multiple simultaneous bookings

## 🔧 Configuration

### Pusher Setup

1. Create a Pusher account at [pusher.com](https://pusher.com)
2. Create a new Channels app
3. Copy your credentials to `.env`:
   ```env
   PUSHER_APP_ID=123456
   PUSHER_KEY=abcdef123456
   PUSHER_SECRET=secret123456
   PUSHER_CLUSTER=ap1
   ```

### Google Maps Setup

1. Visit [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable these APIs:
   - Maps SDK for Android
   - Maps SDK for iOS
   - Directions API
   - Distance Matrix API
   - Geocoding API
4. Create credentials (API key)
5. Add API key to your configuration

### Environment Variables

All environment variables should be in `.env`:

```env
# Required
PUSHER_APP_ID=
PUSHER_KEY=
PUSHER_SECRET=
PUSHER_CLUSTER=
GOOGLE_MAPS_API_KEY=

# Optional
API_URL=http://localhost:3000
AUTH_SERVER_URL=http://localhost:4000
ENABLE_LOGGING=true
DISTANCE_UNIT=km
```

## 🐛 Troubleshooting

### Common Issues

<details>
<summary><b>Build Failed - Android</b></summary>

**Issue:** Gradle build fails

**Solution:**
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

Or delete `android/app/build` and rebuild.
</details>

<details>
<summary><b>Build Failed - iOS</b></summary>

**Issue:** CocoaPods errors

**Solution:**
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
npx react-native run-ios
```
</details>

<details>
<summary><b>Maps Not Showing</b></summary>

**Issue:** Blank map or crashes

**Solution:**
- Verify Google Maps API key is correct
- Ensure Maps SDK is enabled in Google Cloud Console
- Check API key restrictions (if any)
- Restart the app completely
</details>

<details>
<summary><b>Real-time Updates Not Working</b></summary>

**Issue:** Location/messages not updating

**Solution:**
- Verify Pusher credentials are correct
- Check auth server is running
- Ensure both apps are subscribed to same channel
- Check Pusher dashboard for active connections
</details>

<details>
<summary><b>GPS Emulation Not Working</b></summary>

**Issue:** Location not updating in Genymotion

**Solution:**
- Ensure GPS widget is enabled in Genymotion
- Grant location permissions to the app
- Check if location services are enabled in Android settings
</details>

### Debug Mode

Enable detailed logging:
```bash
# Android
adb logcat *:S ReactNative:V ReactNativeJS:V

# iOS
react-native log-ios
```

## 🚢 Deployment

### Deploy Auth Server

**Using Vercel:**
```bash
cd auth_server
vercel login
vercel

# Production deployment
vercel --prod
```

**Using Heroku:**
```bash
heroku create grabclone-auth
heroku config:set PUSHER_APP_ID=xxx PUSHER_KEY=xxx
git push heroku main
```

### Build Production Apps

**Android APK:**
```bash
cd android
./gradlew assembleRelease

# APK location:
# android/app/build/outputs/apk/release/app-release.apk
```

**iOS Archive (macOS):**
```bash
# Open Xcode
open ios/Testcab.xcworkspace

# Product > Archive
# Follow App Store submission process
```

### App Store Submission

1. Create app listings in Play Store / App Store
2. Prepare app icons and screenshots
3. Write app description and keywords
4. Set up in-app purchase (if applicable)
5. Submit for review

## 🤝 Contributing

Contributions make this project better! Here's how you can help:

### Ways to Contribute

- 🐛 **Report bugs** - Found a bug? [Open an issue](https://github.com/Blazehue/Testcab/issues)
- 💡 **Suggest features** - Have an idea? Share it!
- 📝 **Improve documentation** - Help others understand the code
- 🔧 **Submit code** - Fix bugs or add features
- ⭐ **Star the repo** - Show your support

### Development Process

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Testcab.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Add screenshots if UI changes

### Code Style Guidelines

- Use ESLint configuration provided
- Follow React Native best practices
- Use functional components and hooks
- Write descriptive variable names
- Add PropTypes or TypeScript types
- Keep components small and focused

## 📊 Performance Optimization

### Tips for Better Performance

1. **Reduce Pusher Events**
   - Batch location updates (every 3-5 seconds)
   - Use presence channels efficiently

2. **Optimize Maps**
   - Limit marker updates
   - Use marker clustering for multiple drivers
   - Disable unnecessary map features

3. **Memory Management**
   - Unsubscribe from Pusher channels when not needed
   - Clear timers and intervals
   - Remove event listeners on unmount

4. **Network Optimization**
   - Cache API responses
   - Implement retry logic
   - Use optimistic UI updates

## 📄 License

This project is **proprietary** and all rights are reserved by the author. 

**You may:**
- View the source code for learning purposes
- Fork for personal use

**You may not:**
- Use for commercial purposes without permission
- Redistribute or resell
- Remove copyright notices

For licensing inquiries, please contact: pandrajat123@gmail.com

## 👨‍💻 Author

<div align="center">

**Rajat Panda (Blazehue)**

[![GitHub](https://img.shields.io/badge/GitHub-Blazehue-181717?style=flat-square&logo=github)](https://github.com/Blazehue)
[![Email](https://img.shields.io/badge/Email-pandrajat123%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:pandrajat123@gmail.com)

*Full-stack developer passionate about mobile applications and real-time systems*

</div>

## 🙏 Acknowledgments

### Special Thanks

- **[b-h-](https://stackoverflow.com/users/329130/b-h)** - For the excellent [Stack Overflow answer](https://stackoverflow.com/questions/639695/how-to-convert-latitude-or-longitude-to-meters#11172685) on converting latitude/longitude differences to meters
- **[Pusher Team](https://pusher.com/)** - For providing amazing real-time APIs
- **[React Native Community](https://reactnative.dev/)** - For continuous framework improvements
- **[Google Maps Platform](https://developers.google.com/maps)** - For comprehensive mapping APIs
- **Open Source Community** - For inspiration and support

### Built With

This project wouldn't be possible without these amazing technologies:
- [React Native](http://facebook.github.io/react-native/)
- [Pusher](https://pusher.com/)
- [Node.js](https://nodejs.org/)
- [Google Maps Platform](https://developers.google.com/maps)
- [Genymotion](https://www.genymotion.com/)

## 📞 Support

Need help? We're here for you:

- 📧 **Email:** pandrajat123@gmail.com
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/Blazehue/Testcab/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/Blazehue/Testcab/discussions)
- 📖 **Tutorial:** [Pusher Blog](https://blog.pusher.com/creating-ride-booking-app-react-native-pusher/)

## 🗺️ Roadmap

### Phase 1: Core Features ✅
- [x] Real-time location tracking
- [x] Booking system
- [x] Driver-passenger matching
- [x] In-app chat

### Phase 2: Enhanced Features (In Progress)
- [ ] Payment integration (Stripe/PayPal)
- [ ] Ride history and receipts
- [ ] Rating and review system
- [ ] Driver earnings dashboard
- [ ] Multiple vehicle types

### Phase 3: Advanced Features
- [ ] Scheduled rides
- [ ] Ride sharing (multiple passengers)
- [ ] Voice/video calling
- [ ] Push notifications
- [ ] Referral program
- [ ] Promo codes and discounts

### Phase 4: Business Features
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Fleet management
- [ ] Driver verification
- [ ] Background checks integration
- [ ] Insurance integration

### Phase 5: Expansion
- [ ] Multi-language support
- [ ] Multi-currency support
- [ ] Social media integration
- [ ] Loyalty program
- [ ] Corporate accounts
- [ ] API for third-party integration

## 💡 FAQ

<details>
<summary><b>Is this production-ready?</b></summary>

This is a demonstration project showing core functionality. For production use, you'd need to add:
- Payment processing
- User authentication
- Database integration
- Security hardening
- Terms of service
- Legal compliance
</details>

<details>
<summary><b>Can I use this commercially?</b></summary>

This project is proprietary. For commercial use, please contact the author at pandrajat123@gmail.com for licensing.
</details>

<details>
<summary><b>How much does it cost to run?</b></summary>

Main costs:
- Pusher: Free tier available, paid plans from $49/month
- Google Maps API: $200 free credit/month, then pay-as-you-go
- Server hosting: $5-20/month (Vercel, DigitalOcean, etc.)
- Total: Can start free, ~$50-100/month for modest usage
</details>

<details>
<summary><b>Do I need a physical device to test?</b></summary>

No! Genymotion emulator is recommended as it provides GPS emulation through a map interface, making testing much easier.
</details>

<details>
<summary><b>Can I add payment processing?</b></summary>

Yes! You can integrate payment providers like:
- Stripe
- PayPal
- Braintree
- Razorpay (for India)
</details>

<details>
<summary><b>Is TypeScript supported?</b></summary>

Currently JavaScript only, but TypeScript migration is on the roadmap. Contributions welcome!
</details>

## ⭐ Show Your Support

If you find this project helpful or interesting:

- ⭐ **Star this repository** - It really helps!
- 🐛 **Report bugs** - Help improve the app
- 💡 **Suggest features** - Share your ideas
- 🔀 **Fork and contribute** - Make it better
- 📢 **Share with others** - Spread the word!

<div align="center">

### Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Blazehue/Testcab&type=Date)](https://star-history.com/#Blazehue/Testcab&Date)

</div>

## 📈 Project Stats

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/Blazehue/Testcab?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Blazehue/Testcab?style=social)
![GitHub Watchers](https://img.shields.io/github/watchers/Blazehue/Testcab?style=social)
![GitHub Issues](https://img.shields.io/github/issues/Blazehue/Testcab)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Blazehue/Testcab)

</div>

---

<div align="center">

**Built with ❤️ by [Rajat Panda](https://github.com/Blazehue) using React Native and Pusher**

*Connecting drivers and passengers, one ride at a time* 🚖

[⬆ Back to Top](#-grabclone---ride-booking-application)

</div>
