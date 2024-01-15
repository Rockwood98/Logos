import styled from "styled-components";
import Container from "../components/Container";
import ContentBox from "../components/ContentBox";
import Heading from "../ui/Headings";
import High from "../ui/High";
import Text from "../ui/TextSize";
import Margin from "../ui/Margin";

const List = styled.ul`
  list-style: disc;
  padding: 0.5rem 4.4rem;
`;
const ListEl = styled.li``;

function Guide() {
  return (
    <Container>
      <ContentBox>
        <Heading $position="center">
          Co oznacza pojęcie zaburzenia miofunkcjonalne?
        </Heading>
        <Text>
          W <High>zaburzeniach miofunkcjonalnych</High> mamy do czynienia z
          następującymi problemami: występuje nieprawidłowy wzorzec ruchowy
          języka i warg podczas połykania. To oznacza, że język podczas każdego
          aktu połykania (ok 1000 – 2000 razy dziennie) przesuwa się do przodu i
          naciska na zęby. W ten sposób język, jako jeden z najsilniejszych
          kompleksów mięśni naszego ciała, może wykrzywiać zęby i/lub deformować
          żuchwę i szczękę; występuje niekorzystne napięcie mięśni w obszarze
          ust, które powoduje, że język nie znajduje swojej prawidłowej pozycji
          spoczynkowej, względnie nie potrafi jej utrzymać. Usta często są
          otwarte.
        </Text>
        <Heading $type="'secondary">Objawy:</Heading>
        <List>
          <ListEl>otwarte usta;</ListEl>
          <ListEl>oddychanie przez usta</ListEl>
          <ListEl>pogrubiona i zaczerwieniona warga dolna</ListEl>
          <ListEl>wilgotna warga dolna</ListEl>
          <ListEl>ślina w kącikach ust</ListEl>
          <ListEl>
            język w pozycji spoczynkowej napiera na zęby, albo leży między
            zębami
          </ListEl>
          <ListEl>
            zaburzenia artykulacji, często przy realizacji głosek /s/, /sz/,
            oraz /t, d, n, l/
          </ListEl>
          <ListEl>słabo wyrażona mimika twarzy</ListEl>
          <ListEl>problemy z postawą</ListEl>
        </List>
        <Heading $type="secondary">
          Możliwe następstwa nieleczonego zaburzenia miofunkcjonalnego:
        </Heading>
        <Text>
          Stałe problemy z artykulacją lub/oraz niewyraźna wymowa, złe
          ustawienie szczęki, żuchwy i zębów (np. mocno wystające zęby przednie,
          zgryz krzyżowy, zgryz otwarty, etc.), problemy ze stawami skroniowo –
          żuchwowymi; z powodu ucisku i tarcia języka na dziąsła może powstać
          paradontoza.
        </Text>
        <Heading $type="secondary">Cel terapii:</Heading>
        <Text>
          Celem prowadzonej przy zaburzeniach miofunkcjonalnych terapii
          logopedycznej jest uzyskanie prawidłowej pozycji spoczynkowej języka,
          zamknięcie ust i nauka prawidłowego połykania. Podczas terapii
          prowadzone są ćwiczenia postrzegania w obszarze jamy ustnej, ćwiczenia
          w celu poprawy pozycji spoczynkowej języka i warg, ćwiczenia języka i
          warg, ćwiczenia zasysania i połykania oraz ćwiczenia całego ciała
        </Text>
        <Heading $type="secondary">
          Na czym polega terapia miofunkcjonalna?
        </Heading>
        <Text>
          Terapia miofunkcjonalna polega na wykonywaniu przez pacjenta
          odpowiednich ćwiczeń mięśni języka, warg, a nawet całego ciała. Są one
          prowadzone pod kontrolą terapeuty w gabinecie, a następnie także w
          domu, aby pacjent mógł uzyskać najlepsze rezultaty.
        </Text>
        <Heading $type="secondary">Czas trwania terapii:</Heading>
        <Text>
          Czas trwania terapii jest indywidualny i uzależniony jest od stopnia
          zaawansowania zaburzeń u pacjenta. Niekiedy wystarczy tylko kilka
          miesięcy regularnych ćwiczeń, innym razem konieczne jest prowadzenie
          ich nawet przez ponad rok.
        </Text>
        <Heading $type="secondary">Dla kogo?</Heading>
        <Text>
          Warto przy tym zaznaczyć, że terapia miofunkcjonalna przeznaczona jest
          nie tylko dla dzieci, ale również mogą korzystać z niej osoby dorosłe,
          u których zostały zdiagnozowane powyżej wskazane zaburzenia. Nigdy nie
          jest za późno na rozpoczęcie terapii!
        </Text>
        <Margin $type="bottom" />
        <Heading $position="center">
          Elektrostymulacja zewnętrzna i wewnętrzna
        </Heading>
        <Text>
          Metoda ta jest dedykowana tym osobom, u których występują dysfunkcje
          aparatu mowy, w szczególności języka, warg i podniebienia. Terapia ta
          jest skutecznym uzupełnieniem leczenia logopedycznego i
          ortodontycznego. Zabieg elektrostymulacji dzięki odpowiednio dobranym
          parametrom wspomaga kompleksowe leczenie pacjentów z zaburzeniami
          logopedycznymi. Polega on na przepływie prądu o bardzo niskim
          natężeniu przez mięśnie podniebienia miękkiego lub języka w celu
          usprawnienia ich funkcji. Elektroterapia oddziałuje na cały aparat
          artykulacyjny człowieka, wspomagając jego działanie. Zabieg pobudza do
          pracy włókna mięśniowe podniebienia, wskutek czego następuje
          wzmocnienie siły, przyrost masy oraz objętości mięśni.
        </Text>
        <Heading $type="secondary">
          Wskazania do zabiegów elektrostymulacji:
        </Heading>
        <List>
          <ListEl>po operacji rozszczepu warg i podniebienia</ListEl>
          <ListEl>opóźniony rozwój mowy</ListEl>
          <ListEl>dyslalia obwodowa</ListEl>
          <ListEl>mowa nosowa (rynolalia)</ListEl>
          <ListEl>afazja motoryczna</ListEl>
          <ListEl>dyzartria( zaburzenia artykulacji )</ListEl>
          <ListEl>
            wysiękowe zapalenie uszu (zaburzenia pracy trąbki słuchowej)
            niedosłuchy
          </ListEl>
          <ListEl>problemy z połykaniem pokarmów</ListEl>
          <ListEl>
            krztuszenie podczas jedzenia i picia po adenotomii ( usunięciu
            migdała gardłowego)
          </ListEl>
        </List>
        <Heading $type="secondary">
          Sprzęt wykorzystywany do elektrostymulacji:
        </Heading>
        <Text>
          Do elektrostymulacji wykorzystuje się wysokospecjalistyczny sprzęt
          medyczny. Dla uzyskania przepływu prądu, który pobudza mięśnie stosuje
          się dwie elektrody; jedną z elektrod umieszcza się na łopatce, karku
          lub przedramieniu pacjenta, natomiast drugą elektrodą punktową dotyka
          się bezpośrednio stymulowane miejsce. Zabieg jest komfortowy, bo
          zupełnie bezbolesny. W zależności od stanu wrażliwości skórnej pacjent
          może odczuwać lekkie mrowienie lub może nie odnotować żadnych odczuć.
        </Text>
        <Heading $type="secondary">Ilość zabiegów:</Heading>
        <Text>
          Dla uzyskania najlepszej skuteczności zaleca się 3 serie zabiegów lub
          mniej wg zaleceń logopedy. W każdej serii wykonuje się 10 zabiegów
          elektrostymulacji.
        </Text>
        <Heading $type="secondary">
          Efekty terapii z użyciem elektrostymulatora w rozszczepach warg i
          podniebienia:
        </Heading>
        <Text>
          Dzięki angażowaniu włókien mięśniowych podniebienia miękkiego i języka
          do procesu skurczu następuje:
        </Text>
        <List>
          <ListEl>wzrost elastyczności tkanek poddawanych zabiegowi</ListEl>
          <ListEl>zapobieganie powstawania bliznowców</ListEl>
          <ListEl>poprawa siły mięśni</ListEl>
          <ListEl>zwiększenie masy oraz objętości mięśni</ListEl>
          <ListEl>poprawa ukrwienia okolicy operowanej</ListEl>
          <ListEl>wzrost pobudzenia tkanek</ListEl>
          <ListEl>przyspieszenie gojenia</ListEl>
          <ListEl>zmniejszenie obrzęków pooperacyjnych</ListEl>
          <ListEl>działanie przeciwbólowe i przeciwzapalne</ListEl>
        </List>
        <Margin $type="bottom" />
        <Heading $position="center">Elastyczny Terapeutyczny Taping</Heading>
        <Text>
          Elastyczny Terapeutyczny Taping jest metodą wspomagającą, stosowaną
          jako uzupełnienie prowadzonych technik terapeutycznych. Wykorzystanie
          plastrowania dynamicznego (inaczej kinesiotapingu) stymuluje oraz
          pobudza mięśnie w obszarze ustno-twarzowym. Pozwala tym samym wpłynąć
          na zwiększenie lub zmniejszenie napięcia mięśniowego w zależności od
          potrzeb dziecka.
        </Text>
        <Heading $type="secondary">Zastosowanie:</Heading>
        <List>
          <ListEl>wspomagania oddechu</ListEl>
          <ListEl>wspomagania terapii poprawnej artykulacji</ListEl>
          <ListEl>wzmocnienia głosu w przypadku dysfonii</ListEl>
          <ListEl>usprawnienia połykania</ListEl>
          <ListEl>
            usprawnienia nieprawidłowego napięcia mięśniowego (nadmierne
            ślinienie, stabilizacja żuchwy)
          </ListEl>
          <ListEl>usprawnienia motoryki narządów mowy i inne</ListEl>
        </List>
        <Heading $type="secondary">Dla kogo?</Heading>
        <Text>
          Przy metodzie kinesiotapingu nie istnieją ograniczenia wiekowe. Ważny
          jest dobór odpowiedniego rodzaju plastra oraz znajomość anatomii
          mięśni, tak aby wpływać na ich działanie, nie ograniczając ruchów
          dziecka. Pacjent kontynuuje terapię wspomagającą w domu, dzięki czemu
          działania terapeutyczne nie kończą się w momencie opuszczenia
          gabinetu.
        </Text>
        <Margin $type="bottom"></Margin>
      </ContentBox>
    </Container>
  );
}

export default Guide;
