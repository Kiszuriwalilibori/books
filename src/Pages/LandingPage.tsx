
import { wrappedInLinkToSearchHOC, withSnackBarHOC } from "HOCs";

export const LandingPage = () => {
  return (
    <div className="starwars-frame">
      <div className="starwars-h1">
        Google Books<sub>Finder</sub>
      </div>
      <div id="titles">
        <div id="titlecontent">
          <p className="center">
            Witam
            <br />w mojej skromnej apce
          </p>
          <p>To, co za chwilę zobaczycie to skromny interfejs do wyszukiwania książek w zasobach Google Books.</p>

          <p>Jestem twórcą wyłącznie interfejsu.</p>

          <p>Nie mam zatem wpływu na faktyczne wyniki wyszukiwania w bazie a tylko za przygotowanie i przesłanie zapytania.</p>

          <p>I, oczywiście, prezentację wyników.</p>

          <p>A piszę o tym dlatego, że zawartość Google Books ma swoje wady i zalety. Przede wszystkim polskie znaki są używane niekonsekwentnie.</p>

          <p>Przeto, jeżeli kogoś interesuje Wiedźmin to musi szukać dwa razy: "Wiedźmin" i "Wiedzmin".</p>

          <p>A ta wersja apki (pierwsza zresztą) nie obsługuje wyrażeń regularnych itp.</p>

          <p>Poza tym nie zachęcam do szukania po etykietach. Ma je minimalna liczba książek i można sobie narobić niezłego bigosu.</p>
          <p>Pole "Autor" w wyszukiwaniu traktuje wpisany ciąg jako pełen wyraz, toteż nie wystarczy wpisać "Mickiewi" żeby zapoznać się ze spuścizną Wieszcza.</p>
          <p className="center">I to by chyba było na tyle.</p>

          <p className="center">Niech Moc będzie z Wami!</p>

          <p>Natomiast jeśli nie chcesz oglądać tego intro cum mortum, kliknij na nim gdziekolwiek.</p>
        </div>
      </div>
    </div>
  );
};

export default wrappedInLinkToSearchHOC(withSnackBarHOC(LandingPage));
