.. title: 4developers 2012
.. slug: 4developers-2012
.. date: 2012-05-05 23:41:30 UTC+01:00
.. tags: polish, conferences
.. category: software engineering
.. link: 
.. description: 
.. type: text

Konferencja 4developers odbyła się 18 kwietnia w Poznaniu. Miejsce całkiem w porządku
(`Concordia Design <http://concordiadesign.pl/>`__), tyle że jednak do Poznania jest dość daleko…

Zanim przejdę do konkretów, kilka słów o kwestiach organizacyjnych. Tak jak rok temu, konferencja była
podzielona na 4 sesje między którymi można było się swobodnie przemieszczać. Były to:
*Java*, *PHP*, *Zarządzanie projektami IT* i *Wydajność i skalowalność*. Takie rozwiązanie ma niewątpliwie
wiele zalet, jednak często zdarzało się tak że kilka interesujących mnie prezentacji miało miejsce
równocześnie i siłą rzeczy musiałem z niektórych (większości?) zrezygnować. Jednocześnie nikt nie
nagrywał wystąpień – z poprzednich lat tylko nieliczne są dostępne. Dlatego pod tym względem lepiej
wypadła konferencja `PHPCon <http://www.phpcon.pl/2011/>`_, która wprawdzie była dłuższa bo trwała 3 dni,
ale dzięki temu można było wziąć udział w każdej prelekcji, a ponadto mają być dostępne w internecie
materiały wideo.

W porównaniu z poprzednim rokiem, zrezygnowano z paneli dyskusyjnych, za to były warsztaty o nowoczesnych
formularzach zorganizowane przez firmę ePoint. Moim zdaniem kilka równoległych paneli do wyboru było
bardzo dobrym pomysłem, szczególnie że w przeciwieństwie do warsztatów nie kolidowało z wykładami.
Nie wiem co było przyczyną, ale zdecydowanie większy odsetek niż poprzednio stanowili prelegenci
z zagranicy. W szczególności firma `Ibuildings <http://www.ibuildings.com/>`_
przysłała bardzo silną reprezentację.

Juozas Kaziukenas: Jak wybrać odpowiednią bazę NoSQL
----------------------------------------------------

`@juokaz <http://twitter.com/juokaz>`__, `juokaz.com <http://juokaz.com/>`__
`Prezentacja PDF <http://www.data.proidea.org.pl/4developers/4edycja/materialy/prezentacje/JuozasKaziukenas.pdf>`__
Prezentacja Juozasa była wprawdzie o bazach NoSQL, ale zaczął od tego że bazy relacyjne nie są złe,
chociażby w pełni implementują `ACID <http://pl.wikipedia.org/wiki/ACID>`__, ale jak mówi
`CAP theorem <http://en.wikipedia.org/wiki/CAP_theorem>`_, nie można mieć wszystkiego na raz.
Okazuje się, że rozluźnienie wymagania Consistency w taki sposób, że dane kiedyś w końcu się
zsynchronizują, ale niekoniecznie muszą być przez cały czas spójne, bardzo poprawia skalowalność
w bazach NoSQL. W większości przypadków brak spójności nie jest problemem – na przykład na
Facebooku może zająć kilka minut zanim wszyscy znajomi zobaczą nowy status.

Dalsza część prezentacji to głównie omówienie i porównanie różnych systemów NoSQL.
Istnieją między nimi istotne różnice, jak chociażby sposób zapisu danych – *key-value stores* jak
Dynamo i Redis, *document stores* jak MongoDB i CouchDB, grafowe jak Neo4j i FlockDB czy kolumnowe
jak stworzony przez Google BigTable i stworzona przez Facebooka Cassandra. Różnią się też sposobem
replikacji danych.

Niezależnie od wyboru konkretnej bazy, konkluzja była jedna – systemy rozproszone są zbyt skomplikowane,
żeby udało się ich prawidłowo użyć za pierwszym razem. Pokazuje to przykład Twittera, Foursquare i
wielu innych, a podsumowuje bardzo dobrze jedno zdanie z prezentacji: „You will fail”. 😉

Mariusz Gil: Rozproszone przetwarzanie zadań
--------------------------------------------
`Prezentacja PDF <http://www.data.proidea.org.pl/4developers/4edycja/materialy/prezentacje/MariuszGil.pdf>`__
Wiele zadań, z wysyłką maili na czele, wykonywane jednocześnie w momencie żądania użytkownika
niepotrzebnie opóźnia wygenerowanie odpowiedzi i w związku z tym powinno/musi być obsłużone „w tle”.
Mariusz Gil omówił kilka sposobów rozwiązania tego problemu.

