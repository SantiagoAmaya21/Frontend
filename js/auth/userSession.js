export function getCurrentUserId() {
    const user = localStorage.getItem("currentUser");  
    if (user) {
        return user;  
    } else {
        throw new Error("No user logged in");
    }
}