import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState("#00ffff");
  
  return (
    <main style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "2rem" }}>
    <button onClick={() => setBgColor(bgColor === "#ffffff" ? "#dbeafe" : "#ffffff")}>
    </button>
    </main>
    <h1>Todos os canais de Countryballs do Brasil no YouTube
    <div>
    <p>
    1. DGP Mundo <br />
    2. SulBall <br />
    3. Mig Country Oficial <br />
    4. Sharknezz <br />
    5. Aurélia Countryballs <br />
    6. Felipe Yannis <br />
    7. Brasil Countryballs 2 <br />
    8. Black Diamond <br />
    9. Niue Country <br />
    10. Fabiano Cipriano Viana <br />
    11. Geomático [OFC] <br />
    12. Nathan Countryballs <br />
    13. Rondônia_Countryballs🇧🇷 <br />
    14. General PolandBall em Português <br />
    15. MrSpherical Brasil <br />
    16. Klauss Gamer 😎 <br />
    17. SolarBalls - Brasil <br />
    18. Country_Tutui[CountryBalls] <br />
    19. Rondoniense Countryballs <br />
    20. CB Animates <br />
    21. MundoBalls <br />
    22. Rodrigo CountryBalls <br />
    23. Terra Countryballs 🌎 <br />
    24. Miguel_Countryballs <br />
    25. •Miguihara Gamer [NDDY] [OTAN] <br />
    26. Joaquim_super <br />
    27. 『 Sorocaba CB 』 <br />
    28. PapakixzCountryballs <br />
    29. Heitor Ian Countryballs <br />
    30. República de Maglioli 🇧🇷 <br />
    31. Sol Countryballs ☀️ <br />
    32. Kalew14 Countryballs, Memes e Outros!🇧🇷 <br />
    33. JJcountryballs <br />
    34. ZOTE GAMER <br />
    35. General ERE YT <br />
    36. Carlos Daniel Countryballs㋡ <br />
    37. Caio2010 <br />
    38. Dream Geo 🇧🇷 <br />
    39. Pernambuco Countryballs <br />
    40. Jorge_CountryBall <br />
    41. VINI XD:] 🎮👾 <br />
    42. GBuri <br />
    43. Mato_grosso_countryball🇧🇷 <br />
    44. Rondônia Countryballs 2 <br />
    45. Yuko Countryballs <br />
    46. Flame_Country <br />
    47. Equador Ball <br />
    48. Pedro Miguel Balls <br />
    49. Lukinhas Countryballs <br />
    50. Luccas_OFC <br />
    51. Gabriel country balls <br />
    52. ⚡ •DK Country_01 💫 <br />
    53. MAISON PON
    </p>
    Mais canais em breve
    </div>
    </h1>
  );
}

export default Home;
