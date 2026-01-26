// Private helper function to get data
const getBookAppoint = () => {
    const BookedSTR = localStorage.getItem("readList")
    
    // Log exactly what is currently on the physical disk
    console.log("DISK CHECK - Current readList:", BookedSTR);

    if (BookedSTR) {
        try {
            const storeBookDATA = JSON.parse(BookedSTR)
            if (Array.isArray(storeBookDATA)) {
                // Filter out nulls/undefined to keep the list clean
                return storeBookDATA.filter(item => item !== null && item !== undefined);
            }
            return [];
        } catch (e) {
            console.error("Critical: JSON Parse Error. Resetting list.", e);
            return [];
        }
    }
    return []
}

const addToDBase = (id) => {
    if (id === undefined || id === null) {
        console.error("Action Blocked: Cannot save a null/undefined ID.");
        return;
    }

    const storeBookDATA = getBookAppoint()

    // check if it exists (converting both to string to be safe)
    const exists = storeBookDATA.find(item => String(item) === String(id));

    if (exists) {
        console.log(`Duplicate: ID ${id} is already in storage.`);
        alert("This item already exists in your bookings.");
    } else {
        storeBookDATA.push(String(id));
        
        const data = JSON.stringify(storeBookDATA);
        
        // PHYSICAL SAVE
        localStorage.setItem("readList", data);
        
        // This 'storage' event sometimes forces the DevTools to refresh the table
        window.dispatchEvent(new Event('storage'));

        console.log("%c SAVE SUCCESSFUL ", "background: #222; color: #bada55; font-size: 14px");
        console.log("New List saved to Disk:", localStorage.getItem("readList"));
    }
}

// Global check on load
console.log("--- SYSTEM BOOT ---");
console.log("Storage on Disk at startup:", localStorage.getItem("readList") || "EMPTY");

export { addToDBase }