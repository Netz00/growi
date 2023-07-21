# Growi

[Growi](https://growi.vercel.app/)

# Uvod

Influencer marketing je nova podgrana digitalnog marketinga koja se pokazala posebno efikasnom (vjerovatno jer prikazujete reklame ljudima koji gledaju influencere). Radi se o tome da kompanija ili privatnik ili bilo tko se obrati influenceru da mu napravi objavu vezanu uz nešto, npr. njegov  brend, proizvod, uslugu... Influencer pritom prima određenu korist u obliku novca ili robe. Međutim kao i kod svakog poslovanja javljaju se određeni problemi. Kao npr. nano i mikro influenceri unatoč odličnom engagementu i prihvatljivoj cijeni još uvijek ne ostvaruju puni potencijal.

Growi je posrednička platforma za influencer marketing, influencere i njihove klijente. Za razliku od ostalih posredničkih platformi kao Fiverr, Uber, Wolt, …, temelji se na blockchain tehnologiji i pametnim ugovorima za ostvarenje posredništva. 

Svrha Growi je riješiti glavne probleme influencer marketinga s kojima nailaze nano i mikro influenceri, te bi ih se dalo grupirati u sljedeću podjelu:

- manjak poslovnog angažmana influencera
- sigurnost isplate (osiguranje isplate influencera ili povrata novca klijentu)
- pouzdanost podataka koje klijenti dobivaju

## Problem(i)

![Untitled-2022-11-10-1632.excalidraw.png](Growi/Untitled-2022-11-10-1632.excalidraw.png)

## Stanje na tržištu

Veliki influenceri i velike kompanije koriste odvjetnike i ugovore.

Kako smo istražili koliko već postoji efikasnih rješenja za taj problem, došli smo do zaključka da ne postoji dovoljno kvalitetnih rješenja. U samom istraživanju konkurencije primjetili smo neke nedostatke i manjkavosti koje bi kroz naš koncept posredništva riješili. 

Tržište je trenutno vrijedno $ 16.4B.

Slične stranice:

- preskupe (veliki fee)
- nema posrednistva
- loš dizajn, nisu user-friendly, losi filteri
- nedostatak precizne i detaljne analize influencer profila
- nisu opt in orijentirane, nedostatak chata
- pogresne informacije o influencerima, lazni influencer profili, nema influencerove referentne liste

## Očekivani tip korisnika

- influenceri
    - nano influenceri (1-10 k followera)
    - mikro influenceri( 10-50 k followera)
- klijenti
    - startupi
    - b2b, b2c brendovi
    - male kompanije

[Idejno rješenje](Growi/Idejno%20rje%C5%A1enje%2099a1f439f91c41f4bb6b5e680d87aa20.md)

---

---

[1. Sitemap](Growi/1%20Sitemap%20e7ed28d61c6649fc9589fd8f0abdaa93.md)

[2. Low-fidelity Wireframe](Growi/2%20Low-fidelity%20Wireframe%200aa1dff0eec14dbc87c35a34b0dab354.md)

[3. High-fidelity Wireframe](Growi/3%20High-fidelity%20Wireframe%20e594c62291074ded8d0ed1d485f3ddc1.md)

---

[1. Basic design principles](Growi/1%20Basic%20design%20principles%20ede31c0997d84e4bb9b7f957eed53fff.md)

[2. Low-level theories](Growi/2%20Low-level%20theories%20a3d2793533ef49e1920aac45a9d07bce.md)

[3. Norman’s 7 stages](Growi/3%20Norman%E2%80%99s%207%20stages%20dff01bd8bbea4b8dbed48fa1551da317.md)

[4. Heuristic Evaluation](Growi/4%20Heuristic%20Evaluation%20a253bc03fad4486cb91cefde0930751f.md)

[5. C.R.A.P. principles](Growi/5%20C%20R%20A%20P%20principles%2049a739d0a87b4bfe938bdf77873bc5d7.md)

---

---

[Used tools](Growi/Used%20tools%204d1ef26e10814ab7a03ca3f9c3928997.md)

[TODO](Growi/TODO%205d709f4cb7c74077a5ee188b8ec556bf.md)

### Presentation notes

1. Home
    1. 2 botuna - želimo da se korisnici opredijele
    2. kratki opis općenito za sve korisnike
    3. CTA - Help Us
    4. Footer (sitemap, poredane, zajedničke, brand i za kreatore)
    5. Responzivno
    6. Dark mode još u razvoju
2. Home Creator
    1. nastavlja se s narančastim - CTA - kreatori
    2. sadržaj samo za kreatore u featureima
3. Home Brand
    1. features sadržaj samo za brandove
    2. boja botuna se nastavlja sa zelenim kao na početnoj
4. Search page
    1. search bar
        1. placeholder
        2. plavi obrub
        3. search as you type: Fuse.JS
            1. pretražuje unos u imenu, username, tagovima, ako započinju sa tim unosom
            2. strelica dolje, gore, scrollaju se rezultati, trenutno aktivan plav, enter ili unos pa botun search
            3. klikom vanka autocomplete reccomendations se zatvara, i otvara ponovnim klikom na input
            4. kategorije zoom on hover i horizontalni scroll
        4. kartica profila
            1. medijski dio
                1. slika/video
                2. chevron < > prva zadnja
                3. video se play-a kad se otvori, pa pause kad se zatvori
            2. 2 dio
                1. slika, lokacija, podaci
                2. rating - zvjezdica ispunjena ovisno o ocjeni, nije hardkodirano
                3. klik na sredinu otvara profil
            3. save for later botun (ukradeno s youtube-a, save u playlistu)
                1. zatvara se klikom na X ili bilo di van okvira
                2. checkbox može se kliknut i na text
                3. create new, zatvara ponovnim otvaranjem save to…
5. profil kreatora
    1. search identican kao i na search pageu
    2. galerija ista
    3. chart.JS grafovi
        1. bar
        2. radar
        3. pie x 2
    4. featured posts: react-social-media-embed
        1. loada se na kraju kod klijenta
6. overall, najteži dio
    1. izmišljanje sadržaja, platforme, što bi i gdje trebalo biti, dizajn najmanji dio
    2. navbar, search, detalji ako klikne van da se zatvori pa onda konflikti onClick poziva