import { useState } from "react";

const Card = ({ CustomClasses }) => {
    const [likes, setLikes] = useState(0);
    const [titlecolor, setTitleColor] = useState('text-black');

    const toggleTitleColor = () => {
        setTitleColor((prevColor) => 
            prevColor === 'text-black' ? 'text-red-900' : 'text-black'
        );
    };
    return (
        <div className={`max-w-sm rounded-lg overflow-hidden shadow-lg p-6 bg-white m-auto ${CustomClasses}`}>
            <h2 className={`font-bold text-2xl mb-2 ${titlecolor}`}>Card Title</h2>

            <p className={`text-gray-700 text-base`}>This is some example text in the card</p>
            <button
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700" onClick={() => setLikes(likes + 1)}>
                Likes: {likes}
            </button>

            <button
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 ml-4" onClick={toggleTitleColor}>Toggle Title Color
            </button>

        </div>
    )

}

export {Card}