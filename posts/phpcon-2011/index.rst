.. title: PHPCon 2011
.. slug: phpcon-2011
.. date: 2011-11-28 20:11:31 UTC+01:00
.. tags: polish, conferences
.. category: software engineering
.. link: 
.. description: 
.. type: text

PHPCon to ogólnopolska konferencja programistów i entuzjastów języka PHP. W tym roku odbyła się pod koniec października
w Mąchocicach koło Kielc.

Poniżej krótkie streszczenie kilku (bardzo subiektywnie) najbardziej interesujących prezentacji. Konferencja trwała
trzy dni, więc opisać wszystkich nie sposób – zainteresowanych odsyłam na stronę PHPCon, gdzie można znaleźć
`komplet materiałów <http://phpcon.pl/2011/materialy>`_. Wkrótce powinny pojawić się również nagrania wideo.

Krzysiek Szłapiński: Architektura Allegro, czyli jak przestałem się martwić i pokochałem cache’owanie
-----------------------------------------------------------------------------------------------------

Krzysiek Szłapiński mówił o architekturze Allegro. Allegro jest prawie w całości napisane w PHP. Od 2007 bazy danych
opierają się na technologiach Oracle (wcześniej był MySQL). Od 2009 roku dane są shardowane na wiele serwerów,
w związku z tym nie jest możliwe robienie złączeń po stronie bazy danych (w całym systemie nie ma ani jednego joina).
Jest to w pewnym sensie zaprzeczeniem dobrych praktyk do których dąży się w małych i średnich aplikacjach, ale twierdzą,
że to wszystko działa bardzo dobrze. W sumie na bazę danych i aplikację mają około 200 serwerów. Serwery cachujące to
kolejne 200 sztuk – cache zawiera wszystko, co tylko się da wcześniej wygenerować. Akcje takie jak logowanie
użytkownika, przeglądanie kategorii, aukcji czy komentarzy nie powoduje wykonania ani jednego zapytania do bazy danych.
Dzięki temu bezproblemowo obsługują 6000 żądań na sekundę. Poza tym wszystko co chociaż minimalnie obciąża system jest
kolejkowane, nawet wystawienie komentarza i przeliczenie ilości gwiazdek jest wykonywane w tle (użytkownik może
zauważyć, że nie pojawiają się natychmiast, ale w ciągu kilku minut).

Adam Puza – Zwiększanie produktywności programisty PHP
------------------------------------------------------

`Materiały na stronie autora <http://webdemon.org.pl/zppphp.php>`_

Adam Puza z `efly.pl <http://efly.pl/>`_ mówił o zwiększaniu produktywności programistów, czyli możliwie najbardziej
efektywne wykorzystanie możliwości komputera. Uważa, że każdy programista powinien korzystać z wielokrotnego schowka
(Adam pracuje na Windowsie i proponuje `ClipX <http://bluemars.org/clipx/>`_, ale na Ubuntu jest np.
`Parcellite <apt:parcellite>`_). Każdy powinien też wydrukować sobie listę skrótów klawiszowych swojego IDE i stopniowo
nauczyć się jak największej liczby z nich. Poleca też aplikacje
`Humanized Enso Launcher <http://humanized.com/enso/launcher/>`_ i `AutoHotKey <http://www.autohotkey.com/>`_.
Szczególnie ten ostatni jest interesujący, ponieważ ma bardzo szerokie możliwości dodawania i konfiguracji skrótów
klawiaturowych globalnych lub zależnych od aplikacji. Możliwe jest również pisanie skryptów (np: przejście do
przeglądarki internetowej, odświeżenie strony, powrót do IDE). Obsługuje też „hotstrings” – rozwijane ciągi znaków,
również w zaawansowany sposób np. wykorzystując nazwę aktualnie otwartego pliku do stworzenia definicji klasy. Niestety
nie udało mi się odnaleźć odpowiednika na linuksa. Adam proponuje też inne usprawnienia – gesty myszy, makra,
testowanie przy użyciu Selenium, przy czym te da się zastosować na każdym systemie.

Michał Zając: Przestrzenie nazw – za, przeciw i dlaczego
--------------------------------------------------------

Michał Zając z Centrum Edukacyjnego Compendium mówił o przestrzeniach nazw w PHP 5.3 – po co są i o głównych ich
cechach. Prezentacja była dość krótka i dość krótko można ją podsumować – o ile przestrzenie nazw są ciekawym
rozwiązaniem, to w PHP 5.3 są zaimplementowane w dość kiepski sposób i na razie nie poleca stosowania, chyba że jest to
wymuszone przez framework (jak np. w ZF 2.0). Przestrzenie nazw w innych językach – C++, Java, Python są zrobione
dużo lepiej.

