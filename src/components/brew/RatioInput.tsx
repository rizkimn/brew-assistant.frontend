import { createSignal } from "solid-js";
import './RatioInput.css';

export default function RatioInput(props: {value: number, onInput?: (value: number) => void}) {
  const [ratio, setRatio] = createSignal(props.value);

  const handleDecrement = () => {
    if (ratio() > 1) {
      const newRatio = ratio() - 1;
      setRatio(newRatio);
      props.onInput?.(newRatio);
    }
  };

  const handleIncrement = () => {
    if (ratio() < 99) {
      const newRatio = ratio() + 1;
      setRatio(newRatio);
      props.onInput?.(newRatio);
    }
  };

  const handleInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    let newRatio = parseInt(input.value);
    if (isNaN(newRatio)) {
      newRatio = 1;
    } else if (newRatio < 1) {
      newRatio = 1;
    } else if (newRatio > 99) {
      newRatio = 99;
    }
    setRatio(newRatio);
    props.onInput?.(newRatio);
  };

  return (
    <div class="ratio-input-group input-group">
      <h3>Ratio (gr)</h3>
      <div class="ratio-input">
        <button class="decrement-btn" onclick={handleDecrement}> &minus; </button>
        <input type="number" name="coffee-ratio" value={1} min="1" max="99" />
        <span>&colon;</span>
        <input type="number" name="water-ratio" id="ratio" min="1" max="99" value={ratio()} oninput={handleInput} />
        <button class="increment-btn" onclick={handleIncrement}> &plus; </button>
      </div>
    </div>
  )
}
