"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [phrase, setPhrase] = useState<string[]>([]);

  const words = [
    { word: "Eu", image: "/images/cat.jpg" },
    { word: "Quero", image: "" },
    { word: "Água", image: "/images/water.jpg" },
    { word: "Tomar café", image: "/images/coffee.jpg" },
    { word: "Almoço", image: "/images/lunch.jpg" },
    { word: "Janta", image: "/images/janta.jpg" },
    { word: "Lanche", image: "/images/lanche.jpg" },
    { word: "Ir", image: "/images/cat.jpg" },
    { word: "Banheiro", image: "/images/banheiro.jpg" },
    { word: "Sala", image: "/images/sala.jpg" },
    { word: "Cozinha", image: "/images/cat.jpg" },
    { word: "Dormir", image: "/images/cat.jpg" },
    { word: "Passear", image: "/images/cat.jpg" },
    { word: "Andar", image: "/images/cat.jpg" },
    { word: "Dor", image: "/images/cat.jpg" },
    { word: "Cabeça", image: "/images/cat.jpg" },
    { word: "Pescoço", image: "/images/cat.jpg" },
    { word: "Barriga", image: "/images/cat.jpg" },
    { word: "Perna", image: "/images/cat.jpg" },
    { word: "Tontura", image: "/images/cat.jpg" },
    { word: "Palpitação", image: "/images/cat.jpg" },
    { word: "Sim", image: "/images/cat.jpg" },
    { word: "Não", image: "/images/cat.jpg" },
    { word: "Gato", image: "/images/cat.jpg" },
    { word: "Cachorro", image: "/images/dog.jpg" },
    { word: "Pássaro", image: "/images/bird.jpg" },
    { word: "Karina", image: "" },
    { word: "Kyvia", image: "" },
    { word: "Carlinhos", image: "" },
    { word: "Andrea", image: "" },
    { word: "Pamella", image: "" },
    { word: "Gabriel", image: "" },
    { word: "Vinicius", image: "" },
    { word: "Mário", image: "" },
    { word: "Nelsinho", image: "" },
    { word: "Neide", image: "" },
  ];

  const handleWordClick = (word: string, image: string) => {
    setSelectedImage(image);
    setPhrase((prevPhrase) => [...prevPhrase, word]);
    speakWord(word);
  };

  const handleErase = () => {
    setSelectedImage(null);
    setPhrase([]);
    window.speechSynthesis.cancel();
  };

  const handleSpeak = () => {
    speakWord(phrase.join(" "));
  };

  const speakWord = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <section className="flex-[20%] flex items-center justify-center overflow-hidden">
        {selectedImage && (
          <Image src={selectedImage} alt="Images" width={200} height={200} />
        )}
      </section>
      <section className="flex-[50%] flex flex-col items-center justify-center relative overflow-auto">
        <div className="text-center flex flex-wrap justify-center">
          {words.map((item) => (
            <div
              key={item.word}
              onClick={() => handleWordClick(item.word, item.image)}
              className="bg-white text-black p-2 m-2 rounded cursor-pointer"
            >
              {item.word}
            </div>
          ))}
        </div>
      </section>
      <section className="flex-[30%] bg-neutral-800 flex items-start justify-center relative border-current border-[2px] rounded-lg overflow-auto">
        <div className="text-black p-2 flex flex-wrap pb-20">
          {phrase.map((word, index) => (
            <div key={index} className="bg-gray-200 p-1 m-1 rounded">
              {word}
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 mb-2">
          <button
            onClick={handleErase}
            className="bg-red-500 text-xl font-semibold p-3 m-2 rounded-xl"
          >
            Apagar
          </button>
          <button
            onClick={handleSpeak}
            className="bg-blue-500 text-xl font-semibold text-white p-3 m-2 rounded-xl"
          >
            Falar
          </button>
        </div>
      </section>
    </div>
  );
}