Stephan Hochdorfer – Testing Untestable Code
--------------------------------------------

Stephan Hochdorfer mówił o tym, w jaki sposób należy pisać/przepisywać i testować kod. Porównuje dwa podejścia względem
starego kodu – kompletny refactoring pod kątem testów i testowanie kodu pozostawionego bez zmian. Twierdzi, że drugi
sposób jest często dużo efektywniejszy, ponieważ niezwykle trudno jest przepisywać kod bez testów, a testowanie źle
napisanego kodu, choć skomplikowane, jest możliwe. Proponuje w tym celu kilka przydatnych technik, m.in. nadpisywanie
istniejącej funkcji __autoload(), testowanie zmiennych prywatnych (korzystając np. z Reflection API lub zwykłego
str_replace), zastępowanie wbudowanych funkcji PHP własnymi
(`Runkit  – method redefine <http://www.php.net/manual/en/function.runkit-method-redefine.php>`_) czy symulowanie
zewnętrznych zasobów (bazy danych, webservices, serwery poczty, system plików).

Lorna Jane Mitchell – Coaching Development Teams: Teach a Man to Fish
---------------------------------------------------------------------

http://www.lornajane.net/resource/teach-a-man-to-fish

Jedna z najciekawszych prezentacji i przy okazji najmniej „techniczna” – o poprawianiu umiejętności zespołów programistów.
Oprócz odrobiny teorii na wykładzie, Lorna Mitchell proponuje kilka konkretnych działań:

* zestawienie umiejętności poszczególnych osób
* analiza rozkładu umiejętności – w interesie firmy jest, żeby wiedza na żaden temat nie była skupiona w jednej osobie, zarówno ze względu na istniejące jak i potencjalne projekty
* wyrównywanie „dziur”, może być przez szkolenia, ale można to zrobić wewnętrznie. Jeśli jest np. jedna osoba która zna się dobrze na Symfony, może przygotować prezentację i opowiedzieć innym zainteresowanym o podstawach, co jest znacznie tańsze niż zatrudnianie zewnętrznych firm
* finansowanie pracownikom konferencji – mówiła dlaczego to się opłaca; proponuje też, podobnie do tego wyżej, spotkania po konferencjach, tak żeby osoby które uczestniczyły w jakimś ciekawym wydarzeniu mogły opowiedzieć innym co z tego wyniosły
* Monthly Developer Lunch – comiesięczne spotkania przy jedzeniu, bez kadry zarządzającej, tak żeby programiści mogli porozmawiać o różnych projektach które robią; podejrzewam że da się to połączyć z poprzednimi dwoma punktami
* Link Tuesday – polega na tym, że we wtorki każda osoba która trafiła na coś wyjątkowo interesującego (tyle, że z branży, bez śmiesznych obrazków itp) wysyła link do wszystkich. Bardzo łatwe do wdrożenia.
* Study Days – jeden dzień w miesiącu (w Google jest jeden dzień w tygodniu) na naukę i rozwijanie własnych pomysłów – fajna sprawa, bo przecież osoby które kodują przez 8 godzin w pracy nie mają już zwykle ochoty na kodowanie w domu. Zrealizowane pomysły oczywiście są własnością firmy.

Inne prezentacje
----------------

Oczywiście, było więcej prezentacji wartych uwagi. Na przykład, bardzo ciekawa była ta pod tytułem *Transakcyjny System
Aktualizacji Aplikacji WWW* – o ile może sama idea atomowych operacji na bazach danych czy plikach nie była bardzo
zaskakująca, bo na co dzień staram się stosować wiele z wspomnianych dobrych praktyk, to autor pokazał kilka sposobów w
pełni automatycznego wykonywania całkowicie odwracalnych fragmentów na które składa się aktualizacja.

Kolejna dość ciekawa prezentacja była poświęcona oprogramowaniu do monitorowania aplikacji internetowych (głównie
`Zabbix <http://www.zabbix.com/>`_). Było to swojego rodzaju case study na podstawie największego w Polsce sklepu z
bielizną – `kontri.pl <http://kontri.pl>`_. W prezentacji znalazły się również przykładowe karty produktowe, które wzbudziły wyraźne
poruszenie u uczestników (w zdecydowanej większości płci męskiej); czytelników, którzy dotarli do końca notki, zachęcam
do sprawdzenia dlaczego 😉