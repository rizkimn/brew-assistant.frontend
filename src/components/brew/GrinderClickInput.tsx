import { createSignal } from "solid-js";
import './GrinderClickInput.css';

export default function GrinderClickInput(props: {value: number, onInput?: (value: number) => void}) {
  const [click, setClick] = createSignal(props.value);

  const handleDecrement = () => {
    if (click() > 1) {
      const newClick = click() - 1;
      setClick(newClick);
      props.onInput?.(newClick);
    }
  };

  const handleIncrement = () => {
    if (click() < 99) {
      const newClick = click() + 1;
      setClick(newClick);
      props.onInput?.(newClick);
    }
  };

  const handleInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    let newClick = parseInt(input.value);
    if (isNaN(newClick)) {
      newClick = 1;
    } else if (newClick < 1) {
      newClick = 1;
    } else if (newClick > 99) {
      newClick = 99;
    }
    setClick(newClick);
    props.onInput?.(newClick);
  };

  return (
    <div class="click-input-group input-group">
      <h3>Grinder Clicks</h3>
      <div class="click-input">
        <button class="decrement-btn" onclick={handleDecrement}> &minus; </button>
        <input type="number" name="click" id="click" min="1" max="99" value={click()} oninput={handleInput} />
        <button class="increment-btn" onclick={handleIncrement}> &plus; </button>
      </div>
    </div>
  )
}
