export const getAnimals = async () => {
    const res = await fetch('http://localhost:3000/api/animals');
    const data = await res.json();
    return data;
}