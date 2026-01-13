import { createSignal } from "solid-js";
import './DoseInput.css';

export default function DoseInput(props: {value: number, onInput?: (value: number) => void}) {
  const [dose, setDose] = createSignal(props.value);

  const handleDecrement = () => {
    if (dose() > 1) {
      const newDose = dose() - 1;
      setDose(newDose);
      props.onInput?.(newDose);
    }
  };

  const handleIncrement = () => {
    if (dose() < 99) {
      const newDose = dose() + 1;
      setDose(newDose);
      props.onInput?.(newDose);
    }
  };

  const handleInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    let newDose = parseInt(input.value);
    if (isNaN(newDose)) {
      newDose = 1;
    } else if (newDose < 1) {
      newDose = 1;
    } else if (newDose > 99) {
      newDose = 99;
    }
    setDose(newDose);
    props.onInput?.(newDose);
  };

  return (
    <div class="dose-input-group input-group">
      <h3>Dose (gr)</h3>
      <div class="dose-input">
        <button class="decrement-btn" onclick={handleDecrement}> &minus; </button>
        <input type="number" name="dose" id="dose" min="1" max="99" value={dose()} oninput={handleInput} />
        <button class="increment-btn" onclick={handleIncrement}> &plus; </button>
      </div>
    </div>
  )
}
