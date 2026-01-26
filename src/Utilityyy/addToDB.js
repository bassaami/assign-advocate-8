// Private helper function to get data
const getBookAppoint = () => {
    const BookedSTR = localStorage.getItem("readList")
    console.log("Current localStorage string:", BookedSTR);

    if (BookedSTR) {
        try {
            const storeBookDATA = JSON.parse(BookedSTR)
            // Filter out any existing nulls/undefined from previous errors
            return Array.isArray(storeBookDATA) ? storeBookDATA.filter(item => item !== null && item !== undefined) : [];
        } catch (e) {
            console.error("Failed to parse localStorage data", e);
            return [];
        }
    }
    return []
}

const addToDBase = (id) => {
    // Safety check: Don't add if id is missing
    if (id === undefined || id === null) {
        console.error("Error: Cannot add undefined or null ID to storage.");
        return;
    }

    console.log("Attempting to add ID:", id);

    const storeBookDATA = getBookAppoint()

    // Ensure we are comparing the same types (e.g., both strings)
    const exists = storeBookDATA.find(item => String(item) === String(id));

    if (exists) {
        console.log("No item ADDED: already exists in list");
        alert("This item already exists")
    } else {
        console.log("New item found! Adding to list...");
        storeBookDATA.push(id)
        
        const data = JSON.stringify(storeBookDATA)
        localStorage.setItem("readList", data)
        
        // Debug: Verify it was saved
        console.log("Saved to localStorage:", localStorage.getItem("readList"));
    }
}

export { addToDBase }