Prawdopodobnie najpopularniejszym sposobem jest napisanie prostego workera CRON+PHP.
Mariusz porównuje to do pisania frameworka – podobno każdy programista wcześniej czy później
pisze swój 🙂 Oczywiście jest to możliwe, natomiast zrobienie tego prawidłowo, to znaczy z
obsługą sytuacji krytycznych czy odpowiednim do sytuacji wznawianiem błędnych zadań zajmuje
sporo czasu i na pewno lepiej jest skorzystać z gotowych rozwiązań.

Wymienione gotowe rozwiązania to:
* MemcacheQ
* BeanstalkD (+biblioteka Pheanstalk)
* GearmanD – Task Management Framework
* Amazon SQS (w chmurze, $0.01 za 10000 requestów)
* Resque

Trudno mi po pobieżnym przejrzeniu porównać je do siebie. Osoby korzystające z Memcache’a
na pewno zainteresuje MemcacheQ, a SQS te korzystające z chmur Amazonu. Wydaje się że Gearman
oferuje najwięcej możliwości, a najbardziej przyjazny jest stworzony na potrzeby Githuba Resque
(i przeportowany później na PHP).

Rowan Merewood: Szacowanie, albo jak wykopać swój własny grób
-------------------------------------------------------------
`@rowan_m <http://twitter.com/rowan_m>`__, `merewoord.org <http://merewood.org/>`__

`prezentacja na Slideshare <http://www.slideshare.net/rowan_m/estimation-or-how-to-dig-your-grave>`__

Rowan Merewood mówił dość szeroko o szacowaniu ilości czasu, który to problem na ogół dotyka
programistów (Rowan jest programistą PHP). Zachęcam do przejrzenia prezentacji na Slideshare,
dowiedziałem się z niej między innymi:
* że 8-godzinny dzień pracy to najwyżej 6 godzin pracy,
* że bardzo dokładne planowanie zadań wcale nie pomaga w wycenie,
* że ze względu na niepewność wycen podejście iteracyjne jest jedynym sensownym,
* o `modelu Kano <http://en.wikipedia.org/wiki/Kano_model>`__, czyli co sprawia że klient jest zadowolony
i jak to się ma do `metody MoSCoW <http://en.wikipedia.org/wiki/MoSCoW_Method>`__
* i że czasem lepiej jest powiedzieć, że coś „będzie, kiedy będzie” zamiast podawać wycenę „z sufitu”. 🙂

Thijs Feryn: Tworzenie i wdrażanie z użyciem strategii chmur hybrydowych
------------------------------------------------------------------------
`@ThijsFeryn <http://twitter.com/ThijsFeryn>`__, `blog.feryn.eu <http://blog.feryn.eu/>`__

Thijs w swojej prezentacji poruszył wiele aspektów chmur. Wszystkie rozwiązania „as a service” – PaaS
(platform), SaaS (software), IaaS (infrastracture) odnoszą się do różnych poziomów abstrakcji
przetwarzania w chmurach.

Thijs mówił o Amazon Web Services (AWS) jako IaaS – najpopularniejsze usługi Amazonu to EC2
(Elastic Computing Cloud), S3 (Simple Storage Service), DynamoDB i RDS (Relational Database Service).
AWS sam w sobie nie posiada pojęcia aplikacji – udostępnia tylko infrastrukturę. Windows Azure
udostępnia pełne środowisko uruchomieniowe aplikacji (PaaS). Nieco podobnym rozwiązaniem,
chociaż tylko dla PHP, jest Orchestra. Co ciekawe, Orchestra została zbudowana w oparciu o
usługi Amazonu.

Mimo wielu zalet, takich jak szybkość, wysoka dostępność i niezawodność, w chmurach występuje
kilka istotnych problemów. Zarządzanie wieloma instancjami aplikacji może być skomplikowane,
deployment na wiele serwerów jest utrudniony. Nawet sama obsługa sesji może wymagać zaawansowanej
replikacji danych. Okazuje się też, że chmury wcale niekoniecznie są tanie, szczególnie AutoScaling
w EC2 jest nieco ryzykowny finansowo 🙂

Konkluzją prezentacji było to, że ze względu na trudności dostosowywania architektury aplikacji
do chmur, zasadniczo sprawdzają się one najbardziej w nowych projektach. Dobrym pomysłem jest używanie
od początku jednolitego interfejsu, takiego jak Zend CloudStorage, który umożliwia lokalne zapisywanie
danych, a w razie potrzeby może być bardzo łatwo przełączony na AWS albo Azure.

