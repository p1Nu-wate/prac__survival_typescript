import { useState } from "react";

const catImages: string[] = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png",
];

const randomCatImage = (): string => {
    const index = Math.floor(Math.random() * catImages.length);
    return catImages[index];
};


const IndexPage = () => {
    const [catImageUrl, setCatImageUrl] = useState(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
    );

    const handleClick = () => {
        setCatImageUrl(randomCatImage());
    };

    return (
        <div>
            <button onClick={handleClick}>きょうのにゃんこ🐱</button>
            <div style={{ marginTop: 8 }}>
                <img src={{ catImageUrl }}  />
            </div>
        </div>
    );
};

export default IndexPage;