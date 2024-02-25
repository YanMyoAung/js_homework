import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJ6fuW1hOf8m5pComNSu2HVHhnXWQIFww",
  authDomain: "test-efe04.firebaseapp.com",
  databaseURL:
    "https://test-efe04-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-efe04",
  storageBucket: "test-efe04.appspot.com",
  messagingSenderId: "530587567711",
  appId: "1:530587567711:web:d955e5d5008f63693d3dea",
  measurementId: "G-EWT3PM9J87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const ref_url = ref(db, "users");
onValue(ref_url, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

function writeUser(name, gender, age) {
  const id = push(ref(db, "users")).key;
  set(ref(db, "users/" + id), {
    id,
    name,
    gender,
    age,
  });
}

//writeUser("test 2", "female", 30);