Jacek Wieczorek: Alfa Team, czyli pierwszy Scrum w Allegro
----------------------------------------------------------
Z prezentacja Jacka Wieczorka można było dowiedzieć się jak wyglądało tworzenie pierwszego,
eksperymentalnego, zespołu scrumowego w tak dużej organizacji jaką jest Allegro.
Liczne przeszkody napotykane przy tym przedsięwzięciu pokazywały jak bardzo odmienna jest
organizacja pracy w metodykach waterfallowych. Jak się okazuje, mimo trudnych czasami do
pokonania kwestii organizacyjnych, największą przeszkodą w stworzeniu zgranego i przede
wszystkim efektywnego zespołu stanowiła zmiana sposobu myślenia jego członków. Wszystkie osoby
wchodzące w skład Alfa Teamu musiały przestawić się z wyspecjalizowanych i zwykle bardzo
odizolowanych ról jakie pełniły wcześniej na otwartą dyskusję w zespole interdyscyplinarnym.
Po raz pierwszy programiści nie otrzymywali gotowych wymagań, ale musieli dogadać się „twarzą w
twarz” z analitykami i ludźmi ze świata biznesu.

Pomimo wielu przeszkód i tego, że Scrum nie rozwiązał większości problemów, udało się osiągnąć
podstawowy cel i skrócić cykl rozwoju oprogramowania z ok. 2 miesięcy do długości jednego sprintu.

Martin de Keijzer: Tworzenie aplikacji moblinych w Javascript z Sencha Touch 2
------------------------------------------------------------------------------
`@Martin1982 <http://www.twitter.com/Martin1982/>`_, `martindekeijzer.nl <http://martindekeijzer.nl/>`_

`Prezentacja na Slideshare <http://www.slideshare.net/Martin82/sencha-touch-2-12585840>`_

Prezentacja Martina była bardzo techniczna, także streszczanie jej nie ma sensu – na `stronie
Sencha <http://www.sencha.com/learn/touch/>`_ jest wystarczająca ilość materiałów.
W każdym razie, utwierdziłem się w przekonaniu, że web development będzie się coraz bardziej
zmieniał pod kątem urządzeń mobilnych. Wydaje się też, że JavaScript (szczególnie w połączeniu
z HTML5) jest potężnym i bardzo uniwesalnym narzędziem. Jednocześnie Sencha bardzo dobrze
współpracuje w PhoneGapem, dzięki czemu można pisać wieloplatformowe (iOS, Android, Windows Phone,
BlackBerry) aplikacje korzystające z funkcji natywnych urządzeń.

Ben Longden: REST i ograniczenia hypermediów
--------------------------------------------
`@blongden <http://twitter.com/blongden>`_, `nocarrier.co.uk <http://nocarrier.co.uk/>`_
Ben Longden mówił o REST i o swoich próbach stworzenia w pełni zgodnego z REST API. Z elementów,
które szczególnie zapamiętałem, było wykorzystanie swoich własnych typów MIME (*application/vnd.…*)
do wersjonowania swojego API. Własne typy MIME można też wykorzystać do serwowania przeglądarkom
sensownego i ładnie wyglądającego HTMLa, dzięki czemu API może samo w sobie stanowić funkcjonalną
aplikację internetową.

Dodatkowo, usługi które są w pełni RESTful powinny wykorzystywać
`HATEOAS <https://en.wikipedia.org/wiki/HATEOAS>`_ w celu jak najpełniejszego uniezależnienia
klienta i serwera.

Zakończenie
-----------

Bardzo miłym akcentem na koniec konferencji był `Kindle Touch
<http://www.amazon.com/Kindle-Touch-e-Reader-Touch-Screen-Wi-Fi-Special-Offers/dp/B005890G8Y>`_,
ufundowany przez firmę IT Kontrakt, którego wygrałem w losowaniu – a wziąłem w nim udział w sumie
tylko dlatego że chciałem dostać od nich piłeczkę 😉 W komplecie znalazł się również pendrive 2GB
w kształcie logo IT Kontrakt, piłeczka taka jak wspomniana (czyli już druga – obie trafiły do biura
Polcode 🙂 ), trochę krówek i dropsy miętowe z logiem firmy.
Dodam, że w czasie konferencji, podobnie jak rok temu, było sporo innych nagród i gadżetów do zgarnięcia –
głównie drobnych, jak np. smycze, ale też T-shirty, pokrowce na laptopy, dyski twarde czy aparaty cyfrowe.