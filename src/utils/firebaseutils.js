import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase Storage instance
const storage = getStorage();

// Firestore instance
const db = getFirestore();

// Function to upload file to Firebase Storage
export const uploadFile = async (file) => {
  const storageRef = ref(storage, `files/${file.name}`);
  try {
    // Upload file
    await uploadBytes(storageRef, file);
    // Store file metadata in Firestore
    const fileRef = await addDoc(collection(db, "files"), {
      name: file.name,
      size: file.size,
      type: file.type,
      storagePath: `files/${file.name}`, // Path in Firebase Storage
    });
    console.log("File uploaded:", fileRef.id);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

// Function to create a new file in Firestore
export const createFile = async (fileName) => {
  try {
    const fileRef = await addDoc(collection(db, "files"), { name: fileName });
    console.log("File created:", fileRef.id);
  } catch (error) {
    console.error("Error creating file:", error);
  }
};

// Function to create a new folder in Firestore
export const createFolder = async (folderName) => {
  try {
    const folderRef = await addDoc(collection(db, "folders"), { name: folderName, files: [] });
    console.log("Folder created:", folderRef.id);
  } catch (error) {
    console.error("Error creating folder:", error);
  }
};
