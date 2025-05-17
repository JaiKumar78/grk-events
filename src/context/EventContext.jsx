import { createContext, useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { getCategories, getGalleryPosts, getFilteredPosts } from '../firebase/firebase'

export const EventContext = createContext();


const EventContextProvider = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);
    const [ activePage, setActivePage ] = useState(location.pathname);
    const [selection, setSelection] = useState({
        category: '',
        subcategory: '',
        innersub: ''
      });
    const [categories, setCategories] = useState([])
    const [subcategories, setSubcategories] = useState([]);
    const [innerSubs, setInnerSubs] = useState([]);
    const [posts, setPosts] = useState([])
    const [gallery, setGallery] = useState([])
    const [currentEvent, setCurrentEvent] = useState()

    useEffect(() => {
      const fetchCategories = async () => {
        const data = await getCategories();
        setCategories(data);
      };

      const fetchGallery = async () => {
        const data = await getGalleryPosts()
        setGallery(data)
      }

      fetchCategories();
      fetchGallery();
    }, []);

    useEffect(() => {
      if (!selection.category) return;
      const fetchPosts = async () => {
        const data = await getFilteredPosts(selection);
        setPosts(data);
      };
      fetchPosts();
    }, [selection]);
    console.log(posts)

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const newSelection = {
      category: pathSegments[1] ? decodeURIComponent(pathSegments[1]).replace(/_/g, ' ').toLowerCase() : '',
      subcategory: pathSegments[2] ? decodeURIComponent(pathSegments[2]).replace(/_/g, ' ').toLowerCase() : '',
      innersub: pathSegments[3] ? decodeURIComponent(pathSegments[3]).replace(/_/g, ' ').toLowerCase() : '',
    };
    setSelection(prev => {
      if (
        prev.category !== newSelection.category ||
        prev.subcategory !== newSelection.subcategory ||
        prev.innersub !== newSelection.innersub
      ) {
        return newSelection;
      }
      return prev;
    });
  }, [location]);
  console.log(selection)
      useEffect(() => {
        if (categories.length === 0 || !selection.category) return;
    
        const selectedCategory = categories.find(
          (cat) => cat.category?.toLowerCase() === selection.category.toLowerCase()
        );
    
        if (selectedCategory) {
          setSubcategories(selectedCategory.subcategory || []);
    
          // Set default subcategory if not already selected
          if (!selection.subcategory && selectedCategory.subcategory.length > 0) {
            const defaultSubcategory = selectedCategory.subcategory[0].name;
            const newPath = `/services/${selection.category}/${defaultSubcategory.toLowerCase().replace(/ /g, '_')}`;
            if (location.pathname !== newPath) {
              navigate(newPath);
            }
          }
    
          const selectedSub = selectedCategory.subcategory.find(
            (sub) =>
              sub.name?.trim().toLowerCase() ===
              selection.subcategory.toLowerCase().replace(/_/g, ' ')
          );
    
          if (selectedSub) {
            const inner = Array.isArray(selectedSub['inner subs'])
              ? selectedSub['inner subs'].filter(Boolean)
              : [];
    
            setInnerSubs(inner);
    
            // Set default inner subcategory if not already selected
            if (!selection.innersub && inner.length > 0) {
              const defaultInnerSub = inner[0];
              setSelection((prev) => ({
                ...prev,
                innersub: defaultInnerSub,
              }));
              navigate(
                `/services/${selection.category}/${selection.subcategory.toLowerCase().replace(/ /g, '_')}/${defaultInnerSub.toLowerCase().replace(/ /g, '_')}`
              );
            }
          } else {
            setInnerSubs([]);
          }
        } else {
          setSubcategories([]);
          setInnerSubs([]);
        }
      }, [selection, categories, navigate]);

    const value = {
        isVisible,
        setIsVisible,
        activePage,
        setActivePage,
        categories,
        selection,
        setSelection,
        subcategories,
        innerSubs,
        posts,
        gallery,
        currentEvent,
        setCurrentEvent
    };
    return (
        <EventContext.Provider value={value}>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContextProvider