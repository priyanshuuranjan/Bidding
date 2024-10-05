
# 🛍️ Bidster - Online Auction Platform

**Bidster** is a modern auction platform where users can participate in real-time bidding after logging in, and registered users can also upload their own items for auction. The website ensures a seamless auction process—from bidding, winning, and completing the purchase, to item delivery.

The platform is built using **React**, **Firebase**, and **Firebase Storage**, ensuring real-time updates, secure authentication, and a smooth user experience.

## ✨ Features

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Auction System**: Users can browse, bid, and participate in live auctions.
- **Item Uploading**: Registered users can upload items with images, set a starting price, and define auction duration.
- **Real-Time Bidding**: Auction updates happen in real time, with current bids shown instantly using Firebase.
- **Auction Completion**: Once the auction ends, the highest bidder is automatically selected as the winner.
- **Purchase and Delivery**: The winner completes the purchase, and items are delivered within 10 days after successful payment.

## 🛠️ Technologies Used

- **Frontend**: React.js
- **State Management**: React Context API
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **File Storage**: Firebase Storage
- **Deployment**: Netlify

## 🚀 Getting Started

Follow these steps to get the project up and running locally:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bidster.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bidster
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Firebase configuration. You can find these in your Firebase project settings:

   ```bash
   REACT_APP_API_KEY=your-firebase-api-key
   REACT_APP_AUTH_DOMAIN=your-firebase-auth-domain
   REACT_APP_PROJECT_ID=your-firebase-project-id
   REACT_APP_STORAGE_BUCKET=your-firebase-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   REACT_APP_APP_ID=your-firebase-app-id
   ```

5. Start the development server:

   ```bash
   npm start
   ```

   The project should now be running on [http://localhost:3000](http://localhost:3000).

## 🌍 Deployment

You can deploy **Bidster** on platforms like **Netlify**, **Vercel**, or **Firebase Hosting**. Here’s how to deploy using **Netlify**:

1. Sign in to Netlify and create a new site from Git.
2. Select your repository.
3. Netlify will automatically build and deploy your project.

## 🤝 Contributing

Contributions are always welcome! Whether it's bug fixes, new features, or improvements, feel free to open an issue or submit a pull request. Your contributions help make Bidster better!

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

## 📧 Contact

For any inquiries or feedback, feel free to reach out:

- **Email**: priyanshumth0808@gmail.com
```
