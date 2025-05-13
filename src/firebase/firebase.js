import { collection, getDocs, getDoc, doc, query, where, orderBy, limit } from "firebase/firestore";

import { db } from "./config";



export const getCategories = async () => {
   try {
    const categoriesRef = collection(db, "Categories");
    const categorySnapshot = await getDocs(categoriesRef);
    const categories = categorySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  
    return categories;
   }
   catch(err) {
    console.log(err);
   }
  };

export const getFilteredPosts = async (selection) => {
  let q = collection(db, "Posts");

  // Build dynamic query
  const constraints = [];


  if (selection.category) {
    constraints.push(where("category", "==",selection.category));
  }
  if (selection.subcategory) {
    constraints.push(where("subcategory", "==",selection.subcategory));
  }
  if (selection.innersub) {
    constraints.push(where("innersub", "==",selection.innersub));
  }
  const postsQuery = constraints.length ? query(q, ...constraints) : q;

  const snapshot = await getDocs(postsQuery);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getGalleryPosts = async () => {
    const q = query(
    collection(db, "Posts"),
    orderBy("date", "desc"),
    limit(25)
  );

  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return posts;
}

export const getPostById = async (id) => {
  try {
    const docRef = doc(db, "Posts", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
};

