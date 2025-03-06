import React, { useState , useEffect  } from "react";

const petData = {
  dogs: [
    { name: "Golden Retriever", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gcUu-D8ElLcFw0TZSvCdBasqs4rG_YesHQm9Rw269lUZeRMN-dPzVZ9VH82U9Ji8OC3XHBke75d21Coy7Cho4Q" },
    { name: "German Shepherd", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8JH02RLW5Ae0VMP8w5dk1IX8oHfrBFON--9TmAy980UGyY1E5ID9snvAUQZrs4UNOgY_qCNFVjipzXFWF4UtXQ" },
    { name: "Labrador", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTeCip28hMPQyQcsh808NZPXxrM0nXqx1oigPD8X6bNM6vjEO6Hviy8czJAAStz9qscXj-EdZaKjKm_75O_Z91FIw" },
  ],
  cats: [
    { name: "Persian Cat", image: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg" },
    { name: "Maine Coon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXXIo9_tjg_bsNX9lij3G39cSUB4Tm25QoagHCFIm3UQB1vWnFl_gPBMxn4ekPpnh5mxDzY7Vo_A1WwycCKqqLg" },
    { name: "Siamese Cat", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXXa3kjj1GcP_cowvEMEXTC95wibezcin_9eI2LI4DofpCrkiOMOx5nAFMQskusysPiyYta5EhT5wz4XHmw8iPnQ" },
  ],
  food: {
    dog: [
      { name: "Premium Dog Food", image: "https://headsupfortails.com/cdn/shop/files/8906002480449_2.jpg?v=1738409894" },
      { name: "Organic Dog Meal", image: "https://media.gettyimages.com/id/165907425/photo/dog-food.jpg?s=612x612&w=gi&k=20&c=w4NtYD_1ry0J8I87voqOqWoC8421qxE5hA5QkV8Hoe4=" },
      { name: "Grain-Free Dog Kibble", image: "https://headsupfortails.com/cdn/shop/files/8906125484324.jpg?v=1714642044&width=1946" }
    ],
    cat: [
      { name: "Healthy Cat Food", image: "https://www.orangepet.in/cdn/shop/products/KitCatPremiumCatFoodClassic32Front.jpg?v=1655885345" },
      { name: "Gourmet Cat Treats", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKskRELntZem5U5IrpyKyUxeuldC-EjVIOOQ&s" },
      { name: "Salmon Delight Cat Meal", image: "https://www.luvin.in/cdn/shop/files/LUVIN-Premium-Cat-Food1_859ede8e-2b6e-49f0-b250-87703dea2e95.jpg?v=1706077859&width=800" }
    ]
  }
};



const AdminPetShop = () => {
  const [availability, setAvailability] = useState({});

  const toggleAvailability = (category, index) => {
    setAvailability((prev) => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`],
    }));
  };

  useEffect(() => {
    document.title = "PetShop";
  }, []);
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
        Welcome to Our Pet Shop
      </h1>

      {["dogs", "cats"].map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            {category === "dogs" ? "Dog Breeds" : "Cat Breeds"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {petData[category].map((pet, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src={pet.image} alt={pet.name} className="w-32 h-32 mx-auto rounded-lg" />
                <p className="mt-2 text-lg font-semibold">{pet.name}</p>
                <button
                  onClick={() => toggleAvailability(category, index)}
                  className={`mt-2 px-4 py-2 rounded-lg text-white ${availability[`${category}-${index}`] ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'}`}
                >
                  {availability[`${category}-${index}`] ? "Available" : "Not Available"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {["dog", "cat"].map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            {category === "dog" ? "Dog Food" : "Cat Food"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {petData.food[category].map((food, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src={food.image} alt={food.name} className="w-32 h-32 mx-auto rounded-lg" />
                <p className="mt-2 text-lg font-semibold">{food.name}</p>
                <button
                  onClick={() => toggleAvailability(category, index)}
                  className={`mt-2 px-4 py-2 rounded-lg text-white ${availability[`${category}-${index}`] ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'}`}
                >
                  {availability[`${category}-${index}`] ? "Available" : "Not Available"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPetShop;
