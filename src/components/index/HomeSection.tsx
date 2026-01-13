import "./HomeSection.css";

export default function HomeSection(props: { children: any }) {
  return <section class="home-section">{props.children}</section>;
}
