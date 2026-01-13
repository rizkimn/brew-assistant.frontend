export default function BeansCardImage(props: { src: string; alt?: string }) {
  return (
    <div class="beans-image">
      <img src={props.src} alt={props.alt || "Beans Image"} />
    </div>
  );
}
