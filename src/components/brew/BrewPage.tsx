import "./BrewPage.css";

import { For } from "solid-js";
import { query, createAsync } from "@solidjs/router";

import BeansCard from "./BeansCard";
import BeansCardImage from "./BeansCardImage";
import BeansCardInfo from "./BeansCardInfo";
import DoseInput from "./DoseInput";
import GrinderClickInput from "./GrinderClickInput";
import RatioInput from "./RatioInput";

const getBeans = query(async () => {
  const beans = await fetch("http://localhost:1337/beans");
  return await beans.json();
}, "beans");

export default function BrewPage() {
  const beans = createAsync(() => getBeans());
  // const beans = [
  //   {
  //     id: 1,
  //     name: "Aceh Gayo Blue Musara",
  //     roaster: "Fugol Coffee Roasters",
  //     process: "Honey Wet Hulled",
  //     imageSrc: "/assets/img/beans/fugol-aceh-blue-musara.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Flores Manggarai",
  //     roaster: "Otten Coffee",
  //     process: "Natural",
  //     imageSrc: "/assets/img/beans/otten-flores-manggarai.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Gayo Avatara Carbonic Maceration Honey",
  //     roaster: "Fugol Coffee Roasters",
  //     process: "Carbonic Maceration Honey",
  //     imageSrc: "/assets/img/beans/fugol-gayo-avatara-cm-honey.png",
  //   },
  //   {
  //     id: 4,
  //     name: "Wanoja Kamojang",
  //     roaster: "Otten Coffee",
  //     process: "Natural",
  //     imageSrc: "/assets/img/beans/otten-wanoja-kamojang.png",
  //   },
  //   {
  //     id: 5,
  //     name: "Kaki Gunung Guntur",
  //     roaster: "Fugol Coffee Roasters",
  //     process: "Anaerobic Natural",
  //     imageSrc: "/assets/img/beans/fugol-kaki-gunung-guntur.png",
  //   },
  // ]

  return (
    <main class="brew-page">
      <div class="beans-selector-wrapper">
        <div class="beans-selector input-group">
          <h3>Choose Your Beans</h3>
          <div class="beans-cards">
            <For each={beans()}>
              {(bean) => (
                <div class="beans-input-wrapper">
                  <input type="radio" name="beans" id={`beans-${bean.id}`} value={bean.id} class="beans-input" />
                  <label for={`beans-${bean.id}`} class="beans-card-label">
                    <BeansCard id={bean.id}>
                      <BeansCardImage src={`/assets/img/beans/${bean.imageSrc}`} alt={bean.name} />
                      <BeansCardInfo
                        name={bean.name}
                        roaster={bean.roaster}
                        process={bean.process}
                      />
                    </BeansCard>
                  </label>
                </div>
              )}
            </For>
          </div>
        </div>
        <div class="fade-right"></div>
      </div>
      <DoseInput value={15} />
      <RatioInput value={15} />
      <GrinderClickInput value={32} />
      <div class="profile-selector input-group">
        <h3>Profile Selector</h3>
        <div class="profile-selector-btns">
            <div class="selector-btn">
              <input type="radio" name="target_profile" value='bright' id="bright-profile" />
              <label for="bright-profile">Bright</label>
            </div>
            <div class="selector-btn">
              <input type="radio" name="target_profile" value='balance' id="balance-profile" />
              <label for="balance-profile">Balance</label>
            </div>
            <div class="selector-btn">
              <input type="radio" name="target_profile" value='bold' id="bold-profile" />
              <label for="bold-profile">Bold</label>
            </div>
        </div>
      </div>
    </main>
  );
}
