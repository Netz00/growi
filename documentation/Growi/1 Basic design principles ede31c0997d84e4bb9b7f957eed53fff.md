# 1. Basic design principles

### Visibility

<aside>
💡 Can I see it?

</aside>

- Navigaciijska traka jasno pokazuje korisniku trenutno aktivnu stranicu i ostale na koje može otići.

![Untitled](1%20Basic%20design%20principles/Untitled.png)

- Galerija kartice influencera jasno prikazuje korisniku
    - broj medisjkih sadržaja (broj krugova), STATUS
    - trenutno aktivni sadržaj (krug sa ispunom), STATUS
    - način izmjene sadržaja (strelice u lijevom i desnom kutu), POSSIBLE ACTIONS AND CONSQUENCES

![Untitled](1%20Basic%20design%20principles/Untitled%201.png)

### Feedback

<aside>
💡 What is it doing now?

</aside>

- Prelaskom miša preko botuna ili ikona promijeni se boja i ikona miša

![Untitled](1%20Basic%20design%20principles/Untitled%202.png)

![Untitled](1%20Basic%20design%20principles/Untitled%203.png)

![Untitled](1%20Basic%20design%20principles/Untitled%204.png)

![Untitled](1%20Basic%20design%20principles/Untitled%205.png)

- Klikom na ikonu za dodavanje kartice otvara se prozor s dodatnim opcijama

![Untitled](1%20Basic%20design%20principles/Untitled%206.png)

![Untitled](1%20Basic%20design%20principles/Untitled%207.png)

- Unošenjem teksta po Name i klikom na create dodaje se nova stavka na popis.

![Untitled](1%20Basic%20design%20principles/Untitled%208.png)

- Prelaskom preko dijela kartice promijeni se pozadinska boja.

![Untitled](1%20Basic%20design%20principles/Untitled%209.png)

- Ukoliko se miša zaustavi na Searchu korisniku se pojavi poruka.

![Untitled](1%20Basic%20design%20principles/Untitled%2010.png)

- Search indicira plavim rubom da je unos teksta u njega aktivan i ukoliko nema rezultata prikazuje korisniku kratku poruku ispod.

![Untitled](1%20Basic%20design%20principles/Untitled%2011.png)

- Korisnik 300 ms nakon unosa zadnjeg znaka u tražilicu dobije listu rezultata

![Untitled](1%20Basic%20design%20principles/Untitled%2012.png)

### Constraints

<aside>
💡 Why can’t I do that?

</aside>

- Akcije za izmjenu medijskog sadržaj na kartici se prikazuju ovisno o tome koji je sadržaj po redu aktivan. Tako da akcija za prethodni sadržaj je skrivena ukoliko se radi o prvom mediju, a akcija za sljedeći sadržaj je skrivena ukoliko se radi o zadnjem mediju.

![Untitled](1%20Basic%20design%20principles/Untitled%2013.png)

![Untitled](1%20Basic%20design%20principles/Untitled%2014.png)

![Untitled](1%20Basic%20design%20principles/Untitled%2015.png)

- Navigacijska traka blokira mogućnost odabira trenutno aktivnog linka, tako da korisnik prelaskom miša preko Search nema nema promjenu pokazivača niti ikakav efekt na klik.

![Untitled](1%20Basic%20design%20principles/Untitled%2016.png)

- Search onemogućava unos više od 30 znakova

![Untitled](1%20Basic%20design%20principles/Untitled%2017.png)

### Mapping

<aside>
💡 Where am I and where can I go?

</aside>

- Kartica influencera
    - tri kruga mapiraju medijske sadržaje
    - chevron left i right mapiraju da će se prebaciti na lievi odnosno desni medij

![Untitled](1%20Basic%20design%20principles/Untitled%2018.png)

- Primjeri mapiranja akcija s poznatim ikonama

![Untitled](1%20Basic%20design%20principles/Untitled%2019.png)

![Untitled](1%20Basic%20design%20principles/Untitled%2020.png)

![Untitled](1%20Basic%20design%20principles/Untitled%2021.png)

![Untitled](1%20Basic%20design%20principles/Untitled%2022.png)

![Untitled](1%20Basic%20design%20principles/Untitled%2023.png)

![Untitled](1%20Basic%20design%20principles/Untitled%2024.png)

![Untitled](1%20Basic%20design%20principles/Untitled%2025.png)

- Ukoli svi elementi navigacijske trane ne stanu, sakriju se i sa 3 toče u rubu se označava kako ih doseći

![Untitled](1%20Basic%20design%20principles/Untitled%2026.png)

### Consistency

<aside>
💡 I think I have seen this before?

</aside>

- Botuni se pridravaju dva stila, zeleni i narančasti, ovisno jeli namijenjen influencerima ili brendovima

![Untitled](1%20Basic%20design%20principles/Untitled%2027.png)

- koristi se jedan font (osim logotipa iznimka)
- konzistentnost u odnosu na slične stranice
    - navigacija je uvijek na vrhu stranice
    - sitemap je u footeru
    - search stranica daje opciju searcha i kategorija

### Affordance and signifier

<aside>
💡 How do I use it?

</aside>

- klikabilnim elementima se promijeni boja priliko prelaska miša preko njih
- Search označava pretraživanje sa placeholderom kao signifierom

![Untitled](1%20Basic%20design%20principles/Untitled%2028.png)

- Ikona za kreiranje nove liste je popraćena sa signifierom

![Untitled](1%20Basic%20design%20principles/Untitled%2029.png)

### Mental models

<aside>
💡 I think I know how this operates?

</aside>

- standardni način prikazivanja ocjene profila
    
    ![Untitled](1%20Basic%20design%20principles/Untitled%2030.png)
    
- ikone za pretraživanje
- ikone za spremanje kartice influencera na listu
    
    ![Untitled](1%20Basic%20design%20principles/Untitled%2031.png)