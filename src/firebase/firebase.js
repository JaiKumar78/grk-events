import { collection, getDocs, getDoc, doc, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "./config";

export const getCategories = async () => {
  try {
    const snapshot = await getDocs(collection(db, "Categories"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
};

export const getFilteredPosts = async ({ category, subcategory, innersub }) => {
  try {
    const constraints = [];
    if (category) constraints.push(where("category", "==", category));
    if (subcategory) constraints.push(where("subcategory", "==", subcategory));
    if (innersub) constraints.push(where("innersub", "==", innersub));

    const q = constraints.length
      ? query(collection(db, "Posts"), ...constraints)
      : collection(db, "Posts");

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Error fetching filtered posts:", err);
    return [];
  }
};

export const getGalleryPosts = async () => {
  try {
    const q = query(collection(db, "Posts"), orderBy("date", "desc"), limit(25));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Error fetching gallery posts:", err);
    return [];
  }
};

export const getPostById = async (id) => {
  try {
    const snap = await getDoc(doc(db, "Posts", id));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  } catch (err) {
    console.error("Error fetching post by ID:", err);
    return null;
  }
};
