import { useState } from "react";
import styled, { css } from "styled-components";

import Heading from "../ui/Headings";

import Button from "../ui/Button";

const data = [
  {
    toggle: 1,
    title: "Terapia dla dzieci i młodzieży",
    content: [
      "profilaktyka logopedyczna małych dzieci",
      "wczesna interwencja logopedyczna",
      "diagnoza i korekta wad wymowy",
      "terapia afazji dziecięcej",
      "dyslalia ankyloglosyjna (krótkie wędzidełka językowe)",
      "terapia opóźnionego rozwoju mowy",
      "terapia zaburzeń miofunkcjonalnych",
      "zaburzenia mowy spowodowane schorzeniami neurologicznymi",
      "terapia jąkania i po rozszczepie wargi oraz podniebienia",
    ],
    path: "../public/boygirl-sm.webp",
  },
  {
    toggle: 2,
    title: "Terapia dla doroslych",
    content: [
      "diagnoza i terapia afazji",
      "diagnoza i terapia dyzartrii",
      "terapia mowy u osób z chorobą Alzheimera, Parkinsona, stwardnieniem rozsianym",
      "nauka dykcji i emisji głosu",
      "terapia jąkania",
      "terapia zaburzeń miofunkcjonalnych",
    ],
    path: "../public/adult-sm.webp",
  },
  {
    toggle: 3,
    title: "Zastosowania terapeutyczne",
    content: [
      "masaż ustno-twarzowy, korekta dysfunkcji ustno – twarzowych",
      "terapia sensomotorycznai",
      "terapia miofunkcjonalna",
      "elektrostymulacja zewnętrzna i wewnętrzna",
      "metoda werbo – tonalna",
      "alternatywne i wspomagające metody komunikacji(AAC)",
      "Metoda Krakowska",
      "Elastyczny Terapeutyczny Taping",
    ],
    path: "../public/hands-sm.webp",
  },
];

const ModalBox = styled.div`
  min-height: 100%;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-content: center;
  gap: 2.2rem;
  width: 80%;
  margin: 1rem auto;
`;
const Link = styled.li`
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  color: var(--color-text-04);
  &:hover {
    color: var(--color-primary-02);
  }
  ${({ active }) =>
    active &&
    css`
      color: var(--color-text-01);
    `}
`;
const ProggresBar = styled.div`
  border: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--color-bg-03);
  border-radius: 15px;
  width: 80%;
  margin: 0 auto 9.6rem auto;
`;

const ProggresBarContent = styled.div`
  background-color: transparent;
  height: 0.5rem;
  border-radius: 15px;
  width: 100%;
  margin: 0 auto;
  &.bg-color {
    background-color: var(--color-primary-02);
  }
`;
const ContainerModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.4rem;
  /* padding: 2.4rem 4.8rem; */
  /* margin-top: 4.8rem; */
  align-items: center;
  justify-items: center;
  background-color: var(--color-bg-01);
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 4.8rem;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  opacity: 0.75;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding: 1.2rem 0;
`;
const ListContent = styled.ul``;
const LinkContent = styled.li`
  font-size: 1.8rem;
  /* padding: 0.5rem 0; */

  text-align: justify;
  /* &::before {
    content: "○";
    color: var(--color-primary-01);
    margin-right: 1rem;
    white-space: pre; */
`;

function Modal() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <ModalBox>
      <List>
        {data.map((el) => (
          <Link
            active={toggle === el.toggle ? 1 : 0}
            onClick={() => {
              updateToggle(el.toggle);
            }}
            key={el.toggle}>
            {el.title}
          </Link>
        ))}
      </List>
      <ProggresBar>
        <ProggresBarContent className={toggle === 1 && "bg-color"} />
        <ProggresBarContent className={toggle === 2 && "bg-color"} />
        <ProggresBarContent className={toggle === 3 && "bg-color"} />
      </ProggresBar>
      <ContainerModal>
        {data.map(
          (img) =>
            img.toggle === toggle && <Img key={img.toggle} src={img.path}></Img>
        )}
        {data.map(
          (el) =>
            //   {el.toggle === toggle && <Img src={el.path}></Img>}
            el.toggle === toggle && (
              <ModalContent key={el.toggle}>
                <Heading> {el.title}</Heading>
                {/* <Margin type="bottomSm" /> */}
                <ListContent>
                  {el.content.map((listEl) => (
                    <LinkContent key={listEl}>{listEl}</LinkContent>
                  ))}
                </ListContent>
                <Button style={{ marginTop: "auto" }}>Czytaj więcej...</Button>
              </ModalContent>
            )
        )}
      </ContainerModal>
    </ModalBox>
  );
}

export default Modal;
